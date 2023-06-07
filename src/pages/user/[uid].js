import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';

export default function Page() {
  const router = useRouter();
  return (
    <>
      <Typography component="h2" variant="h4" className='text-center mt-4 mb-8 underline'>
        My Surveys
      </Typography>
      <div className='flex justify-center'>
        You have no surveys.
      </div>
    </>
  );
}
