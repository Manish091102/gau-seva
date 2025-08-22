"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Eye, Download, CreditCard } from "lucide-react"
import MembershipCard from "@/components/membership-card"

interface User {
  id: string
  name: string
  state: string
  mobile: string
  photo?: string
  membershipNumber: string
  createdAt: string
}

interface MembershipCardPreviewProps {
  user: User
}

export default function MembershipCardPreview({ user }: MembershipCardPreviewProps) {
  const [showFullCard, setShowFullCard] = useState(false)

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CreditCard className="h-8 w-8 text-orange-600" />
        </div>
        <CardTitle className="text-lg">Membership Card Ready!</CardTitle>
        <p className="text-sm text-gray-600">Your official Gau Seva membership card has been generated</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Mini Card Preview */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg p-4 text-white text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            {/* <span className="text-lg">🐄</span> */}
            <span className="font-bold text-sm">GAU SEVA</span>
          </div>
          <p className="text-xs opacity-90 mb-2">{user.name.toUpperCase()}</p>
          {/* <p className="text-xs font-mono bg-white/20 rounded px-2 py-1 inline-block">{user.membershipNumber}</p> */}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Dialog open={showFullCard} onOpenChange={setShowFullCard}>
            <DialogTrigger asChild>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                <Eye className="mr-2 h-4 w-4" />
                View Full Card
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <MembershipCard user={user} />
            </DialogContent>
          </Dialog>

          {/* <Button variant="outline" className="w-full bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Download Now
          </Button> */}
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">Keep this card safe and use it for identification at Gau Seva events</p>
        </div>
      </CardContent>
    </Card>
  )
}
