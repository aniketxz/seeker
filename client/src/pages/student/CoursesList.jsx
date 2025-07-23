import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/student/SearchBar";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/student/CourseCard";
import { assets } from "../../assets/assets";

const CoursesList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();

      input
        ? setFilteredCourse(
            tempCourses.filter((item) =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilteredCourse(tempCourses);
    }
  }, [allCourses, input]);

  return (
    <>
      <main className='px-8 md:px-20 lg:px-36 pt-20 text-left min-h-screen'>
        <section className='flex flex-col md:flex-row md:justify-between md:items-center gap-6 w-full'>
          <div>
            <h1 className='text-4xl font-semibold text-gray-800 text-nowrap'>
              Course List
            </h1>
            <p className='text-gray-500 w-full text-nowrap'>
              <span
                className='text-blue-600 cursor-pointer'
                onClick={() => navigate("/")}
              >
                Home
              </span>{" "}
              / <span>Course List</span>
            </p>
          </div>
          <SearchBar data={input} />
        </section>
        {input && <div className="inline-flex items-center gap-4 px-4 py-2 border mt-6 rounded-lg -mb-12 text-gray-600">
          <p>{input}</p>
          <img src={assets.cross_icon} alt="" className="cursor-pointer" onClick={() => navigate('/course-list')} />
        </div>}

        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
          {filteredCourse.length > 0 ? filteredCourse.map((course, i) => (
            <CourseCard key={i} course={course} />
          )) : 
            <div className="text-3xl">No course found</div>
          }
        </section>
      </main>
    </>
  );
};

export default CoursesList;
