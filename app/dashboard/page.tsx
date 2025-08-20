import UserProfile from "@/components/user-profile"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Member Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your Gau Seva membership</p>
          </div>
          <UserProfile />
        </div>
      </div>
    </div>
  )
}
