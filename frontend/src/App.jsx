import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import HomePage from "./pages/HomePage"
import Dashboard from "./pages/Dashboard"
import VerifyMembership from "./pages/VerifyMembership"
import "./App.css"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/verify/:membershipNumber" element={<VerifyMembership />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
