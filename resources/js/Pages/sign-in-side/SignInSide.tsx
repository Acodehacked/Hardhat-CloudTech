import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import SignInCard from './SignInCard';
import Content from './Content';
import AppTheme from '../../shared-theme/AppTheme';
import ColorModeSelect from '../../shared-theme/ColorModeSelect';

export default function SignInSide(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <div
        className='flex flex-col justify-center min-h-[100vh] bg-secondary-foreground mt-[max(40px - var(--template-frame-height, 0px), 0px)] h-[calc((1 - var(--template-frame-height, 0)) * 100%)]'
      >
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{
            justifyContent: 'center',
            gap: { xs: 6, sm: 12 },
            p: 2,
            mx: 'auto',
          }}
        >
          <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            sx={{
              justifyContent: 'center',
              gap: { xs: 4, sm: 4 },
              p: { xs: 2, sm: 4 },
            }}
          >
            <Content />
            <SignInCard canResetPassword />
          </Stack>
        </Stack>
      </div>
    </AppTheme>
  );
}
