import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f8f0de" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#e28154] mb-4">
            Privacy Policy
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
                  We at <strong>VLEE CHARITABLE TRUST</strong> take your privacy seriously and are committed to
                  protecting any personal information you share with us. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when you interact with our website.
                </p>

                <div className="space-y-6">
                  <div className="bg-[#f8f0de] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#e28154] mb-3">1. Information Collection</h3>
                    <p className="text-gray-700">
                      We collect personal details including name, email address, phone
                      number, and payment details solely for the purpose of processing donations and
                      maintaining donor records.
                    </p>
                  </div>

                  <div className="bg-[#f8f0de] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#e28154] mb-3">2. Use of Information</h3>
                    <p className="text-gray-700">
                      Donor information is used to generate receipts, provide updates on
                      our initiatives, respond to inquiries, and maintain accurate records for compliance
                      purposes.
                    </p>
                  </div>

                  <div className="bg-[#f8f0de] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#e28154] mb-3">3. Data Security</h3>
                    <p className="text-gray-700">
                      We implement industry-standard security measures to protect your data
                      from unauthorized access, alteration, or disclosure. Sensitive financial information is
                      processed securely through Razorpay.
                    </p>
                  </div>

                  <div className="bg-[#f8f0de] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#e28154] mb-3">4. Sharing of Information</h3>
                    <p className="text-gray-700">
                      We do not sell, rent, or trade donor information. Data may only be
                      shared with trusted third-party service providers (such as payment processors) or if
                      required by law.
                    </p>
                  </div>

                  <div className="bg-[#f8f0de] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#e28154] mb-3">5. Communication</h3>
                    <p className="text-gray-700">
                      By donating, you consent to receive communication from us via email,
                      SMS, or phone calls regarding receipts, campaigns, and project updates. You may opt out of
                      non-essential communication at any time.
                    </p>
                  </div>

                  <div className="bg-[#f8f0de] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#e28154] mb-3">6. Data Retention</h3>
                    <p className="text-gray-700">
                      Donor data will be retained as long as legally required for tax and audit
                      purposes.
                    </p>
                  </div>

                  <div className="bg-[#f8f0de] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#e28154] mb-3">7. Rights</h3>
                    <p className="text-gray-700">
                      Donors may request access, correction, or deletion of their personal data by
                      contacting us directly.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-[#e28154] text-white rounded-lg">
                  <p className="text-lg font-medium">
                    By using this website, you consent to the practices described in this Privacy Policy.
                  </p>
                </div>

                <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#e28154] mb-2">Contact Information</h3>
                  <p className="text-gray-700 mb-2">For any questions regarding this privacy policy or to exercise your rights, please contact us at:</p>
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
