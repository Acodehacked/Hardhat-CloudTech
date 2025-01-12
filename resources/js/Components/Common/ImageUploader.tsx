import { Input } from '@/Components/ui/input';
import { cn } from "@/lib/utlis"
import { useForm, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from "react";
import { Progress } from '../ui/progress';
import ProgressBar from 'react-customizable-progressbar';
import { Button } from '@mui/material';
import { Image, PageProps } from '@/types';

export default function ImageUploader({ setlogoUploaded }: { setlogoUploaded: React.Dispatch<React.SetStateAction<string | null>> }) {
    const [logo, setlogo] = useState<string | null>(null)
    const [loaded, setloaded] = useState(false)
    const { data, setData, post, progress, errors, clearErrors } = useForm({
        'image': null as File | null,
    })
    const submit = () => {
        clearErrors()
        post('/image-upload', {
            preserveState: true,
            preserveScroll: true,
            onSuccess: (e) => {
                setloaded(true)
                setlogoUploaded(e.props.flash.success ?? '')
                console.log('Success fully')
            },
            onError: () => {
                setloaded(false)
                console.log("error")
            }
        })
    }

    // image-upload
    return <div id="23" className="flex gap-1 flex-col">
        {errors.image && <div className='bg-red-100 rounded-md p-4'>
            <h3 className='font-medium'>{errors.image}</h3>
        </div>}

        <div className='img-box relative h-[100px]'>
            <div className={cn('flex justify-center bg-black/50 rounded-xl items-center absolute top-0 left-0 w-full h-full z-[2]',progress ? 'flex' : 'hidden')}>
                <ProgressBar
                    strokeColor='#0070ff'
                    progress={progress?.percentage ?? 0}
                    strokeWidth={6}
                    trackStrokeColor='#fff'
                    trackStrokeWidth={5}
                    radius={20} />
            </div>
            <img src={logo ? logo : '/storage/logo.png'} alt="logo" className={cn("w-full h-[100px] object-contain absolute left-0 top-0 z-[1]")} />
        </div>
        <div className="max-w-[800px] w-full flex flex-col gap-2 items-start">
            <Input name='image' onChange={(e) => {
                if (e.target.files) {
                    setloaded(false)
                    setData('image', e.target.files[0])
                    setlogo(URL.createObjectURL(e.target.files[0]));
                    // setTimeout(()=>{
                    //     submit()
                    // },600)
                }
            }} accept=".jpg,.png,.webp" id="picture" type="file" />
            <span className='text-[10px]'>Please click upload if the picture is selected</span>
            {/* <Progress value={progress?.percentage} className="w-[60%]" /> */}
            <Button type='button' disabled={loaded} onClick={submit} variant='outlined'>{loaded ? 'Uploaded' : 'Upload'}</Button>
        </div>
    </div>
}