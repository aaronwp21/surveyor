import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useStore, { setUser } from '@/store/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';
import Layout from '@/components/Layout';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme/theme';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const changeUser = useStore(setUser);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      changeUser(user);
    }
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
