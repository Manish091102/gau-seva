import { Video } from "lucide-react"

export default function HighlightsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Highlights</h2>
        <h2 className="text-xl font-bold text-center text-gray-800 mb-12">Coming soon...</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Live Cow Cam */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-purple-600 text-white p-4">
              <h3 className="font-semibold">Live Cow Cam</h3>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center h-32 bg-gray-100 rounded-lg mb-4">
                <Video className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Watch our cows live as they graze peacefully in our sanctuary. Connect with these divine beings in
                real-time.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm">LIVE NOW</button>
            </div>
          </div>

          {/* Adoption Tracker */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-600 text-white p-4">
              <h3 className="font-semibold">Adoption Tracker</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">127</div>
                  <div className="text-sm text-gray-600">Cows Adopted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">43</div>
                  <div className="text-sm text-gray-600">Pending Adoption</div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
              <p className="text-gray-600 text-sm">
                Help us reach our goal of finding loving sponsors for all our cows by the end of this year.
              </p>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-orange-500 text-white p-4">
              <h3 className="font-semibold">Upcoming Events</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <div className="text-sm text-gray-500">June 15, 2024</div>
                  <div className="font-semibold text-gray-800">Gau Pooja Ceremony</div>
                  <div className="text-sm text-gray-600">Maha Samaj Goshala</div>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <div className="text-sm text-gray-500">June 20, 2024</div>
                  <div className="font-semibold text-gray-800">Volunteer Orientation</div>
                  <div className="text-sm text-gray-600">Community Hall</div>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <div className="text-sm text-gray-500">June 25, 2024</div>
                  <div className="font-semibold text-gray-800">Gau Adoption Day</div>
                  <div className="text-sm text-gray-600">Goshala Grounds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
