import React from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';

const schema = yup.object().shape({
  email: yup.string().email().trim().required(),
  password: yup.string().min(6).trim().required(),
});

const defaults = {
  email: '',
  password: '',
};

function AuthForm({ submitHandler }) {
  const theme = useTheme();
  const mobileClosed = useMediaQuery(theme.breakpoints.up('md'));

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
        <div className="w-[50%] m-auto">
          <div className="flex flex-col gap-4 mb-4">
            <Controller
              control={control}
              name="email"
              defaultValue={''}
              render={({ field }) => (
                <TextField
                  type="text"
                  variant="filled"
                  {...field}
                  label="Email"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              defaultValue={''}
              render={({ field }) => (
                <TextField
                  type="password"
                  variant="filled"
                  {...field}
                  label="Password"
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
          </div>

          <div className='flex justify-center'>
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
        </div>
      </form>
    </>
  );
}

export default AuthForm;
