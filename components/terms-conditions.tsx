import { Card, CardContent } from "@/components/ui/card"

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f8f0de" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#e28154] mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-GB', { 
              day: '2-digit', 
              month: 'short', 
              year: 'numeric' 
            })}
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  By accessing, browsing, or donating through <a href="https://gausevabharat.com" className="text-[#e28154] hover:underline">https://gausevabharat.com</a>, you acknowledge
                  and agree to comply with the terms and conditions set forth below.
                </p>

                <div className="space-y-6">
                  <div className="bg-[#f8f0de] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#e28154] mb-3">1. Donations</h3>
                    <p className="text-gray-700">
                      All contributions made through our platform are voluntary and non-refundable unless they meet the conditions described in our Refund Policy.
                    </p>
                  </div>

                  <div className="bg-[#f8f0de] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#e28154] mb-3">2. Use of Donations</h3>
                    <p className="text-gray-700">
                      Funds collected are used strictly for the activities, initiatives, and
                      projects of <strong>VLEE CHARITABLE TRUST</strong>, which include but are not limited to cow protection,
                      animal healthcare, sustainable agriculture, awareness campaigns, and community welfare
                      programs.
                    </p>
                  </div>

                  <div className="bg-[#f8f0de] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#e28154] mb-3">3. Eligibility</h3>
                    <p className="text-gray-700">
                      Donors must be above 18 years of age and legally capable of making financial
                      contributions.
                    </p>
                  </div>

                  <div className="bg-[#f8f0de] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#e28154] mb-3">4. Intellectual Property</h3>
                    <p className="text-gray-700">
                      All content, text, graphics, and media on this website are the
                      exclusive property of <strong>VLEE CHARITABLE TRUST</strong>. Reproduction, modification, or
                      redistribution of content without prior written permission is strictly prohibited.
                    </p>
                  </div>

                  <div className="bg-[#f8f0de] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#e28154] mb-3">5. Limitation of Liability</h3>
                    <p className="text-gray-700">
                      The Organisation is not liable for any loss or damages arising
                      directly or indirectly due to the use of this website or its services.
                    </p>
                  </div>

                  <div className="bg-[#f8f0de] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#e28154] mb-3">6. Amendments</h3>
                    <p className="text-gray-700">
                      The Organisation reserves the right to update or amend these terms
                      without prior notice. Any updates will be effective immediately upon being posted on the
                      website.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-[#e28154] text-white rounded-lg">
                  <p className="text-lg font-medium">
                    By continuing to use this website, you agree to abide by these terms in full.
                  </p>
                </div>

                <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#e28154] mb-2">Contact Information</h3>
                  <p className="text-gray-700 mb-2">For any questions regarding these terms and conditions, please contact us at:</p>
                  <p className="font-medium">Email: support@gausevabharat.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
