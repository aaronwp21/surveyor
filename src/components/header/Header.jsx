import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { auth } from '@/firebase';
import ProfileMenu from './ProfileMenu';

export default function Header() {
  const user = auth.currentUser;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            color="secondary"
            variant="h4"
            component="h2"
            sx={{ flexGrow: 1 }}
          >
            <Link href='/'>Surveyor</Link>
          </Typography>
          <div className="flex gap-4">
            {user ? (
              <ProfileMenu />
            ) : (
              <>
                <Link href='/login'>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ borderRadius: '12px' }}
                  >
                    Login
                  </Button>
                </Link>
                <Link href='/sign-up'>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ borderRadius: '12px' }}
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
