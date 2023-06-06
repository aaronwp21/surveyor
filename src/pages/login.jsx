import Head from 'next/head';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import AuthForm from '@/components/forms/AuthForm';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

export default function Login() {
  let router = useRouter();

  const submitHandler = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.replace('/');
      })
      .catch((error) => {
        console.log(error);
      });
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
