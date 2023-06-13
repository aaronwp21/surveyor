import React from 'react'
import Typography from '@mui/material/Typography';
import SurveyForm from '@/components/forms/SurveyForm'
import { useQuery } from '@tanstack/react-query';

function Page() {
  const origin = window.location.origin;
  const id = window.location.href.match(/(?<=answer.)[^\]]+/)[0];
  const path = `${origin}/api/v1/surveys/${id}`;
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ['survey'],
  //   queryFn: () =>
  //     fetch(path).then((res) => {
  //       return res.json();
  //     }),
  // });

  // console.log(data)
  return (
    <Typography>{`Id: ${id}`}</Typography>
  )
}

export default Page