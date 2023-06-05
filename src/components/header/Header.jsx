import { useState } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { auth } from '@/firebase';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const user = auth.currentUser;

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
              ''
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
