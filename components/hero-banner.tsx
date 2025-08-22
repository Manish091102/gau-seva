"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import AuthModal from "@/components/auth-modal"
import { useAuth } from "@/contexts/auth-context"
import CardGenerator from "@/components/card-generator"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import logo from "./assets/image.png"
import bannerImage from "./assets/bannerimage.png"

export default function HeroBanner() {
  const { isAuthenticated, user } = useAuth()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleJoinMission = () => {
    if (isAuthenticated) {
      router.push("/dashboard")
    } else {
      scrollToSection("about")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("userData")
    setIsPreviewOpen(false)
    window.location.reload() // Refresh the page to update the UI
  }

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bannerImage.src})`,
      }}
    >
      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center text-white z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">Gauseva</h1>
          <p className="text-2xl md:text-3xl mb-8 font-medium text-white drop-shadow-lg">
            Protecting Our Sacred Mother
          </p>
          <p className="text-lg md:text-xl mb-8 font-medium text-white drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
            On 26th August at 2 PM, at Town Hall, Gandhinagar, the VLEE Charitable Trust welcomes you to
            be part of the Gau Seva Abhiyan.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            {/* <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 text-lg font-bold rounded-full min-w-[160px] shadow-xl transform hover:scale-105 transition-all"
              onClick={handleJoinMission}
            >
              DONATE
            </Button>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg font-bold rounded-full min-w-[160px] shadow-xl transform hover:scale-105 transition-all"
              onClick={() => scrollToSection("about")}
            >
              ADOPT A COW
            </Button> */}
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-bold rounded-full min-w-[160px] shadow-xl transform hover:scale-105 transition-all"
              onClick={() => {
                if (!isAuthenticated) {
                  setIsAuthOpen(true)
                } else {
                  setIsAuthOpen(true)

                  // router.push("/dashboard")
                }
              }}
            >
              {/* VOLUNTEER */}
              Become a Gau sevak
            </Button>
          </div>

          {!isAuthenticated && (
            <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
              <DialogContent className="sm:max-w-md">
                <AuthModal onClose={() => setIsAuthOpen(false)} />
              </DialogContent>
            </Dialog>
          )}

          {isAuthenticated && (
            <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
              <div className="flex justify-center gap-4 mt-2">
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 text-lg font-bold rounded-full min-w-[180px] shadow-xl transform hover:scale-105 transition-all"
                  >
                    PREVIEW CARD
                  </Button>
                </DialogTrigger>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-500 text-red-600 hover:bg-red-500 hover:text-white px-10 py-4 text-lg font-bold rounded-full min-w-[180px] shadow-xl transform hover:scale-105 transition-all"
                  onClick={handleLogout}
                >
                  LOGOUT
                </Button>
              </div>
              <DialogContent className="sm:max-w-lg">
                <CardGenerator
                  user={{
                    id: user?.id,
                    name: user?.name || "",
                    state: user?.state || "",
                    mobile: user?.mobile || "",
                    photo: user?.photo,
                    membershipNumber: user?.membershipNumber,
                    createdAt: user?.createdAt,
                  }}
                />
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      <div className="relative">
        {/* Curved bottom design */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 bg-white"
          style={{
            clipPath: "ellipse(100% 100% at 50% 100%)",
            transform: "translateY(50%)",
          }}
        ></div>

        {/* Navigation Menu */}
        <div className="relative bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="py-6">
              {/* Mobile menu button */}
              <div className="md:hidden flex justify-center mb-4">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2 px-4 rounded-lg bg-gray-100"
                >
                  Menu ☰
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex justify-between items-center">
                {/* Left side - Logo */}
                <div className="flex items-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center overflow-hidden mr-3">
                    <Image src={logo} alt="GauSeva" width={40} height={40} className="object-contain" />
                  </div>
                  {/* <span className="text-xl font-bold text-orange-600">GauSeva</span> */}
                </div>
                
                {/* Center navigation */}
                <div className="flex space-x-6">
                  <button className="text-gray-700 hover:text-orange-600 font-semibold transition-colors py-2 px-4 rounded-lg hover:bg-orange-50">
                    Home
                  </button>
                  <button className="text-gray-700 hover:text-orange-600 font-semibold transition-colors py-2 px-4 rounded-lg hover:bg-orange-50">
                    About Us
                  </button>
                  <button className="text-gray-700 hover:text-orange-600 font-semibold transition-colors py-2 px-4 rounded-lg hover:bg-orange-50">
                    Our Cows
                  </button>
                  <button className="text-gray-700 hover:text-orange-600 font-semibold transition-colors py-2 px-4 rounded-lg hover:bg-orange-50">
                    Programs
                  </button>
                  <button className="text-gray-700 hover:text-orange-600 font-semibold transition-colors py-2 px-4 rounded-lg hover:bg-orange-50">
                    Gallery
                  </button>
                  <button className="text-gray-700 hover:text-orange-600 font-semibold transition-colors py-2 px-4 rounded-lg hover:bg-orange-50">
                    Blog
                  </button>
                  <button className="text-gray-700 hover:text-orange-600 font-semibold transition-colors py-2 px-4 rounded-lg hover:bg-orange-50">
                    Contact
                  </button>
                </div>

                {/* Right side - Auth buttons (open global dialog) */}
                <div className="flex items-center space-x-4">
                  {/* <Button
                    variant="ghost"
                    className="text-gray-600 hover:text-orange-600 px-4 py-2 rounded-lg font-medium transition-all"
                    onClick={() => window.open("/admin/login", "_blank")}
                  >
                    Admin
                  </Button> */}
                  {!isAuthenticated && (
                    <>
                      <Button
                        variant="outline"
                        className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-lg font-semibold transition-all bg-transparent"
                        onClick={() => setIsAuthOpen(true)}
                      >
                        Login
                      </Button>
                      <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all"
                        onClick={() => setIsAuthOpen(true)}
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </div>
              </div>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="md:hidden flex flex-col space-y-2 mt-4">
                  <button className="text-gray-700 hover:text-orange-600 font-semibold transition-colors py-3 px-4 rounded-lg hover:bg-orange-50 text-center">
                    Home
                  </button>
                  <button className="text-gray-700 hover:text-orange-600 font-semibold transition-colors py-3 px-4 rounded-lg hover:bg-orange-50 text-center">
                    About Us
                  </button>
                  <button className="text-gray-700 hover:text-orange-600 font-semibold transition-colors py-3 px-4 rounded-lg hover:bg-orange-50 text-center">
                    Our Cows
                  </button>
                  <button className="text-gray-700 hover:text-orange-600 font-semibold transition-colors py-3 px-4 rounded-lg hover:bg-orange-50 text-center">
                    Programs
                  </button>
                  <button className="text-gray-700 hover:text-orange-600 font-semibold transition-colors py-3 px-4 rounded-lg hover:bg-orange-50 text-center">
                    Gallery
                  </button>
                  <button className="text-gray-700 hover:text-orange-600 font-semibold transition-colors py-3 px-4 rounded-lg hover:bg-orange-50 text-center">
                    Blog
                  </button>
                  <button className="text-gray-700 hover:text-orange-600 font-semibold transition-colors py-3 px-4 rounded-lg hover:bg-orange-50 text-center">
                    Contact
                  </button>
                  {!isAuthenticated && (
                    <>
                      <Button
                        variant="outline"
                        className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white mx-4 mt-2 rounded-lg font-semibold bg-transparent"
                        onClick={() => setIsAuthOpen(true)}
                      >
                        Login
                      </Button>
                      <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white mx-4 mb-2 rounded-lg font-semibold"
                        onClick={() => setIsAuthOpen(true)}
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
