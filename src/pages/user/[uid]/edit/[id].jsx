import React, { useState } from 'react';
import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import SurveyForm from '@/components/forms/SurveyForm';
import SnackBar from '@/components/SnackBar';

function Page() {
  const [snackBarOpen, setSnackBarOpen] = useState(false);

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

  const mutation = useMutation({
    mutationFn: (answers) => {
      return axios.put(path, answers);
    },
  });

  const submitHandler = (vals) => {
    mutation.mutate(vals);
    setSnackBarOpen(true);
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
      <SurveyForm
        submitHandler={submitHandler}
        questions={data.surveys[1]}
        canAnswer={false}
      />
      <SnackBar snackBarOpen={snackBarOpen} snackBarClose={handleSnackClose} action='updated' />
    </div>
  );
}

export default Page;
