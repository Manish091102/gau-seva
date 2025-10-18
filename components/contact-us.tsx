import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react"

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f8f0de" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#e28154] mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            We value your feedback and are here to assist with any questions regarding donations, refunds, or policies.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#e28154] mb-6">VLEE Charitable Trust</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#e28154] rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Registered Office Address</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Plot No. 910/2, Sector 7-C<br />
                          Gandhinagar, Gujarat 382007<br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#e28154] rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                        <p className="text-gray-600">
                          <a href="tel:+918758702070" className="hover:text-[#e28154] transition-colors">
                            +91 87587 02070
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#e28154] rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                        <p className="text-gray-600">
                          <a href="mailto:akhilbharatgauseva@gmail.com" className="hover:text-[#e28154] transition-colors">
                            akhilbharatgauseva@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#e28154] rounded-full flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Website</h3>
                        <p className="text-gray-600">
                          <a href="https://gausevabharat.com" className="hover:text-[#e28154] transition-colors" target="_blank" rel="noopener noreferrer">
                            https://gausevabharat.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Response Time & Guidelines */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-8 h-8 text-[#e28154]" />
                    <h2 className="text-2xl font-bold text-[#e28154]">Response Time</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-[#f8f0de] p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">General Inquiries</h3>
                      <p className="text-gray-600">
                        We aim to respond to all queries within <strong>3-5 working days</strong>.
                      </p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Urgent Matters</h3>
                      <p className="text-gray-600">
                        For urgent matters related to transactions or technical issues, please mention 
                        <strong className="text-red-600"> 'Urgent'</strong> in your email subject line so that 
                        we can prioritize your request.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#e28154] mb-6">How We Can Help</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#e28154] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">Donation-related questions and support</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#e28154] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">Refund requests and processing</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#e28154] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">Policy clarifications</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#e28154] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">Technical support for website issues</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#e28154] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">General information about our initiatives</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f8f0de" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#e28154] mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Your support and feedback are invaluable to us. We're here to help and answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:akhilbharatgauseva@gmail.com"
              className="bg-[#e28154] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d4734a] transition-colors"
            >
              Send Email
            </a>
            <a 
              href="tel:+918758702070"
              className="bg-white text-[#e28154] border-2 border-[#e28154] px-8 py-3 rounded-lg font-semibold hover:bg-[#e28154] hover:text-white transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
