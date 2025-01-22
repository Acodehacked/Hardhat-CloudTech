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
import { Company, PageProps, User } from '@/types';
import { Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { AddCircleOutline, AddIcCallOutlined } from '@mui/icons-material';
import Header from '@/Layouts/components/Header';
export default function Admins({ companies }: PageProps<{ companies: { data: Company[] } }>) {
    console.log(companies)
    return (
        <DashboardLayout>
            <Header title='Administrators' links={['Admin', 'Administrators']} />
            <div className='flex justify-between items-center w-full'>
                <h1 className='text-lg'>Admins</h1>
                <Link href={'/companies/create'}>
                    <Button color="primary" variant="contained" >
                        Add New Admin
                        <AddCircleOutline fontSize={'small'} className='text-white text-sm ms-2' />
                    </Button>
                </Link>
            </div>
            <Container maxWidth="xl" className='' sx={{ padding:0, margin: 0}}>
                <Grid container spacing={2} sx={{ flexGrow: 1, padding:0 }}>
                    {companies.data && companies.data.map((company, index) => {
                        return <Grid key={index} sx={{ padding: 0 }} size={{ xs: 12, sm: 3 }}>
                            <div className='card shadow-none p-0 '>
                                <div className='h-[60px] bg-zinc-900'></div>
                                <img className='w-[80px] ms-3 mt-[-30px] relative z-[2] bg-white h-[80px] rounded-full border-[0.4rem] border-white' src={`/storage/images/small/${company.image}`} />
                                <div className='p-4'> 
                                    <h2 className='text-xl font-semibold'> {company.name}</h2>
                                    <h3> {company.email}</h3>
                                </div>
                            </div>
                        </Grid>
                    })}
                </Grid>
            </Container>
        </DashboardLayout>
    )
}