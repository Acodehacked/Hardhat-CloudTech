import * as React from 'react';
import type { } from '@mui/x-date-pickers/themeAugmentation';
import type { } from '@mui/x-charts/themeAugmentation';
import type { } from '@mui/x-data-grid/themeAugmentation';
import type { } from '@mui/x-tree-view/themeAugmentation';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Link, usePage } from '@inertiajs/react';
import DashboardLayout from '../../Layouts/DashboardLayout';
import { Company, LaravelPaginationMeta, PageProps, User } from '@/types';
import { Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { AddCircleOutline, AddIcCallOutlined } from '@mui/icons-material';
import Header from '@/Layouts/components/Header';
import { DataGrid, GridActionsCellItem, GridColDef, GridPaginationModel, GridRenderCellParams } from '@mui/x-data-grid';
import { format } from 'date-fns';
import axios from 'axios';
import { DeleteIcon, Edit2, Edit2Icon, EditIcon, SaveIcon, Trash2, X } from 'lucide-react';
export default function Admins({ companies }: PageProps<{
    companies: {
        data: Company[];
        meta: LaravelPaginationMeta
    }
}>) {
    const [loading, setloading] = React.useState(false)
    const [data, setdata] = React.useState(companies.data)
    const [datatable, setdatatable] = React.useState({
        page: 0,
        perPage: 10,
        sort: 'id',
        direction: 'asc'
    })
    const columns: GridColDef[] = [
        {
            field: 'since',
            disableColumnMenu: true,
            headerName: 'SI No.',
            flex: 0.5,
            minWidth: 100,
            renderCell: (params) => <>{params.id}</>,
        },
        {
            field: 'code',
            headerName: 'Unique Code',
            flex: 0.5,
            minWidth: 100,
        },
        {
            field: 'name', headerName: 'Company Name',
            editable: true,
            flex: 1.5, minWidth: 200
        },
        {
            field: 'email',
            headerName: 'Email Id',
            headerAlign: 'left',
            align: 'left',
            editable: true,
            flex: 1,
            minWidth: 80,
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            headerAlign: 'right',
            align: 'right',
            flex: 1,
            editable: true,
            minWidth: 100,
        },
        {
            field: 'created_at',
            headerName: 'Created At',
            headerAlign: 'right',
            align: 'right',
            flex: 1,
            renderCell: (params) => renderDate(params),
            minWidth: 120,
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                // const isInEditMode = data[id]?.mode === GridRowModes.Edit;
                const isInEditMode = false;
                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={() => console.log(id)}
                        />,
                        <GridActionsCellItem
                            icon={<X />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={() => console.log(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <Link href={`/companies/${id}`}>
                        <GridActionsCellItem
                            icon={<EditIcon />}
                            label="Edit"
                            className="textPrimary"
                            onClick={() => console.log(id)}
                            color="inherit"
                        />
                    </Link>,
                    <Link method='delete' onSuccess={()=>{
                        setdatatable({...datatable});
                    }} onBefore={()=>confirm('Do you want to delete?')} href={`/companies/${id}`}>
                        <GridActionsCellItem
                            icon={<Trash2 />}
                            label="Delete"
                            onClick={() => console.log(id)}
                            color="inherit"
                        />
                    </Link>,
                ];
            },
        },
    ];
    const pgModel: GridPaginationModel = {
        pageSize: datatable.perPage,
        page: datatable.page
    }
    function renderDate(params: GridRenderCellParams) {
        return <div>
            {format(new Date(params.value), 'PP')}
        </div>
    }
    function renderAction(params: GridRenderCellParams) {
        return <div>
            <Edit2Icon />
        </div>
    }
    React.useEffect(() => {
        setloading(true)
        const fetchData = async () => {
            try {
                const response = await axios.post('/companies', datatable, {
                    headers: {
                        'Content-Type': 'application/json', // Specify the content type
                    }
                });
                console.log('Response:', response.data);
                setdata(response.data) // Response from the server
            } catch (error: any) {
                console.error('Error:', error.response?.data || error.message);
            }
            setloading(false)
            // const data = await response.json();
            // setRows(data.rows);
            // setRowCount(data.total);
        };
        fetchData();
    }, [datatable])
    return (<DashboardLayout>
        <Header title='Companies' links={['Admin', 'Main Admin', 'Companies']} />
        <div className='flex justify-between max-w-[1700px] items-center w-full'>
            <h1 className='text-lg'>List</h1>
            <Link href={'/companies/create'}>
                <Button color="primary" variant="contained" >
                    Add New Company
                    <AddCircleOutline fontSize={'small'} className='text-white text-sm ms-2' />
                </Button>
            </Link>
        </div>
        <Container maxWidth={'xl'} sx={{ padding: 0, margin: 0, maxWidth: '1700px' }}>
            <DataGrid
                disableColumnMenu
                loading={loading}
                paginationModel={pgModel}
                rowCount={companies.meta.total}
                paginationMode='server'

                sortingMode='server'
                onSortModelChange={(model, details) => {
                    setdatatable({
                        ...datatable,
                        'sort': model[0].field,
                        'direction': model[0].sort ?? 'asc'
                    })
                }}
                onPaginationModelChange={(model) => {
                    setdatatable({
                        ...datatable,
                        'perPage': model.pageSize,
                        'page': model.page
                    })
                }}
                rows={data}
                columns={columns}
                getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                }
                initialState={{
                    pagination: { paginationModel: { pageSize: 2 } },
                }}
                pageSizeOptions={[10, 20, 50]}
                // disableColumnResize
                density='standard'
                slotProps={{
                    filterPanel: {
                        filterFormProps: {
                            logicOperatorInputProps: {
                                variant: 'outlined',
                                size: 'small',
                            },
                            columnInputProps: {
                                variant: 'outlined',
                                size: 'small',
                                sx: { mt: 'auto' },
                            },
                            operatorInputProps: {
                                variant: 'outlined',
                                size: 'small',
                                sx: { mt: 'auto' },
                            },
                            valueInputProps: {
                                InputComponentProps: {
                                    variant: 'outlined',
                                    size: 'small',
                                },
                            },
                        },
                    },
                }}
            />

        </Container>
    </DashboardLayout >
    )
}