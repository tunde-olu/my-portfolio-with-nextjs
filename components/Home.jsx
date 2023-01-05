import heroImage from '../assets/image/heroImage.png';
import {TbArrowNarrowRight} from 'react-icons/tb';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <section className='h-fit min-h-screen w-full pt-[8rem] bg-gradient-to-b from-black to-[#111] pb-[20rem]'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-y-10 px-4  md:flex-row mt-[10rem]'>
        <div className='flex flex-col justify-center items-start h-full'>
          <h2 className='text-6xl sm:text-8xl font-bold text-gray-100 text-home px-0'>
            I'm a Frontend Developer
          </h2>
          <p className='text-gray-400 py-4 max-w-md'>
            I have 2 years of experience building software. Currently, I love to
            work on web application using technologies like React, Tailwind,
            Next JS and Styled Components.
          </p>
          <div>
            <Link
              href='/portfolio'
              className='bg-red-500 fit w-fit overflow-hidden'>
              <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to-blue-500 gap-x-1 cursor-pointer'>
                Portfolio
                <span className='group-hover:rotate-90 duration-500'>
                  <TbArrowNarrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className='mb-[5rem] md:mb-0'>
          <Image
            width={300}
            height={400}
            src={heroImage}
            alt='Tunde_Olu'
            className='rounded-3xl mx-auto w-[90%] ss:w-2/3'
          />
        </div>
      </div>
    </section>
  );
};
export default Home;
