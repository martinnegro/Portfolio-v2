/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co','i.postimg.cc','raw.githubusercontent.com','imgur.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config
  },
  optimizeFonts: false,
}

module.exports = nextConfig
