import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialsSection = () => {
  return (
    <section className='pb-14 px-8 md:px-5'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>
        Hear from our learners as they share their journeys of transformation,
        success, and how our <br /> platform has made a difference in their
        lives.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto sm:px-15'>
        {dummyTestimonial.map((testimonial, i) => (
          <div
            key={i}
            className='text-sm border text-left border-gray-500/10 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] overflow-hidden shadow-black/5'
          >
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='size-12 rounded-full'
              />
              <div>
                <h3 className='text-lg font-medium text-gray-800'>
                  {testimonial.name}
                </h3>
                <p className='text-gray-800/80'>{testimonial.role}</p>
              </div>
            </div>
            <div className='p-5 pb-7'>
              <span className='flex gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    className='h-5'
                    src={
                      i < Math.floor(testimonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                  />
                ))}
              </span>
              <p className='text-gray-500 mt-5'>{testimonial.feedback}</p>
            </div>
            <a href="#" className="text-blue-500 underline px-5">Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
