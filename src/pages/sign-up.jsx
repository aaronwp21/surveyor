import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import useStore, { selectUser, setUser } from '@/store/store';
import Typography from '@mui/material/Typography';
import AuthForm from '@/components/forms/AuthForm';

export default function SignUp() {
  const user = useStore(selectUser);
  const changeUser = useStore(setUser);
  let router = useRouter();

  useEffect(() => {
    if(user) {
      router.push('/create')
    }
  }, [router, user])

  const submitHandler = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
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
