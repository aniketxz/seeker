import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { assets } from "../../assets/assets"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
	const { isEducator } = useContext(AppContext)

	const menuItems = [
		{ name: "Dashboard", path: "/educator", icon: assets.home_icon },
		{ name: "Add Course", path: "/educator/add-course", icon: assets.add_icon },
		{
			name: "My Courses",
			path: "/educator/my-courses",
			icon: assets.my_course_icon,
		},
		{
			name: "Student Enrolled",
			path: "/educator/students-enrolled",
			icon: assets.person_tick_icon,
		},
	]

	return (
		isEducator && (
			<nav className='w-16 md:w-64 border-r text-base border-gray-500/50 py-2 flex flex-col'>
				{menuItems.map((item) => (
					<NavLink
						to={item.path}
						key={item.name}
						end={item.path === "/educator"}
						className={({ isActive }) =>
							`flex items-center flex-col md:flex-row justify-center md:justify-start py-3.5 md:px-10 gap-3 ${
								isActive
									? "bg-indigo-100 border-r-[6px] border-indigo-500/60"
									: "hover:bg-gray-100/80 border-r-[6px] border-white hover:border-gray-200/40"
							}`
						}
					>
						<img src={item.icon} alt='' className='size-6' />
						<p className='hidden md:block text-center'>{item.name}</p>
					</NavLink>
				))}
			</nav>
		)
	)
}

export default Sidebar
