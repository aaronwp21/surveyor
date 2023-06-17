import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Typography from '@mui/material/Typography';
import SurveyCardList from '@/components/SurveyCardList';

export default function Page() {
  const router = useRouter();
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
      <SurveyCardList surveys={data} />
    </>
  );
}
