import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnackBar({ snackBarOpen, snackBarClose, action }) {
  return (
    <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={snackBarClose}>
      <Alert onClose={snackBarClose} severity="success" sx={{ width: '100%' }}>
        {`Survey ${action} succesfully!`}
      </Alert>
    </Snackbar>
  );
}

export default SnackBar;
