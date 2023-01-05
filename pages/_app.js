import '../styles/globals.css';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';
import Head from 'next/head';
import Footer from '../components/Footer';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Tunde Olu</title>
        <meta
          name='description'
          content='I work on web application using technologies like React, Tailwind,
            Next JS and Styled Components'
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <SocialLinks />
      <Footer />
    </>
  );
}

export default MyApp;
