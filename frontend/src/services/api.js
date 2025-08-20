import axios from "axios"

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api"

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const authAPI = {
  sendOTP: (mobile) => api.post("/auth/send-otp", { mobile }),
  verifyOTP: (mobile, otp) => api.post("/auth/verify-otp", { mobile, otp }),
  signup: (userData) => api.post("/auth/signup", userData),
  login: (mobile, password) => api.post("/auth/login", { mobile, password }),
}

export const membershipAPI = {
  getCard: () => api.get("/membership/card"),
  verifyMembership: (membershipNumber) => api.get(`/verify/${membershipNumber}`),
}

export default api
