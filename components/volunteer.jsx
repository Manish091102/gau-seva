import { Card } from "@/components/ui/card"
import volunteerBanner from "./assets/volunteerbannner.png"
import Image from "next/image"
import { FileText, Users, CheckCircle, Camera, Hash, QrCode, Award } from "lucide-react"

export default function VolunteerPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Volunteer – Become a Gau Sevak</h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-center text-gray-700 text-lg mb-12 leading-relaxed max-w-4xl mx-auto">
          Joining our volunteer program means becoming a Gau Sevak, a guardian of the sacred Gau Mata. This is more than
          just lending a helping hand; it is a personal commitment to upholding Dharma and serving the most revered
          being in Sanatan culture.
        </p>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-[#e28154] mb-8 text-center">Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-[#e28154] border-none text-white text-center">
              <FileText className="w-20 h-20 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-bold">Register Online</h3>
              <p className="text-sm">Fill out our secure digital form with your details, skills and availability</p>
            </Card>

            <Card className="p-6 bg-[#e28154] border-none text-white text-center">
              <Users className="w-20 h-20 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-bold">Orientation Session</h3>
              <p className="text-sm">
                Attend an introduction session (online or in person) to learn about Gau Seva, shelter operations, and
                your role in Gau Seva
              </p>
            </Card>

            <Card className="p-6 bg-[#e28154] border-none text-white text-center">
              <CheckCircle className="w-20 h-20 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-bold">Approval and Confirmation</h3>
              <p className="text-sm">Once approved, you will receive your Digital Volunteer ID and welcome kit</p>
            </Card>
          </div>
        </div>

        {/* Digital ID Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">Digital ID and Badges</h2>

          <p className="text-gray-700 mb-6 text-center">
            Every registered volunteer receives a Digital Volunteer ID Card, which includes:
          </p>

          <div className="space-y-3 max-w-2xl mx-auto mb-8">
            <div className="flex items-center">
              <span className="text-[#e28154] mr-2">*</span>
              <span className="text-gray-700">Your photograph and full name</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#e28154] mr-2">*</span>
              <span className="text-gray-700">A unique Gau Sevak ID number</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#e28154] mr-2">*</span>
              <span className="text-gray-700">A QR code for instant verification at shelters and events</span>
            </div>
          </div>

          <p className="text-gray-700 mb-6 text-center">
            As you participate in activities, you will earn digital badges recognising your seva milestones:
          </p>

          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="bg-[#e28154] text-white p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* <Award className="w-6 h-6" /> */}
                <span className="font-bold">Gau Sevak Bronze:</span>
              </div>
              <span>10 hours of service</span>
            </div>

            <div className="bg-[#e28154] text-white p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* <Award className="w-6 h-6" /> */}
                <span className="font-bold">Gau Sevak Silver:</span>
              </div>
              <span>50 hours of service</span>
            </div>

            <div className="bg-[#e28154] text-white p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* <Award className="w-6 h-6" /> */}
                <span className="font-bold">Gau Sevak Gold:</span>
              </div>
              <span>100+ hours of service or special contribution</span>
            </div>
          </div>

          <p className="text-gray-700 text-center mt-6">
            These badges can be displayed on your profile and social media, inspiring others to join the cause.
          </p>
        </div>

        {/* Volunteer Roles Section */}
        <div className="bg-[#e28154] text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Volunteer Roles</h2>
          <p className="mb-8 text-lg">Volunteers can choose their seva according to interest and ability.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Rescue Assistance</h3>
              <p className="mb-4">
                Support our teams during cow rescue operations by offering first aid and transport assistance
              </p>

              <h3 className="text-xl font-bold mb-2">Shelter Care</h3>
              <p className="mb-4">Assist in feeding, cleaning, and maintaining the shelter environment</p>

              <h3 className="text-xl font-bold mb-2">Medical Support</h3>
              <p className="mb-4">Work with veterinary teams during health check-ups and treatment</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Awareness and Education</h3>
              <p className="mb-4">Conduct Gau Mata awareness sessions in schools, colleges, and communities</p>

              <h3 className="text-xl font-bold mb-2">Event Support</h3>
              <p className="mb-4">Help organise and manage events such as bhandaras, Gau Pujas, and Gau Kathas</p>

              <h3 className="text-xl font-bold mb-2">Digital Outreach</h3>
              <p className="mb-4">
                Assist in managing social media, blog content, and online campaigns to spread the message of Gau Seva
              </p>
            </div>
          </div>

          <p className="text-center mt-8 text-lg">
            These badges can be displayed on your profile and social media, inspiring others to join the cause.
          </p>
        </div>
      </div>
    </div>
  )
}
