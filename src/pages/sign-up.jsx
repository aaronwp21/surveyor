import Head from 'next/head';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import AuthForm from '@/components/forms/AuthForm';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

export default function SignUp() {
  let router = useRouter();
  const submitHandler = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
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
