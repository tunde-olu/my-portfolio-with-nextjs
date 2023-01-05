import Head from 'next/head';
import About from '../components/About';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta
          name='description'
          content="I don't like to define myself by the work I've done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter."
        />
      </Head>
      <About />
    </>
  );
};
export default AboutPage;
