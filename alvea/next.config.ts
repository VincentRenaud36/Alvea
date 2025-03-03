import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  output: "export", // On utilise la génération statique

  basePath: "/Alvea", // On définit le chemin de base

  images: {
    unoptimized: true, // On désactive l'optimisation des images
    domains: ['img.youtube.com'], // On autorise le domaine pour charger les images
  },
};

export default nextConfig;
