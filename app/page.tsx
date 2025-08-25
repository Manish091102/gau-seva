"use client"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import QuickLinksSection from "@/components/quick-links-section"
import HighlightsSection from "@/components/highlights-section"
import AboutEventSection from "@/components/about-event-section"
import VolunteerSection from "@/components/volunteer-section"
import Footer from "@/components/footer"
import { useAuth } from "@/contexts/auth-context"
import HomAbout from "@/components/home-about"

export default function HomePage() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <main>
        {/* <QuickLinksSection /> */}
        {/* <HighlightsSection /> */}
        <HomAbout />
        <AboutEventSection />
        <VolunteerSection />
      </main>
      <Footer />
    </div>
  )
}
