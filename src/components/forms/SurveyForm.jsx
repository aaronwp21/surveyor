import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextInput from '../TextInput';
import RadioInput from '../RadioInput';

function SurveyForm({ submitHandler, questions }) {
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
      <form onSubmit={handleSubmit(submitFn)} className="mb-4">
        {questions.map((question) => {
          if (question.type === 'text') {
            <TextInput
              control={control}
              errors={errors}
              name={question.question}
            />;
          } else {
            <RadioInput
              control={control}
              question={question.question}
              option1={question.option1}
              option2={question.option2}
            />;
          }
        })}
        {questions.length === 0 ? (
          ''
        ) : (
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
        )}
      </form>
    </>
  );
}

export default SurveyForm;
