import { useContext, useEffect } from "react"
import { AppContext } from "../../context/AppContext"
import { useState } from "react"
import { Line } from "rc-progress"
import axios from "axios"

const MyEnrollments = () => {
	const {
		enrolledCourses,
		calculateCourseDuration,
		navigate,
		userData,
		fetchUserEnrolledCourses,
		backendUrl,
		getToken,
		calculateNoOfLectures,
	} = useContext(AppContext)

	const [progressArray, setProgressArray] = useState([])

	const getCourseProgress = async () => {
		try {
			const token = await getToken()
			const tempProgressArray = await Promise.all(
				enrolledCourses.map(async (course) => {
					const { data } = await axios.post(
						`${backendUrl}/api/user/get-course-progress`,
						{ courseId: course._id },
						{ headers: { Authorization: `Bearer ${token}` } }
					)
					const totalLectures = calculateNoOfLectures(course)
					const lectureCompleted = data.progressData
						? data.progressData.lectureCompleted.length
						: 0

					return { totalLectures, lectureCompleted }
				})
			)
			setProgressArray(tempProgressArray)
		} catch (error) {
			toast.error(error.message)
		}
	}

	useEffect(() => {
		if (userData) {
			fetchUserEnrolledCourses()
		}
	}, [userData])

	useEffect(() => {
		if (enrolledCourses.length > 0) {
			getCourseProgress()
		}
	}, [enrolledCourses])

	return (
		<section className='min-h-[90vh] px-8 md:px-36 pt-12 pb-20'>
			<h1 className='text-2xl font-semibold'>My Enrollments</h1>
			<table className='table-fixed md:table-auto w-full overflow-hidden border mt-6 border-gray-700/40'>
				<thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
					<tr>
						<th className='px-4 py-3 font-semibold truncate'>Course</th>
						<th className='px-4 py-3 font-semibold truncate max-lg:hidden'>
							Duration
						</th>
						<th className='px-4 py-3 font-semibold truncate max-sm:hidden max-md:text-center'>
							Completed
						</th>
						<th className='px-4 py-3 font-semibold truncate max-md:text-center'>
							Status / Action
						</th>
					</tr>
				</thead>
				<tbody className='text-gray-700'>
					{enrolledCourses.map((course, index) => (
						<tr key={index} className='border-b border-gray-500/20'>
							<td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3'>
								<img
									src={course.courseThumbnail}
									alt=''
									className='w-14 sm:w-24 md:w-28'
								/>
								<div className='flex-1'>
									<p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
									<Line
										strokeWidth={2}
										percent={
											progressArray[index]
												? (progressArray[index].lectureCompleted * 100) /
												  progressArray[index].totalLectures
												: 0
										}
										className='bg-gray-300 rounded-full'
									/>
								</div>
							</td>
							<td className='px-4 py-3 max-lg:hidden'>
								{calculateCourseDuration(course)}
							</td>
							<td className='px-4 py-3 max-sm:hidden max-md:text-center'>
								{progressArray?.[index] &&
									`${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`}{" "}
								<span>Lectures</span>
							</td>
							<td className='px-4 py-3 max-md:text-center'>
								<button
									onClick={() => navigate("/player/" + course._id)}
									className='px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white rounded-sm cursor-pointer'
								>
									{progressArray[index] &&
									progressArray[index].lectureCompleted /
										progressArray[index].totalLectures ===
										1
										? "Completed"
										: "Go to course"}
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	)
}

export default MyEnrollments
