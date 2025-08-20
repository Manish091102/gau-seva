const ServicesSection = () => {
  const services = [
    {
      icon: "🏥",
      title: "Medical Care",
      description: "Comprehensive veterinary care and treatment for sick and injured cows",
    },
    {
      icon: "🌾",
      title: "Nutrition Program",
      description: "Providing nutritious food and supplements to ensure healthy growth",
    },
    {
      icon: "🏠",
      title: "Shelter Facilities",
      description: "Safe and comfortable shelters protecting cows from harsh weather",
    },
    {
      icon: "👥",
      title: "Adoption Program",
      description: "Connecting cows with loving families and responsible caretakers",
    },
    {
      icon: "📚",
      title: "Education & Awareness",
      description: "Spreading knowledge about cow welfare and sustainable practices",
    },
    {
      icon: "🤝",
      title: "Community Support",
      description: "Building networks of volunteers and supporters across regions",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive care and support for cows through various programs and initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
