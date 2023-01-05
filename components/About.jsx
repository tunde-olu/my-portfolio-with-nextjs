import Link from 'next/link';

const About = () => {
  return (
    <section className='w-full min-h-screen bg-gradient-to-b from-black to-[#111] text-gray-100 flex  justify-center items-center pt-[10rem] pb-[2rem]'>
      <div className='max-w-screen-md px-10 flex flex-col justify-center  w-full h-full mb-[8rem]'>
        <div className='pb-10'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-500 pb-2'>
            About
          </h2>
        </div>
        <p className='sm:text-xl text-gray-400 mt-8 [word-spacing:2px]'>
          Hey, I'm Tunde, a passionate{' '}
          <span className='text-[1.3rem] text-blue-600 [letter-spacing:4px]'>
            FrontEnd-Web Developer
          </span>
          . I'm quietly confident, naturally curious, and perpetually working on
          improving my coding skills.
          <br />
          <br />
          I don't like to define myself by the work I've done. I define myself
          by the work I want to do. Skills can be taught, personality is
          inherent. I prefer to keep learning, continue challenging myself, and
          do interesting things that matter.
          <br />
          <br />
          Fueled by high energy levels and boundless enthusiasm, I'm easily
          inspired and more then willing to follow my fascinations wherever they
          take me. I'm passionate, expressive, multi-talented spirit with a
          natural ability to entertain and inspire. I'm never satisfied to just
          come up with ideas. Instead I have an almost impulsive need to act on
          them.
          <br />
          <br />
          My abundant energy fuels me in the pursuit of many interests, hobbies,
          areas of study and artistic endeavors. I'm a fast learner, able to
          pick up new skills and juggle different projects and roles with
          relative ease.
          <br />
          <br />
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to{' '}
          <Link
            href='/contact'
            className='underline cursor-pointer text-gray-300'>
            contact
          </Link>{' '}
          me.
        </p>
      </div>
    </section>
  );
};
export default About;
