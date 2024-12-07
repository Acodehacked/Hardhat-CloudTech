import ApplicationLogo from '@/Components/ApplicationLogo';
import StandardLinkButton from '@/Components/Common/StandardLinkButton';
import { Link } from '@inertiajs/react';
import { ChevronDown, ExternalLink, LucideLayoutDashboard, LucideLink2, Menu, PiIcon } from 'lucide-react';
import { UserLinks } from '@/constants/navlinks';
import { PropsWithChildren, useRef, useState } from 'react';
import LoginButton from '@/Components/User/LoginButton';
import { Popover } from '@headlessui/react'
import {AnimatePresence, motion} from 'motion/react'
import { cn, useClickOutside } from '@/lib/utlis';

export default function GuestHome({ children, logged }: { children: React.ReactNode, logged: boolean }) {
    const [SelectedIndex, setSelectedIndex] = useState(-1)
    const navRef = useRef(null)
    const [navOpen, setnavOpen] = useState(false);
    useClickOutside(navRef,()=>{
        setSelectedIndex(-1)
    })
    return (
        <div className="flex flex-col relative bg-zinc-50">
            <div className='[#002349] bg-primary fixed z-[99] top-0 left-0 right-0'>
                <nav className='flex screen items-center p-2 justify-between '>
                    <div className='flex items-center gap-1 p-2'>
                        <Link href="/">
                            <ApplicationLogo className="w-[40px] fill-current text-gray-500" />
                        </Link>
                        <h3 className='text-white text-xl font-extrabold'>HardHat Cloud Tech</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div ref={navRef} className={cn('items-center md:flex-row flex-col md:relative absolute md:top-0 top-[60px] md:bg-transparent bg-white left-0 right-0 md:h-auto md:flex hidden h-[calc(100vh-60px)] z-[5]',navOpen?'flex':'hidden')}>
                            {UserLinks.map((link, index) => {
                                return <div onClick={()=>setSelectedIndex((prev)=>prev!=index?index:-1)} key={index} className='md:w-auto w-full select-none relative'>
                                    <div className='flex w-full outline-none text-zinc-900 md:text-[16px] text-[18px] md:text-white md:justify-normal justify-between p-4 text-sm md:hover:bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.05)]'>
                                        <span className=''>{link.title}</span>
                                        <ChevronDown size={19} className='opacity-60' />
                                    </div>
                                    <AnimatePresence>
                                    {SelectedIndex == index && <motion.div  initial={{y:-20,opacity:0,scale:0.9}} animate={{opacity:1,scale:1,y:0}} className={cn(`flex flex-col bg-secondary overflow-hidden rounded-sm h-[${link.sub.length}px] md:fixed md:top-[64px] top-0 relative`)}>
                                        {link.sub.map((sublink,index)=>{
                                            return <Link key={index} className='min-h-[50px] min-w-[200px] hover:bg-[rgba(0,0,0,0.05)]  flex items-center px-5' href={'/'}><span className='flex gap-2 items-center'><LucideLink2 size={20} />{sublink.title}</span></Link>
                                        })}
                                        </motion.div>}
                                    </AnimatePresence>
                                </div>
                            })}
                            <LoginButton linkClass='w-full justify-between' className='md:hidden w-full p-4 mt-0' text='Login / SignUp' link='home' />
                        </div>
                        <LoginButton icon={false} linkClass='w-full justify-between bg-yellow-500 text-black py-2' className='' text='Login / SignUp' link='home' />
                        <Menu size={35} onClick={()=>setnavOpen((prev)=>!prev)} className='text-white hover:bg-[rgba(0,0,0,0.4)] p-1' />
                    </div>
                </nav>
            </div>

            <div className="w-full min-h-[100vh]">
                {children}
            </div>
        </div>
    );
}
