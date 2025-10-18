"use client"
import Header from "@/components/header"
import PrivacyPolicy from "@/components/privacy-policy"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  )
}
