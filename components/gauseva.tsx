import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import gausevaBanner from "./assets/gausevabanner.png"
import missionOne from "./assets/missionone.png"
import missionTwo from "./assets/missiontwo.png"
import missionThree from "./assets/missionthree.png"
import missionFour from "./assets/missionfour.png"

export default function GauSevaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-qmHuxcNKVRcGKt4SNgszPIiQMw8weD.jpeg"
            src={gausevaBanner}
            alt="Cows being fed"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black/40"></div> */}
        </div>
        <div className="relative z-10 flex items-end justify-center h-full text-center text-white">
          <div className="pb-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">About Gau Seva</h1>
            <p className="text-2xl">by VLEE Charitable Trust</p>
          </div>
        </div>
      </section>

      {/* A Visionary Beginning */}
      <section className=" bg-[#f8f0de]">
        <div className="max-w-6xl py-16 px-6  mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#e28154] mb-8">A Visionary Beginning</h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Gau Seva by VLEE Charitable Trust is more than just an organization; it's a beacon of hope, culture, and
            sustainability. Founded under the visionary leadership of Viram Desai, the trust carries forward the eternal
            values of Sanatan Dharma while embracing modern solutions to safeguard and elevate Gau Mata.
          </p>
          <p>
            Viram Desai's journey from public service to Gau Seva reflects a lifetime commitment to society. Through
            this foundation, his vision is to create a model where tradition and technology work hand in hand to ensure
            that every cow lives with dignity, health, and love.
          </p>
        </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16  bg-[#f8f0de]">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e28154] mb-12">Vision and Mission</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To honor and protect Gau Mata through compassion, innovation, and community engagement, ensuring her
                well-being for generations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To transform cow care in Gujarat and across India by integrating modern technology, community
                participation, and Sanatan Dharma values into a transparent and scalable Gau Seva model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-[#f8f0de]">
        <div className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#e28154] mb-8">What we do?</h2>
        <p className="text-gray-700 mb-12 leading-relaxed">
          To honor and protect Gau Mata through compassion, innovation, and community engagement, ensuring her
          well-being for generations.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6 ">
          <Card className="bg-[#e28154] text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Cow Rescue and Rehabilitation</h3>
              <p className="text-orange-50">
                Immediate response to save abandoned, injured, or distressed cows through a dedicated helpline and
                rescue teams.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#e28154] text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Shelter and Healthcare</h3>
              <p className="text-orange-50">
                Safe, clean shelters with nutritious feed, 24x7 veterinary care, and recovery zones for recovery.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#e28154] text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Technology Integration</h3>
              <p className="text-orange-50">
                Advanced tools like RFID tagging, IoT-based monitoring, and digital health records to ensure transparent
                and efficient cow management.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#e28154] text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Community Education</h3>
              <p className="text-orange-50">
                Awareness programs in schools, colleges, villages, and towns to inspire the next generation of Gau
                Sevaks.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#e28154] text-white border-none">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">Promotion of Panchagavya and Sustainability</h3>
            <p className="text-orange-50">
              Encouraging the use of Panchagavya products, organic fertilizers, and biogas, creating self-sustaining
              models for shelters.
            </p>
          </CardContent>
        </Card>
        </div>
      </section>

      {/* Our Inspiration */}
      <section className="py-16 px-6 bg-[#f8f0de]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e28154] mb-8">Our Inspiration</h2>
          <p className="text-gray-700 mb-6">
            In the words of our founder, <strong>Viram Desai:</strong>
          </p>

          <blockquote className="text-2xl md:text-3xl font-light text-orange-600 italic mb-8 leading-relaxed">
            "When we serve Gau Mata, we serve Bharat Mata. In her well-being lies the strength of our culture, our
            environment, and our future."
          </blockquote>

          <p className="text-gray-700">
            <strong>Gau Seva by VLEE Charitable Trust is a call to action</strong>
            <br />
            for every heart that feels compassion and every hand that wishes to serve.
          </p>
        </div>
      </section>

      {/* Our Mission of Seva */}
      <section className=" bg-[#e28154]">
        <div className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Mission of Seva</h2>
          <p className="text-white max-w-3xl mx-auto">
            <strong>Gau Seva is not just an act of kindness; it is Dharma, a sacred duty.</strong>
            <br />
            By combining ancient reverence with modern practices, the trust aims to:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="overflow-hidden py-0 border-0 shadow-none">
            <div className="h-60 relative">
              <Image
                src={missionOne}
                alt="Protect and nurture cows"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black-600/60 flex items-end p-4">
                <p className="text-white font-semibold">Protect and nurture every cow with dignity</p>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden py-0 border-0 shadow-none">
            <div className="h-60  relative">
              <Image
                src={missionTwo}
                alt="Spread awareness"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black-600/60 flex items-end p-4">
                <p className="text-white font-semibold">
                  Spread awareness about the cultural, ecological, and spiritual significance of Gau Mata
                </p>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden py-0 border-0 shadow-none">
            <div className="h-60 relative">
              <Image
                src={missionThree}
                alt="Inspire participation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black-600/60 flex items-end p-4">
                <p className="text-white font-semibold">
                  Inspire individuals, families, and institutions to participate in this mission of seva
                </p>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden py-0 border-0 shadow-none">
            <div className="h-60 relative">
              <Image
                src={missionFour}
                alt="Build sustainable model"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black-600/60 flex items-end p-4">
                <p className="text-white font-semibold">Build a sustainable, technology-enabled model of Gau care</p>
              </div>
            </div>
          </Card>
        </div>
        </div>
      </section>
    </div>
  )
}
