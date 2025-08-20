"use client"

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Loader2, CreditCard, MapPin, Phone } from "lucide-react"
import MembershipCardPreview from "@/components/membership-card-preview"
import { useAuth } from "@/contexts/auth-context"

interface CardGeneratorProps {
  user: {
    id?: string
    name: string
    state: string
    mobile: string
    photo?: string | File
    membershipNumber?: string
    createdAt?: string
  }
  onComplete?: () => void
}

// ✅ Utility function to mask membership/mobile number
function maskMobileNumber(mobile: string) {
  if (!mobile) return ""
  if (mobile.length < 5) return mobile // fallback for short numbers
  return `${mobile.slice(0, 2)}*****${mobile.slice(-3)}`
}

export default function CardGenerator({ user: initialUser, onComplete }: CardGeneratorProps) {
  // console.log("initialUser", initialUser)
  // const { user: authUser } = useAuth()
  // console.log("authUser", authUser)

  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  // ✅ Memoized user to avoid infinite loop
  // const user = useMemo(() => {
  //   return authUser || {
  //     id: initialUser.id || "temp-id",
  //     name: initialUser.name,
  //     state: initialUser.state,
  //     mobile: initialUser.mobile,
  //     photo: typeof initialUser.photo === "string" ? initialUser.photo : undefined,
  //     membershipNumber: initialUser.mobile,
  //     createdAt: initialUser.createdAt || new Date().toISOString(),
  //   }
  // }, [authUser, initialUser])

  // console.log("user", user)

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // get saved user data from localStorage
    const storedUser = localStorage.getItem("userData")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (err) {
        console.error("Failed to parse userData:", err)
      }
    }
  }, [])

  const steps = [
    { label: "Validating Information", icon: Loader2 },
    { label: "Generating Membership Number", icon: CreditCard },
    { label: "Processing Location Data", icon: MapPin },
    { label: "Creating QR Code", icon: Phone },
    { label: "Finalizing Card Design", icon: CheckCircle },
  ]

  useEffect(() => {
    const generateCard = async () => {
      for (let i = 0; i < steps.length; i++) {
        setCurrentStep(i)
        setProgress((i / steps.length) * 100)

        // Simulate processing time for each step
        await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 400))
      }

      setProgress(100)
      setIsComplete(true)

      // Optional callback
      // setTimeout(() => {
      //   onComplete?.()
      // }, 1000)
    }

    generateCard()
  }, [steps])

  if (isComplete) {
    return <MembershipCardPreview user={user} />
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Loader2 className="h-8 w-8 text-orange-600 animate-spin" />
        </div>
        <CardTitle className="text-xl">Generating Your Membership Card</CardTitle>
        <p className="text-sm text-gray-600">
          Please wait while we create your official Gau Seva membership card
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Steps */}
        <div className="space-y-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = index === currentStep
            const isCompleted = index < currentStep
            const isPending = index > currentStep

            return (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-orange-50 border border-orange-200"
                    : isCompleted
                    ? "bg-green-50 border border-green-200"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isActive
                      ? "bg-orange-600 text-white"
                      : isCompleted
                      ? "bg-green-600 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {isActive ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : isCompleted ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <Icon className="h-4 w-4" />
                  )}
                </div>
                <span
                  className={`font-medium ${
                    isActive
                      ? "text-orange-900"
                      : isCompleted
                      ? "text-green-900"
                      : isPending
                      ? "text-gray-500"
                      : "text-gray-700"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            )
          })}
        </div>

        {/* User Info Preview */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">Card Details:</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Name:</span>
              <span className="font-medium">{user?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">State:</span>
              <span className="font-medium">{user?.state}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Mobile:</span>
              <span className="font-medium">+91 {user?.mobile}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Membership No:</span>
              <span className="font-medium text-orange-600">
                {maskMobileNumber(user?.membershipNumber || "")}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
