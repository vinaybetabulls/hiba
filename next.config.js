/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST_URL: process.env.HOST_URL,
    NEXT_PUBLIC_HOST_URL: process.env.NEXT_HOST_URL,
  },
};

module.exports = nextConfig;
