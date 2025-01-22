import Header from "@/Layouts/components/Header";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Dashboard from "@/Pages/Dashboard";
import { Card, CardContent } from "@mui/material";
import { Input } from '@/Components/ui/input';
import { Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Calendar } from "@/Components/ui/calendar"
import { cn } from "@/lib/utlis"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover"
import { format, set } from "date-fns"
import { CalendarIcon } from "lucide-react";

export default function AddAdmin() {
    const { data, setData, post, processing, errors, reset } = useForm({
        id: 0,
        name: '',
        email: '',
        type: '',
        reg_id: '',
        avatar: '',
        address: '',
        user: '',
        company: '',
        date: new Date(),
        created_at: '',
        updated_at: ''
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name as string]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/companies')
        console.log(errors);
        // Handle form submission
    };
    return <DashboardLayout>
        <Header showBackButton title='Create Administrator' links={['Admin', 'Administrators', 'new']} />
        <div className="card">
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <h3 className='card-title '>Add New Member</h3>
                    <p className="mb-5 text-zinc-300 font-light">This adds new Member and also creates credentials for login</p>
                    <div className="fold-sm">
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">
                                Type
                            </label>
                            <FormControl variant="standard" fullWidth>
                                <Select
                                    error={errors.type == undefined ? false : true}
                                    name="type"
                                    className="p-2"
                                    value={data.type}
                                    onChange={(e) => setData({ ...data, type: e.target.value as string })}
                                >
                                    <MenuItem value="EPC">EPC</MenuItem>
                                    <MenuItem value="Contractor">Contractor</MenuItem>
                                    <MenuItem value="Subcontractor">Subcontractor</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
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
                                Full Name
                            </label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="ex: John Doe"
                                value={data.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm mb-1 font-medium text-gray-700">
                                email
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="ex: johndoe@example.com"
                                value={data.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
                            Avatar
                        </label>
                        <Input
                            id="avatar"
                            name="avatar"
                            type="text"
                            value={data.avatar}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <Input
                            id="address"
                            name="address"
                            type="text"
                            value={data.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="user" className="block text-sm font-medium text-gray-700">
                            User
                        </label>
                        <Input
                            id="user"
                            name="user"
                            type="text"
                            value={data.user}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                            Company
                        </label>
                        <Input
                            id="company"
                            name="company"
                            type="text"
                            value={data.company}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        {/* <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Date
                        </label>
                        <Input
                            id="date"
                            name="date"
                            type="date"
                            value={data.date.}
                            onChange={handleChange}
                        /> */}
                    </div>
                    <div className="mb-4">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal",
                                        !data.date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {data.date ? format(data.date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={data.date}
                                    onSelect={(e)=>setData({...data, date: e ? e : new Date()})}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        <label htmlFor="created_at" className="block text-sm font-medium text-gray-700">
                            Created At
                        </label>
                        <Input
                            id="created_at"
                            name="created_at"
                            type="date"
                            value={data.created_at}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="updated_at" className="block text-sm font-medium text-gray-700">
                            Updated At
                        </label>
                        <Input
                            id="updated_at"
                            name="updated_at"
                            type="date"
                            value={data.updated_at}
                            onChange={handleChange}
                        />
                    </div>

                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </CardContent>
        </div>
    </DashboardLayout>
}