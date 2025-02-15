import * as React from 'react';
import { styled, alpha, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Sitemark from '../../../Components/Common/SitemarkIcon';
import ColorModeIconDropdown from '../../../shared-theme/ColorModeIconDropdown';
import { Link } from '@inertiajs/react';

const StyledToolbar = styled(Toolbar)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: `rgba(${theme.palette.background.default} / 0.4)`,
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 12px)',
      }}
    >
      <Container maxWidth="xl">
        <StyledToolbar className='bg-white/40' variant='dense' disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Link href='/'>
              <Sitemark height={33} />
            </Link>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link href='#Features'>
                <Button variant="text" color="info" size="small">
                  Features
                </Button>
              </Link>
              <Link href='#Pricing'>
                <Button variant="text" className='' color="info" size="small">
                  Pricing
                </Button>
              </Link>
              <Link href='#FAQ'>
                <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                  FAQ
                </Button>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Link href={route('login')}>
              <Button color="primary" variant="text" size="small">
                Log In
              </Button>
            </Link>
            <Button color="primary" variant="contained" size="small">
              Request a Demo
            </Button>
            {/* <ColorModeIconDropdown /> */}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            {/* <ColorModeIconDropdown size="medium" /> */}
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <Link href='#Features'>
                  <MenuItem>Features</MenuItem>
                </Link>
                <Link href='#Pricing'>
                  <MenuItem>Pricing</MenuItem>
                </Link>
                <Link href='#FAQ'>
                  <MenuItem>FAQ</MenuItem>
                </Link>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Request a Demo
                  </Button>
                </MenuItem>
                <Link href={route('login')}>
                  <MenuItem>
                    <Button color="primary" variant="outlined" fullWidth>
                      Log In
                    </Button>
                  </MenuItem>
                </Link>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
