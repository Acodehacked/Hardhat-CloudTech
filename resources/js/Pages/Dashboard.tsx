import * as React from 'react';
import type { } from '@mui/x-date-pickers/themeAugmentation';
import type { } from '@mui/x-charts/themeAugmentation';
import type { } from '@mui/x-data-grid/themeAugmentation';
import type { } from '@mui/x-tree-view/themeAugmentation';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from '../Layouts/components/AppNavbar';
import Header from '../Layouts/components/Header';
import MainGrid from '../Layouts/components/MainGrid';
import SideMenu from '../Layouts/components/SideMenu';
import AppTheme from '../shared-theme/AppTheme';
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '@/Layouts/theme/customizations';
import { Head, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};
export default function Dashboard() {
  return (<>
    <Head>
      <title>Dashboard</title>
      <meta name="description" content="Your page description" />
    </Head>
    <DashboardLayout >
      <Header title='Dashboard' links={['Dashboard', 'Home']} />
      <MainGrid />
    </DashboardLayout>
  </>
  );
}
