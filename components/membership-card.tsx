"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, Share2 } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"
import Image from "next/image"
import logo from "./assets/image.png"

interface User {
  id: string
  name: string
  state: string
  mobile: string
  photo?: string
  membershipNumber: string
  createdAt: string
}

interface MembershipCardProps {
  user: User
}

export default function MembershipCard({ user }: MembershipCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    console.log("hiii")
    if (!cardRef.current) return

    try {
      // Import html2canvas dynamically to avoid SSR issues
      const html2canvas = (await import("html2canvas")).default

      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
        onclone: (clonedDoc) => {
          const style = clonedDoc.createElement("style")
          style.textContent = `:root{--background:#ffffff;--foreground:#111111;--card:#ffffff;--card-foreground:#111111;--popover:#ffffff;--popover-foreground:#111111;--primary:#111111;--primary-foreground:#ffffff;--secondary:#f5f5f5;--secondary-foreground:#111111;--muted:#f5f5f5;--muted-foreground:#6b7280;--accent:#f5f5f5;--accent-foreground:#111111;--destructive:#ef4444;--destructive-foreground:#ffffff;--border:#e5e7eb;--input:#e5e7eb;--ring:#9ca3af;--sidebar:#ffffff;--sidebar-foreground:#111111;--sidebar-primary:#111111;--sidebar-primary-foreground:#ffffff;--sidebar-accent:#f5f5f5;--sidebar-accent-foreground:#111111;--sidebar-border:#e5e7eb;--sidebar-ring:#9ca3af}`
          clonedDoc.head.appendChild(style)
        }
      })

      // Create download link
      const link = document.createElement("a")
      link.download = `gau-seva-membership-${user.membershipNumber}.png`
      link.href = canvas.toDataURL()
      link.click()
    } catch (error) {
      console.error("Failed to download card:", error)
    }
  }

  const handleShare = async () => {
    if (!cardRef.current) return

    try {
      const html2canvas = (await import("html2canvas")).default
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
        onclone: (clonedDoc) => {
          const style = clonedDoc.createElement("style")
          style.textContent = `:root{--background:#ffffff;--foreground:#111111;--card:#ffffff;--card-foreground:#111111;--popover:#ffffff;--popover-foreground:#111111;--primary:#111111;--primary-foreground:#ffffff;--secondary:#f5f5f5;--secondary-foreground:#111111;--muted:#f5f5f5;--muted-foreground:#6b7280;--accent:#f5f5f5;--accent-foreground:#111111;--destructive:#ef4444;--destructive-foreground:#ffffff;--border:#e5e7eb;--input:#e5e7eb;--ring:#9ca3af;--sidebar:#ffffff;--sidebar-foreground:#111111;--sidebar-primary:#111111;--sidebar-primary-foreground:#ffffff;--sidebar-accent:#f5f5f5;--sidebar-accent-foreground:#111111;--sidebar-border:#e5e7eb;--sidebar-ring:#9ca3af}`
          clonedDoc.head.appendChild(style)
        }
      })

      canvas.toBlob(async (blob) => {
        if (blob && navigator.share) {
          const file = new File([blob], `gau-seva-membership-${user.membershipNumber}.png`, {
            type: "image/png",
          })

          try {
            await navigator.share({
              title: "My Gau Seva Membership Card",
              text: "Check out my Gau Seva membership card!",
              files: [file],
            })
          } catch (shareError) {
            console.error("Failed to share:", shareError)
          }
        }
      })
    } catch (error) {
      console.error("Failed to share card:", error)
    }
  }

  const qrData = JSON.stringify({
    name: user.name,
    membershipNumber: user.membershipNumber,
    state: user.state,
    mobile: user.mobile,
    organization: "Gau Seva",
  })

  return (
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-center mb-2">Your Membership Card</h3>
        <p className="text-sm text-gray-600 text-center">
          Congratulations! Your official Gau Seva membership card is ready.
        </p>
      </div>

      {/* Membership Card */}
      <div
        ref={cardRef}
        className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-orange-200"
  style={{
    aspectRatio: "1.6/1",
    backgroundColor: "#ffffff", // instead of bg-white
    color: "#000000", // instead of text-black
  }}
      >
        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-4 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-2 right-4 w-12 h-12 border border-white rounded-full"></div>
          </div>

          <div className="relative z-10 flex items-start justify-between">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden shrink-0">
                <Image src={logo} alt="GauSeva logo" width={36} height={36} className="object-contain" />
              </div>
              <div>
                <h2 className="text-lg font-bold leading-tight">GAU SEVA</h2>
                <p className="text-xs opacity-90 leading-tight">COW WELFARE ORGANIZATION</p>
              </div>
            </div>
            {/* Keep space on the right so avatar in content never overlaps header */}
            <div className="w-20 h-1" />
          </div>

          <div className="mt-3 text-xs opacity-90">
            <p>Registered Office: New Delhi - 110001</p>
            <p>www.gauseva.org | info@gauseva.org</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 bg-white relative">
          <div className="flex justify-between items-start">
            {/* User Info */}
            <div className="flex-1">
              <div className="space-y-3">
                <div className="flex">
                  <p className="text-xs font-medium text-gray-600">Name</p>
                  <p className="text-xs ps-3 font-bold text-gray-900 uppercase">{user.name}</p>
                </div>

                {/* <div className="flex"> */}

                <div className="flex">
                  <p className="text-xs font-medium text-gray-600">State</p>
                  <p className="text-xs ps-3 font-semibold text-gray-900">{user.state}</p>
                </div>

                <div className="flex">
                  <p className="text-sm font-medium text-gray-600">ID</p>
                  <p className="text-xs ps-3 font-bold text-orange-600">{user.mobile}</p>
                </div>
                {/* </div> */}

                {/* <div>
                  <p className="text-sm font-medium text-gray-600">Valid From</p>
                  <p className="text-sm text-gray-900">
                    {new Date(user.createdAt).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div> */}
              </div>
            </div>

            {/* User Photo */}
            <div className="ml-4 mt-1">
              <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden border-3 border-orange-200">
                {user.photo ? (
                  <img src={user.photo || "/placeholder.svg"} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-2xl text-gray-600">👤</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="absolute bottom-4 right-4">
            <div className="bg-white p-1 rounded border">
              <QRCodeSVG value={qrData} size={48} level="M" includeMargin={false} />
            </div>
          </div>

          {/* Membership Badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">MEMBER</div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-2 border-t">
          <p className="text-xs text-gray-600 text-center">
            This card is valid for identification as a Gau Seva member
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-6">
        <Button onClick={handleDownload} className="flex-1 bg-orange-600 hover:bg-orange-700">
          <Download className="mr-2 h-4 w-4" />
          Download Card
        </Button>
        <Button onClick={handleShare} variant="outline" className="flex-1 bg-transparent">
          <Share2 className="mr-2 h-4 w-4" />
          Share Card
        </Button>
      </div>

      <div className="mt-4 p-4 bg-orange-50 rounded-lg">
        <h4 className="font-semibold text-orange-900 mb-2">Card Benefits:</h4>
        <ul className="text-sm text-orange-800 space-y-1">
          <li>• Official recognition as Gau Seva member</li>
          <li>• Access to member-only events and programs</li>
          <li>• Priority support for cow welfare initiatives</li>
          <li>• Digital verification through QR code</li>
        </ul>
      </div>
    </div>
  )
}