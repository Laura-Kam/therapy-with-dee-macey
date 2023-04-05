/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  presets: ["next/babel"],
};

module.exports = nextConfig;

// module.exports = {
//   images: {
//     domains: ['images.unsplash.com'],
//   },
// };
