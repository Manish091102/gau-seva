"use client"

import { useState } from "react"
import { Button } from "./ui/Button"
import { useAuth } from "../contexts/AuthContext"
import AuthModal from "./AuthModal"
import { LogOut, User } from "lucide-react"

const Header = () => {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout()
    } else {
      setShowAuthModal(true)
    }
  }

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🐄</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">Gau Seva</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{user?.name}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleAuthClick}
                    className="flex items-center space-x-1 bg-transparent"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Button>
                </div>
              ) : (
                <Button onClick={handleAuthClick} className="bg-orange-500 hover:bg-orange-600">
                  Login / Signup
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <AuthModal open={showAuthModal} onOpenChange={setShowAuthModal} />
    </>
  )
}

export default Header
