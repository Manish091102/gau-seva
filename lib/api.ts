interface ApiResponse<T = any> {
  success: boolean
  message?: string
  error?: string
  data?: T
  [key: string]: any
}

class ApiClient {
  private baseUrl: string
  private token: string | null = null

  constructor(baseUrl = "/api") {
    this.baseUrl = baseUrl

    // Get token from localStorage if available
    if (typeof window !== "undefined") {
      this.token = localStorage.getItem("authToken")
    }
  }

  setToken(token: string) {
    this.token = token
    if (typeof window !== "undefined") {
      localStorage.setItem("authToken", token)
    }
  }

  clearToken() {
    this.token = null
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken")
    }
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`

    // Normalize headers into a plain object to avoid type issues with HeadersInit
    const normalized = new Headers(options.headers)
    const headersObj: Record<string, string> = Object.fromEntries(normalized.entries())
    headersObj["Content-Type"] = headersObj["Content-Type"] || "application/json"
    if (this.token) {
      headersObj["Authorization"] = `Bearer ${this.token}`
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers: headersObj,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`)
      }

      return data
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error)
      throw error
    }
  }

  // Auth endpoints
  async sendOtp(mobile: string) {
    return this.request("/auth/send-otp", {
      method: "POST",
      body: JSON.stringify({ mobile }),
    })
  }

  async verifyOtp(mobile: string, otp: string) {
    return this.request("/auth/verify-otp", {
      method: "POST",
      body: JSON.stringify({ mobile, otp }),
    })
  }

  async signup(userData: {
    name: string
    state: string
    mobile: string
    photo?: string
  }) {
    return this.request("/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
    })
  }

  async login(mobile: string, otp: string) {
    return this.request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ mobile, otp }),
    })
  }

  // User endpoints
  async getProfile() {
    return this.request("/user/profile")
  }

  async updateProfile(updates: {
    name?: string
    state?: string
    photo?: string
  }) {
    return this.request("/user/profile", {
      method: "PUT",
      body: JSON.stringify(updates),
    })
  }

  // Membership endpoints
  async getMembershipCard() {
    return this.request("/membership/card")
  }

  async verifyMembership(membershipNumber: string) {
    return this.request(`/verify/${membershipNumber}`)
  }

  // Admin endpoints
  async adminLogin(username: string, password: string) {
    return this.request("/admin/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    })
  }

  async getUsers(params: {
    page?: number
    limit?: number
    search?: string
    sortBy?: string
    sortOrder?: string
  } = {}) {
    const queryParams = new URLSearchParams()
    if (params.page) queryParams.append("page", params.page.toString())
    if (params.limit) queryParams.append("limit", params.limit.toString())
    if (params.search) queryParams.append("search", params.search)
    if (params.sortBy) queryParams.append("sortBy", params.sortBy)
    if (params.sortOrder) queryParams.append("sortOrder", params.sortOrder)

    return this.request(`/admin/users?${queryParams}`)
  }
}

export const apiClient = new ApiClient()
export default apiClient
