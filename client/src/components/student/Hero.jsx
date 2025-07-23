import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full pt-20 md:pt-36 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='relative text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 max-w-sm md:max-w-xl lg:max-w-3xl'>
        Empower your future with the courses designed to{" "}
        <span className='text-primary'>fit your choice.</span>
        <img
          src={assets.sketch}
          alt='sketch'
          className='absolute -bottom-7 right-0 hidden md:block'
        />
      </h1>

      <p className='hidden md:block text-gray-500 max-w-2xl mx-auto'>
        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and professional
        goals.
      </p>

      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>
        We bring together world-class instructors to help you achieve your
        professional goals.
      </p>

      <SearchBar />
    </section>
  );
};

export default Hero;
