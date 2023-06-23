import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { arrayMoveImmutable } from 'array-move';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import SurveyForm from '@/components/forms/SurveyForm';
import SnackBar from '@/components/SnackBar';

function Page() {
  const [snackBarOpen, setSnackBarOpen] = useState(false);
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
      setQuestions(data.surveys[1])
    }
  }, [data])

  const mutation = useMutation({
    mutationFn: (answers) => {
      return axios.put(path, answers);
    },
  });

  const submitHandler = (vals) => {
    mutation.mutate(vals);
    setSnackBarOpen(true);
  };

  const upArrowHandler = (index) => {
    const newIndex = index - 1
    const newArr = arrayMoveImmutable(questions, index, newIndex);
    setQuestions(newArr);
  };

  const downArrowHandler = (index) => {
    const newIndex = index + 1
    const newArr = arrayMoveImmutable(questions, index, newIndex);
    setQuestions(newArr);
  };

  const deleteHandler = (index) => {
    const newArr = questions.filter((question, i) => {
      if(i !== index) {
        return question;
      }
    })
    setQuestions(newArr);
  }

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
      <SurveyForm
        submitHandler={submitHandler}
        upArrowHandler={upArrowHandler}
        downArrowHandler={downArrowHandler}
        deleteHandler={deleteHandler}
        questions={questions}
        canAnswer={false}
      />
      <SnackBar
        snackBarOpen={snackBarOpen}
        snackBarClose={handleSnackClose}
        action="updated"
      />
    </div>
  );
}

export default Page;
