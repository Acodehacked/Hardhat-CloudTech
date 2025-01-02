import * as React from 'react';
import { styled, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }: { theme: Theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: theme.palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'flex-start',
  },
}));

export default function NavbarBreadcrumbs({ links }: { links: string[] }) {
  return (
    <StyledBreadcrumbs
      className='m-0 p-0'
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      {links.map((link, index) => {
        return (
        <Typography key={index} variant="body1">{link}</Typography>
          )
      })}

    </StyledBreadcrumbs>
  );
}
