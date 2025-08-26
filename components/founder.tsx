import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import hero from "./assets/HeroWithBG.png"
import virammbhai from "./assets/ViramBhaiImage.png"
import Bio1 from "./assets/BiographyServiceBackground1.png"
import Bio2 from "./assets/BiographyServiceBackground2.png"
import Bio3 from "./assets/BiographyServiceBackground3.png"
import Bio4 from "./assets/BiographyServiceBackground4.png"
import { Heart, Users, GraduationCap, Truck } from "lucide-react"

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/indian-man-with-cows-in-traditional-setting.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-end h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the Founder – Viram Desai</h1>
          </div>
        </div>
      </section> */}

        <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-qmHuxcNKVRcGKt4SNgszPIiQMw8weD.jpeg"
            src={hero}
            alt="Cows being fed"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black/40"></div> */}
        </div>
        <div className="relative z-10 flex items-end justify-center h-full text-center text-white">
        <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the Founder – Viram Desai</h1>
          </div>
        </div>
      </section>

      {/* Biography & Service Background */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f8f0de" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="flex text-3xl md:text-4xl font-bold text-[#e28154] mb-8 justify-center">Biography & Service Background</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Viram Desai's life is a testament to the power of seva (selfless service) and his unwavering commitment to
              the well-being of people, culture, and the sacred Gau Mata.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Born into a family rooted in the values of Sanatan Dharma, Viram imbibed from an early age the principles
              of compassion, inclusivity, and responsibility towards society. His early career was marked by years in
              public administration, where he served the people of Gujarat in various capacities.
            </p>
            <p className="text-gray-700 leading-relaxed">In his role as a public servant, he:</p>
          </div>

          <div className="flex justify-center">
            <Image
            src={virammbhai}
              // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rGjivS5tCFWtzwosB6Qu3iA1804C7T.png"
              alt="Viram Desai with cows"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-12">
          <Card className="p-6 bg-[#e28154] border-none text-white text-center">
            {/* <Heart className="w-12 h-12 text-white mb-4 mx-auto" /> */}
            <div className=" flex justify-end">
                  <Image
                    src={Bio1}
                    alt="Spacious Cow Sheds"
                    width={100}
                    height={100}
                    className="rounded-lg object-cover "
                  />
                </div>
            <p className="text-lg font-medium">Improved rural infrastructure and public amenities</p>
          </Card>

          <Card className="p-6 bg-[#e28154] border-none text-white text-center">
          <div className=" flex justify-end">
                  <Image
                    src={Bio2}
                    alt="Spacious Cow Sheds"
                    width={100}
                    height={100}
                    className="rounded-lg object-cover "
                  />
                </div>
            <p className="text-lg font-medium">Led community development initiatives across villages and towns</p>
          </Card>

          <Card className="p-6 bg-[#e28154] border-none text-white text-center">
          <div className=" flex justify-end">
                  <Image
                    src={Bio3}
                    alt="Spacious Cow Sheds"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover "
                  />
                </div>
            <p className="text-lg font-medium">Championed education programs for underprivileged children</p>
          </Card>

          <Card className="p-6 bg-[#e28154] border-none text-white text-center">
          <div className=" flex justify-end">
                  <Image
                    src={Bio4}
                    alt="Spacious Cow Sheds"
                    width={100}
                    height={100}
                    className="rounded-lg object-cover "
                  />
                </div>
            <p className="text-lg font-medium">Coordinated disaster relief efforts during times of need</p>
          </Card>
        </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="pb-16 px-4" style={{ backgroundColor: "#f8f0de" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-800 mb-8">
            Over the years, his work expanded beyond governance into large-scale social initiatives:
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#e28154" }}>
                Bhandaras
              </h3>
              <p className="text-gray-700">
                Organising free food distribution for thousands during religious and community events
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#e28154" }}>
                Raika Education Trust & Desai Samaj Projects
              </h3>
              <p className="text-gray-700">
                Partnering with donors to provide educational opportunities and scholarships
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#e28154" }}>
                Vali Nath Education Events
              </h3>
              <p className="text-gray-700">Celebrating and supporting academic achievement in rural communities</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#e28154" }}>
                Runuja Pilgrim Camps
              </h3>
              <p className="text-gray-700">
                Setting up facilities for pilgrims, including medicine camps, food services, and temporary shelters
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#e28154" }}>
                Book Distribution Drives
              </h3>
              <p className="text-gray-700">
                Providing textbooks and educational materials to over 2,000 school children
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* From Public Service to Gau Seva */}
      <section className="py-16 px-4" style={{ backgroundColor: "#e28154" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">From Public Service to Gau Seva</h2>
          <div className="text-white space-y-6">
            <p className="text-lg leading-relaxed">
              For Viram Desai, Gau Seva is not just charity — it is Dharma, a sacred duty. The cow, revered in Hindu
              culture as Gau Mata, is more than a source of nourishment; she is a giver, a nurturer, and a symbol of
              abundance and sustainability.
            </p>
            <p className="text-lg leading-relaxed">
              Recognising the plight of abandoned and neglected cows in Gujarat, Viram decided to dedicate his energy to
              building a movement that blends traditional reverence with modern solutions. Under his leadership, Gau
              Seva has embraced:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg ml-4">
              <li>State-of-the-art cow shelters with veterinary care</li>
              <li>RFID and IoT technology for tracking and healthcare</li>
              <li>Adopt-A-Cow programs connecting donors directly with the cows they support</li>
              <li>Cultural awareness programs linking cow protection with India's spiritual and ecological heritage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Message from the Founder */}
      <section className="py-16 px-4" style={{ backgroundColor: "#e28154" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Message from the Founder</h2>
          <blockquote className="text-xl md:text-2xl text-white italic leading-relaxed mb-8">
            "When we serve Gau Mata, we serve Bharat Mata. Her gentle eyes reflect the patience of our ancestors, her
            milk nourishes generations, and her presence sustains the rhythm of our villages. In protecting her, we
            protect our dharma, our culture, and our future."
          </blockquote>
          <div className="text-white">
            <p className="text-lg mb-2">
              I invite you to walk this path of seva with us, whether by adopting a cow, volunteering your time, or
              simply sharing the message of Gau Seva. Together, we can ensure that every Gau Mata lives with dignity,
              safety, and love.
            </p>
            <div className="mt-8">
              <p className="font-semibold">Viram Desai</p>
              <p className="text-white/90">Founder, Gau Seva</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
