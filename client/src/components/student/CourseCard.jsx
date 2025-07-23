import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calcRating } = useContext(AppContext);
  const courseRating = calcRating(course);

  return (
    <Link
      to={"/course/" + course._id}
      onClick={() => scrollTo(0, 0)}
      className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'
    >
      <img
        src={course.courseThumbnail}
        alt='course thumbnail'
        className='w-full'
      />
      <div className='flex flex-col justify-between p-3 text-left'>
        <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
        <p className='text-gray-500'>Aniket Kumar</p>
        <div className='flex items-center space-x-2'>
          <span>{courseRating}</span>
          <div className='flex'>
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  i < Math.floor(courseRating) ? assets.star : assets.star_blank
                }
                className='h-5'
              />
            ))}
          </div>
          <span className='text-gray-500'>{course.courseRatings.length}</span>
        </div>
        <p className='text-base font-semibold text-gray-800'>
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
