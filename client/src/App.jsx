import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/student/Home"
import CoursesList from "./pages/student/CoursesList"
import CourseDetails from "./pages/student/CourseDetails"
import MyEnrollments from "./pages/student/MyEnrollments"
import Player from "./pages/student/Player"
import Educator from "./pages/educator/Educator"
import Dashboard from "./pages/educator/Dashboard"
import AddCourse from "./pages/educator/AddCourse"
import MyCourses from "./pages/educator/MyCourses"
import StudentsEnrolled from "./pages/educator/StudentsEnrolled"
import StudentLayout from "./pages/student/StudentLayout"
import "quill/dist/quill.snow.css"
import { Toaster } from 'react-hot-toast';
import Loading from "./components/student/Loading"

function App() {
	return (
		<>
			<Toaster />
			<Routes>
				<Route element={<StudentLayout />}>
					<Route index element={<Home />} />
					<Route path='course-list' element={<CoursesList />} />
					<Route path='course-list/:input' element={<CoursesList />} />
					<Route path='course/:id' element={<CourseDetails />} />
					<Route path='my-enrollments' element={<MyEnrollments />} />
					<Route path='player/:courseId' element={<Player />} />
					<Route path='loading/:path' element={<Loading />} />
				</Route>

				<Route path='/educator' element={<Educator />}>
					<Route index element={<Dashboard />} />
					<Route path='add-course' element={<AddCourse />} />
					<Route path='my-courses' element={<MyCourses />} />
					<Route path='students-enrolled' element={<StudentsEnrolled />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
