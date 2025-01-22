import {motion} from 'motion/react'
import { cn } from '@/lib/utlis'
import { Link } from '@inertiajs/react'
import React from 'react'

function CustomButton({ title, variant, link, icon }: { link?: string, title: string, variant?: 'primary' | 'secondary', icon?: React.ReactNode }) {
    return (
        <>
            {link != null ? (<Link href={link}>
                <Buttoon1 icon={icon} title={title} variant={variant} />
            </Link>) : <Buttoon1 icon={icon} title={title} variant={variant} />}
        </>
    )
}

function Buttoon1({ title, variant, link, icon }: { link?: string, title: string, variant?: 'primary' | 'secondary', icon?: React.ReactNode }) {
    return <>
        <motion.button whileTap={{scale:0.98,opacity:0.8}} className={cn('px-3 flex items-center gap-2 shadow-sm py-2 rounded-md', variant == 'primary' ? 'bg-primary text-white' : variant == 'secondary' ? 'bg-secondary-foreground text-white' : 'bg-black text-white')}>
            <span>{title}</span>
            {icon && <span>{icon}</span>}
        </motion.button>
    </>
}

export default CustomButton