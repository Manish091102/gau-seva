import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Shield, CheckCircle, Star, BookOpen } from "lucide-react"
import Image from "next/image"
import gauseva from "./assets/AboutGauSeva.png"
import gaushala from "./assets/AboutGaushala.png"

export default function HomAbout() {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
         <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
            src={gaushala}
              alt="Cows in Gaushala"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div>
            <div className="bg-[#e28154] text-white p-6 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">About गौशाला</h2>
              <p className="mb-6 leading-relaxed">
                Our Gau-Shala is more than a shelter; it is a sanctuary where every cow is cared for with dignity, love,
                and respect. Our state-of-the-art facility combines traditional reverence with modern technology to
                provide rescued and abandoned cows with a safe, nurturing environment to heal and thrive.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#e28154] bg-transparent px-6 py-2"
              >
                Know More
              </Button>
            </div>
          </div>
        </div>

        {/* About Founder Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-[#e28154] text-white p-6 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">About गौसेवा</h2>
              <p className="mb-6 leading-relaxed">
                Gau Seva is not just a way of honouring Gau Mata as a nurturer who has been part of our lives and
                culture for generations. We rescue and care for cows, providing them with medical treatment, nutritious
                food, and safe shelter. We use technology to manage our shelters better. Through this mission, we aim to
                create a sustainable model that connects with our cultural purpose.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#e28154] bg-transparent px-6 py-2"
              >
                Know More
              </Button>
            </div>
          </div>
          <div>
          <Image
            src={gauseva}
              alt="Founder with cows"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>
        </div>
    </section>

  )
}