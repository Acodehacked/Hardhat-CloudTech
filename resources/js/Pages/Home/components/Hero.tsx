import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { visuallyHidden } from '@mui/utils';
import { styled, Theme } from '@mui/material/styles';
import { Input } from '@/Components/ui/input';

const StyledBox = styled('div')(({ theme }: { theme: Theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  outline: '1px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: theme.palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundImage: `url('https://mui.com/static/screenshots/material-ui/getting-started/templates/dashboard.jpg')`,
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  }
}));

export default function Hero() {
  return (
    <div
    >
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 10, sm: 12 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <div className='max-h-[70vh] h-full flex flex-col-reverse rounded-xl overflow-hidden relative'>
          <div
            className='sm:absolute left-0 top-0 bottom-0 justify-center p-4 right-0 flex flex-col'
          >
            <Typography
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                fontSize: 'clamp(2rem, 10vw, 2.9rem)',
              }}
            >
              Build&nbsp;Smarter,
              <Typography
                component="span"
                variant="h1"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  color: 'primary.main',
                  ...theme.applyStyles('dark', {
                    color: 'primary.light',
                  }),
                })}
              >
                Manage&nbsp;Better
              </Typography>
            </Typography>
            <Typography
              className='sm:text-start text-center'
              sx={{
                color: 'text.secondary',
                width: { sm: '100%', md: '80%' },
              }}
            >
              Building Smarter Construction Management Solutions
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
            >
              <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
                Email
              </InputLabel>
              <Input type="email" placeholder="Your email address" className='text-sm bg-white' />
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ minWidth: 'fit-content' }}
              >
                Start now
              </Button>
            </Stack>
            <div className='mb-5'></div>
          </div>
          <img className='w-full min-h-[150px] h-full rounded-xl object-cover mb-6' src='/storage/img1.jpg' />
        </div>
        <Typography
          variant="caption"
          className=''
          sx={{ textAlign: 'start' }}
        >
          By clicking &quot;Start now&quot; you agree to our&nbsp;
          <Link className='mt-3' href="#"
          >
            Terms & Conditions
          </Link>
          .
        </Typography>
        <StyledBox id="image" />
      </Container>
    </div>
  );
}
