const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🐄</span>
              </div>
              <span className="text-xl font-bold">Gau Seva</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Dedicated to protecting and caring for cows through community action, education, and sustainable
              practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500">
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  Membership
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@gauseva.org</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 New Delhi, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2024 Gau Seva. All rights reserved. Made with ❤️ for cow protection.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
