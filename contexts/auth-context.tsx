"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { apiClient } from "@/lib/api"
import { msg91Service } from "@/lib/msg91"

interface User {
  id: string
  name: string
  state: string
  mobile: string
  photo?: string
  membershipNumber: string
  createdAt: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  error: string | null
  login: (mobile: string, otp: string) => Promise<boolean>
  signup: (userData: SignupData) => Promise<boolean>
  logout: () => void
  sendOtp: (mobile: string) => Promise<boolean>
  verifyOtp: (mobile: string, otp: string) => Promise<boolean>
  clearError: () => void
}

interface SignupData {
  name: string
  state: string
  mobile: string
  photo?: File
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check for existing session on mount
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("authToken")
        if (token) {
          apiClient.setToken(token)

          // Validate token by fetching user profile
          const response = await apiClient.getProfile()
          if (response.success && response.data) {
            setUser(response.data as User | null)
          } else {
            // Token is invalid, clear it
            localStorage.removeItem("authToken")
            localStorage.removeItem("userData")
            apiClient.clearToken()
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error)
        localStorage.removeItem("authToken")
        localStorage.removeItem("userData")
        apiClient.clearToken()
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const clearError = () => {
    setError(null)
  }

  const sendOtp = async (mobile: string): Promise<boolean> => {
    try {
      setIsLoading(true)
      setError(null)

      const otp = Math.floor(100000 + Math.random() * 900000).toString()

      // Try MSG91 first, fallback to API if it fails
      const msg91Success = await msg91Service.sendOTP(mobile, otp)

      if (msg91Success) {

        console.log("OTP sent successfully", msg91Success)  
        // Store OTP temporarily for verification (in production, this should be server-side)
        sessionStorage.setItem(`otp_${mobile}`, otp)
        sessionStorage.setItem(`otp_timestamp_${mobile}`, Date.now().toString())
        return true
      } else {
        // Fallback to existing API method
        const response = await apiClient.sendOtp(mobile)
        if (response.success) {
          return true
        } else {
          setError(response.error || "Failed to send OTP")
          return false
        }
      }
    } catch (error: any) {
      console.error("Failed to send OTP:", error)
      setError(error.message || "Failed to send OTP. Please try again.")
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const verifyOtp = async (mobile: string, otp: string): Promise<boolean> => {
    try {
      setIsLoading(true)
      setError(null)

      const storedOtp = sessionStorage.getItem(`otp_${mobile}`)
      const timestamp = sessionStorage.getItem(`otp_timestamp_${mobile}`)

      if (storedOtp && timestamp) {
        const otpAge = Date.now() - Number.parseInt(timestamp)
        const OTP_VALIDITY = 5 * 60 * 1000 // 5 minutes

        if (otpAge < OTP_VALIDITY && storedOtp === otp) {
          // Clean up stored OTP
          sessionStorage.removeItem(`otp_${mobile}`)
          sessionStorage.removeItem(`otp_timestamp_${mobile}`)
          return true
        } else if (otpAge >= OTP_VALIDITY) {
          setError("OTP has expired. Please request a new one.")
          return false
        }
      }

      // Fallback to API verification or MSG91 API verification
      const msg91Success = await msg91Service.verifyOTP(mobile, otp)
      console.log("OTP verified successfully", msg91Success)
      if (msg91Success) {
        return true
      }

      // Final fallback to existing API method
      const response = await apiClient.verifyOtp(mobile, otp)
      if (response.success) {
        return true
      } else {
        setError(response.error || "Invalid OTP")
        return false
      }
    } catch (error: any) {
      console.error("Failed to verify OTP:", error)
      setError(error.message || "Failed to verify OTP. Please try again.")
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (userData: SignupData): Promise<boolean> => {
    try {
      setIsLoading(true)
      setError(null)

      // Convert photo to base64 if provided
      let photoBase64: string | undefined
      if (userData.photo) {
        photoBase64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result as string)
          reader.onerror = reject
          reader.readAsDataURL(userData.photo!)
        })
      }

      const signupData = {
        name: userData.name,
        state: userData.state,
        mobile: userData.mobile,
        photo: photoBase64,
      }

      const response = await apiClient.signup(signupData)

      if (response.success) {
        // Store token and user data
        localStorage.setItem("authToken", response.token)
        localStorage.setItem("userData", JSON.stringify(response.user))
        apiClient.setToken(response.token)
        setUser(response.user)
        return true
      } else {
        setError(response.error || "Registration failed")
        return false
      }
    } catch (error: any) {
      console.error("Signup failed:", error)
      setError(error.message || "Registration failed. Please try again.")
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (mobile: string, otp: string): Promise<boolean> => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await apiClient.login(mobile, otp)

      if (response.success) {
        console.log("login response", response)
        // Store token and user data
        localStorage.setItem("authToken", response.token)
        localStorage.setItem("userData", JSON.stringify(response.user))
        apiClient.setToken(response.token)
        setUser(response.data as User | null)
        return true
      } else {
        setError(response.error || "Login failed")
        return false
      }
    } catch (error: any) {
      console.error("Login failed:", error)
      setError(error.message || "Login failed. Please try again.")
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("userData")
    apiClient.clearToken()
    setUser(null)
    setError(null)
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    error,
    login,
    signup,
    logout,
    sendOtp,
    verifyOtp,
    clearError,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
