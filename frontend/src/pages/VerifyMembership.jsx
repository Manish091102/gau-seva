"use client"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { membershipAPI } from "../services/api"
import Header from "../components/Header"
import { Button } from "../components/ui/Button"

const VerifyMembership = () => {
  const { membershipNumber } = useParams()
  const [membershipData, setMembershipData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (membershipNumber) {
      verifyMembership()
    }
  }, [membershipNumber])

  const verifyMembership = async () => {
    try {
      setLoading(true)
      const response = await membershipAPI.verifyMembership(membershipNumber)
      setMembershipData(response.data.data)
    } catch (err) {
      setError(err.response?.data?.message || "Membership not found")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Membership Verification</h1>
          <p className="text-gray-600 mt-2">Verifying membership number: {membershipNumber}</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          {loading && (
            <div className="text-center py-12">
              <div className="text-gray-500">Verifying membership...</div>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❌</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verification Failed</h3>
              <p className="text-red-600 mb-4">{error}</p>
              <Button onClick={verifyMembership}>Try Again</Button>
            </div>
          )}

          {membershipData && !loading && (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✅</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">Membership Verified!</h3>
              <p className="text-gray-600 mb-8">This is a valid Gau Seva membership</p>

              <div className="max-w-md mx-auto bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-center mb-4">
                  {membershipData.photo && (
                    <img
                      src={membershipData.photo || "/placeholder.svg"}
                      alt={membershipData.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  )}
                </div>

                <div className="space-y-3 text-left">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Name</label>
                    <p className="text-gray-900 font-semibold">{membershipData.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">State</label>
                    <p className="text-gray-900">{membershipData.state}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Membership Number</label>
                    <p className="text-gray-900 font-mono">{membershipData.membershipNumber}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Status</label>
                    <p className={`font-semibold ${membershipData.isValid ? "text-green-600" : "text-red-600"}`}>
                      {membershipData.status}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Valid Until</label>
                    <p className="text-gray-900">{new Date(membershipData.validUntil).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VerifyMembership
