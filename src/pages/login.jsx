import Head from 'next/head';
import Typography from '@mui/material/Typography';
import AuthForm from '@/components/forms/AuthForm';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

export default function Login() {
  const submitHandler = (vals) => {
    console.log(vals);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Typography
        component="h2"
        variant="h3"
        sx={{ textAlign: 'center', margin: '1rem' }}
      >
        Login
      </Typography>
      <div>
        <AuthForm submitHandler={submitHandler} />
      </div>
    </>
  );
}
