import { BR } from '@/constants/constants'
import { cn } from '@/lib/utlis'
import { Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'
import {motion} from 'motion/react'
export default function LoginButton({text,link,className,linkClass,icon}:{text:string,link:string,className?:string,linkClass?:string,icon?:boolean}){
    return <motion.div className={cn('text-white',className)}>
        <Link className={cn('bg-primary hover:translate-y-[-2px] transition-all w-full p-4 flex items-center',linkClass,`rounded-[${BR}px]`)} href={route(link)}>
        <span>{text}</span>
        {icon && <ArrowRight size={18} />}
        </Link>
    </motion.div>
}