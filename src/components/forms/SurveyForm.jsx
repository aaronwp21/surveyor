import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import TextInput from '../TextInput';
import RadioInput from '../RadioInput';

function SurveyForm({submitHandler}) {
  const [textQuestions, setTextQuestions] = useState([]);
  const [booleanQuestions, setBooleanQuestions] = useState([]);

  const {
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
    control,
    formState,
  } = useForm({});

  let submitFn = (vals) => {
    reset();
    submitHandler(vals);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitFn)} className='mb-4'>
        <TextInput control={control} errors={errors} name="test" />
        <RadioInput control={control} question='test question' option1='opt1' option2='opt2' />
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
      </form>
      <AddCircleIcon sx={{fontSize: '3rem', cursor: 'pointer'}} />
    </>
  );
}

export default SurveyForm;
