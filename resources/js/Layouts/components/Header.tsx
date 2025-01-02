import * as React from 'react';
import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import CustomDatePicker from './CustomDatePicker';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
import MenuButton from './MenuButton';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';

import Search from './Search';
import { ArrowLeft, ChevronLeft } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { ArrowBackIosNew, ArrowBackIosNewOutlined } from '@mui/icons-material';

export default function Header({ title, links, showBackButton=false }: { title: string, links: string[] ,showBackButton?:boolean }) {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'flex', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1,
      }}
      spacing={2}
    >
      <div className='flex items-center gap-2'>
        {showBackButton && <Link href="#" onClick={() => { history.back() }} className='p-2 rounded-full hover:bg-zinc-200'>
          <ArrowLeft fontSize='small' />
        </Link>}
        <div className='flex flex-col gap-0'>
          <h3 className="font-bold text-[20px] mt-2 m-0 p-0">{title}</h3>
          <NavbarBreadcrumbs links={links} />
        </div>
      </div>
      <Stack direction="row" sx={{ display: {xs:'none', md:'flex'}, gap: 1 }}>
        <Search />
        {/* <CustomDatePicker /> */}
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>
      </Stack>
    </Stack>
  );
}
