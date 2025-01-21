import ApplicationLogo from '@/Components/ApplicationLogo';
import StandardLinkButton from '@/Components/Common/StandardLinkButton';
import { Head, Link } from '@inertiajs/react';
import { ChevronDown, ExternalLink, LucideLayoutDashboard, LucideLink2, Menu, PiIcon } from 'lucide-react';
import { UserLinks } from '@/constants/navlinks';
import { PropsWithChildren, useRef, useState } from 'react';
import LoginButton from '@/Components/User/LoginButton';
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'motion/react'
import { cn, useClickOutside } from '@/lib/utlis';
import AppTheme from '@/shared-theme/AppTheme';
import { CssBaseline } from '@mui/material';
import AppAppBar from '@/Pages/Home/components/AppAppBar';
import Hero from '@/Pages/Home/components/Hero';

export default function GuestHome({ children, logged , props }: {props?: { disableCustomTheme?: boolean }, children: React.ReactNode, logged?: boolean }) {
    const [SelectedIndex, setSelectedIndex] = useState(-1)
    const navRef = useRef(null)
    const [navOpen, setnavOpen] = useState(false);
    useClickOutside(navRef, () => {
        setSelectedIndex(-1)
    })
    return (
        <AppTheme {...props}>
            <Head title="Home" />
            <CssBaseline enableColorScheme />
            <AppAppBar />
            {children}
        </AppTheme>
    );
}
