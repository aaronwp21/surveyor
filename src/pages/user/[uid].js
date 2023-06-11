import React from 'react';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import SurveyCardList from '@/components/SurveyCardList';

export default function Page() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/create');
  };

  return (
    <>
      <Typography
        component="h2"
        variant="h4"
        sx={{ marginBlockEnd: '2rem', marginBlockStart: '1rem' }}
        className="text-center underline"
      >
        My Surveys
      </Typography>
      <SurveyCardList />
    </>
  );
}
