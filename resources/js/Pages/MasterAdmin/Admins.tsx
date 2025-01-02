import * as React from 'react';
import type { } from '@mui/x-date-pickers/themeAugmentation';
import type { } from '@mui/x-charts/themeAugmentation';
import type { } from '@mui/x-data-grid/themeAugmentation';
import type { } from '@mui/x-tree-view/themeAugmentation';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Link, usePage } from '@inertiajs/react';
import DashboardLayout from '../../Layouts/DashboardLayout';
import { PageProps, User } from '@/types';
import { Button } from '@mui/material';
import { AddCircleOutline, AddIcCallOutlined } from '@mui/icons-material';
import Header from '@/Layouts/components/Header';
export default function Admins({ users }: { users: User[] }) {
    console.log(users[0])
    return (
        <DashboardLayout>
            <Header title='Administrators' links={['Admin', 'Administrators']} />
            <div className='flex justify-between items-center w-full'>
                <h1 className='text-lg'>Admins</h1>
                <Link href={'/admin/administrators/create'}>
                    <Button color="primary" variant="contained" >
                        Add New Admin
                        <AddCircleOutline fontSize={'small'} className='text-white text-sm ms-2' />
                    </Button>
                </Link>
            </div>
        </DashboardLayout>
    )
}