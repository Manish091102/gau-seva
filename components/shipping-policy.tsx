import { Card, CardContent } from "@/components/ui/card"

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f8f0de" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#e28154] mb-4">
            Shipping Policy
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
                  <strong>VLEE CHARITABLE TRUST</strong> currently accepts donations only and does not operate as an e-commerce platform. Therefore, physical shipping of goods is not applicable to general contributions.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  However, from time to time, as part of special campaigns or donor appreciation initiatives,
                  we may provide physical or digital acknowledgements, such as certificates, letters of
                  appreciation, or symbolic gifts. The terms for such items are as follows:
                </p>

                <div className="space-y-6">
                  <div className="bg-[#f8f0de] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#e28154] mb-3">1. Digital Acknowledgements</h3>
                    <p className="text-gray-700">
                      Donation receipts, e-certificates, and thank-you letters will be
                      sent to the registered donor email within 7 working days of the transaction.
                    </p>
                  </div>

                  <div className="bg-[#f8f0de] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#e28154] mb-3">2. Physical Acknowledgements</h3>
                    <p className="text-gray-700">
                      In rare cases where physical items are sent, donors will be
                      notified in advance. Shipping charges, delivery timelines, and methods will be
                      communicated at the time of the campaign.
                    </p>
                  </div>

                  <div className="bg-[#f8f0de] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#e28154] mb-3">3. Delivery Timelines</h3>
                    <p className="text-gray-700">
                      Physical items, if applicable, will be dispatched within 10-15 working
                      days after confirmation. Delivery timelines may vary depending on location and courier
                      service availability.
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Important Note:</strong> The Organisation is not responsible for delays caused by external courier partners,
                    incorrect address details provided by the donor, or unforeseen events such as natural
                    disasters.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-[#e28154] text-white rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                  <p className="mb-2">For any questions regarding shipping or acknowledgements, please contact us at:</p>
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
