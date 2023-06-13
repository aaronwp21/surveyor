import React from 'react';
import Typography from '@mui/material/Typography';
import SurveyForm from '@/components/forms/SurveyForm';
import { useQuery } from '@tanstack/react-query';

function Page() {
  const origin = window.location.origin;
  const id = window.location.href.match(/(?<=answer.)[^\]]+/)[0];
  const path = `${origin}/api/v1/answers/${id}`;

  const { isLoading, error, data } = useQuery({
    queryKey: ['survey'],
    queryFn: () =>
      fetch(path).then((res) => {
        return res.json();
      }),
  });

  const submitHandler = (vals) => {
    console.log(vals);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  console.log(data);
  return (
    <div className="flex flex-col items-center mt-8">
      <SurveyForm
        submitHandler={submitHandler}
        questions={data.surveys[1]}
        canAnswer={true}
      />
    </div>
  );
}

export default Page;
