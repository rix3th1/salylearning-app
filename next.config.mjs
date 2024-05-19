/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dplrm9wdc/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
