import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Home, Utensils, GraduationCap } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Stethoscope,
      title: "Medical Care",
      description: "Professional veterinary care and regular health checkups for all cows in our care.",
    },
    {
      icon: Home,
      title: "Safe Shelter",
      description: "Providing secure and comfortable shelter facilities with proper ventilation and space.",
    },
    {
      icon: Utensils,
      title: "Nutritious Food",
      description: "Ensuring proper nutrition with quality fodder and supplements for optimal health.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Spreading awareness about cow welfare and traditional values in our community.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive care and support for cows through various dedicated services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
