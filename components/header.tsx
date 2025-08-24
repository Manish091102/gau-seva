"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { User, LogIn, Menu, X, LogOut, Eye } from "lucide-react"
import AuthModal from "@/components/auth-modal"
import CardGenerator from "@/components/card-generator"
import { useAuth } from "@/contexts/auth-context"
import Image from "next/image"
import logo from "./assets/image.png"

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const handleLogout = () => {
    logout()
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
            {/* <div className="flex-shrink-0"> */}
              {/* <div className="flex items-center gap-3"> */}
                {/* <div className="w-20 h-20 flex items-center justify-center overflow-hidden"> */}
                  <Image src={logo} alt="GauSeva" width={60} height={60} className="object-contain" />
                {/* </div> */}
                {/* <div>
                  <h1 className="text-xl font-bold text-orange-600">गौ सेवा</h1>
                  <p className="text-xs text-gray-600 -mt-1">Gau Seva</p>
                </div> */}
              {/* </div> */}
            {/* </div> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* <button
              onClick={() => router.push("/")}
              className={`transition-colors font-medium cursor-pointer ${
                pathname === "/" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
              }`}
            >
              Home
            </button> */}
            <button
              onClick={() => router.push("/gauseva")}
              className={`transition-colors font-medium cursor-pointer ${
                pathname === "/gauseva" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
              }`}
            >
              GauSeva
            </button>
            <button
              onClick={() => {
                router.push("/gaushala")
                setIsMobileMenuOpen(false)
              }}
              className={`transition-colors font-medium cursor-pointer ${
                pathname === "/gaushala" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
              }`}
            >
              GauShala
            </button>
            <button
              onClick={() => {
                router.push("/founder")
                setIsMobileMenuOpen(false)
              }}
              className={`transition-colors font-medium cursor-pointer ${
                pathname === "/founder" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
              }`}
            >
              Founder's Page
            </button>
            <button
              onClick={() => {
                router.push("/volunteer")
                setIsMobileMenuOpen(false)
              }}
              className={`transition-colors font-medium cursor-pointer ${
                pathname === "/volunteer" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
              }`}
            >
              Become a GauSevak
            </button>
            <button
             onClick={() => {
              router.push("/adopt-a-cow")
              setIsMobileMenuOpen(false)
            }}
              className={`transition-colors font-medium cursor-pointer ${
                pathname === "/adopt-a-cow" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
              }`}
            >
              Adopt-a-cow
            </button>
          </nav>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-3">
            {isAuthenticated && user ? (
              /* Authenticated User */
              <div className="flex items-center gap-3">
                {/* <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user.photo || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="bg-orange-100 text-orange-600 text-sm">
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">Member #{user.membershipNumber}</p>
                  </div>
                </div> */}
                <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 bg-transparent border-gray-300"
                    >
                      <Eye className="h-4 w-4" />
                      Preview
                    </Button>
                  </DialogTrigger>
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
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-transparent border-gray-300"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </div>
            ) : (
              /* Not Authenticated */
              <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 bg-transparent border-gray-300"
                  >
                    <LogIn className="h-4 w-4" />
                    Login
                  </Button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <Button size="sm" className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700">
                    <User className="h-4 w-4" />
                    Sign Up
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <AuthModal onClose={() => setIsAuthOpen(false)} />
                </DialogContent>
              </Dialog>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {/* <button
                onClick={() => {
                  router.push("/")
                  setIsMobileMenuOpen(false)
                }}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Home
              </button> */}
              <button
                onClick={() => {
                  router.push("/gauseva")
                  setIsMobileMenuOpen(false)
                }}
                className={`text-left transition-colors font-medium cursor-pointer ${
                  pathname === "/gauseva" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
                }`}
              >
                GauSeva
              </button>
              <button
               onClick={() => {
                router.push("/gaushala")
                setIsMobileMenuOpen(false)
              }}
                className={`text-left transition-colors font-medium cursor-pointer ${
                  pathname === "/gaushala" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
                }`}
              >
                GauShala
              </button>
              <button
                onClick={() => {
                  router.push("/founder")
                  setIsMobileMenuOpen(false)
                }}
                className={`text-left transition-colors font-medium cursor-pointer ${
                  pathname === "/founder" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Founder's Page
              </button>
              <button
                onClick={() => {
                  router.push("/volunteer")
                  setIsMobileMenuOpen(false)
                }}
                className={`text-left transition-colors font-medium cursor-pointer ${
                  pathname === "/volunteer" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Become a GauSevak
              </button>
              <button
                 onClick={() => {
                  router.push("/adopt-a-cow")
                  setIsMobileMenuOpen(false)
                }}
                className={`text-left transition-colors font-medium cursor-pointer ${
                  pathname === "/adopt-a-cow" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Adopt-a-cow
              </button>

              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                {isAuthenticated && user ? (
                  /* Mobile Authenticated User */
                  <div className="space-y-3">
                    {/* <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={user.photo || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback className="bg-orange-100 text-orange-600">
                          {user.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">Member #{user.mobile}</p>
                      </div>
                    </div> */}
                    <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full flex items-center gap-2 justify-center bg-transparent"
                        >
                          <Eye className="h-4 w-4" />
                          Preview Card
                        </Button>
                      </DialogTrigger>
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
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 justify-center bg-transparent"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  /* Mobile Not Authenticated */
                  <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 justify-center bg-transparent"
                      >
                        <LogIn className="h-4 w-4" />
                        Login
                      </Button>
                    </DialogTrigger>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        className="flex items-center gap-2 justify-center bg-orange-600 hover:bg-orange-700"
                      >
                        <User className="h-4 w-4" />
                        Sign Up
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <AuthModal onClose={() => setIsAuthOpen(false)} />
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
