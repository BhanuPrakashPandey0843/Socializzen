'use client';

import React from "react";

const VideoSection = () => {
  return (
    <section className="w-screen bg-black flex flex-col items-center justify-center py-4">
      <div className="w-full max-w-7xl h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px] overflow-hidden rounded-xl shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1&controls=1&rel=0"
          title="Project Showcase Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
