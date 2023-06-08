import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextInput from '../TextInput';
import RadioInput from '../RadioInput';

function SurveyForm({ submitHandler, questions, canAnswer }) {
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
      <form onSubmit={handleSubmit(submitFn)} className="mb-4 flex flex-col gap-8">
        {questions.map((question, i) => {
          if (question.type === 'text') {
            return (
              <TextInput
                key={i}
                iteration={i}
                control={control}
                errors={errors}
                question={question.question}
              />
            );
          } else {
            return (
              <RadioInput
                key={i}
                iteration={i}
                control={control}
                question={question.question}
                option1={question.option1}
                option2={question.option2}
              />
            );
          }
        })}
        {questions.length === 0 || canAnswer === false ? (
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
