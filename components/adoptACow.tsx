import Image from "next/image"
import volunteerBanner from "./assets/volunteerbannner.png"
import wheredonationgo1 from "./assets/Wheredonationsgo1.png"
import wheredonationgo2 from "./assets/Wheredonationsgo2.png"
import wheredonationgo3 from "./assets/Wheredonationsgo3.png"
import wheredonationgo4 from "./assets/Wheredonationsgo4.png"

export default function AdoptACowPage() {
    return (
      <div className="min-h-screen bg-[#f8f0de]">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={volunteerBanner}
            alt="Gau Shala - Sanctuary for cows"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black/40"></div> */}
        </div>
        <div className="relative z-10 flex items-end justify-center h-full text-white px-6 max-w-6xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Adopt A Cow</h1>
          </div>
        </div>
      </section>
  
        {/* Your Seva Can Save Lives Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#e28154] text-center mb-8">Your Seva Can Save Lives</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            When you contribute to Gau Seva, you're not just donating money, you're directly protecting and nurturing a
            sacred life. Every rupee you give is transformed into food, medicine, and shelter for Gau Mata, ensuring she
            lives with dignity and love.
          </p>
        </section>
  
        {/* Where Your Donations Go Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#e28154] text-center mb-12">Where Your Donations Go</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Provide Nutritious Feed */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                {/* <svg className="w-16 h-16 text-[#e28154]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg> */}
                <Image
                    src={wheredonationgo1}
                    alt="Spacious Cow Sheds"
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
              </div>
              <h3 className="text-xl font-semibold text-[#e28154] mb-2">Provide Nutritious Feed</h3>
              <p className="text-gray-600 text-sm">
                Fresh green fodder, grains, and mineral-rich supplements for healthy cows
              </p>
            </div>
  
            {/* Deliver Medical Treatment */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                {/* <svg className="w-16 h-16 text-[#e28154]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg> */}
                <Image
                    src={wheredonationgo2}
                    alt="Spacious Cow Sheds"
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
              </div>
              <h3 className="text-xl font-semibold text-[#e28154] mb-2">Deliver Medical Treatment</h3>
              <p className="text-gray-600 text-sm">
                Preventive vaccinations, emergency surgeries, and ongoing veterinary care
              </p>
            </div>
  
            {/* Maintain and Expand Shelters */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                {/* <svg className="w-16 h-16 text-[#e28154]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg> */}
                <Image
                    src={wheredonationgo3}
                    alt="Spacious Cow Sheds"
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
              </div>
              <h3 className="text-xl font-semibold text-[#e28154] mb-2">Maintain and Expand Shelters</h3>
              <p className="text-gray-600 text-sm">
                Clean, safe, and comfortable living spaces with proper shade, bedding, and water supply
              </p>
            </div>
  
            {/* Fund Rescue Operations */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                {/* <svg className="w-16 h-16 text-[#e28154]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4"
                  />
                </svg> */}
                <Image
                    src={wheredonationgo4}
                    alt="Spacious Cow Sheds"
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
              </div>
              <h3 className="text-xl font-semibold text-[#e28154] mb-2">Fund Rescue Operations</h3>
              <p className="text-gray-600 text-sm">
                Immediate response to save abandoned or injured cows through our helpline and rescue vehicles
              </p>
            </div>
          </div>
  
          <p className="text-center text-gray-700 mt-12 text-lg">
            Every contribution, big or small, directly impacts the life of a living, breathing Gau Mata.
          </p>
        </section>
  
        {/* Donation Features Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#e28154] text-center mb-8">Donation Features</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            We've made the process simple, secure, and transparent so you can give with complete confidence.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Multiple Payment Options */}
            <div className="bg-[#e28154] text-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Multiple Payment Options</h3>
              <p className="text-sm opacity-90">
                Donate via UPI, credit or debit cards, or net banking for your convenience
              </p>
            </div>
  
            {/* Instant Digital Receipts */}
            <div className="bg-[#e28154] text-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Digital Receipts</h3>
              <p className="text-sm opacity-90">
                Automatically sent to your registered email for records and tax purposes
              </p>
            </div>
  
            {/* Donation Impact Tracker */}
            <div className="bg-[#e28154] text-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Donation Impact Tracker</h3>
              <p className="text-sm opacity-90">
                Real-time updates, photos, and reports on how your funds are being used
              </p>
            </div>
          </div>
        </section>
  
        {/* Why Donate Section */}
        <section className="bg-[#e28154] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Donate to Gau Seva?</h2>
  
            <p className="text-xl mb-4">In the words of our founder, Viram Desai:</p>
            <blockquote className="text-2xl md:text-3xl font-light italic mb-8">
              "When you feed a cow, you nourish the soul of the world."
            </blockquote>
  
            <p className="text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
              By donating to Gau Seva, you are not only fulfilling a charitable act but also performing Dharma, preserving
              a sacred tradition and helping build a compassionate future for generations to come.
            </p>
  
            <button className="bg-white text-[#e28154] px-8 py-4 rounded-lg text-xl font-semibold hover:bg-orange-50 transition-colors mb-4">
              Donate Now
            </button>
  
            <p className="text-lg opacity-90">COMING SOON</p>
          </div>
        </section>
      </div>
    )
  }
  