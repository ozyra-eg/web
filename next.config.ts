/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [ // ✅ Add your image host here
      "storage.googleapis.com",
      "picsum.photos"
    ],
  },
};

module.exports = nextConfig;