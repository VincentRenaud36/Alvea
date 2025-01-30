import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['img.youtube.com'], // On autorise le domaine pour charger les images
  },
};

export default nextConfig;
