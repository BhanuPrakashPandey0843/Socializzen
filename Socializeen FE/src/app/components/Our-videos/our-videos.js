'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your API key
const CHANNEL_ID = "UCxxxxxxxxxxxxxxxx"; // Replace with actual Channel ID

const OurVideos = () => {
  const [videos, setVideos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Step 1: Get Uploads Playlist ID
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const channelData = await channelRes.json();
        const uploadsPlaylistId =
          channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // Step 2: Get Videos from Playlist
        const videosRes = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=20&key=${API_KEY}`
        );
        const videosData = await videosRes.json();

        const videoCards = videosData.items.map((item) => ({
          id: item.snippet.resourceId.videoId,
          name: item.snippet.title,
          type: "youtube",
          url: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}?rel=0&modestbranding=1`,
          caption: item.snippet.description.slice(0, 100) || "No description provided.",
          bgColor: "bg-yellow-100"
        }));

        setVideos(videoCards);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section className="relative bg-white text-black px-6 md:px-16 py-20 font-sans overflow-hidden">
      {/* Intro Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        <div>
          <p className="text-gray-500 text-sm mb-2">About us</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Empowering Brands with Smarter Social Strategies
          </h1>
        </div>
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

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-7xl mx-auto">
        {videos.slice(0, visibleCount).map((video, index) => (
          <motion.div
            key={video.id}
            className="flex flex-col gap-4 w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={video.url}
                title={video.name}
                width="100%"
                height="230"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>
            <div className={`p-4 rounded-xl shadow-md ${video.bgColor}`}>
              <p className="text-gray-700 text-sm">{video.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < videos.length && (
        <motion.button
          onClick={handleLoadMore}
          className="block mx-auto px-6 py-3 mt-10 text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Load More
        </motion.button>
      )}
    </section>
  );
};

export default OurVideos;
