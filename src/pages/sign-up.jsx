import Head from 'next/head';
import Typography from '@mui/material/Typography';
import AuthForm from '@/components/forms/AuthForm';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

export default function SignUp() {
  const submitHandler = (vals) => {
    console.log(vals);
  };
  
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <>
        <Typography
          component="h2"
          variant="h3"
          sx={{ textAlign: 'center', margin: '1rem' }}
        >
          Sign Up
        </Typography>
        <div>
          <AuthForm submitHandler={submitHandler} />
        </div>
      </>
    </>
  );
}
