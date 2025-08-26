"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import AuthModal from "@/components/auth-modal"
import { useAuth } from "@/contexts/auth-context"
import CardGenerator from "@/components/card-generator"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Hero1 from "./assets/Hero.png"

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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Hero1.src})`,
      }}
    >
      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center text-white z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">Gauseva</h1>
          <p className="text-2xl md:text-3xl mb-8 font-medium text-white drop-shadow-lg">
          A Sacred Duty, A Community Responsibility
          </p>
          <p className="text-lg md:text-xl mb-8 font-medium text-white drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
          Through our comprehensive Gau Seva program, we provide shelter, medical care, and compassionate care for abandoned and injured cows, while preserving our cultural heritage and promoting sustainable living practices.
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

            <Button
              size="lg"
              className="bg-[#e28154] hover:bg-[#e28154] text-white px-10 py-4 text-lg font-bold rounded-full min-w-[160px] shadow-xl transform hover:scale-105 transition-all"
              onClick={() => {
              //   if (!isAuthenticated) {
              //     setIsAuthOpen(true)
              //   } else {
              //     setIsAuthOpen(true)

                  router.push("/volunteer")
                // }
              }}
            >
              Volunteer
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

      {/* <div className="relative">
        <div
          className="absolute inset-x-0 bottom-0 h-20 bg-white"
          style={{
            clipPath: "ellipse(100% 100% at 50% 100%)",
            transform: "translateY(50%)",
          }}
        ></div>
      </div> */}
    </section>
  )
}
