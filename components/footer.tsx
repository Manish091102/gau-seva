import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">गौ सेवा</h3>
            <p className="text-gray-300 mb-4">
              Dedicated to the protection, care, and welfare of cows through traditional values and community support.
            </p>
            <p className="text-sm text-gray-400">Join our mission to serve and protect these sacred animals.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@gauseva.org</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: New Delhi, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> for Gau Seva
          </p>
        </div>
      </div>
    </footer>
  )
}
