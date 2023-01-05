import Head from 'next/head';
import Portfolio from '../components/Portfolio';

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>Tunde's Portfolio</title>
        <meta name='description' content='Check out some of my work here' />
      </Head>
      <Portfolio />
    </>
  );
};
export default PortfolioPage;
