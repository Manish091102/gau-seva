import Header from "../components/Header"
import HeroBanner from "../components/HeroBanner"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import TestimonialsSection from "../components/TestimonialsSection"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroBanner />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}

export default HomePage
