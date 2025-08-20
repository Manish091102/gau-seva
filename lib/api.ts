interface ApiResponse<T = any> {
  success: boolean
  message?: string
  error?: string
  data?: T
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

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    }

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
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
}

export const apiClient = new ApiClient()
export default apiClient
