import { BR } from "@/constants/constants";
import { cn } from "@/lib/utlis";
import { Link } from "@inertiajs/react";
import { ButtonHTMLAttributes } from "react";

export default function StandardLinkButton({link,text,className}:{link:string,text:string,className:string}){
    return (
        <Link className={cn('bg-yellow-400 hover:translate-y-[-2px] transition-all duration-500  px-4 py-2 flex text-center',className,`rounded-[${BR}px]`)} href={route(link)}>{text}</Link>
    );
}