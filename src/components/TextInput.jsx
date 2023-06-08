import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

function TextInput({ control, errors, question, iteration }) {
  const removeSpaces = question.replace(/\s/g, '');
  const removeCharacters = removeSpaces.replace(/[^a-zA-Z ]/g, "")
  const lowerCase = removeCharacters.toLowerCase();
  const trim = lowerCase.trim();
  return (
    <>
      <Controller
        rules={{ required: true }}
        control={control}
        name={trim}
        defaultValue={''}
        render={({ field }) => (
          <TextField
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
      <Controller
          control={control}
          name={`question${iteration}`}
          defaultValue={question}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{display: 'none'}}
            />
          )}
        />
    </>
  );
}

export default TextInput;
