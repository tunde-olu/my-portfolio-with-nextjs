import Image from 'next/image';
import {
  cocktails,
  comfySloth,
  exchangeRate,
  gericht,
  hackerNews,
  hoobank,
  istockPhotos,
  mealFinder,
  movieDb,
  speedTyper,
} from '../assets/portfolio-thumb';

const Portfolio = () => {
  const portfolioThumb = [
    {
      id: 1,
      src: cocktails,
      git: 'https://github.com/tunde-olu/cocktail-db-react',
      link: 'https://cocktail-db-olu.netlify.app/',
    },
    {
      id: 3,
      src: speedTyper,
      git: 'https://github.com/tunde-olu/typing-game',
      link: 'https://typing-game-olu.netlify.app/',
    },
    {
      id: 5,
      src: gericht,
      git: 'https://github.com/tunde-olu/gericht-restaurant',
      link: 'https://gericht-restaurant-olu.netlify.app/',
    },
    {
      id: 2,
      src: mealFinder,
      git: 'https://github.com/tunde-olu/meal-finder',
      link: 'https://meal-finder-olu.netlify.app/',
    },
    {
      id: 4,
      src: exchangeRate,
      git: 'https://github.com/tunde-olu/exchange-rate-calculator',
      link: 'https://exchange-rate-calculator-olu.netlify.app/',
    },
    {
      id: 6,
      src: hackerNews,
      git: 'https://github.com/tunde-olu/hacker-news-react',
      link: 'https://hacker-news-olu.netlify.app/',
    },
    {
      id: 7,
      src: movieDb,
      git: 'https://github.com/tunde-olu/movie-db-react',
      link: 'https://movie-db-olu.netlify.app/',
    },
    {
      id: 8,
      src: hoobank,
      git: 'https://github.com/tunde-olu/HooBank',
      link: 'https://hoobank-olu.netlify.app/',
    },
    {
      id: 9,
      src: istockPhotos,
      git: 'https://github.com/tunde-olu/istock-photos',
      link: 'https://istock-photos-olu.netlify.app/',
    },
    {
      id: 10,
      src: comfySloth,
      git: 'https://github.com/tunde-olu/react-e-commerce',
      link: 'https://react-e-commerce-olu.netlify.app',
    },
  ];

  return (
    <section
      id='portfolio'
      className='bg-gradient-to-b from-black to-[#111] w-full text-gray-100 md:min-h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='w-full self-center justify-self-center max-w-screen-md p-6 pt-[5rem]'>
          <h2 className='text-4xl font-bold border-b-4 inline-block pb-2 border-gray-500 mb-8'>
            Portfolio
          </h2>
          <p className='py-4 text-gray-300'>Check out some of my work here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-[5%] sm:px-0 mb-[10rem]'>
          {portfolioThumb.map(({id, src, git, link}) => (
            <div
              key={id}
              className='shadow-md shadow-gray-600 rounded-lg flex flex-col justify-between text-gray-300'>
              <a href={link} target='_blank' rel='noreferrer'>
                <Image
                  width={300}
                  height={400}
                  src={src}
                  alt=''
                  className='rounded-md duration-200 hover:scale-105 sm:h-[210px] h-[260px] w-full'
                />
              </a>
              <div className='flex justify-between items-end px-3 py-2'>
                <a href={link} target='_blank' rel='noreferrer'>
                  <button>Demo</button>
                </a>
                <a href={git} target='_blank' rel='noreferrer'>
                  <button>Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
