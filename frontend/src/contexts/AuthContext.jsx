"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { authAPI } from "../services/api"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    const userData = localStorage.getItem("user")
    if (token && userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const sendOTP = async (mobile) => {
    setLoading(true)
    setError(null)
    try {
      const response = await authAPI.sendOTP(mobile)
      return response.data
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP")
      throw err
    } finally {
      setLoading(false)
    }
  }

  const verifyOTP = async (mobile, otp) => {
    setLoading(true)
    setError(null)
    try {
      const response = await authAPI.verifyOTP(mobile, otp)
      return response.data
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP")
      throw err
    } finally {
      setLoading(false)
    }
  }

  const signup = async (userData) => {
    setLoading(true)
    setError(null)
    try {
      const response = await authAPI.signup(userData)
      const { user: newUser, token } = response.data

      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(newUser))
      setUser(newUser)

      return response.data
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed")
      throw err
    } finally {
      setLoading(false)
    }
  }

  const login = async (mobile, password) => {
    setLoading(true)
    setError(null)
    try {
      const response = await authAPI.login(mobile, password)
      const { user: loggedUser, token } = response.data

      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(loggedUser))
      setUser(loggedUser)

      return response.data
    } catch (err) {
      setError(err.response?.data?.message || "Login failed")
      throw err
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUser(null)
  }

  const value = {
    user,
    loading,
    error,
    sendOTP,
    verifyOTP,
    signup,
    login,
    logout,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
