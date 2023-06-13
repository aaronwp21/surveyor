import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import SurveyCard from '@/components/SurveyCard';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SurveyCardList() {
  const origin = window.location.origin;
  const uid = window.location.href.match(/(?<=user.)[^\]]+/)[0];
  const path = `${origin}/api/v1/surveys/${uid}`;
  const { isLoading, error, data } = useQuery({
    queryKey: ['surveys'],
    queryFn: () =>
      fetch(path).then((res) => {
        return res.json();
      }),
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className="w-[80%] m-auto grid grid-cols-3 gap-4 justify-center">
    {data.length === 0 ? (
      <div className="flex flex-col gap-4">
        <Typography component="p" variant="h4">
          You have no surveys.
        </Typography>
        <Button
          className="self-start"
          variant="contained"
          onClick={() => handleClick()}
        >
          Create One
        </Button>
      </div>
    ) : (
      data.map((survey, i) => {
        return <SurveyCard title={survey.surveys[0]} btn1='Remove' btn2='View' key={i} />;
      })
    )}
  </div>
  )
}

export default SurveyCardList