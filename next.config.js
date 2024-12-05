/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development practices
  reactStrictMode: true,

  // Disable x-powered-by header for security
  poweredByHeader: false,

  eslint: {
    // Remove useEslintrc and extensions properties if they exist
    // Only keep the essential ESLint config here
    dirs: ["pages", "components", "lib", "src"], // Optional: specify directories to lint
    ignoreDuringBuilds: false, // Optional: set to true to ignore ESLint errors during builds
  },

  // Configure image domains if you're using next/image
  images: {
    domains: [
      // Add your image domains here, for example:
      // 'example.com',
      // 'images.unsplash.com'
    ],
  },

  // Enable page-level static exports
  output: "standalone",

  // Configure redirects if needed
  async redirects() {
    return [
      // Example redirect:
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // }
    ];
  },

  // Configure rewrites if needed
  async rewrites() {
    return [
      // Example rewrite:
      // {
      //   source: '/api/:path*',
      //   destination: 'https://api.example.com/:path*'
      // }
    ];
  },
};

module.exports = nextConfig;
