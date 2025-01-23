/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // This disables ESLint checks during builds
    },
  };
  
  module.exports = nextConfig; // Use this to export the configuration
  