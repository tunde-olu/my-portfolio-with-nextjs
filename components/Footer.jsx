const Footer = () => {
  return (
    <footer className='bg-black h-[5rem] w-full  border-gray-400'>
      <div className=' px-10 flex justify-center items-center h-full text-gray-400'>
        <p>&copy; {new Date().getFullYear()} Tunde Olu</p>
      </div>
    </footer>
  );
};
export default Footer;

// border-t-[1px]
