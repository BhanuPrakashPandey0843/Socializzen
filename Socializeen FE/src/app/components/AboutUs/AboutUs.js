import React from "react";
import {
  TrendingUp,
  BellRing,
  FileText,
  ArrowRightCircle,
} from "lucide-react";
import "./Buttons.css"; // Ensure your custom CSS exists

const FancyIcon = ({ icon: Icon }) => (
  <div className="button w-20 h-20 rounded-full flex items-center justify-center bg-black shadow-lg transition-transform hover:scale-105 relative">
    <span className="fold"></span>
    <div className="points_wrapper">
      {[...Array(10)].map((_, i) => (
        <i key={i} className="point"></i>
      ))}
    </div>
    <span className="inner p-3 text-white z-10">
      <Icon size={40} strokeWidth={2.8} />
    </span>
  </div>
);

const AboutUs = () => {
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

          {/* Fancy About Us Button */}
          <div className="mt-6">
            <button
              type="button"
              className="button bg-black text-white hover:bg-gray-900 transition-all duration-300 px-6 py-3 rounded-full flex items-center gap-3 shadow-lg"
            >
              <span className="fold"></span>
              <div className="points_wrapper">
                {[...Array(10)].map((_, i) => (
                  <i key={i} className="point"></i>
                ))}
              </div>
              <span className="inner flex items-center gap-2 text-white text-base z-10">
                <ArrowRightCircle size={32} strokeWidth={2.8} />
                About Us
              </span>
            </button>
          </div>
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

      {/* Cards - Staircase Effect */}
      <div className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row gap-6 relative z-10">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 translate-y-10">
          <FancyIcon icon={TrendingUp} />
          <h3 className="text-base font-semibold mb-2 mt-4">Growth Strategy</h3>
          <p className="text-sm text-gray-600">
            We design tailored strategies that boost your social presence, build
            your audience, and drive consistent growth across platforms.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 translate-y-0">
          <FancyIcon icon={BellRing} />
          <h3 className="text-base font-semibold mb-2 mt-4">
            Content Creation & Scheduling
          </h3>
          <p className="text-sm text-gray-600">
            Our creative team delivers stunning posts and schedules them at
            optimal times for maximum reach and engagement.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 -translate-y-10">
          <FancyIcon icon={FileText} />
          <h3 className="text-base font-semibold mb-2 mt-4">
            Analytics & Reporting
          </h3>
          <p className="text-sm text-gray-600">
            Gain deep insights into audience behavior, campaign performance, and
            ROI with our easy-to-read monthly reports.
          </p>
        </div>
      </div>

      {/* Decorative Sparkles */}
      <div className="absolute -top-10 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute top-0 right-20 w-32 h-32 bg-pink-100 rounded-full opacity-20 blur-3xl animate-ping"></div>
    </section>
  );
};

export default AboutUs;


