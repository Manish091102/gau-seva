const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Gau Seva</h2>
            <p className="text-lg text-gray-600 mb-6">
              Gau Seva is dedicated to the protection, care, and welfare of cows. Our mission is rooted in the ancient
              Indian tradition of revering cows as sacred beings that provide sustenance and represent compassion.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Through our membership program, we bring together like-minded individuals who are committed to cow
              protection, sustainable farming practices, and promoting awareness about the importance of these gentle
              creatures in our ecosystem.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Cow Protection</h3>
                  <p className="text-gray-600">Rescue and care for abandoned and injured cows</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Community Building</h3>
                  <p className="text-gray-600">Connect with fellow cow lovers and activists</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Awareness Programs</h3>
                  <p className="text-gray-600">Educational initiatives about cow welfare</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="Cows in peaceful pasture"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
