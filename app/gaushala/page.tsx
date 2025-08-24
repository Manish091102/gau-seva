"use client"
import Header from "@/components/header"
import GauShalaPage from "@/components/gaushala"
import Footer from "@/components/footer"

export default function GauShala() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <GauShalaPage />
      </main>
      <Footer />
    </div>
  )
}
