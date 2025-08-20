"use client"

import { Button } from "./ui/Button"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

const HeroBanner = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate("/dashboard")
    } else {
      // This will trigger the auth modal in the header
      document.querySelector("[data-auth-trigger]")?.click()
    }
  }

  return (
    <section className="bg-gradient-to-br from-orange-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-6">
              <span className="text-3xl">🐄</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Protecting Cows,
            <span className="text-orange-500 block">Serving Humanity</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our mission to protect and serve cows through dedicated care, awareness, and community action. Get your
            official membership and be part of this noble cause.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleGetStarted}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
            >
              {isAuthenticated ? "View Dashboard" : "Get Your Membership"}
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg bg-transparent">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">10,000+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600">Cows Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
