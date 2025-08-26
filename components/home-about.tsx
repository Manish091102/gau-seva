import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Shield, CheckCircle, Star, BookOpen } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import gauseva from "./assets/AboutGauSeva.png"
import gaushala from "./assets/AboutGaushala.png"
import logo from "./assets/logotran.png"

export default function HomAbout() {
  const router = useRouter()

  const handleGauShalaClick = () => {
    router.push("/gaushala")
  }

  const handleGauSevaClick = () => {
    router.push("/gauseva")
  }

  return (
    <section className="py-16 bg-[#f8f0de]">
        <div className="max-w-6xl mx-auto px-4">
         {/* Logo Section */}
         <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
  {/* Left: Content */}
  <div className="order-2 md:order-1">
    <div className="bg-[#e28154] text-white p-6 rounded-lg h-100 flex flex-col">
      <h2 className="text-3xl font-bold mb-6">About गौसेवा</h2>
      <p className="mb-6 leading-relaxed">
        Gau Seva by VLEE Charitable Trust is a movement to protect and nurture Gau Mata with dignity and love. Led
        by Viram Desai, it blends Sanatan Dharma values with modern care and technology, making Gau Seva both a
        sacred duty and a community social responsibility.
      </p>
      <div className="mt-auto">
        <Button
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-[#e28154] bg-transparent px-6 py-2 cursor-pointer"
          onClick={handleGauSevaClick}
        >
          Learn More
        </Button>
      </div>
    </div>
  </div>

  {/* Right: Image */}
  <div className="order-1 md:order-2">
    <Image
      src={logo}
      alt="Gau Seva Logo"
      className="rounded-lg w-full h-80 object-contain"
    />
  </div>
</div>



         <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16">
  {/* Left: Image */}
  <div>
    <Image
      src={gaushala}
      alt="Cows in Gaushala"
      className="rounded-lg shadow-lg w-full h-80 object-cover object-top"
    />
  </div>

  {/* Right: Content */}
  <div>
    <div className="bg-[#e28154] text-white p-6 rounded-lg h-80 flex flex-col">
      <h2 className="text-3xl font-bold mb-6">About गौशाला</h2>
      <p className="mb-6 leading-relaxed line-clamp-4">
        Our Gau-Shala is more than a shelter; it is a sanctuary where every cow is cared for with dignity, love,
        and respect. Our state-of-the-art facility combines traditional reverence with modern technology to
        provide rescued and abandoned cows with a safe, nurturing environment to heal and thrive.
      </p>
      <div className="mt-auto">
        <Button
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-[#e28154] bg-transparent px-6 py-2 cursor-pointer"
          onClick={handleGauShalaClick}
        >
          Know More
        </Button>
      </div>
    </div>
  </div>
</div>


        {/* About Founder Section */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16">
          <div className="order-2 md:order-1 bg-[#e28154] text-white p-6 rounded-lg flex flex-col">
            <h2 className="text-3xl font-bold my-4">Message from the Founder</h2>
            <p className="my-4 leading-relaxed">
              "Serving Gau Mata is serving Bharat Mata. In her well-being lies our dharma, our culture, and our future. Join us in this path of seva, where every cow lives with dignity and love."
            </p>
            <p className="my-4">— Viram Desai Founder,<br />Gau Seva</p>
            <div className="mt-auto">
        <Button
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-[#e28154] bg-transparent px-6 py-2 cursor-pointer"
          onClick={handleGauSevaClick}
        >
          Learn More
        </Button>
      </div>
          </div>
          <Image
            src={gauseva}
            alt="Founder with cows"
            className="order-1 md:order-2 rounded-lg shadow-lg w-full h-full object-cover object-top"
          />
        </div>



        </div>
    </section>

  )
}