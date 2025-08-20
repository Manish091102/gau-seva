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
  
        const response = await fetch("/api/sms/send-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile: mobile,
            otp: otp,
          }),
        })
  
        const data = await response.json()
        return data.success
      } catch (error) {
        console.error("SMS send error:", error)
        return false
      }
    }
  
    async verifyOTP(mobile: string, otp: string): Promise<boolean> {
      try {
        if (!this.config.authKey) {
          return false
        }
  
        const response = await fetch("/api/sms/verify-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile: mobile,
            otp: otp,
          }),
        })
  
        const data = await response.json()
        return data.success
      } catch (error) {
        console.error("OTP verify error:", error)
        return false
      }
    }
  }
  
  export const msg91Service = new MSG91Service()
  