import { Outlet } from "react-router-dom"
import Navbar from "../../components/student/Navbar"
import Footer from "../../components/student/Footer"

const StudentLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default StudentLayout