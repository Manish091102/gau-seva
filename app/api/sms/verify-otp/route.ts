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

  async verifyOTP(mobile: string, otp: string): Promise<boolean> {
    try {
      if (!this.config.authKey) {
        return false
      }

      const response = await fetch("https://api.msg91.com/api/v5/otp/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authkey: this.config.authKey,
        },
        body: JSON.stringify({
          mobile: mobile,
          otp: otp,
          authkey: this.config.authKey,
        }),
      })

      const data = await response.json()
      return data.type === "success"
    } catch (error) {
      console.error("MSG91 OTP verify error:", error)
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

    const success = await msg91Service.verifyOTP(mobile, otp)

    return NextResponse.json({ success })
  } catch (error) {
    console.error("OTP verify error:", error)
    return NextResponse.json({ success: false, error: "Failed to verify OTP" }, { status: 500 })
  }
}
