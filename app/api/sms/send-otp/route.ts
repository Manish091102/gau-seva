import { type NextRequest, NextResponse } from "next/server"

interface MSG91Config {
  authKey: string
  templateId: string
  senderId: string
}

class MSG91Service {
  private config: MSG91Config

  constructor() {
    this.config = {
      authKey: "464790AZoahKYDyE5u68a35f4bP1",
      templateId: "68a398a9152d881576573cd6",
      senderId: "GAUSEVA",
    }
  }

  async sendOTP(mobile: string, otp: string): Promise<boolean> {
    try {
      if (!this.config.authKey) {
        console.warn("MSG91 not configured, using fallback")
        return false
      }

      const response = await fetch("https://api.msg91.com/api/v5/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authkey: this.config.authKey,
        },
        body: JSON.stringify({
        //   template_id: this.config.templateId,
        //   mobile: mobile,
        //   authkey: this.config.authKey,
        //   otp: otp,
        //   sender: this.config.senderId,
        template_id: this.config.templateId,
        country: "91",               // ✅ Add country
        mobile: mobile,              // ✅ Only 10 digit
        otp: otp,
        sender: this.config.senderId,
        }),
      })

      console.log("Response from MSG91:", response)

      const data = await response.json()
      return data.type === "success"
    } catch (error) {
      console.error("MSG91 OTP send error:", error)
      return false
    }
  }
}

const msg91Service = new MSG91Service()

export async function POST(request: NextRequest) {
  try {
    const { mobile, otp } = await request.json()

    if (!mobile || !otp) {
      return NextResponse.json({ success: false, error: "Mobile number and OTP are required" }, { status: 400 })
    }

    const success = await msg91Service.sendOTP(mobile, otp)

    return NextResponse.json({ success })
  } catch (error) {
    console.error("SMS send error:", error)
    return NextResponse.json({ success: false, error: "Failed to send SMS" }, { status: 500 })
  }
}
