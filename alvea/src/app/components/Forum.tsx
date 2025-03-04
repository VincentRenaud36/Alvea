import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Forum() {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-7xl">
      {/* En-tête responsive */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold px-2">Discussions générales</h1>
        <button className="w-full sm:w-auto bg-jelly-bean text-white px-4 py-2 rounded-md hover:bg-opacity-90 text-sm sm:text-base transition-colors duration-200">
          Créer un nouveau sujet
        </button>
      </div>

      {/* Layout responsive avec grid pour desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        {/* Section principale des discussions */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-3 sm:space-y-4">
          {/* Liste des discussions */}
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="relative flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
                <Image
                  src="/Images/imageprofil.png"
                  alt="Avatar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 2rem, 2.5rem"
                />
              </div>
              <div className="flex-1 min-w-0">
                <Link href="#" className="block text-base sm:text-lg font-semibold hover:text-jelly-bean line-clamp-2 transition-colors duration-200">
                  Quel métier choisir après le lycée ?
                </Link>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 flex items-center gap-2">
                  <span>Dernier message il y a 2 heures</span>
                  <span className="hidden xs:inline">•</span>
                  <span>15 réponses</span>
                </div>
              </div>
            </div>
          </div>

          {/* Répétition pour démonstration */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-3 sm:p-4 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="relative flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
                  <Image
                    src="/Images/imageprofil.png"
                    alt="Avatar"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 2rem, 2.5rem"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Link href="#" className="block text-base sm:text-lg font-semibold hover:text-jelly-bean line-clamp-2 transition-colors duration-200">
                    Discussion {i + 2}
                  </Link>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1 flex items-center gap-2">
                    <span>Dernier message il y a {i + 1} heures</span>
                    <span className="hidden xs:inline">•</span>
                    <span>{10 + i} réponses</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar avec catégories */}
        <div className="lg:col-span-4 xl:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Catégories</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center hover:bg-gray-50 p-2 rounded-md transition-colors duration-200">
                <span className="text-sm sm:text-base">Stages et carrières</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full text-xs sm:text-sm">15</span>
              </div>
              <div className="flex justify-between items-center hover:bg-gray-50 p-2 rounded-md transition-colors duration-200">
                <span className="text-sm sm:text-base">Parcours Professionnel</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full text-xs sm:text-sm">8</span>
              </div>
              <div className="flex justify-between items-center hover:bg-gray-50 p-2 rounded-md transition-colors duration-200">
                <span className="text-sm sm:text-base">Études</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full text-xs sm:text-sm">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


