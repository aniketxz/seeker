import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { assets } from "../../assets/assets"
import Loading from "../../components/student/Loading"
import DashboardDataCapsule from "../../components/educator/DashboardDataCapsule"
import toast from "react-hot-toast"
import axios from "axios"

const Dashboard = () => {
	const { currency, backendUrl, isEducator, getToken } = useContext(AppContext)
	const [dashboardData, setDashboardData] = useState(null)

	const fetchDashboardData = async () => {
		try {
			const token = await getToken()
			const { data } = await axios.get(backendUrl + "/api/educator/dashboard", {
				headers: { Authorization: `Bearer ${token}` },
			})

			if (data.success) {
				setDashboardData(data.dashboardData)
			} else {
				toast.error(data.message)
			}
		} catch (error) {
			toast.error(error.message)
		}
	}

	useEffect(() => {
		if (isEducator) {
			fetchDashboardData()
		}
	}, [isEducator])

	if (!dashboardData) return <Loading />

	return (
		<section className='flex flex-col gap-5 p-4 md:p-8 pb-0 pt-8'>
			<div className='flex gap-3 max-w-2xl'>
				<DashboardDataCapsule
					imageUrl={assets.patients_icon}
					data={dashboardData.enrolledStudentsData.length}
					title={"Total Enrollments"}
				/>
				<DashboardDataCapsule
					imageUrl={assets.appointments_icon}
					data={dashboardData.totalCourses}
					title={"Total Courses"}
				/>
				<DashboardDataCapsule
					imageUrl={assets.earning_icon}
					data={currency + dashboardData.totalEarnings}
					title={"Total Earnings"}
				/>
			</div>

			<div className=''>
				<h2 className='text-lg pb-4 font-medium'>Latest Enrollments</h2>
				<div className='flex flex-col items-center max-w-4xl w-full rounded-md bg-white border border-gray-500/20'>
					<table className='table-fixed md:table-auto w-full overflow-hidden'>
						<thead className='text-gray-900 border-b border-gray-500/40 text-sm text-left'>
							<tr>
								<th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>
									#
								</th>
								<th className='px-4 py-3 font-semibold'>Student Name</th>
								<th className='px-4 py-3 font-semibold'>Course Title</th>
							</tr>
						</thead>
						<tbody className='text-sm text-gray-600'>
							{dashboardData.enrolledStudentsData.map((item, index) => (
								<tr key={index} className='border-b border-gray-500/20'>
									<td className='px-4 py-3 text-center hidden sm:table-cell'>
										{index + 1}
									</td>
									<td className='px-2 md:px-4 py-3 flex items-center space-x-3'>
										<img
											src={item.student.imageUrl}
											alt='profile'
											className='size-9 rounded-full'
										/>
										<span className='truncate'>{item.student.name}</span>
									</td>
									<td className='px-4 py-3 truncate'>{item.courseTitle}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	)
}

export default Dashboard
