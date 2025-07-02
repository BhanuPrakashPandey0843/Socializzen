/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['wallpaperaccess.com', 'images.unsplash.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/assets/',
            outputPath: 'static/assets/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
  experimental: {
    turbo: false, // 🔥 This disables Turbopack, and uses Webpack
  },
};

export default nextConfig;
