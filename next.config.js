/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['azure-storage-domain.com'],
  },
  env: {
    AZURE_REGION: process.env.AZURE_REGION,
    TATUM_API_KEY: process.env.TATUM_API_KEY,
    WEBAUTH_CLIENT_ID: process.env.WEBAUTH_CLIENT_ID,
    DATABASE_URL: process.env.DATABASE_URL,
    SMART_CONTRACT_NETWORK: process.env.SMART_CONTRACT_NETWORK
  }
};

module.exports = nextConfig;
