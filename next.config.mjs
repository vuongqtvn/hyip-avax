/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ENDPOINT_GATEWAY: process.env.ENDPOINT_GATEWAY,
    API_PREFIX: process.env.API_PREFIX,
  },
};

export default nextConfig;
