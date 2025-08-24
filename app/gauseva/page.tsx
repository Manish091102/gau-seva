"use client"
import Header from "@/components/header"
import GauSevaPage from "@/components/gauseva"
import Footer from "@/components/footer"

export default function GauSeva() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <GauSevaPage />
      </main>
      <Footer />
    </div>
  )
}
