import Layout from '@/components/Layout';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme/theme';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
