import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const schema = yup.object().shape({
  question: yup.string().trim().required(),
  type: yup.string().required(),
});

const defaults = {
  question: '',
  type: '',
};

function QuestionForm({ handleClose, submitHandler }) {
  const [currentVal, setCurrentVal] = useState('text');

  const {
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
    control,
    formState,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: defaults,
  });

  let submitFn = (vals) => {
    reset();
    submitHandler(vals);
  };

  const handleChange = (event) => {
    setCurrentVal(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitFn)}>
        <DialogContent>
          <Controller
            control={control}
            name="question"
            defaultValue={''}
            render={({ field }) => (
              <TextField
                type="text"
                variant="filled"
                {...field}
                label="Question"
                fullWidth
                error={!!errors.question}
                helperText={errors.question?.message}
                sx={{ marginBlockEnd: '2rem' }}
              />
            )}
          />
          <FormControl component="fieldset" sx={{width: '100%'}}>
            <FormLabel component="legend">Type of question</FormLabel>
            <Controller
              rules={{ required: true }}
              control={control}
              name={'type'}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <FormControlLabel
                    onChange={handleChange}
                    value={'text'}
                    control={<Radio />}
                    label={'Text'}
                  />
                  <FormControlLabel
                    onChange={handleChange}
                    value={'choice'}
                    control={<Radio />}
                    label={'Multiple Choice'}
                  />
                </RadioGroup>
              )}
            />
            {currentVal === 'text' ? (
              ''
            ) : (
              <>
                <Controller
                  control={control}
                  name="option1"
                  defaultValue={''}
                  render={({ field }) => (
                    <TextField
                      type="text"
                      variant="filled"
                      {...field}
                      label="Option 1"
                      fullWidth
                      error={!!errors.option1}
                      helperText={errors.option1?.message}
                      sx={{ marginBlockEnd: '2rem' }}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="option2"
                  defaultValue={''}
                  render={({ field }) => (
                    <TextField
                      type="text"
                      variant="filled"
                      {...field}
                      label="Option 2"
                      fullWidth
                      error={!!errors.option2}
                      helperText={errors.option2?.message}
                      sx={{ marginBlockEnd: '2rem' }}
                    />
                  )}
                />
              </>
            )}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <div className="flex justify-center">
            <Button
              type="reset"
              onClick={() => reset()}
              variant="contained"
              sx={{ mr: 2 }}
              disabled={!isDirty}
            >
              Reset
            </Button>
            <Button
              type="submit"
              primary="true"
              variant="contained"
              disabled={isSubmitting || !isDirty || (isDirty && !isValid)}
            >
              Submit
            </Button>
          </div>
        </DialogActions>
      </form>
    </>
  );
}

export default QuestionForm;
