// "use client"

// import { useRef } from "react"
// import { Button } from "@/components/ui/button"
// import { Download, Share2 } from "lucide-react"
// import { QRCodeSVG } from "qrcode.react"
// import Image from "next/image"
// import logo from "./assets/image.png"

// interface User {
//   id: string
//   name: string
//   state: string
//   mobile: string
//   photo?: string
//   membershipNumber: string
//   createdAt: string
// }

// interface MembershipCardProps {
//   user: User
// }

// export default function MembershipCard({ user }: MembershipCardProps) {
//   const cardRef = useRef<HTMLDivElement>(null)

//   const handleShare = async () => {
//     if (!cardRef.current) return
  
//     try {
//       const { toBlob } = await import("html-to-image")
//       const blob = await toBlob(cardRef.current, {
//         cacheBust: true,
//         backgroundColor: "#ffffff",
//       })
  
//       if (blob && navigator.share) {
//         const file = new File(
//           [blob],
//           `gau-seva-membership-${user.membershipNumber}.png`,
//           { type: "image/png" }
//         )
  
//         await navigator.share({
//           title: "My Gau Seva Membership Card",
//           text: "Check out my Gau Seva membership card!",
//           files: [file],
//         })
//       }
//     } catch (error) {
//       console.error("Failed to share card:", error)
//     }
//   }
  

//   // const handleDownload = async () => {
//   //   if (!cardRef.current) return
  
//   //   try {
//   //     const { toPng } = await import("html-to-image")
  
//   //     const dataUrl = await toPng(cardRef.current, {
//   //       cacheBust: true,
//   //       backgroundColor: "#ffffff", // force white background
//   //     })
  
//   //     const link = document.createElement("a")
//   //     link.download = `gau-seva-membership-${user.membershipNumber}.png`
//   //     link.href = dataUrl
//   //     link.click()
//   //   } catch (error) {
//   //     console.error("Failed to download card:", error)
//   //   }
//   // }

//   const handleDownload = async () => {
//     if (!cardRef.current) return;
  
//     try {
//       const { toPng } = await import("html-to-image");
  
//       // Temporarily force desktop width for export
//       const originalWidth = cardRef.current.style.width;
//       const originalTransform = cardRef.current.style.transform;
  
//       cardRef.current.style.width = "640px";   // desktop size
//       cardRef.current.style.transform = "scale(1)"; // reset scaling
  
//       const dataUrl = await toPng(cardRef.current, {
//         cacheBust: true,
//         backgroundColor: "#ffffff",
//         pixelRatio: 3, // high resolution
//       });
  
//       // Restore original size after export
//       cardRef.current.style.width = originalWidth;
//       cardRef.current.style.transform = originalTransform;
  
//       // Download
//       const link = document.createElement("a");
//       link.download = `gau-seva-membership-${user.membershipNumber}.png`;
//       link.href = dataUrl;
//       link.click();
//     } catch (error) {
//       console.error("Failed to download card:", error);
//     }
//   };
  
  

//   const qrData = JSON.stringify({
//     name: user.name,
//     membershipNumber: user.membershipNumber,
//     state: user.state,
//     mobile: user.mobile,
//     organization: "Gau Seva",
//   })

//   return (
//     <div className="p-6">
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold text-center mb-2">Your Membership Card</h3>
//         <p className="text-sm text-gray-600 text-center">
//           Congratulations! Your official Gau Seva membership card is ready.
//         </p>
//       </div>

//       {/* Membership Card */}
//       <div
//         ref={cardRef}
//         className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-orange-200 md:aspect-[1.6/1] aspect-[1.6/1]"
//         style={{
//           backgroundColor: "#ffffff",
//           color: "#000000",
//         }}
//       >
//         {/* Header Section - Orange Background */}
//         <div className="bg-orange-500 px-6 py-4 relative md:py-2">
//           <div className="flex items-center justify-between">
//             {/* Left Side - Logo and Organization Name */}
//             <div className="flex items-center gap-3">
//               {/* Logo Circle */}
//               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
//                 {/* <Image src={logo} alt="GauSeva" width={36} height={36} className="object-contain" /> */}
//                 <img src={logo.src} alt="GauSeva" className="w-9 h-9 object-contain" />
//               </div>
//               <div>
//                 <h2 className="text-lg font-bold text-black">GauSeva</h2>
//                 <p className="text-xs text-black">Cow Welfare Organization</p>
//               </div>
//             </div>
            
//             {/* Right Side - Contact Info */}
//             <div className="text-right text-black text-xs">
//               <p>Registered Address</p>
//               <p>www.gausevabharat.com |</p>
//               {/* <p>email here</p> */}
//             </div>
//           </div>
//         </div>

//         {/* Main Content - White Background */}
//         <div className="p-6 bg-white relative">
//           <div className="flex justify-between items-start">
//             {/* Left Side - Membership Details */}
//             <div className="flex-1">
//               {/* <h3 className="text-xl font-bold text-black mb-4">MEMBERSHIP CARD</h3> */}
//               <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-4">
//   MEMBERSHIP CARD
// </h3>

//               <div className="space-y-2 text-xs sm:text-sm md:text-base">
//                 <div className="flex">
//                   <span className="font-medium text-gray-700 w-16">ID:</span>
//                   <span className="text-black">{user.mobile}</span>
//                 </div>
//                 <div className="flex">
//                   <span className="font-medium text-gray-700 w-16">Name:</span>
//                   <span className="text-black uppercase">{user.name}</span>
//                 </div>
//                 <div className="flex">
//                   <span className="font-medium text-gray-700 w-16">State:</span>
//                   <span className="text-black">{user.state}</span>
//                 </div>
//                 <div className="flex">
//                   <span className="font-medium text-gray-700 w-16">District:</span>
//                   <span className="text-black">{(user as any).district || "-"}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Photo and Badges */}
//             <div className="flex flex-col items-end gap-3">
//               {/* User Photo */}
//               <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden border-2 border-orange-200">
//                 {user.photo ? (
//                   <img src={user.photo} alt={user.name} className="w-full h-full object-cover" />
//                 ) : (
//                   <div className="w-full h-full bg-gray-300 flex items-center justify-center">
//                     <span className="text-2xl text-gray-600">👤</span>
//                   </div>
//                 )}
//               </div>
              
//               {/* MEMBER Badge */}
//               <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
//                 MEMBER
//               </div>
              
//               {/* QR Code */}
//               {/* <div className="bg-white p-1 rounded border">
//                 <QRCodeSVG value={qrData} size={48} level="M" includeMargin={false} />
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex gap-3 mt-6">
//         <Button onClick={handleDownload} className="flex-1 bg-orange-600 hover:bg-orange-700">
//           <Download className="mr-2 h-4 w-4" />
//           Download Card
//         </Button>
//         <Button onClick={handleShare} variant="outline" className="flex-1 bg-transparent">
//           <Share2 className="mr-2 h-4 w-4" />
//           Share Card
//         </Button>
//       </div>

//       <div className="mt-4 p-4 bg-orange-50 rounded-lg">
//         <h4 className="font-semibold text-orange-900 mb-2">Card Benefits:</h4>
//         <ul className="text-sm text-orange-800 space-y-1">
//           <li>• Official recognition as Gau Seva member</li>
//           <li>• Access to member-only events and programs</li>
//           <li>• Priority support for cow welfare initiatives</li>
//           <li>• Digital verification through QR code</li>
//         </ul>
//       </div>
//     </div>
//   )
// }

"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, Share2 } from "lucide-react"
import Image from "next/image"
import logo from "./assets/image.png"
import "./membershipCard.css"

interface User {
  id: string
  name: string
  state: string
  mobile: string
  photo?: string
  membershipNumber: string
  createdAt: string
}

interface MembershipCardProps {
  user: User
}

export default function MembershipCard({ user }: MembershipCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (!cardRef.current) return
    try {
      const { toPng } = await import("html-to-image")

      // Add download mode for big fonts and full desktop size
      cardRef.current.classList.add("download-mode")

      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        backgroundColor: "#ffffff",
      })

      // Remove download-mode after generating image
      cardRef.current.classList.remove("download-mode")

      const link = document.createElement("a")
      link.download = `gau-seva-membership-${user.membershipNumber}.png`
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.error("Failed to download card:", error)
    }
  }

  const handleShare = async () => {
    if (!cardRef.current) return
    try {
      const { toBlob } = await import("html-to-image")
      const blob = await toBlob(cardRef.current, { cacheBust: true, backgroundColor: "#ffffff" })
      if (blob && navigator.share) {
        const file = new File([blob], `gau-seva-membership-${user.membershipNumber}.png`, { type: "image/png" })
        await navigator.share({ title: "My Gau Seva Membership Card", text: "Check out my Gau Seva membership card!", files: [file] })
      }
    } catch (error) {
      console.error("Failed to share card:", error)
    }
  }

  return (
    <div className="membership-card-container">
      <div className="preview-header mb-6">
        <h3 className="text-lg font-semibold text-center mb-2">Your Membership Card</h3>
        <p className="text-sm text-gray-600 text-center">
          Congratulations! Your official Gau Seva membership card is ready.
        </p>
      </div>

      <div
        ref={cardRef}
        className="card w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-orange-200 md:aspect-[1.6/1] aspect-[1.6/1]"
      >
        {/* Header */}
        <div className="bg-orange-500 px-6 py-4 relative md:py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img src={logo.src} alt="GauSeva" className="w-9 h-9 object-contain" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-black">GauSeva</h2>
                <p className="text-xs text-black">Cow Welfare Organization</p>
              </div>
            </div>
            <div className="text-right text-black text-xs">
              <p>Registered Address</p>
              <p>www.gausevabharat.com |</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-white relative">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-4 card-title">
                MEMBERSHIP CARD
              </h3>
              <div className="space-y-2 text-xs sm:text-sm md:text-base card-content">
                <div className="flex">
                  <span className="font-medium text-gray-700 w-16">ID:</span>
                  <span className="text-black">{user.mobile}</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-700 w-16">Name:</span>
                  <span className="text-black uppercase">{user.name}</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-700 w-16">State:</span>
                  <span className="text-black">{user.state}</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-700 w-16">District:</span>
                  <span className="text-black">{(user as any).district || "-"}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3">
              <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden border-2 border-orange-200">
                {user.photo ? (
                  <img src={user.photo} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-2xl text-gray-600">👤</span>
                  </div>
                )}
              </div>

              <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                MEMBER
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        <Button onClick={handleDownload} className="flex-1 bg-orange-600 hover:bg-orange-700">
          <Download className="mr-2 h-4 w-4" /> Download Card
        </Button>
        <Button onClick={handleShare} variant="outline" className="flex-1 bg-transparent">
          <Share2 className="mr-2 h-4 w-4" /> Share Card
        </Button>
      </div>

      <div className="mt-4 p-4 bg-orange-50 rounded-lg">
        <h4 className="font-semibold text-orange-900 mb-2">Card Benefits:</h4>
        <ul className="text-sm text-orange-800 space-y-1">
          <li>• Official recognition as Gau Seva member</li>
          <li>• Access to member-only events and programs</li>
          <li>• Priority support for cow welfare initiatives</li>
          <li>• Digital verification through QR code</li>
        </ul>
      </div>
    </div>
  )
}
