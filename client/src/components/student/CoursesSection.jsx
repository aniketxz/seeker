import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <section className='flex flex-col justify-center items-center gap-3 py-16 px-8 md:px-40'>
      <h2 className='text-3xl font-medium text-gray-800'>
        Learn from the best
      </h2>
      <p className='text-sm md:text-base text-gray-500'>
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness, our courses are crafted to <br />{" "}
        deliver results.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 md:px-0 my-10 md:my-14 gap-4 sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl'>
        {allCourses.slice(0, 4).map((course, i) => (
          <CourseCard key={i} course={course} />
        ))}
      </div>

      <Link
        to='/course-list'
        onClick={() => scrollTo(0, 0)}
        className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'
      >
        Show all courses
      </Link>
    </section>
  );
};

export default CoursesSection;
