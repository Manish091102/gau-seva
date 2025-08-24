"use client"
import Header from "@/components/header"
import FounderPage from "@/components/founder"
import Footer from "@/components/footer"

export default function Founder() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <FounderPage />
      </main>
      <Footer />
    </div>
  )
}
