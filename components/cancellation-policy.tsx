import { Card, CardContent } from "@/components/ui/card"

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f8f0de" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#e28154] mb-4">
            Cancellation & Refunds Policy
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
                  Thank you for supporting <strong>VLEE CHARITABLE TRUST</strong> ("Organisation", "we", "us", "our"). We
                  are committed to transparency and fairness in handling all contributions received via
                  <a href="https://gausevabharat.com" className="text-[#e28154] hover:underline"> https://gausevabharat.com</a> and our payment partner Razorpay.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  All donations made are considered voluntary and non-refundable, as they directly go
                  towards ongoing charitable initiatives, cow protection activities, and welfare services.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  However, we do understand that errors can occur. A refund may be considered under the
                  following circumstances:
                </p>

                <div className="bg-[#f8f0de] p-6 rounded-lg mb-6">
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>Duplicate donation was made due to technical error.</li>
                    <li>Incorrect donation amount entered by the donor.</li>
                    <li>Technical error at the payment gateway resulting in an overcharge.</li>
                  </ol>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Refund requests must be submitted to our official email within seven (7) days of the
                  donation date. Once approved, the refund will be processed back to the original payment
                  method within ten (10) to fifteen (15) working days. The Organisation reserves the right to
                  decline refund requests if they do not meet the above criteria.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <p className="text-gray-700">
                    <strong>Please note:</strong> Transaction fees, if any, charged by the payment gateway may be deducted
                    from the refunded amount.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-[#e28154] text-white rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                  <p className="mb-2">For refund requests or any queries regarding donations, please contact us at:</p>
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
