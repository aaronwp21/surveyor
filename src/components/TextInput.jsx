import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

function TextInput({ control, errors, question, iteration, disabled }) {
  return (
    <>
      <Controller
        rules={{ required: true }}
        control={control}
        name={`question${iteration}`}
        defaultValue={''}
        render={({ field }) => (
          <TextField
            disabled={disabled}
            type="text"
            variant="filled"
            {...field}
            label={question}
            fullWidth
            error={!!errors.trim}
            helperText={errors.trim?.message}
          />
        )}
      />
    </>
  );
}

export default TextInput;
