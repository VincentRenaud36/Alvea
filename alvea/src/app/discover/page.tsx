"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Filter {
  category: string;
  options: string[];
}

interface Content {
  name: string;
  type: "video" | "podcast";
  profession: string;
  image: string;
}

const filters: Filter[] = [
  {
    category: "Types de contenu",
    options: ["Vidéo courte", "Podcast"],
  },
  {
    category: "Secteurs d'activité",
    options: [
      "Agriculture - pêche", "BTP", "Banque - Assurance - finance",
      "Distribution - Commerce de gros", "Enseignement - formation",
      "Immobilier", "Industrie agro - alimentaire", "Industrie Auto - méca - navale",
      "Industrie aérospatiale", "Industrie manufacturière", "Chimie",
      "Industrie pharmaceutique", "Industrie pétrolière - pétrochimie",
      "Industrie high-tech - télécom", "Média - internet - communication",
      "Restauration"
    ],
  },
  {
    category: "Expérience",
    options: ["Brevet", "CAP", "Bac", "Bac +2", "Bac +3", "Bac +5", "Bac +8"],
  },
  {
    category: "Rencontre",
    options: ["Visio", "Présentiel"],
  },
  {
    category: "Fréquence",
    options: ["Week-end", "Semaine", "Vacances"],
  },
];

const contents: Content[] = Array.from({ length: 50 }, (_, i) => ({
  name: `Personne ${i + 1}`,
  type: i % 2 === 0 ? "video" : "podcast",
  profession: [
    "Responsable magasin",
    "Kinésithérapeute",
    "Couturière",
    "Avocat",
    "Architecte",
    "Chef cuisinière",
    "Développeur web",
    "Danseuse",
    "Médecin généraliste",
    "Photographe"
  ][i % 10],
  image: `/Images/person-${(i % 10) + 1}.jpg`,
}));

const Discover = () => {
  const [search, setSearch] = useState("");
  const [expandedFilters, setExpandedFilters] = useState<{ [key: string]: boolean }>(
    filters.reduce((acc, { category }) => ({ ...acc, [category]: true }), {})
  );
  const isLoggedIn = true; // Supposons que l'utilisateur soit connecté

  const toggleFilter = (category: string) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <div className="container mx-auto px-4 py-8 flex gap-8">
        <div className="w-1/4 hidden md:block">
          <h3 className="font-bold text-lg mb-4 text-primary">Filtrer</h3>
          {filters.map(({ category, options }) => (
            <div key={category} className="mb-4">
              <h4
                className="font-semibold mb-2 flex justify-between cursor-pointer"
                onClick={() => toggleFilter(category)}
              >
                {category}
                <span>{expandedFilters[category] ? "▲" : "▼"}</span>
              </h4>
              {expandedFilters[category] && (
                <ul className="space-y-2">
                  {options.map((option) => (
                    <li key={option} className="flex items-center gap-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" onChange={() => {}} />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="w-full md:w-3/4 columns-3 gap-6 space-y-6">
          {contents.map((content, index) => (
            <div key={index} className={`rounded-lg overflow-hidden shadow-lg flex ${content.type === "podcast" ? "bg-jelly-bean text-white p-4 items-center gap-4 rounded-md w-full h-24" : "bg-white w-full aspect-[9/16] flex-col"}`}>
              {content.image && (
                <Image
                  src={content.image}
                  alt={content.name}
                  width={content.type === "podcast" ? 50 : 270}
                  height={content.type === "podcast" ? 50 : 480}
                  className={content.type === "podcast" ? "rounded-full" : "w-full h-auto object-cover"}
                />
              )}
              <div className="p-4 text-center flex flex-col justify-between flex-grow">
                <h3 className="font-semibold text-lg truncate">{content.name}</h3>
                <p className="text-sm text-gray-600 truncate">{content.profession}</p>
              </div>
              {content.type === "podcast" && (
                <div className="bg-white text-jelly-bean rounded-full w-8 h-8 flex items-center justify-center shadow-md">▶</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer isLoggedIn={isLoggedIn} />
    </>
  );
};

export default Discover;