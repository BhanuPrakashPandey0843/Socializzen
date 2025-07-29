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
          <p className="text-gray-500 text-sm mb-2">About us</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Empowering Brands with Smarter Social Strategies
          </h1>
        </div>

        {/* Right Side Paragraph */}
        <div className="text-sm text-gray-500 mt-2 md:mt-10 md:pl-10 leading-relaxed">
          <p>
            We help brands grow their digital presence through innovative
            content, data-driven strategies, and full-service social media
            management.
          </p>
          <p className="mt-2">
            From crafting viral campaigns to managing your reputation online —
            we make your brand shine on every platform.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto mt-16 grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
          <ChartLineUp
            size={56}
            weight="duotone"
            className="mx-auto mb-4 text-blue-600"
          />
          <h3 className="text-lg font-semibold mb-2">Data-Driven Campaigns</h3>
          <p className="text-gray-500 text-sm">
            Optimize your social presence with analytics-backed strategies.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
          <Megaphone
            size={56}
            weight="duotone"
            className="mx-auto mb-4 text-pink-500"
          />
          <h3 className="text-lg font-semibold mb-2">Content Creation</h3>
          <p className="text-gray-500 text-sm">
            Engaging posts, reels, and campaigns tailored for your audience.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
          <UsersThree
            size={56}
            weight="duotone"
            className="mx-auto mb-4 text-purple-500"
          />
          <h3 className="text-lg font-semibold mb-2">Community Management</h3>
          <p className="text-gray-500 text-sm">
            Build strong relationships and interact with your audience.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
          <ShieldCheck
            size={56}
            weight="duotone"
            className="mx-auto mb-4 text-green-500"
          />
          <h3 className="text-lg font-semibold mb-2">Brand Reputation</h3>
          <p className="text-gray-500 text-sm">
            Monitor and protect your brand image across platforms.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
          <RocketLaunch
            size={56}
            weight="duotone"
            className="mx-auto mb-4 text-yellow-500"
          />
          <h3 className="text-lg font-semibold mb-2">Viral Campaigns</h3>
          <p className="text-gray-500 text-sm">
            Creative strategies to maximize reach and engagement.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
          <ChartBar
            size={56}
            weight="duotone"
            className="mx-auto mb-4 text-red-500"
          />
          <h3 className="text-lg font-semibold mb-2">Performance Tracking</h3>
          <p className="text-gray-500 text-sm">
            Get insights with real-time performance analytics.
          </p>
        </div>
      </div>
    </section>
  );
}
