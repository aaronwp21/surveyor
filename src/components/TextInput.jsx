import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

function TextInput({ control, errors, name }) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={''}
      render={({ field }) => (
        <TextField
          type="text"
          variant="filled"
          {...field}
          label={name}
          fullWidth
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      )}
    />
  );
}

export default TextInput;
