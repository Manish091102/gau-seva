"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, Phone, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import CardGenerator from "@/components/card-generator"

interface AuthModalProps {
  onClose: () => void
}

interface FormErrors {
  name?: string
  state?: string
  mobile?: string
  photo?: string
  otp?: string
}

export default function AuthModal({ onClose }: AuthModalProps) {
  const { sendOtp, verifyOtp, login, signup, isLoading, error, clearError } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    mobile: "",
    photo: null as File | null,
  })
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState("")
  const [errors, setErrors] = useState<FormErrors>({})
  const [successMessage, setSuccessMessage] = useState("")
  const [showCardGenerator, setShowCardGenerator] = useState(false)
  const [newUser, setNewUser] = useState<any>(null)

  // Clear error when component mounts or mode changes
  useEffect(() => {
    clearError()
  }, [isLogin, clearError])

  // Clear success message after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000)
      return () => clearTimeout(timer)
    }
  }, [successMessage])

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi",
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!isLogin) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required"
      } else if (formData.name.trim().length < 2) {
        newErrors.name = "Name must be at least 2 characters"
      }

      if (!formData.state) {
        newErrors.state = "State is required"
      }

      if (!formData.photo) {
        newErrors.photo = "Profile photo is required"
      }
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required"
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number"
    }

    if (otpSent && !otp.trim()) {
      newErrors.otp = "OTP is required"
    } else if (otpSent && !/^\d{6}$/.test(otp)) {
      newErrors.otp = "Please enter a valid 6-digit OTP"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, photo: "Photo size must be less than 5MB" })
        return
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
        setErrors({ ...errors, photo: "Please select a valid image file" })
        return
      }

      setFormData({ ...formData, photo: file })
      setErrors({ ...errors, photo: undefined })
    }
  }

  const handleSendOtp = async () => {
    if (!validateForm()) return

    clearError()
    const success = await sendOtp(formData.mobile)
    if (success) {
      setOtpSent(true)
      setSuccessMessage("OTP sent successfully!")
    }
  }

  const handleVerifyOtp = async () => {
    // setShowCardGenerator(true)
    setNewUser(formData)
    if (!validateForm()) return

    clearError()

    if (isLogin) {
      const success = await login(formData.mobile, otp)
      console.log("success", success)
      if (success) {
        console.log("Login successful!")
        setSuccessMessage("Login successful!")
        setShowCardGenerator(true)
        // setTimeout(() => {
        //   onClose()
        // }, 1000)
      }
    } else {

      // For signup, first verify OTP then create account
      const otpValid = await verifyOtp(formData.mobile, otp)
      if (otpValid) {
        const success = await signup(formData)
        if (success) {
          console.log("signup success", success)
          setSuccessMessage("Registration successful! Generating your membership card...")
          // Show card generator instead of closing immediately
          setShowCardGenerator(true)
          setNewUser(formData)
        }
      }
    }
  }

  const resetForm = () => {
    setFormData({ name: "", state: "", mobile: "", photo: null })
    setOtp("")
    setOtpSent(false)
    setErrors({})
    setSuccessMessage("")
    setShowCardGenerator(false)
    setNewUser(null)
    clearError()
  }

  const handleToggleMode = (loginMode: boolean) => {
    setIsLogin(loginMode)
    resetForm()
  }

  const handleCardGenerationComplete = () => {
    setShowCardGenerator(true)
    setNewUser(formData)
    // setTimeout(() => {
    //   onClose()
    // }, 2000)
  }

  // Show card generator after successful signup
  if (showCardGenerator && newUser) {
    console.log("newUser", newUser)
    console.log("showCardGenerator", showCardGenerator)
    return <CardGenerator user={newUser} onComplete={handleCardGenerationComplete} />
  }

  return (
    <div className="p-6">
      <DialogHeader>
        <DialogTitle className="text-center text-xl">{isLogin ? "Login to Gau Seva" : "Join Gau Seva"}</DialogTitle>
      </DialogHeader>

      <div className="mt-6">
        {/* Error Message */}
        {error && (
          <Alert className="mb-4 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">{error}</AlertDescription>
          </Alert>
        )}

        {/* Success Message */}
        {successMessage && (
          <Alert className="mb-4 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">{successMessage}</AlertDescription>
          </Alert>
        )}

        {/* Toggle between Login and Signup */}
        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
          <Button
            variant={isLogin ? "default" : "ghost"}
            onClick={() => handleToggleMode(true)}
            className="flex-1 bg-transparent data-[state=active]:bg-white data-[state=active]:shadow-sm"
            disabled={isLoading}
          >
            Login
          </Button>
          <Button
            variant={!isLogin ? "default" : "ghost"}
            onClick={() => handleToggleMode(false)}
            className="flex-1 bg-transparent data-[state=active]:bg-white data-[state=active]:shadow-sm"
            disabled={isLoading}
          >
            Sign Up
          </Button>
        </div>

        {isLogin ? (
          /* Login Form */
          <div className="space-y-4">
            <div>
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className={errors.mobile ? "border-red-500" : ""}
                disabled={isLoading || otpSent}
              />
              {errors.mobile && (
                <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.mobile}
                </p>
              )}
            </div>

            {!otpSent ? (
              <Button className="w-full bg-orange-600 hover:bg-orange-700" onClick={handleSendOtp} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending OTP...
                  </>
                ) : (
                  <>
                    <Phone className="mr-2 h-4 w-4" />
                    Send OTP
                  </>
                )}
              </Button>
            ) : (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input
                    id="otp"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    className={errors.otp ? "border-red-500" : ""}
                    disabled={isLoading}
                  />
                  {errors.otp && (
                    <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.otp}
                    </p>
                  )}
                </div>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  onClick={handleVerifyOtp}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    "Verify OTP & Login"
                  )}
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => setOtpSent(false)}
                  disabled={isLoading}
                >
                  Back
                </Button>
              </div>
            )}
          </div>
        ) : (
          /* Signup Form */
          <div className="space-y-4">
            {!otpSent ? (
              <>
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? "border-red-500" : ""}
                    disabled={isLoading}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="state">State *</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, state: value })} disabled={isLoading}>
                    <SelectTrigger className={errors.state ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {indianStates.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.state && (
                    <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.state}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="mobile">Mobile Number *</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className={errors.mobile ? "border-red-500" : ""}
                    disabled={isLoading}
                  />
                  {errors.mobile && (
                    <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.mobile}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="photo">Profile Photo *</Label>
                  <div className="mt-2">
                    <label htmlFor="photo" className="cursor-pointer">
                      <div
                        className={`border-2 border-dashed rounded-lg p-4 text-center hover:border-orange-400 transition-colors ${
                          errors.photo ? "border-red-500" : "border-gray-300"
                        }`}
                      >
                        <Upload className="mx-auto h-8 w-8 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">
                          {formData.photo ? formData.photo.name : "Click to upload photo (Max 5MB)"}
                        </p>
                      </div>
                      <input
                        id="photo"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handlePhotoUpload}
                        disabled={isLoading}
                      />
                    </label>
                  </div>
                  {errors.photo && (
                    <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.photo}
                    </p>
                  )}
                </div>

                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  onClick={handleSendOtp}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending OTP...
                    </>
                  ) : (
                    <>
                      <Phone className="mr-2 h-4 w-4" />
                      Send OTP
                    </>
                  )}
                </Button>
              </>
            ) : (
              /* OTP Verification */
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">OTP sent to +91 {formData.mobile}</p>
                </div>
                <div>
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input
                    id="otp"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    className={errors.otp ? "border-red-500" : ""}
                    disabled={isLoading}
                  />
                  {errors.otp && (
                    <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.otp}
                    </p>
                  )}
                </div>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  onClick={handleVerifyOtp}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Verify OTP & Generate Membership Card"
                  )}
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => setOtpSent(false)}
                  disabled={isLoading}
                >
                  Back to Form
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
