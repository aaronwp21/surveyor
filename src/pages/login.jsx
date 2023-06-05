import Head from 'next/head';
import Typography from '@mui/material/Typography';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div>
        <Typography component='h2' variant='h3'>Login</Typography>
      </div>
    </>
  )
}