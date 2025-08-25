/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "wallpaperaccess.com",
      "images.unsplash.com",
      "i.pinimg.com",
      "digitaldock.com.au",
      "cdni.iconscout.com",
      "cdn-icons-png.flaticon.com",
    ],
  },
  webpack(config) {
    // Add support for 3D models
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/assets/",
            outputPath: "static/assets/",
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    // Add support for video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      type: "asset/resource",
      generator: {
        filename: "static/videos/[name].[hash][ext]",
      },
    });

    return config;
  },
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
