"use client"
import Header from "@/components/header"
import ShippingPolicy from "@/components/shipping-policy"
import Footer from "@/components/footer"

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ShippingPolicy />
      </main>
      <Footer />
    </div>
  )
}
