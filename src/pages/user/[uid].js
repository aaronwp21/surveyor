import { useRouter } from 'next/router';
import { getUserSurveys } from '@/lib/api-functions/server/api';
import Typography from '@mui/material/Typography';

export default function Page({ data }) {
  const router = useRouter();
  console.log(data);
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
    </>
  );
}

export const getServerSideProps = async (context) => {
  const id = context.params.uid;
  let host;

  if (process.env.NODE_ENV === 'development') {
    host = 'http://localhost:3000';
  } else {
    host = 'https://surveyor-git-staging-aaronwp21.vercel.app/';
  }
  const res = await fetch(`${host}/api/v1/surveys/${id}`, {
    method: 'GET',
  });
  const data = await res.json();
  return {
    props: { data },
  };
};
