"use client"

import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { membershipAPI } from "../services/api"
import Header from "../components/Header"
import MembershipCard from "../components/MembershipCard"
import { Button } from "../components/ui/Button"

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth()
  console.log("isAuthenticated", isAuthenticated)
  const navigate = useNavigate()
  const [membershipCard, setMembershipCard] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/")
      return
    }

    fetchMembershipCard()
  }, [isAuthenticated, navigate])

  const fetchMembershipCard = async () => {
    try {
      setLoading(true)
      const response = await membershipAPI.getCard()
      setMembershipCard(response.data.data)
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load membership card")
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.name}!</h1>
          <p className="text-gray-600 mt-2">Manage your Gau Seva membership</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Membership Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Membership Card</h2>

              {loading && (
                <div className="flex items-center justify-center h-64">
                  <div className="text-gray-500">Loading your membership card...</div>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600">{error}</p>
                  <Button onClick={fetchMembershipCard} className="mt-2" size="sm">
                    Retry
                  </Button>
                </div>
              )}

              {membershipCard && !loading && <MembershipCard cardData={membershipCard} />}
            </div>
          </div>

          {/* Member Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Member Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-500">Name</label>
                  <p className="text-gray-900">{user?.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">State</label>
                  <p className="text-gray-900">{user?.state}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Mobile</label>
                  <p className="text-gray-900">{user?.mobile}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Membership Number</label>
                  <p className="text-gray-900 font-mono">{user?.membershipNumber}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full bg-transparent" variant="outline">
                  Download Card
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  Share Card
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  Update Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
