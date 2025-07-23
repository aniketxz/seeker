import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className='bg-gray-900 w-full text-left md:px-36 text-zinc-400'>
      <div className='flex flex-col md:flex-row items-start px-8 sm:px-4 justify-center gap-10 md:gap-20 lg:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.logo_dark} alt='logo' className="md:min-w-30 lg:w-auto" />
          <p className='mt-6 text-center md:text-left text-sm sm:hidden lg:block'>
            With intuitive tools for both learners and instructors, Seeker makes
            education seamless, interactive, and accessible for everyone.
          </p>
        </div>
        <div className='flex flex-col items-center md:items-start w-full lg:pl-16'>
          <p className='text-white font-semibold mb-10 md:mb-5 text-lg'>
            Company
          </p>
          <div className='flex md:flex-col justify-between gap-10 md:gap-2 text-nowrap'>
            <a href='#'>Home</a>
            <a href='#'>About Us</a>
            <a href='https://github.com/aniketxz'>Contact Us</a>
            <a href='#'>Privacy Policy</a>
          </div>
        </div>
        <div className='hidden md:flex flex-col items-start w-full'>
          <h3 className='text-white font-semibold mb-5 text-lg'>
            Subscribe to our newsletter
          </h3>
          <p className='text-sm'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className='flex gap-1 pt-6'>
            <input
              type='email'
              placeholder='Enter your email'
              className='lg:w-64 border border-gray-500/30 bg-gray-800 text-gray-400 placeholder-gray-500 outline-none rounded px-2 text-sm'
            />
            <button className='bg-blue-600 text-white rounded px-6 py-2 mx-1 cursor-pointer'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className='py-4 text-center text-xs md:text-sm text-zinc-200/40'>
        Copyright 2025 &copy; Seeker. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
