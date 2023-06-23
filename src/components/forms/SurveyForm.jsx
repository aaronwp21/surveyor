import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextInput from '../TextInput';
import RadioInput from '../RadioInput';
import DeleteIcon from '@mui/icons-material/Delete';

function SurveyForm({ submitHandler, deleteHandler, questions, canAnswer }) {
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
      <form
        onSubmit={handleSubmit(submitFn)}
        className="mb-4 flex flex-col gap-8"
      >
        {questions.map((question, i) => {
          if (question.type === 'text') {
            return (
              <div key={i} className="relative">
                <TextInput
                  disabled={!canAnswer}
                  iteration={i}
                  control={control}
                  errors={errors}
                  question={question.question}
                />
                {canAnswer ? '' : <div
                  onClick={() => deleteHandler(i)}
                  className="absolute top-[50%] left-[105%] translate-y-[-50%] cursor-pointer"
                >
                  <DeleteIcon />
                </div>}
              </div>
            );
          } else {
            return (
              <div key={i} className='relative'>
                <RadioInput
                  disabled={!canAnswer}
                  iteration={i}
                  control={control}
                  question={question.question}
                  option1={question.option1}
                  option2={question.option2}
                />
                {canAnswer ? '' : <div
                  onClick={() => deleteHandler(i)}
                  className="absolute top-[50%] left-[105%] translate-y-[-50%] cursor-pointer"
                >
                  <DeleteIcon />
                </div>}
              </div>
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
