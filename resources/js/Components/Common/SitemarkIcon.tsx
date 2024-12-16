import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { cn } from '@/lib/utlis';

export default function SitemarkIcon({height}:{height?:number}) {
  return (
    <div className='flex items-center gap-2'>
    <img src='storage/logo.png' width={50} alt="" className={`h-[${height ?? 20}px] w-[${height ?? 30}px]`}></img>
    <span className='text-black font-bold'>Hardhat-CloudTech</span>
    </div>
  );
}
