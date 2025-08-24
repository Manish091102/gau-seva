"use client"

import { useRouter } from "next/navigation"
import { Heart, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import logo from "./assets/image.png"

export default function Footer() {
  const router = useRouter()
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center overflow-hidden">
                <Image src={logo} alt="GauSeva" width={32} height={32} className="object-contain" />
              </div>
              <h3 className="text-3xl font-bold text-orange-400">GauSeva</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Dedicated to the protection, care, and welfare of cows through traditional values and community support.
            </p>
            <p className="text-sm text-gray-400">Join our mission to serve and protect these sacred cows.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => router.push("/")}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => router.push("/gauseva")}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  GauSeva
                </button>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="#blogs" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <p>+91 87587 02070</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <p>Gandhinagar, Gujarat</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center gap-3">
            <p className="text-gray-400">Made with</p>
            <Heart className="h-5 w-5 text-red-500 animate-pulse" />
            <p className="text-gray-400">for GauSeva by Able Marketing 2025</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
