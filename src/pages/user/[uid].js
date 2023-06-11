import { useRouter } from 'next/router';
import { getUserSurveys } from '@/lib/api-functions/server/api';
import Typography from '@mui/material/Typography';
import SurveyCard from '@/components/SurveyCard';
import Button from '@mui/material/Button';

export default function Page({ data }) {
  const router = useRouter();
  console.log(data);

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
      <div className="w-[80%] m-auto grid grid-cols-3 gap-4 justify-center">
        {data.length === '0' ? (
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
            return <SurveyCard title={survey.surveys[0]} key={i} />;
          })
        )}
      </div>
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
