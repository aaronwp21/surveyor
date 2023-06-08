import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

function TextInput({ control, errors, question }) {
  return (
    <Controller
      rules={{ required: true }}
      control={control}
      name={question}
      defaultValue={''}
      render={({ field }) => (
        <TextField
          type="text"
          variant="filled"
          {...field}
          label={question}
          fullWidth
          error={!!errors.question}
          helperText={errors.question?.message}
        />
      )}
    />
  );
}

export default TextInput;
