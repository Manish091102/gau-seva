"use client"

import { useState } from "react"
import { Button } from "./ui/Button"

const MembershipCard = ({ cardData }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const downloadCard = () => {
    // Create a canvas to generate the membership card image
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    // Set canvas size (similar to credit card proportions)
    canvas.width = 800
    canvas.height = 500

    // Draw background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
    gradient.addColorStop(0, "#f97316") // orange-500
    gradient.addColorStop(1, "#ea580c") // orange-600

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, 200)

    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 200, canvas.width, 300)

    // Add text
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 32px Arial"
    ctx.fillText("GAU SEVA", 50, 80)

    ctx.font = "18px Arial"
    ctx.fillText("Serving Cows, Serving Humanity", 50, 120)

    // Member details
    ctx.fillStyle = "#000000"
    ctx.font = "bold 24px Arial"
    ctx.fillText(`Name: ${cardData.name}`, 50, 280)

    ctx.font = "20px Arial"
    ctx.fillText(`State: ${cardData.state}`, 50, 320)
    ctx.fillText(`Membership: ${cardData.membershipNumber}`, 50, 360)

    // Download the image
    const link = document.createElement("a")
    link.download = `gau-seva-membership-${cardData.membershipNumber}.png`
    link.href = canvas.toDataURL()
    link.click()
  }

  const shareCard = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Gau Seva Membership",
          text: `I'm a proud member of Gau Seva! Membership: ${cardData.membershipNumber}`,
          url: window.location.origin + `/verify/${cardData.membershipNumber}`,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(
        `Check out my Gau Seva membership: ${window.location.origin}/verify/${cardData.membershipNumber}`,
      )
      alert("Membership link copied to clipboard!")
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <div
        className={`relative w-full h-64 cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg p-6 text-white h-full">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold">GAU SEVA</h3>
                <p className="text-sm opacity-90">Serving Cows, Serving Humanity</p>
              </div>
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🐄</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              {cardData.photo && (
                <img
                  src={cardData.photo || "/placeholder.svg"}
                  alt={cardData.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white"
                />
              )}
              <div className="flex-1">
                <p className="text-sm opacity-75">Member Name</p>
                <p className="font-semibold text-lg">{cardData.name}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="opacity-75">State</p>
                <p className="font-semibold">{cardData.state}</p>
              </div>
              <div>
                <p className="opacity-75">Member ID</p>
                <p className="font-semibold font-mono">{cardData.membershipNumber}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-white border-2 border-orange-500 rounded-lg shadow-lg p-6 h-full">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">Verification QR Code</h3>
            </div>

            {cardData.qrCode && (
              <div className="flex justify-center mb-4">
                <img src={cardData.qrCode || "/placeholder.svg"} alt="QR Code" className="w-32 h-32" />
              </div>
            )}

            <div className="text-center text-sm text-gray-600">
              <p>Scan to verify membership</p>
              <p className="mt-2">Valid until: {new Date(cardData.validUntil).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mt-6">
        <Button onClick={downloadCard} className="flex-1 bg-transparent" variant="outline">
          Download Card
        </Button>
        <Button onClick={shareCard} className="flex-1 bg-orange-500 hover:bg-orange-600">
          Share Card
        </Button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-2">Click card to flip and view QR code</p>
    </div>
  )
}

export default MembershipCard
