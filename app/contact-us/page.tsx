"use client"
import Header from "@/components/header"
import ContactUs from "@/components/contact-us"
import Footer from "@/components/footer"

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}
