import React from 'react';
import SurveyCard from '@/components/SurveyCard';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SurveyCardList({surveys}) {
  return (
    <div className="w-[80%] m-auto grid grid-cols-3 gap-4 justify-center">
    {surveys.length === 0 ? (
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
      surveys.map((survey, i) => {
        return <SurveyCard title={survey.surveys[0]} _id={survey._id} btn1='Edit' btn2='View Answers' type='view' key={i} />;
      })
    )}
  </div>
  )
}

export default SurveyCardList