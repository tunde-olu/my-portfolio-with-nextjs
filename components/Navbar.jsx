import {useEffect, useRef, useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef();

  const links = [
    {id: 1, link: 'home', href: '/'},
    {id: 2, link: 'about', href: '/about'},
    {id: 3, link: 'portfolio', href: '/portfolio'},
    {id: 4, link: 'skills', href: '/skills'},
    {id: 5, link: 'contact', href: '/contact'},
    {
      id: 6,
      link: 'Resumé',
      href: '/resume/tunde-olu-resume.pdf',
      download: true,
    },
  ];

  useEffect(() => {
    let handleNav = (e) => {
      if (nav && !navRef.current.contains(e.target)) {
        setNav(false);
      }
    };

    document.addEventListener('mousedown', handleNav);

    return () => {
      document.removeEventListener('mousedown', handleNav);
    };
  });

  return (
    <nav className='text-white fixed bg-[#111] px-4 w-full z-10  border-gray-400'>
      <div className='max-w-screen-xl flex justify-between items-center w-full h-20 mx-auto'>
        <div>
          <Link href='/'>
            <h1 className='font-signature text-3xl ml-5 text-slate-400 logo'>
              Tunde Olu
            </h1>
          </Link>
        </div>
        <ul className='hidden md:flex'>
          {links.map(({id, link, href}) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200'>
              {id !== 6 ? (
                <Link href={href}>{link}</Link>
              ) : (
                <Link download href={href}>
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <button
          onClick={() => setNav((prev) => !prev)}
          className='cursor-pointer pr-2 z-10 text-gray-300 md:hidden '>
          {nav ? (
            <FaTimes size={25} className='text-pink-500' />
          ) : (
            <FaBars size={25} />
          )}
        </button>
        {nav && (
          <ul
            className='flex flex-col items-center list-none py-4 justify-center space-y-2 absolute top-[40px] min-w-[150px] rounded-lg right-[1rem]  bg-gradient-to-b from-black to-gray-800 scale-up-center md:hidden'
            ref={navRef}>
            {links.map(({id, link, href}) => (
              <li
                key={id}
                className='px-4 cursor-pointer capitalize  text-gray-200 text-lg'>
                {id !== 6 ? (
                  <Link href={href} onClick={() => setNav(false)}>
                    {link}
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
