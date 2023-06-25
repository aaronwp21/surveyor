import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { arrayMoveImmutable } from 'array-move';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SurveyForm from '@/components/forms/SurveyForm';
import SnackBar from '@/components/SnackBar';

function Page() {
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [titleVal, setTitleVal] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [questions, setQuestions] = useState([]);

  const origin = window.location.origin;
  const id = window.location.href.match(/(?<=edit.)[^\]]+/)[0];
  const path = `${origin}/api/v1/answers/${id}`;

  const { isLoading, error, data } = useQuery({
    queryKey: ['survey'],
    queryFn: () =>
      fetch(path).then((res) => {
        return res.json();
      }),
  });

  useEffect(() => {
    if (data) {
      setTitleVal(data.surveys[0]);
      setQuestions(data.surveys[1]);
    }
  }, [data]);

  const mutation = useMutation({
    mutationFn: (surveys) => {
      return axios.post(path, surveys);
    },
  });

  const submitHandler = () => {
    if (titleVal === '') {
      setTitleError(true);
    } else {
      const survey = [titleVal, questions];
      mutation.mutate(survey);
      setTitleError(false);
      setSnackBarOpen(true);
    }
  };

  const reset = () => {
    setTitleVal(data.surveys[0]);
    setQuestions(data.surveys[1]);
  };

  const handleTitleChange = (e) => {
    setTitleVal(e.target.value);
  };

  const upArrowHandler = (index) => {
    const newIndex = index - 1;
    const newArr = arrayMoveImmutable(questions, index, newIndex);
    setQuestions(newArr);
  };

  const downArrowHandler = (index) => {
    const newIndex = index + 1;
    const newArr = arrayMoveImmutable(questions, index, newIndex);
    setQuestions(newArr);
  };

  const deleteHandler = (index) => {
    const newArr = questions.filter((question, i) => {
      if (i !== index) {
        return question;
      }
    });
    setQuestions(newArr);
  };

  const handleSnackClose = () => {
    setSnackBarOpen(false);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex items-center gap-4 mb-8">
        <Typography component="p" variant="h5">
          Survey Title:{' '}
        </Typography>
        <TextField
          value={titleVal}
          error={titleError}
          helperText={titleError ? 'Title cannot be empty' : ''}
          onChange={handleTitleChange}
          variant="standard"
          inputProps={{ style: { fontSize: '1.5rem' } }}
        />
      </div>
      <SurveyForm
        submitHandler={submitHandler}
        upArrowHandler={upArrowHandler}
        downArrowHandler={downArrowHandler}
        deleteHandler={deleteHandler}
        questions={questions}
        canAnswer={false}
        canEdit={true}
      />
      <div className="flex justify-center">
        <Button
          type="reset"
          onClick={() => reset()}
          variant="contained"
          sx={{ mr: 2 }}
        >
          Reset
        </Button>
        <Button
          type="submit"
          primary="true"
          variant="contained"
          onClick={() => submitHandler()}
        >
          Submit
        </Button>
      </div>
      <SnackBar
        snackBarOpen={snackBarOpen}
        snackBarClose={handleSnackClose}
        action="updated"
      />
    </div>
  );
}

export default Page;
