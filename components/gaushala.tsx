import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import gaushalaBanner from "./assets/gaushalabanner.png"
import historyone from "./assets/historypne.png"
import history2 from "./assets/history2.png"
import history3 from "./assets/history3.png"
import history4 from "./assets/history4.png"
import history5 from "./assets/history5.png"
import dharma from "./assets/dharmameets.png"
import gaushalatechbg from "./assets/Gaushalabg.png"

export default function GauShalaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={gaushalaBanner}
            alt="Gau Shala - Sanctuary for cows"
            className="w-full h-full object-cover object-top"
          />
          {/* <div className="absolute inset-0 bg-black/40"></div> */}
        </div>
        <div className="relative z-10 flex items-end justify-center h-full text-white px-6 max-w-6xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gau Shala - A Sanctuary for Gau Mata</h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="pt-16 bg-[#f8f0de] ">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our cow shelter is more than just a physical space. It is a living temple dedicated to the service (seva) of
            Gau Mata. Rooted in the traditions of Sanatan Dharma and guided by the leadership of Viram Desai, our
            shelter combines ancient wisdom with cutting-edge technology to ensure every cow receives the dignity and
            love she deserves.
          </p>
        </div>
      </section>

      {/* History & Facilities */}
      <section className="py-16 bg-[#f8f0de]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e28154] mb-8 text-center">History & Facilities</h2>

          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              The shelter was established with a simple yet powerful vision: to provide abandoned, injured, and stray
              cows with a safe haven where they could heal and thrive. What began as a modest initiative has grown into
              a model Gau Seva facility in Gujarat, known for both its scale and its devotion.
            </p>
            <p className="text-gray-700 leading-relaxed">Our facilities include:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-[#e28154] text-white border-none">
              <CardContent className="p-6 text-center">
                <div className="w-28 h-28 mx-auto mb-4 relative">
                  <Image
                    src={historyone}
                    alt="Spacious Cow Sheds"
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Spacious Cow Sheds</h3>
                <p className="text-orange-50">
                  Climate-controlled sheds that provide comfort and protection against heat and rain.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#e28154] text-white border-none">
              <CardContent className="p-6 text-center">
              <div className="w-28 h-28 mx-auto mb-4 relative">
                  <Image
                    src={history2}
                    alt="Spacious Cow Sheds"
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Clean Water Systems</h3>
                <p className="text-orange-50">
                  24x7 fresh water supply with filtration systems to ensure pure and clean water.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#e28154] text-white border-none">
              <CardContent className="p-6 text-center">
              <div className="w-28 h-28 mx-auto mb-4 relative">
                  <Image
                    src={history3}
                    alt="Spacious Cow Sheds"
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Nutritious Feed Stations</h3>
                <p className="text-orange-50">Balanced diet programs with fresh fodder and mineral supplements.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#e28154] text-white border-none">
              <CardContent className="p-6 text-center">
              <div className="w-28 h-28 mx-auto mb-4 relative">
                  <Image
                    src={history4}
                    alt="Spacious Cow Sheds"
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Dedicated Veterinary Clinic</h3>
                <p className="text-orange-50">
                  On-site medical care for preventive treatments and emergency surgeries.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#e28154] text-white border-none">
              <CardContent className="p-6 text-center">
              <div className="w-28 h-28 mx-auto mb-4 relative">
                  <Image
                    src={history5}
                    alt="Spacious Cow Sheds"
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Rest & Recovery Zones</h3>
                <p className="text-orange-50">Quiet areas for injured or elderly cows to heal in peace.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rescue & Rehabilitation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e28154] mb-8">Rescue & Rehabilitation Process</h2>

          <p className="text-gray-700 mb-12 leading-relaxed">
            Our Gau Seva extends beyond the shelter gates. A trained rescue team responds to distress calls through our
            helpline, coordinating with local communities and authorities.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Step-by-step process:</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="bg-[#e28154] text-white border-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* <Truck className="w-8 h-8 mt-1 flex-shrink-0" /> */}
                    <div>
                      <h4 className="text-lg font-bold mb-2">Rescue Dispatch</h4>
                      <p className="text-orange-50">
                        Our vehicle or cow ambulance reaches the location to transport the cow safely.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#e28154] text-white border-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* <Stethoscope className="w-8 h-8 mt-1 flex-shrink-0" /> */}
                    <div>
                      <h4 className="text-lg font-bold mb-2">Initial Medical Assessment</h4>
                      <p className="text-orange-50">
                        The cow is administered immediately, and the veterinarian assesses her condition at the shelter.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#e28154] text-white border-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* <Activity className="w-8 h-8 mt-1 flex-shrink-0" /> */}
                    <div>
                      <h4 className="text-lg font-bold mb-2">Rehabilitation Program</h4>
                      <p className="text-orange-50">
                        Depending on her condition, the cow is placed in a recovery zone with tailored care.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#e28154] text-white border-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* <Heart className="w-8 h-8 mt-1 flex-shrink-0" /> */}
                    <div>
                      <h4 className="text-lg font-bold mb-2">Emotional & Social Healing</h4>
                      <p className="text-orange-50">
                        Cows are social animals; they are gradually reintroduced to the herd once healthy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-[#e28154] text-white border-none">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* <Home className="w-8 h-8 mt-1 flex-shrink-0" /> */}
                  <div>
                    <h4 className="text-lg font-bold mb-2">Long-Term Care or Adoption</h4>
                    <p className="text-orange-50">
                      Some cows remain under our lifelong care, while others enter our Adopt-A-Cow program, connecting
                      them with donors for sustained support.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology in Shelter Care */}
      <section className="py-16 bg-[#e28154] relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={gaushalatechbg}
            alt="Decorative orange background with traditional patterns"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technology in Shelter Care</h2>
            <p className="text-white max-w-3xl mx-auto">
              While our roots are deeply traditional, our operations are modern and efficient thanks to technology.
            </p>
          </div>

          <div className="space-y-8">
            {/* Top row - 2 items */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-3">RFID Tagging</h3>
                <p className="text-white">
                  Each cow has a unique ID that stores her medical history, feeding patterns, and adoption status.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-3">IoT Monitoring:</h3>
                <p className="text-white">
                  Smart collars track location, temperature, and activity levels, ensuring prompt care if irregularities
                  are detected.
                </p>
              </div>
            </div>

            {/* Middle row - 1 centered item */}
            <div className="flex justify-center">
              <div className="text-center max-w-md">
                <h3 className="text-xl font-bold text-white mb-3">Adoption Tracker:</h3>
                <p className="text-white">Dynamic updates on each adopted cow's well-being.</p>
              </div>
            </div>

            {/* Bottom row - 2 items */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-3">Digital Health Records</h3>
                <p className="text-white">Every treatment and check-up is logged for accuracy and transparency.</p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-3">Live Shelter Cam</h3>
                <p className="text-white">
                  Donors and adopters can view their cows in real time through our online portal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Dharma Meets Data */}
      <section className="py-16 bg-[#f8f0de] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={dharma}
            alt="Decorative background"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e28154] mb-8">Where Dharma Meets Data</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our shelter is a place where tradition and innovation coexist. It's where compassion is strengthened by
            technology, and every cow is treated like a revered mother.
          </p>
        </div>
      </section>

    </div>
  )
}
