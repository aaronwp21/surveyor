import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

function RadioInput({ control, question, option1, option2, iteration }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{question}</FormLabel>
      <Controller
        rules={{ required: true }}
        control={control}
        name={`question${iteration}`}
        render={({ field }) => (
          <RadioGroup {...field}>
            <FormControlLabel
              value={option1}
              control={<Radio />}
              label={option1}
            />
            <FormControlLabel
              value={option2}
              control={<Radio />}
              label={option2}
            />
          </RadioGroup>
        )}
      />
    </FormControl>
  );
}

export default RadioInput;
