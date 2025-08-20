export default function AboutEventSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 mb-6">
            <span className="text-white font-bold text-lg">🌟 HISTORIC EVENT 🌟</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
            About the Event
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-8 drop-shadow-lg">
            Gau Seva Abhiyan – A Call to Serve Gau Mata
          </h3>
        </div>

        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 border-4 border-white/30">
          <div className="space-y-8 text-gray-800 leading-relaxed">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
              <p className="text-xl font-semibold pl-6">
                On <span className="text-orange-600 font-black text-2xl">26th August, 2 PM</span> at <span className="bg-orange-100 px-3 py-1 rounded-full font-bold">Town Hall, Gandhinagar</span>, Willy Charitable Trust invites you to join a
                <span className="text-red-600 font-bold"> historic gathering</span> dedicated to Gau Seva — the selfless service of cows.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-orange-500">
              <p className="text-lg">
                This event is more than a ceremony; it is the <span className="font-bold text-orange-700">beginning of a movement</span>. Saints, trustees, and
                community leaders will share their vision of a society where every cow receives care, nourishment,
                and dignity.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl">
                <h4 className="font-bold text-purple-700 mb-3">🏛️ Ancient Tradition</h4>
                <p>From ancient tradition to modern science, the cow has always been central to our culture and sustainability.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl">
                <h4 className="font-bold text-green-700 mb-3">🌱 Modern Solutions</h4>
                <p>Organic farming, biogas, and Ayurvedic wisdom — together we'll take a pledge to protect and serve our Gau Mata.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
