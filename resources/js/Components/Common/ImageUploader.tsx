import { Input } from '@/Components/ui/input';
import { cn } from "@/lib/utlis"
import { useForm } from '@inertiajs/react';
import React, { useState } from "react";
import { Progress } from '../ui/progress';
import { Button } from '@mui/material';

export default function ImageUploader({ setlogoUploaded }: { setlogoUploaded: React.Dispatch<React.SetStateAction<string>> }) {
    const [logo, setlogo] = useState<string | null>(null)
    const { data, setData, post, progress } = useForm({
        image: null as File | null,
        name: Date.now().toString()
    })
    const submit = () => {
        setData('name', Date.now().toString())
        post('/image-upload', {
            onSuccess: (e) => {
                console.log(e)
            },
            onFinish: (e) => {
                console.log(e)
                setlogoUploaded(data.image?.name ?? '')
            }
        })
    }
    // image-upload
    return <div className="flex gap-3 flex-col">
        <img src={logo ? logo : '/storage/logo.png'} alt="logo" className={cn("w-full h-40 object-contain rounded-md card  p-1 shadow-none mx-0  min-w-40")} />
        <div onSubmit={submit} className="min-w-[400px]">
            <Input name='image' onChange={(e) => {
                if (e.target.files) {
                    setData('image', e.target.files[0])
                    setlogo(URL.createObjectURL(e.target.files[0]));
                }
            }} accept=".jpg,.png,.webp" id="picture" type="file" />
            <Progress value={progress?.percentage} className="w-[60%]" />
            <Button onClick={submit} variant='contained'>Upload</Button>
        </div>
    </div>
}