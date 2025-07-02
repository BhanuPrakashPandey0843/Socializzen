'use client'

import React from 'react'

// ✅ Replace with direct image links (no search page URLs)
const images = [
  'https://www.bing.com/images/search?view=detailV2&ccid=6pX5VdXB&id=6748F601DEC42CA66A42C6B09674A594D0C83217&thid=OIP.6pX5VdXBDcuW4w7MR8BGnQHaHa&mediaurl=https%3a%2f%2fimg.freepik.com%2fpremium-photo%2fbeautiful-girl-green-background-girl-green-generative-ai_888418-17210.jpg&exph=626&expw=626&q=green++baground+girl&simid=608040582802077387&FORM=IRPRST&ck=091BBFF3DDA6B8E67D04FF050CE73C9C&selectedIndex=38&itb=0',
  'https://img.freepik.com/premium-photo/portrait-young-girl-orange-background_416530-31003.jpg?w=900',
  'https://www.bing.com/images/search?q=yellow+background+girl&id=7E752D1D00B1DCBCAE8FF3CF9A6326BB699B3C93&FORM=IACFIR',
  'https://www.bing.com/images/search?view=detailV2&ccid=Hsrtyp0n&id=FD76309FDFCD46D1902B355C73F87F749DB7BDA3&thid=OIP.Hsrtyp0nyhmOzA5O0lci-AHaHh&mediaurl=https%3a%2f%2fimg.freepik.com%2fpremium-photo%2fbeautiful-girl-blue-background_392895-223282.jpg&exph=626&expw=616&q=blue+baground+girl&simid=608037576337522792&FORM=IRPRST&ck=48EF7E565562DD5D665D6C27E16EE87C&selectedIndex=8&itb=0',
  'https://thumbs.dreamstime.com/b/young-cute-girl-pink-background-smiling-adorable-emotional-posing-lifestyle-people-concept-young-cute-girl-pink-background-170752862.jpg',
  'https://tse2.mm.bing.net/th/id/OIP.ftz_iEseeif0kTZUG1B4cAHaO0?rs=1&pid=ImgDetMain&o=7&rm=3',
  'https://static.vecteezy.com/system/resources/previews/025/039/370/non_2x/woman-fashion-happy-beautiful-style-studio-young-yellow-trendy-emotion-stylish-photo.jpg',
  'https://tse3.mm.bing.net/th/id/OIP.JON1OiuE4SCZSz_Qrk51MAHaNK?rs=1&pid=ImgDetMain&o=7&rm=3'
]

export default function HeroCapsules() {
  return (
    <div className="relative w-full h-screen bg-transparent flex items-center justify-center overflow-hidden font-sans">

      {/* Left Column */}
      <div className="absolute left-4 sm:left-12 flex flex-col gap-6 animate-slideDown">
        <Capsule src={images[0]} />
        <Capsule src={images[4]} />
        <Capsule src={images[5]} />
      </div>

      {/* Center Column */}
      <div className="z-10 flex flex-col gap-6 animate-slideUp">
        <Capsule src={images[1]} />
        <Capsule src={images[2]} />
      </div>

      {/* Right Column */}
      <div className="absolute right-4 sm:right-12 flex flex-col gap-6 animate-slideDown">
        <Capsule src={images[3]} />
        <Capsule src={images[2]} />
      </div>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes slideDown {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(25px); }
          }
          @keyframes slideUp {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-25px); }
          }
          .animate-slideDown {
            animation: slideDown 5s ease-in-out infinite;
          }
          .animate-slideUp {
            animation: slideUp 5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  )
}

function Capsule({ src }) {
  return (
    <div className="w-[120px] h-[250px] rounded-full overflow-hidden shadow-xl bg-white transition-transform hover:scale-105 duration-300">
      <img src={src} alt="student" className="w-full h-full object-cover" />
    </div>
  )
}
