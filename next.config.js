/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  env: {
    SIWE_SECRET:
      "b0bf6fa30b524d8a7d27692efe66d0529c3d7f06c754571720faef8e6ccabe17",
  },
};

module.exports = nextConfig;
