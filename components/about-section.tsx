import { Heart, Users, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dedicated to <span className="text-orange-600">Gau Seva</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Gau Seva is dedicated to the protection, care, and welfare of cows through traditional values and modern
              approaches. Our mission is to create a community that honors and serves these sacred animals while
              promoting sustainable practices and cultural preservation.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Compassionate Care</h3>
                  <p className="text-gray-600">
                    Providing loving care, medical attention, and proper nutrition to cows in need across multiple
                    states.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Community Support</h3>
                  <p className="text-gray-600">
                    Building a strong network of volunteers, supporters, and members with official membership cards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Protection & Advocacy</h3>
                  <p className="text-gray-600">
                    Advocating for cow welfare, protection rights, and sustainable farming practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Official Membership</h3>
                  <p className="text-gray-600">
                    Get your official membership card with unique ID and QR code after registration.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              Become a Member
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Cows in peaceful setting with caretaker"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              {/* Overlay card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">24/7 Care</div>
                    <div className="text-sm text-gray-600">Round the clock support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
