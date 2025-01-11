import { Input } from '@/Components/ui/input';
import { cn } from "@/lib/utlis"
import { useForm, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from "react";
import { Progress } from '../ui/progress';
import ProgressBar from 'react-customizable-progressbar';
import { Button } from '@mui/material';
import { PageProps } from '@/types';

export default function ImageUploader({ setlogoUploaded }: { setlogoUploaded: React.Dispatch<React.SetStateAction<string>> }) {
    const [logo, setlogo] = useState<string | null>(null)
    const { data, setData, post, progress } = useForm({
        'image': null as File | null,
        'name': Date.now().toString()
    })
    const submit = () => {
        setData('name', Date.now().toString())
        post('/image-upload', {
            preserveScroll: true,
            onSuccess: (e) => {
                console.log('Success');
                console.log(e);
            },
            onFinish: (e) => {
                console.log("Completed");
            }
        })
    }

    // image-upload
    return <div className="flex gap-1 flex-col">
        {/* {error && <div className='bg-red-100 rounded-md p-4'>
            <h3 className='font-medium'>Please upload image Less than 2mb</h3>
        </div>} */}
        
        <div className='img-box relative h-[100px]'>
            <ProgressBar className={cn('absolute top-[50%] translate-y-[-50%] translate-x-[-50%] z-[99] left-[50%]',progress ? 'flex' : 'hidden')} strokeColor='#0066b3' progress={progress?.percentage ?? 0} strokeWidth={11} trackStrokeWidth={5} radius={30} />
            <img src={logo ? logo : '/storage/logo.png'} alt="logo" className={cn("w-full h-[100px] object-contain absolute left-0 top-0")} />
        </div>
        <div className="max-w-[800px] w-full flex flex-col gap-2 items-start">
            <Input name='image' onChange={(e) => {
                if (e.target.files) {
                    setData('image', e.target.files[0])
                    setlogo(URL.createObjectURL(e.target.files[0]));
                    // setTimeout(()=>{
                    //     submit()
                    // },600)
                }
            }} accept=".jpg,.png,.webp" id="picture" type="file" />
            <span>Please click upload if the picture is selected</span>
            {/* <Progress value={progress?.percentage} className="w-[60%]" /> */}
            <Button type='button' onClick={submit} variant='outlined'>Upload</Button>
        </div>
    </div>
}