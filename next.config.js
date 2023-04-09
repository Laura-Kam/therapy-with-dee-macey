// next.config.js

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  presets: ["next/babel"],

  webpackDevMiddleware: (config) => {
    // Use polling for file watching in Docker containers and virtual machines
    config.watchOptions.poll = 300;
    return config;
  },
};

module.exports = nextConfig;
