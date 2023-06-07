import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import useStore, { selectUser, setUser } from '@/store/store';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

function ProfileMenu() {
  const user = useStore(selectUser);
  const changeUser = useStore(setUser);
  let router = useRouter();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleProfileClick = () => {
    setAnchorElUser(null);
    router.push(`/user/${user.uid}`)
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        changeUser(null)
        router.replace('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar src="" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleProfileClick}>
          <Typography textAlign={'center'}>My Surveys</Typography>
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          <Typography textAlign={'center'}>Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default ProfileMenu;
