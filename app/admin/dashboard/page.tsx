"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import MembershipCard from "@/components/membership-card"
import { 
  Search, 
  LogOut, 
  Users, 
  Calendar, 
  Phone, 
  MapPin, 
  User,
  ChevronLeft,
  ChevronRight,
  Download,
  RefreshCw,
  Eye
} from "lucide-react"

interface User {
  id: string
  name: string
  mobile: string
  state: string
  district: string
  membershipNumber: string
  photo?: string
  createdAt: string
  updatedAt: string
}

interface Pagination {
  currentPage: number
  totalPages: number
  totalUsers: number
  limit: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export default function AdminDashboardPage() {
  const [users, setUsers] = useState<User[]>([])
  const [pagination, setPagination] = useState<Pagination | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    console.log("Dashboard mounted") // Debug log
    
    // Check if admin is logged in
    const adminToken = localStorage.getItem("adminToken")
    console.log("Admin token:", adminToken ? "exists" : "not found") // Debug log
    
    if (!adminToken) {
      console.log("No admin token, redirecting to login") // Debug log
      router.push("/admin/login")
      return
    }

    console.log("Fetching users...") // Debug log
    fetchUsers()
  }, [currentPage, searchTerm])

  const fetchUsers = async () => {
    setIsLoading(true)
    setError("")

    try {
      const adminToken = localStorage.getItem("adminToken")
      console.log("Fetching with token:", adminToken ? "exists" : "not found") // Debug log
      
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "10",
        search: searchTerm
      })

      console.log("Fetching users from:", `/api/admin/users?${params}`) // Debug log
      
      const response = await fetch(`/api/admin/users?${params}`, {
        headers: {
          "Authorization": `Bearer ${adminToken}`
        }
      })

      console.log("Response status:", response.status) // Debug log
      const data = await response.json()
      console.log("Response data:", data) // Debug log

      if (data.success) {
        setUsers(data.data.users)
        setPagination(data.data.pagination)
      } else {
        if (response.status === 403) {
          // Admin token expired or invalid
          localStorage.removeItem("adminToken")
          localStorage.removeItem("adminUser")
          router.push("/admin/login")
          return
        }
        setError(data.error || "Failed to fetch users")
      }
    } catch (error) {
      setError("Network error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    localStorage.removeItem("adminUser")
    router.push("/admin/login")
  }

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1) // Reset to first page when searching
  }

  const exportUsers = async () => {
    try {
      setIsLoading(true)
      const adminToken = localStorage.getItem("adminToken")
      
      // Fetch all users for export (no pagination)
      const params = new URLSearchParams({
        limit: "10000", // Large limit to get all users
        search: searchTerm
      })

      const response = await fetch(`/api/admin/users?${params}`, {
        headers: {
          "Authorization": `Bearer ${adminToken}`
        }
      })

      const data = await response.json()

      if (data.success) {
        const allUsers = data.data.users
        
        const csvContent = [
          ["Name", "Mobile", "State", "District", "Membership Number", "Created At"],
          ...allUsers.map((user: User) => [
            user.name,
            user.mobile,
            user.state,
            user.district,
            user.membershipNumber,
            new Date(user.createdAt).toLocaleDateString()
          ])
        ].map(row => row.join(",")).join("\n")

        const blob = new Blob([csvContent], { type: "text/csv" })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `users-${new Date().toISOString().split("T")[0]}.csv`
        a.click()
        window.URL.revokeObjectURL(url)
      } else {
        setError("Failed to export users")
      }
    } catch (error) {
      setError("Failed to export users")
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric"
    })
  }

  if (isLoading && users.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-orange-500" />
          <p className="text-gray-600">Loading users...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Manage Gau Seva users</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-red-500 text-red-600 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {pagination?.totalUsers || 0}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {users.filter(user => {
                      const userDate = new Date(user.createdAt)
                      const now = new Date()
                      return userDate.getMonth() === now.getMonth() && 
                             userDate.getFullYear() === now.getFullYear()
                    }).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">States</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {new Set(users.map(user => user.state)).size}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {users.length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>

        {/* Search and Actions */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by name, mobile, state, or membership number..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={fetchUsers}
                  variant="outline"
                  disabled={isLoading}
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
                  Refresh
                </Button>
                <Button
                  onClick={exportUsers}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Users List</CardTitle>
            <CardDescription>
              Showing {users.length} of {pagination?.totalUsers || 0} users
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Mobile</TableHead>
                    <TableHead>State</TableHead>
                    <TableHead>District</TableHead>
                    <TableHead>Membership No.</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          {user.photo ? (
                            <img
                              src={user.photo}
                              alt={user.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-gray-500" />
                            </div>
                          )}
                          <span className="font-medium">{user.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span>{user.mobile}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{user.state}</Badge>
                      </TableCell>
                      <TableCell>{user.district}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="font-mono">
                          {user.membershipNumber}
                        </Badge>
                      </TableCell>
                      <TableCell>{formatDate(user.createdAt)}</TableCell>
                      <TableCell>
                        <Dialog open={isPreviewOpen && selectedUser?.id === user.id} onOpenChange={(open) => {
                          if (open) {
                            setSelectedUser(user)
                            setIsPreviewOpen(true)
                          } else {
                            setIsPreviewOpen(false)
                            setSelectedUser(null)
                          }
                        }}>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-blue-600 hover:text-blue-700"
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              Preview Card
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                            {selectedUser && (
                              <div className="p-4">
                                <h3 className="text-lg font-semibold mb-4 text-center">Membership Card Preview</h3>
                                <MembershipCard 
                                  user={{
                                    id: selectedUser.id,
                                    name: selectedUser.name,
                                    mobile: selectedUser.mobile,
                                    state: selectedUser.state,
                                    district: selectedUser.district,
                                    membershipNumber: selectedUser.membershipNumber,
                                    photo: selectedUser.photo,
                                    createdAt: selectedUser.createdAt
                                  }}
                                />
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-700">
                  Showing {((pagination.currentPage - 1) * pagination.limit) + 1} to{" "}
                  {Math.min(pagination.currentPage * pagination.limit, pagination.totalUsers)} of{" "}
                  {pagination.totalUsers} results
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(pagination.currentPage - 1)}
                    disabled={!pagination.hasPrevPage}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>
                  <span className="text-sm text-gray-700">
                    Page {pagination.currentPage} of {pagination.totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(pagination.currentPage + 1)}
                    disabled={!pagination.hasNextPage}
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 