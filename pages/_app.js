import '../styles/globals.css';
import Layout from '../layout/layout';
import { AppWrapper } from '../context/context';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
