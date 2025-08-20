import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      content:
        "Gau Seva has been doing incredible work in our community. Their dedication to cow welfare is truly inspiring.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      location: "Mumbai",
      content:
        "I'm proud to be a member of Gau Seva. The membership card and community support make me feel connected to this noble cause.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      location: "Gujarat",
      content: "The work they do is amazing. Every cow deserves the care and protection that Gau Seva provides.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-orange-600">Members</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our community members about their experience with Gau Seva
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
