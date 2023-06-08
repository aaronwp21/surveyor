import React from 'react';
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
          <FormControl component="fieldset">
            <FormLabel component="legend">Type of question</FormLabel>
            <Controller
              rules={{ required: true }}
              control={control}
              name={'type'}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <FormControlLabel
                    value={'text'}
                    control={<Radio />}
                    label={'Text'}
                  />
                  <FormControlLabel
                    value={'yesNo'}
                    control={<Radio />}
                    label={'Yes/No'}
                  />
                </RadioGroup>
              )}
            />
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
