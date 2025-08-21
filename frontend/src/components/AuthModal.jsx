"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/Dialog"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

const AuthModal = ({ open, onOpenChange }) => {
  const [step, setStep] = useState("signup") // signup, otp, complete
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    mobile: "",
    photo: null,
  })
  const [otp, setOtp] = useState("")
  const [photoPreview, setPhotoPreview] = useState(null)

  const { sendOTP, verifyOTP, signup, loading, error } = useAuth()
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({ ...prev, photo: file }))
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSendOTP = async (e) => {
    e.preventDefault()
    try {
      await sendOTP(formData.mobile)
      setStep("otp")
    } catch (err) {
      console.error("Failed to send OTP:", err)
    }
  }

  const handleVerifyOTP = async (e) => {
    e.preventDefault()
    try {
      await verifyOTP(formData.mobile, otp)

      // Create user account
      const userData = {
        ...formData,
        photo: photoPreview, // Base64 string
      }

      console.log("ooo")

      await signup(userData)
      setStep("complete")

      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        onOpenChange(false)
        navigate("/dashboard")
      }, 2000)
    } catch (err) {
      console.error("Failed to verify OTP:", err)
    }
  }

  const resetForm = () => {
    setStep("signup")
    setFormData({ name: "", state: "", mobile: "", photo: null })
    setOtp("")
    setPhotoPreview(null)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        onOpenChange(isOpen)
        if (!isOpen) resetForm()
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {step === "signup" && "Join Gau Seva"}
            {step === "otp" && "Verify OTP"}
            {step === "complete" && "Welcome to Gau Seva!"}
          </DialogTitle>
        </DialogHeader>

        {step === "signup" && (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <Input
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="Enter your state"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <Input
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
              <Input type="file" accept="image/*" onChange={handlePhotoChange} required />
              {photoPreview && (
                <div className="mt-2">
                  <img
                    src={photoPreview || "/placeholder.svg"}
                    alt="Preview"
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                </div>
              )}
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={loading}>
              {loading ? "Sending OTP..." : "Send OTP"}
            </Button>
          </form>
        )}

        {step === "otp" && (
          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">Enter the OTP sent to {formData.mobile}</p>
              <p className="text-xs text-gray-500 mb-4">For testing, use: 123456</p>
            </div>

            <div>
              <Input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit OTP"
                maxLength={6}
                className="text-center text-lg tracking-widest"
                required
              />
            </div>

            {error && <div className="text-red-600 text-sm text-center">{error}</div>}

            <div className="flex space-x-2">
              <Button type="button" variant="outline" onClick={() => setStep("signup")} className="flex-1">
                Back
              </Button>
              <Button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600" disabled={loading}>
                {loading ? "Verifying..." : "Verify OTP"}
              </Button>
            </div>
          </form>
        )}

        {step === "complete" && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">✅</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Registration Successful!</h3>
              <p className="text-sm text-gray-600 mt-2">Your membership card is being generated...</p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default AuthModal
