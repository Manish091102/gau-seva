"use client"

import { Heart, Calendar, Users, ShoppingBag } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import AuthModal from "@/components/auth-modal"

export default function QuickLinksSection() {
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const quickLinks = [
    // {
    //   icon: Heart,
    //   title: "Cow Adoption",
    //   description: "Support a cow with monthly donations",
    //   color: "text-orange-500",
    // },
    {
      icon: Calendar,
      title: "Visit Us",
      description: "Schedule a visit to our goshala",
      color: "text-orange-500",
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers",
      color: "text-orange-500",
    },
    // {
    //   icon: ShoppingBag,
    //   title: "Cow Products",
    //   description: "Shop our organic cow products",
    //   color: "text-orange-500",
    // },
  ]

  return (
    <section className="py-16 bg-orange-400">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-50 mb-12">Quick Links</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 center">
          {quickLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  if (link.title === "Volunteer") {
                    setIsAuthOpen(true)
                  }
                }}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mb-4`}>
                    <IconComponent className={`w-6 h-6 ${link.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{link.title}</h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
          <DialogContent className="sm:max-w-md">
            <AuthModal onClose={() => setIsAuthOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
