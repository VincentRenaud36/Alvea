import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Forum() {
  return (
    <div className="container mx-auto px-4 py-8 border-2 border-red-500">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Discussions générales</h1>
        <button className="bg-[#1F7A93] text-white px-4 py-2 rounded-md hover:bg-opacity-90">
          Créer un nouveau sujet
        </button>
      </div>


      <div className="space-y-4">
        {/* Liste des discussions */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-start gap-4">
            <Image
              src="/Images/imageprofil.png"
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1">
              <Link href="#" className="text-lg font-semibold hover:text-[#1F7A93]">
                Quel métier choisir après le lycée ?
              </Link>
              <div className="text-sm text-gray-500 mt-1">
                Dernier message il y a 2 heures • 15 réponses
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar avec catégories */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Catégories</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>Stages et carrières</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">15</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Parcours Professionnel</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">8</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Études</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">12</span>
          </div>
        </div>
      </div>
    </div>
  );
}


