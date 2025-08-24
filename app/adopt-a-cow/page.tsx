"use client"
import Header from "@/components/header"
import AdoptACowPage from "@/components/adoptACow"
import Footer from "@/components/footer"

export default function AdoptACow() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AdoptACowPage />
      </main>
      <Footer />
    </div>
  )
}
