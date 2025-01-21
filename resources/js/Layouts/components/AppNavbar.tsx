import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MuiToolbar from '@mui/material/Toolbar';
import { IoGrid } from "react-icons/io5";
import { tabsClasses } from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SideMenuMobile from './SideMenuMobile';
import MenuButton from './MenuButton';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import { Link, usePage } from '@inertiajs/react';
import PerfectScrollbar from 'perfect-scrollbar';
import Sitemark from '@/Components/Common/Sitemark';
import SitemarkIcon from '@/Components/Common/SitemarkIcon';
import { ArrowDown, ArrowDown01Icon, BoxIcon, Building2Icon, ChevronDownIcon, Home, HomeIcon, InfoIcon, Lock, LogOutIcon, StarIcon, UserIcon, X } from 'lucide-react';
import { ArrowDropDown, Grid3x3Rounded, LocationCityRounded, Logout, NotificationsActive, NotificationsRounded, QuestionMarkRounded } from '@mui/icons-material';
import { ADMIN_TOOLS } from '@/constants/constants';
import { motion, AnimatePresence } from 'motion/react'
import Search from './Search';
import { FaLocationDot } from "react-icons/fa6"
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar';
import { cn, useClickOutside } from '@/lib/utlis';
import { Project } from '@/types';

const Toolbar = styled(MuiToolbar)({
  width: '100%',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '12px',
  flexShrink: 0,
  [`& ${tabsClasses.flexContainer}`]: {
    gap: '8px',
    p: '8px',
    pb: 0,
  },
});

export default function AppNavbar({ projects }: { projects?: Project[] }) {
  const [open, setOpen] = React.useState(false);
  const [nav, setNavOpen] = React.useState(false);
  const [projectsopen, setprojectsopen] = React.useState(false);
  const user = usePage().props?.auth.user.data;
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const UserIconref = React.useRef(null);
  useClickOutside(UserIconref, () => {
    setNavOpen(false)
  });
  const ToolsRef = React.useRef(null);
  useClickOutside(ToolsRef, () => {
    setOpen(false)
  });
  const Projectbuttonref = React.useRef(null);
  useClickOutside(Projectbuttonref, () => {
    setprojectsopen(false)
  });
  return (
    <nav className='w-full fixed top-0 left-0 right-0 text-zinc-300 bg-zinc-900 flex z-[999]'>
      <Link href={'/dashboard'} className='bg-primary px-2 flex items-center'><HomeIcon className='text-white' /></Link>
      <div
        className='flex justify-center gap-2 items-center me-auto p-[10px]'
      >
        <div className="flex items-center gap-2">
          <img className='' height={1} width={40} src='/storage/logo.png' />
          <h1 className='text-white sm:flex hidden text-sm me-4 text-[18px]'>
            Hardhat CloudTech
          </h1>
        </div>
        <div ref={Projectbuttonref} className='relative md:ms-0 ms-auto'>
          <motion.div
            whileTap={{ opacity: 0.8 }}
            onClick={() => setprojectsopen(((prev) => !prev))}
            className='flex items-center relative select-none cursor-pointer hover:bg-black transition-all rounded-md duration-100 gap-2 bg-zinc-800 px-3 py-1'>
            <Building2Icon />
            <div className="flex flex-col justify-center">
              <span className='text-sm1'>Selected Project</span>
              <span className='text-sm2'>Project 00-00</span>
            </div>
            <ArrowDropDown />
          </motion.div>
          <div
            className={cn('sm:absolute fixed left-0 card text-[15px] sm:top-[65px] top-0 sm:rounded-md rounded-none shadow-xl bg-white min-h-[300px] min-w-[400px] px-3 py-2 z-[999]', projectsopen ? '' : 'hidden')}>
            <div id='overscroll' className="text-zinc-800 flex md:pe-2 flex-col gap-2 sm:max-h-[500px] max-h-full md:h-auto h-full overflow-y-scroll ">
              <div className='flex w-full justify-between items-center mt-2'>
                <span className='sm:text-[1rem] text-[2rem] '>Recent Projects</span>
                <X onClick={() => setprojectsopen(false)} className='p-1 hover:bg-zinc-200 rounded-md sm:hidden' size={45} />
              </div>
              <div className="flex hover-bod bg-gray-50 gap-2 ">
                <img src={'/storage/bd.jpg'} className='w-[50px] object-cover rounded-md h-full' />
                <div className="flex flex-col">
                  <h4 className='font-medium text-foreground text-med '>Project 00-00</h4>
                  <h4 className='text-zinc-400 flex items-center gap-2'>Building Contruction Work</h4>
                  <h4 className=' flex items-center gap-2 text-primary'><FaLocationDot /> USA</h4>
                </div>
              </div>
              <div className="flex hover-bod bg-gray-50 gap-2 ">
                <img src={'/storage/bd.jpg'} className='w-[50px] object-cover rounded-md h-full' />
                <div className="flex flex-col">
                  <h4 className='font-medium text-foreground text-med '>Project 00-01</h4>
                  <h4 className='text-zinc-400 flex items-center gap-2'>Building Contruction Work</h4>
                  <h4 className=' flex items-center gap-2 text-primary'><FaLocationDot /> USA</h4>
                </div>
              </div>
              <div className="flex hover-bod bg-gray-50 gap-2 ">
                <img src={'/storage/bd.jpg'} className='w-[50px] object-cover rounded-md h-full' />
                <div className="flex flex-col">
                  <h4 className='font-medium text-foreground text-med '>Project 00-00</h4>
                  <h4 className='text-zinc-400 flex items-center gap-2'>Building Contruction Work</h4>
                  <h4 className=' flex items-center gap-2 text-primary'><FaLocationDot /> USA</h4>
                </div>
              </div>
              <div className="flex hover-bod bg-gray-50 gap-2 ">
                <img src={'/storage/bd.jpg'} className='w-[50px] object-cover rounded-md h-full' />
                <div className="flex flex-col">
                  <h4 className='font-medium text-foreground text-med '>Project 00-00</h4>
                  <h4 className='text-zinc-400 flex items-center gap-2'>Building Contruction Work</h4>
                  <h4 className=' flex items-center gap-2 text-primary'><FaLocationDot /> USA</h4>
                </div>
              </div>
              <div className="flex hover-bod bg-gray-50 gap-2 ">
                <img src={'/storage/bd.jpg'} className='w-[50px] object-cover rounded-md h-full' />
                <div className="flex flex-col">
                  <h4 className='font-medium text-foreground text-med '>Project 00-00</h4>
                  <h4 className='text-zinc-400 flex items-center gap-2'>Building Contruction Work</h4>
                  <h4 className=' flex items-center gap-2 text-primary'><FaLocationDot /> USA</h4>
                </div>
              </div>
              <div className="flex hover-bod bg-gray-50 gap-2 ">
                <img src={'/storage/bd.jpg'} className='w-[50px] object-cover rounded-md h-full' />
                <div className="flex flex-col">
                  <h4 className='font-medium text-foreground text-med '>Project 00-00</h4>
                  <h4 className='text-zinc-400 flex items-center gap-2'>Building Contruction Work</h4>
                  <h4 className=' flex items-center gap-2 text-primary'><FaLocationDot /> USA</h4>
                </div>
              </div>
              <div className="flex hover-bod bg-gray-50 gap-2 ">
                <img src={'/storage/bd.jpg'} className='w-[50px] object-cover rounded-md h-full' />
                <div className="flex flex-col">
                  <h4 className='font-medium text-foreground text-med '>Project 00-00</h4>
                  <h4 className='text-zinc-400 flex items-center gap-2'>Building Contruction Work</h4>
                  <h4 className=' flex items-center gap-2 text-primary'><FaLocationDot /> USA</h4>
                </div>
              </div>

            </div>
          </div>
        </div>
        <motion.div
          ref={ToolsRef}
          whileTap={{ opacity: 0.8 }} onClick={() => setOpen(((prev) => !prev))} className='flex items-center select-none cursor-pointer hover:bg-black transition-all rounded-md duration-100 gap-2 bg-zinc-800 px-3 md:py-1 py-3'>
          <BoxIcon className='md:flex hidden' />
          <IoGrid className='flex md:hidden' />
          <div className="sm:flex hidden flex-col justify-center">
            <span className='text-sm1'>Project Tools</span>
            <span className='text-sm2'>Home</span>
          </div >
          <ArrowDropDown />

        </motion.div>
      </div>
      <div
        className={cn('absolute text-[15px] top-[66px] w-full shadow-md bg-background md:overflow-visible overflow-y-scroll max-h-[100vh-60px] h-full min-h-[300px] left-0 right-0 z-[999]', open ? '' : 'hidden')}>
        <div className="screen py-4 text-zinc-800 grid md:grid-cols-3 md:px-0 px-5 gap-5 h-full">
          {ADMIN_TOOLS.map((item, index) => {
            return <div key={index}>
              <h1 className='text-head text-xl border-b-[0.2rem] border-b-zinc-500 p-2'>{item.title}</h1>
              <div className="flex mt-2 flex-col gap-1">
                {item.items.map((miniitem, index) => {
                  return <Link href={miniitem.route} className='px-3 group py-1 flex items-center gap-2' key={index}>
                    <StarIcon className='text-[16px] opacity-10 group-hover:opacity-40' size={14} />
                    <span >{miniitem.title}</span>
                  </Link>
                })}
              </div>
            </div>
          })}
        </div>
      </div>
      <Stack direction="row" sx={{ display: { xs: 'flex', md: 'flex', alignItems: 'center', paddingRight: '20px' }, gap: 1 }}>
        <div className='md:flex hidden items-center ps-2 gap-3'>
          <Search />
          {/* <CustomDatePicker /> */}
          <NotificationsRounded className='text-zinc-400 md:flex hidden text-sm' />
          <QuestionMarkRounded className='text-zinc-400 md:flex hidden text-sm' />
        </div>
        <Avatar ref={UserIconref} onClick={() => setNavOpen((prev) => !prev)} className='group  relative overflow-visible'>
          <AvatarImage src="https://github.com/shadcn.png" className='rounded-full select-none group-hover:opacity-80' alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
          <AnimatePresence>
            {nav && <motion.div
              initial={{ opacity: 0, pointerEvents: 'none' }}
              exit={{ opacity: 0, pointerEvents: 'none' }}
              transition={{ duration: 0.1 }}
              animate={{ opacity: 1, pointerEvents: 'all' }}
              className="absolute top-[50px] right-0 card min-w-[200px] min-h-[100px] shadow-none px-3 py-2 bg-white z-[999]">
              <div className='border-b-2 px-2 py-2'>
                <h4 className='text-secondary-foreground text-[1.0rem] w-auto font-medium'>{user.name}</h4>
                <h4 className='text-secondary-foreground/40 text-sm1 w-auto '>Engineer, Softlimited COmpany</h4>
              </div>
              <div className="flex flex-col gap-0 mt-1">
                <div className='hover-bod'>
                  <h4 className='hover-txt'><UserIcon size={16} /> Profile</h4>
                </div>
                <div className='hover-bod'>
                  <h4 className='hover-txt'><Lock size={16} /> Change Password</h4>
                </div>
                <div className='hover-bod'>
                  <h4 className='hover-txt'><LogOutIcon size={16} /> Logout</h4>
                </div>
              </div>

            </motion.div>}
          </AnimatePresence>
        </Avatar>
      </Stack>
    </nav>
  );
}


