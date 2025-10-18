"use client"
import Header from "@/components/header"
import CancellationPolicy from "@/components/cancellation-policy"
import Footer from "@/components/footer"

export default function CancellationPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CancellationPolicy />
      </main>
      <Footer />
    </div>
  )
}
