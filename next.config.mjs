/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // Disables ESLint checks during builds
    },
  };
  
  export default nextConfig; // Use export default for .mjs files
  