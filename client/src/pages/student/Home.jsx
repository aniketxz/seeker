import Hero from "../../components/student/Hero"
import Companies from "../../components/student/Companies"
import CoursesSection from "../../components/student/CoursesSection"
import TestimonialsSection from "../../components/student/TestimonialsSection"
import CallToAction from "../../components/student/CallToAction"

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-7 min-h-screen text-center">
      <Hero />
      <Companies />
      <CoursesSection />
      <TestimonialsSection />
      <CallToAction />
    </div>
  )
}

export default Home