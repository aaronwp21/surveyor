import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SurveyCard from './SurveyCard';

function AnswerSurveyCardList() {
  const origin = window.location.origin;
  const path = `${origin}/api/v1/surveys`;

  const { isLoading, error, data } = useQuery({
    queryKey: ['surveys'],
    queryFn: () =>
      fetch(path).then((res) => {
        return res.json();
      }),
  });

  if (isLoading) return <div>Loading</div>;

  if (error) return <div>Error</div>;

  return (
    <div className="w-[80%] m-auto mt-12 grid grid-cols-3 gap-4 justify-center">
      {data.length === 0 ? (
        <div className="flex flex-col gap-4">
          <Typography component="p" variant="h4">
            There Are No Surveys to Answer.
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
          return (
            <SurveyCard
              title={survey.surveys[0]}
              btn1="Preview"
              btn2="Answer"
              key={i}
            />
          );
        })
      )}
    </div>
  );
}

export default AnswerSurveyCardList;
