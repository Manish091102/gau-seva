const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      text: "Being part of Gau Seva has been incredibly fulfilling. The membership program makes it easy to contribute to cow welfare.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "The digital membership card is so convenient. I can easily verify my membership and participate in local events.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      location: "Gujarat",
      text: "Excellent organization doing wonderful work for cow protection. Proud to be a member and support this cause.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
          <p className="text-xl text-gray-600">Hear from our community of dedicated cow protectors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-orange-500 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
