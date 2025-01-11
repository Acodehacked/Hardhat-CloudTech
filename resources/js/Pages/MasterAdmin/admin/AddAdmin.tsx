import Header from "@/Layouts/components/Header";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Dashboard from "@/Pages/Dashboard";
import { Card, CardContent } from "@mui/material";
import { Input } from '@/Components/ui/input';
import { Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import React, { useEffect, useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { Calendar } from "@/Components/ui/calendar"
import { cn } from "@/lib/utlis"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/Components/ui/command"
import { format, set } from "date-fns"
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { Label } from "@headlessui/react";
import { Textarea } from "@/Components/ui/textarea";
import ImageUploader from "@/Components/Common/ImageUploader";
import { getCountryCode, getCountryData, getCountryDataList, getEmojiFlag } from 'countries-list'
export default function AddAdmin() {
    const error = usePage().props?.errors;
    const countries = getCountryDataList();
    const [open, setOpen] = useState(false)
    const [logoUploaded, setlogoUploaded] = useState('')
    const { data, setData, post, processing, errors, reset } = useForm({
        id: 0,
        name: '',
        country: '',
        city: '',
        address: '',
        reg_id: '',
        phone: '',
        logo: '',
        email: '',
        since: '',
        website: '',
        description: '',
        code: ''
    });
    useEffect(() => {
        setData({
            ...data,
            'logo': logoUploaded
        })
        console.log(error)
    }, [logoUploaded])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name as string]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/administrators', {
            preserveScroll: true
        })
        console.log(errors);
        // Handle form submission
    };
    return <DashboardLayout>
        <Header showBackButton title='Create Company Administrator' links={['Admin', 'Administrators', 'new']} />
        <div className="card">
            <CardContent>
                <form onSubmit={handleSubmit} className="">
                    <h3 className='card-title '>Add New Company {logoUploaded}</h3>
                    <p className="mb-5 text-zinc-300 font-light">This adds new Company and also creates credentials for login</p>
                    <div className="fold-sm">
                        <div className="mb-4">
                            <label htmlFor="reg_id" className="block text-sm font-medium text-gray-700 mb-3">
                                Registration ID
                            </label>
                            <Input
                                id="reg_id"
                                name="reg_id"
                                type="text"
                                disabled
                                placeholder="Auto Generated ex: REG_ID-XXX"
                                value={data.reg_id}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="fold-sm">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm mb-1 font-medium text-gray-700">
                                Company Name
                            </label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="ex: Google Inc."
                                value={data.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm mb-1 font-medium text-gray-700">
                                Email
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="ex: company@example.com"
                                value={data.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="fold-sm">
                        <div className="mb-4">
                            <label htmlFor="avatar" className="block mb-1 text-sm font-medium text-gray-700">
                                Company Logo
                            </label>
                            <Input
                                id="avatar"
                                name="avatar"
                                type="text"
                                className="hidden"
                                value={data.logo}
                                onChange={handleChange}
                            />
                            <div className="card shadow-none rounded-md">
                                <ImageUploader setlogoUploaded={setlogoUploaded} />
                            </div>
                        </div>
                        <div className="mb-4 flex flex-col gap-2">
                            <label htmlFor="user" className="block text-sm font-medium text-gray-700">
                                Country
                            </label>
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        role="combobox"
                                        variant="outlined"
                                        aria-expanded={open}
                                        fullWidth
                                        className="w-full flex justify-between"
                                    >
                                        <span className="w-full">{data.country != ''
                                            ? data.country
                                            : "Select Country..."}</span>
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="max-w-[300px] w-full p-0">
                                    <Command>
                                        <CommandInput className="p-2 m-2" placeholder="Search framework..." />
                                        <CommandList>
                                            <CommandEmpty>No Countries found.</CommandEmpty>
                                            <CommandGroup className="p-2">
                                                {countries.map((country, index) => (
                                                    <CommandItem
                                                        key={country.name}
                                                        value={country.name}
                                                        onSelect={(currentValue) => {
                                                            setData({ ...data, country: currentValue === data.country ? "" : currentValue });
                                                            setOpen(false)
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                data.country === country.name ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                        {country.name}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <label htmlFor="address" className="block mt-2 text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <Textarea id="address"
                                name="address"
                                value={data.address}
                                onChange={handleChange}
                                placeholder="Ex: John Doe, 123 Main Street, Anytown, CA 12345" />
                            <label htmlFor="website" className="block mt-2 text-sm font-medium text-gray-700">
                                Website
                            </label>
                            <Input
                                id="website"
                                name="website"
                                type="text"
                                value={data.website}
                                onChange={handleChange}
                            />

                        </div>

                    </div>
                    <div className="w-full flex justify-end">
                        <Button type="submit" variant="contained" color="primary">
                            Add {data.name == '' ? 'Company' : data.name}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </div>
    </DashboardLayout>
}