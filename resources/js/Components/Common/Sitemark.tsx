import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { cn } from '@/lib/utlis';

export default function Sitemark({height}:{height?:number}) {
  return (
    <>
    <img src='storage/logo.png' alt="" className={cn('h-[40px]',height?`h-[${height}px]`:'')}></img>
    <span className='text-black font-bold'>Hardhat-CloudTech</span>
    </>
  );
}
