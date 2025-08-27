"use client";

import {
  ChartLineUp,
  Megaphone,
  UsersThree,
  ShieldCheck,
  RocketLaunch,
  ChartBar,
} from "@phosphor-icons/react";

export default function Ouroffering() {
  return (
    <section className="relative bg-white text-black px-6 md:px-16 py-20 font-sans overflow-hidden">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        {/* Left Side Heading */}
        <div>
          <p className="text-gray-500 text-sm mb-2">About Socializzen</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#7654A0] to-[#A78BFA] bg-clip-text text-transparent">
            Empowering Brands with Smarter Social Strategies
          </h1>
        </div>

        {/* Right Side Paragraph */}
        <div className="text-sm text-gray-600 mt-2 md:mt-10 md:pl-10 leading-relaxed">
          <p>
            At <span className="text-[#7654A0] font-semibold">Socializzen</span>, 
            we help brands grow their digital presence through innovative 
            content, data-driven strategies, and full-service social media 
            management.
          </p>
          <p className="mt-3">
            From crafting viral campaigns to managing your reputation online — 
            we make your brand shine on every platform.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {[
          {
            icon: <ChartLineUp size={56} weight="duotone" className="mx-auto mb-4 text-[#7654A0]" />,
            title: "Data-Driven Campaigns",
            desc: "Optimize your social presence with analytics-backed strategies.",
          },
          {
            icon: <Megaphone size={56} weight="duotone" className="mx-auto mb-4 text-[#7654A0]" />,
            title: "Content Creation",
            desc: "Engaging posts, reels, and campaigns tailored for your audience.",
          },
          {
            icon: <UsersThree size={56} weight="duotone" className="mx-auto mb-4 text-[#7654A0]" />,
            title: "Community Management",
            desc: "Build strong relationships and interact with your audience.",
          },
          {
            icon: <ShieldCheck size={56} weight="duotone" className="mx-auto mb-4 text-[#7654A0]" />,
            title: "Brand Reputation",
            desc: "Monitor and protect your brand image across platforms.",
          },
          {
            icon: <RocketLaunch size={56} weight="duotone" className="mx-auto mb-4 text-[#7654A0]" />,
            title: "Viral Campaigns",
            desc: "Creative strategies to maximize reach and engagement.",
          },
          {
            icon: <ChartBar size={56} weight="duotone" className="mx-auto mb-4 text-[#7654A0]" />,
            title: "Performance Tracking",
            desc: "Get insights with real-time performance analytics.",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl p-8 text-center border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            {card.icon}
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{card.title}</h3>
            <p className="text-gray-500 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
