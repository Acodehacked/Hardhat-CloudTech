import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function HighlightedCard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent className='items-end flex flex-col justify-end h-full'>
        <InsightsRoundedIcon fontSize='large' />
        <Typography
          component="h1"
          variant="subtitle2"
          sx={{ fontWeight: '600',fontSize: '20px' }}
        >
          Control Companies
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: '8px' }}>
          Edit Companies, Add new Companies and start your journey
        </Typography>
        <Button
          variant="contained"
          size="small"
          color="primary"
          endIcon={<ChevronRightRoundedIcon />}
          fullWidth={isSmallScreen}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}
