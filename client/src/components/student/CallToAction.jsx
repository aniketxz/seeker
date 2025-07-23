import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <section className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h3 className='text-2xl md:text-4xl text-gray-800 font-semibold'>
        Learn anything, anytime, anywhere
      </h3>
      <p className='text-gray-500 text-sm sm:text-base'>
        Whether you're a student, educator, or professional, our Learning
        Management System provides everything you need.
      </p>
      <div className='flex gap-3 items-center font-medium justify-center mt-4'>
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-7 md:px-10 py-2 md:py-3 rounded cursor-pointer'>
          Get Started
        </button>
        <button className='hover:bg-gray-200/60 rounded px-7 md:px-10 py-2 md:py-3 cursor-pointer flex gap-2'>
          Learn More
          <img src={assets.arrow_icon} alt='→' />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
