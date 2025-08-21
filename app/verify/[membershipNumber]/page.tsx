"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, Loader2, Calendar, MapPin, CreditCard } from "lucide-react"
import { apiClient } from "@/lib/api"

interface VerificationData {
  valid: boolean
  member?: {
    name: string
    state: string
    district: string,
    membershipNumber: string
    memberSince: string
    organization: string
  }
}

export default function VerifyMembershipPage({ params }: { params: { membershipNumber: string } }) {
  const [verificationData, setVerificationData] = useState<VerificationData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    verifyMembership()
  }, [params.membershipNumber])

  const verifyMembership = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await apiClient.verifyMembership(params.membershipNumber)
      setVerificationData(response)
    } catch (error: any) {
      console.error("Verification failed:", error)
      setError(error.message || "Verification failed")
      setVerificationData({ valid: false })
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-12">
            <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-orange-600" />
            <h2 className="text-xl font-semibold mb-2">Verifying Membership</h2>
            <p className="text-gray-600">Please wait while we verify membership number {params.membershipNumber}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Membership Verification</h1>
          <p className="text-gray-600 mt-2">Verify Gau Seva membership authenticity</p>
        </div>

        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {verificationData?.valid ? (
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              ) : (
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="h-8 w-8 text-red-600" />
                </div>
              )}
            </div>
            <CardTitle className="text-2xl">
              {verificationData?.valid ? "Valid Membership" : "Invalid Membership"}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {error && (
              <Alert className="border-red-200 bg-red-50">
                <XCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">{error}</AlertDescription>
              </Alert>
            )}

            {verificationData?.valid && verificationData.member ? (
              <>
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    This is a valid {verificationData.member.organization} membership card.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold">👤</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Member Name</p>
                      <p className="font-medium text-gray-900">{verificationData.member.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">State</p>
                      <p className="font-medium text-gray-900">{verificationData.member.state}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CreditCard className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">Membership No.</p>
                      <p className="font-medium text-gray-900">{verificationData.member.membershipNumber}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">Member Since</p>
                      <p className="font-medium text-gray-900">{formatDate(verificationData.member.memberSince)}</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Badge className="bg-green-100 text-green-800 px-4 py-2">
                    Verified {verificationData.member.organization} Member
                  </Badge>
                </div>
              </>
            ) : (
              <Alert className="border-red-200 bg-red-50">
                <XCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  The membership number "{params.membershipNumber}" is not valid or does not exist in our records.
                </AlertDescription>
              </Alert>
            )}

            <div className="text-center text-sm text-gray-500">
              <p>Verification completed on {new Date().toLocaleDateString("en-IN")}</p>
              <p className="mt-1">For support, contact: info@gauseva.org</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
