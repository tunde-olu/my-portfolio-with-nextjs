import {useState} from 'react';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {FaGithub, FaLinkedin, FaTimes} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialLinks = () => {
  const [toggle, setToggle] = useState(false);

  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      // child: `Linkedin ${<FaLinkedin size={30} />}`,
      href: 'https://linkedin.com/in/tunde-olu-68305725a',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/tunde-olu',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:tundeolu24@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/resume/tunde-olu-resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className='flex flex-col top-[35%] left-0 fixed w-0'>
      <div>
        <button
          className={`xl:hidden pl-2 animate-pulse ${
            toggle ? 'text-green-400' : 'text-red-500'
          }`}
          onClick={() => setToggle((prev) => !prev)}>
          {!toggle ? <FaTimes size={12} /> : <MdKeyboardArrowRight size={20} />}
        </button>
      </div>
      {
        <ul
          className={`duration-[1s] xl:translate-x-[0] transition-all ${
            toggle ? 'translate-x-[-100px]' : 'translate-x-[0]'
          }`}>
          {links.map(({id, child, href, style, download = false}) => (
            <li
              key={id}
              className={`flex justify-between items-center w-[9.5rem] h-14 px-4 bg-gray-500 translate-x-[-100px] hover:rounded-md duration-300 hover:translate-x-[-10px] ${style}`}>
              <a
                href={href}
                className='flex justify-between items-center w-full text-white'
                download={download}
                target='_blank'
                rel='noreferrer'>
                {child}
              </a>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
export default SocialLinks;
