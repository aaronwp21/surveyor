import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';

export default function Page() {
  const router = useRouter();
  return (
    <>
      <Typography component="h2" variant="h4" sx={{marginBlockEnd: '2rem', marginBlockStart: '1rem'}} className='text-center underline'>
        My Surveys
      </Typography>
      <div className='flex justify-center'>
        You have no surveys.
      </div>
    </>
  );
}
