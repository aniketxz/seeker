import { Link, useLocation } from "react-router-dom"
import { assets } from "../../assets/assets"
import { useClerk, UserButton, useUser } from "@clerk/clerk-react"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import toast from "react-hot-toast"
import axios from "axios"

const Navbar = () => {
	const { navigate, isEducator, backendUrl, setIsEducator, getToken } =
		useContext(AppContext)

	// nav bg-white for course-list and my-enrollments page
	const whiteNav =
		useLocation().pathname.includes("/course-list") ||
		useLocation().pathname.includes("/my-enrollments")

	const { openSignIn } = useClerk()
	const { user } = useUser()

	const becomeEducator = async () => {
		try {
			if (isEducator) {
				navigate("/educator")
				return
			}
			const token = await getToken()
			const { data } = await axios.get(
				backendUrl + "/api/educator/update-role",
				{ headers: { Authorization: `Bearer ${token}` } }
			)

			if (data.success) {
				setIsEducator(true)
				toast.success(data.message)
			} else {
				toast.error(data.message)
			}
		} catch (error) {
			toast.error(error.message)
		}
	}

	return (
		<>
			<nav
				className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
					whiteNav ? "bg-white" : "bg-cyan-100/70"
				}`}
			>
				<img
					src={assets.logo}
					alt='Logo'
					onClick={() => navigate("/")}
					className='w-28 lg:w-32 cursor-pointer'
				/>
				<div className='flex items-center gap-2 sm:gap-5 md:gap-5 text-gray-500'>
					<div className='flex items-center gap-1 sm:gap-2 md:gap-5 max-sm:text-sm'>
						{user && (
							<>
								<button onClick={becomeEducator}>
									{isEducator ? "Educator Dashboard" : "Become Educator"}
								</button>{" "}
								|<Link to='/my-enrollments'>My Enrollments</Link>
							</>
						)}
					</div>

					{user ? (
						<UserButton />
					) : (
						<>
							{/* This part is hidden below md */}
							<button
								onClick={() => openSignIn()}
								className='hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full'
							>
								Create Account
							</button>
							{/* For phone screens < md */}
							<button onClick={() => openSignIn()} className='md:hidden'>
								<img src={assets.user_icon} alt='Login' />
							</button>
						</>
					)}
				</div>
			</nav>
		</>
	)
}

export default Navbar
