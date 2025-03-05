"use client";

import Image from "next/image";
import React from "react";

export default function Carousel() {
  const mentors = [
    { id: 1, name: "Jean Lambert", role: "Vendeur de marron", image: "/Images/1.PNG" },
    { id: 2, name: "Camille Moreau", role: "Couturière", image: "/Images/2.PNG" },
    { id: 3, name: "Ismaël Laurens", role: "Libraire", image: "/Images/3.PNG" },
    { id: 4, name: "Bernard Alban", role: "Vendeur", image: "/Images/4.PNG" },
    { id: 5, name: "Jeanne Alliot", role: "Couturière", image: "/Images/5.PNG" },
  ];

  return (
    <div className="bg-white pb-16 mt-24">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Pourquoi se limiter à un <span className="bg-acquamarine px-1">seul mentor</span> quand <br />
            vous en avez des <span className="bg-texas-rose px-1">centaines</span>
          </h2>
        </div>

        {/* 
          On masque ce bloc en dessous de 1280px
          (donc < 1280px = hidden, >= 1280px = block)
        */}
        <div className="hidden xl:block w-full mt-8">
          <div className="grid grid-cols-5 gap-6 items-start">
            {mentors.map((mentor, index) => (
              <div
                key={mentor.id}
                className={`relative w-52 h-52 sm:w-60 sm:h-60
                  ${index === 1 || index === 3 ? "mt-10" : ""}
                  ${index === 2 ? "mt-20" : ""}
                `}
              >
                {/* Conteneur arrondi + overflow-hidden */}
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  {/* L'image prend toute la place */}
                  <Image
                    src={mentor.image}
                    alt={`Photo de ${mentor.name}`}
                    fill
                    className="object-cover"
                  />

                  {/* Dégradé noir (bas -> haut), sur toute la surface */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black from-25% to-transparent to-50% pointer-events-none" />

                  {/* Dégradé blanc sur la 1ère image (index 0) */}
                  {index === 0 && (
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white to-transparent pointer-events-none" />
                  )}

                  {/* Dégradé blanc sur la 5ème image (index 4) */}
                  {index === 4 && (
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-l from-white to-transparent pointer-events-none" />
                  )}

                  {/* Texte en bas, par-dessus les dégradés */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                    <h3 className="font-bold text-lg">{mentor.name}</h3>
                    <p className="text-sm font-normal">{mentor.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
