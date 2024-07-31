'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import "./Footer.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }} className="footer">
      
      <Grid container spacing={2} sx={{ fontSize: '12px' }}>
      <Grid item xs={12}>
      <Typography>My Footer</Typography>
      </Grid>
        <Grid item xs={8}>
          <Typography>Footer Content Heading</Typography>
          <Typography>
            Footer Content
            </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Footer Content Heading</Typography>
          <Typography>
            Footer Content
            </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Footer Content Heading</Typography>
          <Typography>
            Footer Content
            </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>Footer Content Heading</Typography>
          <Typography>
            Footer Content
            </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
