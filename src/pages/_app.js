import { Footer } from '../components';
import '../styles/global.scss';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
