"use client"
import Header from "@/components/header"
import TermsConditions from "@/components/terms-conditions"
import Footer from "@/components/footer"

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TermsConditions />
      </main>
      <Footer />
    </div>
  )
}
