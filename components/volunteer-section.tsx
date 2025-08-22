import { CheckCircle, Heart, Star, Zap, Shield } from "lucide-react"

export default function VolunteerSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#e28154] via-[#e28154] to-[#e28154] relative overflow-hidden">
      {/* Floating Elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-white/20 text-6xl animate-bounce">🐄</div>
        <div className="absolute top-40 right-20 text-white/20 text-4xl animate-bounce delay-1000">🌱</div>
        <div className="absolute bottom-20 left-1/3 text-white/20 text-5xl animate-bounce delay-500">❤️</div>
        <div className="absolute bottom-40 right-1/4 text-white/20 text-3xl animate-bounce delay-1500">🌟</div>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 mb-6">
            <span className="text-white font-bold text-lg">JOIN THE REVOLUTION</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
            Be a part of positive <br/>
            nation-building
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-8 drop-shadow-lg">
            Become a Gausevak – Be the Change
          </h3>
        </div>

        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 border-4 border-white/30">
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800 mb-4">
                When you volunteer with Gau Seva, you become part of a mission that blends tradition with innovation
                {/* <span className="text-green-600"> innovation</span>. */}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-orange-100 to-orange-100 p-6 rounded-2xl border-l-4 border-orange-500 transform hover:scale-105 transition-transform h-full flex items-center">
                <div className="flex items-center gap-4">
                  {/* <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div> */}
                  <p className="text-gray-800 font-semibold">
                    Save cows from neglect, plastic, and injury by supporting structured care.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-100 to-orange-100 p-6 rounded-2xl border-l-4 border-orange-500 transform hover:scale-105 transition-transform h-full flex items-center">
                <div className="flex items-center gap-4">
                  {/* <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div> */}
                  <p className="text-gray-800 font-semibold">
                    Spread awareness across villages, towns, and schools.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-100 to-orange-100 p-6 rounded-2xl border-l-4 border-orange-500 transform hover:scale-105 transition-transform h-full flex items-center">
                <div className="flex items-center gap-4">
                  {/* <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div> */}
                  <p className="text-gray-800 font-semibold">
                    Help build sustainable solutions through organic fertilizers, biogas, and eco-products.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-100 to-orange-100 p-6 rounded-2xl border-l-4 border-orange-500 transform hover:scale-105 transition-transform h-full flex items-center">
                <div className="flex items-center gap-4">
                  {/* <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div> */}
                  <p className="text-gray-800 font-semibold">
                    Experience the joy of selfless service (seva) and the blessings that follow.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-r from-[#e28154] to-[#e28154] rounded-3xl text-white text-center">
              <h4 className="text-2xl font-bold mb-4"> Transform Lives Today </h4>
              <p className="text-lg">
                Your time and compassion can transform lives — not just for cows, but for society and the
                environment. This is your chance to be part of something greater.
              </p>
              {/* <button className="mt-6 bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors transform hover:scale-105">
                JOIN NOW
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
