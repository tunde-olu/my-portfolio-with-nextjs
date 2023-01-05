import Head from 'next/head';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta
          name='description'
          content='Fill and submit the form below to get in touch with me'
        />
      </Head>
      <Contact />
    </>
  );
};
export default ContactPage;
