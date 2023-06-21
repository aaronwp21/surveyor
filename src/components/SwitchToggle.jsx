import * as React from 'react';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function SwitchToggle({checked}) {
  return (
    <div className='flex items-center gap-2'>
      <Typography variant='subtitle2' component='p'>All Data</Typography>
      <Switch checked={checked} {...label} />
      <Typography variant='subtitle2' component='p'>Indivdual Data</Typography>
    </div>
  );
}