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
import { v4 as uuid } from "uuid"
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
import { Image } from "@/types";
export default function AddAdmin() {
    const error = usePage().props?.errors;
    const countries = getCountryDataList();
    const [countrycode, setcountrycode] = useState('91')
    const [open, setOpen] = useState(false)
    const unique_id = uuid();
    const [logoUploaded, setlogoUploaded] = useState<string | null>(null)
    const { data, setData, put, processing, errors, reset, clearErrors } = useForm({
        id: 0,
        name: '',
        country: '',
        city: '',
        address: '',
        reg_id: '',
        phone: '',
        image: '',
        email: '',
        since: '',
        website: '',
        description: '',
        code: unique_id.slice(0, 8)
    });
    useEffect(() => {
        setData({
            ...data,
            image: logoUploaded ?? ''
        })
    }, [logoUploaded])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
        const { name, value } = e.target;
        if (name == 'phone') {
            if ((value as string).length > 10) {
                return
            }
        }
        setData({
            ...data,
            [name as string]: value
        });
        clearErrors();
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put('/admin/administrators/create', {
            onSuccess: (e) => {
                console.log(e.props)
            },
        })
        // Handle form submission
    };
    return <DashboardLayout>
        <Header showBackButton title='Create Company Administrator' links={['Admin', 'Administrators', 'new']} />
        <div className="card">
            <CardContent>
                <form onSubmit={handleSubmit} className="">
                    <div className="flex items-center gap-2">
                        {logoUploaded &&
                            <img className="w-[70px] h-[50px] object-contain" src={`/storage/images/small/${logoUploaded}`} />
                        }
                        <div className="flex flex-col justify-center">
                            <h3 className='card-title flex gap-2'>Add New Company {data.image != '' && <div className="bg-green-600 font-medium text-white rounded-sm p-1 text-sm">
                                Logo uploaded</div>}</h3>
                            <p className="text-zinc-300 font-light">This adds new Company and also creates credentials for login</p>
                        </div>
                    </div>
                    <div className="fold-sm mt-3">
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
                        <div className="mb-4 gap-0 flex flex-col">
                            <label htmlFor="since" className="block text-sm font-medium text-gray-700 mb-3">
                                Company Since
                            </label>
                            <Input
                                id="since"
                                name="since"
                                type="number"
                                placeholder="eg : 20XX"
                                value={data.since}
                                onChange={handleChange}
                            />
                            {errors.since && <span className="text-red-800 mt-1 text-sm">{errors?.since}</span>}
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
                            {errors.name && <span className="text-red-800 mt-1 text-sm">{errors?.name}</span>}

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
                            {errors.email && <span className="text-red-800 mt-1 text-sm">{errors?.email}</span>}

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
                                value={data.image}
                                onChange={handleChange}
                            />
                            <div className="card shadow-none rounded-md">
                                <ImageUploader setlogoUploaded={setlogoUploaded} />
                            </div>
                            {errors.image && <span className="text-red-800 mt-1 text-sm">{errors?.image}</span>}
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
                                                        aria-label={country?.name}
                                                        onSelect={(currentValue) => {
                                                            // setData({ ...data, country: currentValue === data.country ? "" : currentValue });
                                                            setData({
                                                                ...data,
                                                                country: currentValue === data.country ? "" : currentValue,
                                                            })
                                                            setOpen(false)
                                                            setcountrycode(`${getCountryData(country.iso2).phone[0]}`)
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
                            {errors.country && <span className="text-red-800 mt-1 text-sm">{errors?.country}</span>}

                            <label htmlFor="phone" className="block mt-2 text-sm font-medium text-gray-700">
                                Phone number
                            </label>
                            <div className="flex items-center gap-2">
                                <span className="bg-indigo-600 p-2 rounded-md text-white">
                                    +{countrycode}
                                </span>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="number"
                                    value={data.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.phone && <span className="text-red-800 mt-1 text-sm">{errors?.phone}</span>}
                            <label htmlFor="address" className="block mt-2 text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <Textarea id="address"
                                name="address"
                                value={data.address}
                                onChange={handleChange}
                                placeholder="Ex: John Doe, 123 Main Street, Anytown, CA 12345" />
                            {errors.address && <span className="text-red-800 mt-1 text-sm">{errors?.address}</span>}
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
                            {errors.website && <span className="text-red-800 mt-1 text-sm">{errors?.website}</span>}

                            <Input
                                id="code"
                                name="code"
                                type="text"
                                value={data.code}
                                disabled
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