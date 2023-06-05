import Head from 'next/head';
import Typography from '@mui/material/Typography';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div>
        <Typography component="h2" variant="h3">
          Sign Up
        </Typography>
      </div>
    </>
  );
}
