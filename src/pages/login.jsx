import Head from 'next/head';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import useStore, { setUser } from '@/store/store';
import Typography from '@mui/material/Typography';
import AuthForm from '@/components/forms/AuthForm';

export default function Login() {
  const changeUser = useStore(setUser);
  let router = useRouter();

  const submitHandler = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        changeUser(user);
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
