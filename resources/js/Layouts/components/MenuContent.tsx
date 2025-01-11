import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { Link } from '@inertiajs/react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { User } from '@/types';
const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon />, link: '/dashboard', permission: [] },
  { text: 'Analytics', icon: <AnalyticsRoundedIcon />, link: '/admin', permission: [] },
  { text: 'Projects', icon: <PeopleRoundedIcon />, link: '/admin', permission: [] },
  { text: 'Issues', icon: <AssignmentRoundedIcon />, link: '/admin', permission: [] },
];

const secondaryListItems = [
  { text: 'Companies', icon: <ApartmentIcon />, link: '/admin/administrators', permission: ['manage_companies'] },
  { text: 'Settings', icon: <SettingsRoundedIcon />, link: '/settings', permission: [] },
];

export default function MenuContent({user}: {user: User }) {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <Link href={item.link} key={index}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton selected={index === 0}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => {
          return <div key={index}>
            {(user.permissions.some(permission => item.permission.includes(permission)) || item.permission.length == 0) && <Link href={item.link} key={index}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            </Link>}
          </div>
        })}
      </List>
    </Stack>
  );
}
