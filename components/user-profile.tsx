"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MapPin, Phone, Calendar, CreditCard, LogOut, Download, Loader2, AlertCircle } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import MembershipCard from "@/components/membership-card"
import { apiClient } from "@/lib/api"

interface MembershipCardData {
  user: {
    id: string
    name: string
    state: string
    mobile: string
    photo?: string
    membershipNumber: string
    createdAt: string
  }
  qrData: string
  cardUrl?: string
}

export default function UserProfile() {
  const { user, logout } = useAuth()
  console.log("user", user)
  const [showMembershipCard, setShowMembershipCard] = useState(false)
  const [cardData, setCardData] = useState<MembershipCardData | null>(null)
  const [isLoadingCard, setIsLoadingCard] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (user && showMembershipCard && !cardData) {
      fetchMembershipCard()
    }
  }, [user, showMembershipCard, cardData])

  const fetchMembershipCard = async () => {
    if (!user) return

    try {
      setIsLoadingCard(true)
      setError(null)

      const response = await apiClient.getMembershipCard()
      console.log("response", response)
      if (response.success && response.cardData) {
        setCardData(response.cardData)
      } else {
        setError("Failed to load membership card")
      }
    } catch (error: any) {
      console.error("Failed to fetch membership card:", error)
      setError(error.message || "Failed to load membership card")
    } finally {
      setIsLoadingCard(false)
    }
  }

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-gray-600">Please log in to view your profile.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const handleLogout = () => {
    logout()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleDownloadCard = async () => {
    if (!cardData) {
      await fetchMembershipCard()
    }
    // The download functionality is handled by the MembershipCard component
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user.photo || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback className="text-2xl bg-orange-100 text-orange-600">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-2xl text-gray-900">{user.name}</CardTitle>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 w-fit mx-auto">
            Gau Seva Member
          </Badge>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Error Message */}
          {error && (
            <Alert className="border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">{error}</AlertDescription>
            </Alert>
          )}

          {/* User Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <MapPin className="h-5 w-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-600">State</p>
                <p className="font-medium text-gray-900">{user.state}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Phone className="h-5 w-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-600">Mobile</p>
                <p className="font-medium text-gray-900">+91 {user.mobile}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <CreditCard className="h-5 w-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-600">Membership No.</p>
                <p className="font-medium text-gray-900">{user.membershipNumber}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Calendar className="h-5 w-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-600">Member Since</p>
                <p className="font-medium text-gray-900">{formatDate(user.createdAt)}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Dialog open={showMembershipCard} onOpenChange={setShowMembershipCard}>
              <DialogTrigger asChild>
                <Button className="flex-1 bg-orange-600 hover:bg-orange-700" disabled={isLoadingCard}>
                  {isLoadingCard ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Loading Card...
                    </>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-4 w-4" />
                      View Membership Card
                    </>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                {cardData ? (
                  <MembershipCard user={cardData.user} />
                ) : (
                  <div className="p-6 text-center">
                    <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-orange-600" />
                    <p>Loading your membership card...</p>
                  </div>
                )}
              </DialogContent>
            </Dialog>

            <Button variant="outline" className="flex-1 bg-transparent" onClick={handleDownloadCard}>
              <Download className="mr-2 h-4 w-4" />
              Download Card
            </Button>
          </div>

          <Button
            variant="outline"
            className="w-full bg-transparent border-red-200 text-red-600 hover:bg-red-50"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
