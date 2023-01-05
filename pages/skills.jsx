import Head from 'next/head';
import Skills from '../components/Skills';

const SkillsPage = () => {
  return (
    <>
      <Head>
        <title>My Skills</title>
        <meta
          name='description'
          content="This are the technologies I've worked with"
        />
      </Head>
      <Skills />
    </>
  );
};
export default SkillsPage;
