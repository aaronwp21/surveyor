import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography color='secondary' variant="h4" component="h2" sx={{ flexGrow: 1 }}>
            Surveyor
          </Typography>
          <div className='flex gap-4'>
            <Button variant="contained" color="secondary" sx={{borderRadius: '12px'}}>
              Login
            </Button>
            <Button variant="contained" color="secondary" sx={{borderRadius: '12px'}}>
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
