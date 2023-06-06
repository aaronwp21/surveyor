import Layout from '@/components/Layout';
import useStore, { setUser } from '@/store/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme/theme';
import '@/styles/globals.css';



export default function App({ Component, pageProps }) {
  const changeUser = useStore(setUser);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      changeUser(user)
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
