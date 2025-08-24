"use client"
import Header from "@/components/header"
import VolunteerPage from "@/components/volunteer"
import Footer from "@/components/footer"

export default function Volunteer() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <VolunteerPage />
      </main>
      <Footer />
    </div>
  )
}
