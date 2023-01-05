import Image from 'next/image';
import {
  css,
  github,
  html,
  javascript,
  nextjs,
  react,
  tailwind,
  styledComponents,
} from '../assets/logo';

const Skills = () => {
  const techs = [
    {id: 1, src: html, title: 'HTML', style: 'shadow-orange-500'},
    {id: 2, src: css, title: 'CSS', style: 'shadow-blue-500'},
    {id: 3, src: javascript, title: 'Javascript', style: 'shadow-yellow-500'},
    {id: 4, src: react, title: 'React', style: 'shadow-blue-600'},
    {id: 5, src: tailwind, title: 'Tailwind CSS', style: 'shadow-sky-400'},
    {id: 6, src: nextjs, title: 'Next JS', style: 'shadow-white'},
    {
      id: 7,
      src: styledComponents,
      title: 'Styled Components',
      style: 'shadow-pink-400',
    },
    {id: 8, src: github, title: 'GitHub', style: 'shadow-gray-400'},
  ];

  return (
    <section className='bg-gradient-to-b from-black to-[#111] w-full min-h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-100'>
        <div className='max-w-screen-md w-full mx-auto p-6 mt-[5rem]'>
          <h2 className='text-4xl font-bold border-b-4 border-gray-500 inline-block pb-2 mb-4'>
            Skills
          </h2>
          <p className='py-6 text-gray-300'>
            This are the technologies I've worked with
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-clip py-8 px-8 sm:px-0 text-gray-300 mb-[10rem]'>
          {techs.map(({id, src, title, style}) => (
            <div
              key={id}
              className={`shadow-md duration-300 hover:scale-105 py-2 rounded-lg flex flex-col justify-between ${style}`}>
              <Image src={src} alt={title} className={`w-20 mx-auto`} />
              <p className='mt-4 text-center'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
