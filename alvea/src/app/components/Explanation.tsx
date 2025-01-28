"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

function Explanation() {
  const [activeTab, setActiveTab] = useState("mentor");
  const splineRef = useRef<HTMLImageElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (splineRef.current) {
        const rect = splineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = Math.min(1, Math.max(0, (windowHeight - rect.top) / (windowHeight * 0.8)));
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-20 flex flex-col items-center relative"> {/* Ajout de relative pour contenir la spline */}
      {/* Onglets */}
      <div className="flex justify-center mb-12 w-full">
        <button
          className={`text-xl font-extrabold px-4 py-2 mx-2 ${
            activeTab === "mentor" ? "text-jelly-bean border-b-2 border-jelly-bean" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("mentor")}
        >
          Trouver un mentor
        </button>
        <button
          className={`text-xl font-extrabold px-4 py-2 mx-2 ${
            activeTab === "devenir" ? "text-jelly-bean border-b-2 border-jelly-bean" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("devenir")}
        >
          Devenir mentor
        </button>
      </div>

      {/* Titre principal */}
      <h2 className="text-4xl font-extrabold text-center text-jelly-bean mb-16">
        Faciliter votre recherche de projet professionnel
      </h2>

      {/* Spline animée positionnée à l'endroit voulu */}
      <div className="absolute top-[250px] left-[50%] -translate-x-1/2 w-auto h-auto z-0">
        <Image
          ref={splineRef}
          src="/Images/spline.svg"
          alt="Spline Animation"
          width={250}
          height={800}  // Ajustement en fonction de la hauteur de la page
          className="transition-all duration-500"
          style={{
            clipPath: `inset(0 0 ${(1 - scrollProgress) * 100}% 0)`,
          }}
        />
      </div>

      {/* Contenu principal */}
      <div className="relative w-full max-w-5xl flex flex-col items-center z-10">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-20">
          <Image src="/Images/connect.svg" alt="Graph" width={180} height={180} className="md:ml-10" />
          <div className="md:mr-10 max-w-lg text-justify">
            <h3 className="text-xl font-bold text-red-500">Connecter les générations</h3>
            <p className="text-gray-700 mt-2 text-sm">
              Alvéa crée un pont entre les jeunes et les professionnels expérimentés. La plateforme met en relation
              des lycéens et étudiants avec des mentors issus de divers métiers, favorisant les échanges authentiques
              et intergénérationnels. Ce concept valorise la transmission de savoirs et l’accompagnement personnalisé.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full mt-10">
          <Image src="/Images/discover.svg" alt="Graph" width={180} height={180} className="md:mr-10" />
          <div className="md:ml-10 max-w-lg text-justify">
            <h3 className="text-xl font-bold text-jelly-bean">Découvrir des métiers autrement</h3>
            <p className="text-gray-700 mt-2 text-sm">
              Plongez dans la réalité des métiers grâce à des témoignages et des rencontres. Les jeunes peuvent
              explorer des parcours professionnels méconnus, échanger en visioconférence ou en personne avec des
              experts, et accéder à des conseils concrets. Cette approche va au-delà des descriptions théoriques pour
              offrir une expérience immersive.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-10">
          <Image src="/Images/create.svg" alt="Graph" width={180} height={180} className="md:ml-10" />
          <div className="md:mr-10 max-w-lg text-justify">
            <h3 className="text-xl font-bold text-orange-500">Créer un avenir inspirant</h3>
            <p className="text-gray-700 mt-2 text-sm">
              Une guidance sur mesure pour trouver sa voie professionnelle. Alvéa aide les jeunes à clarifier leurs
              choix de carrière grâce à des échanges directs, des outils interactifs, et des parcours personnalisés.
              Chaque interaction construit un avenir plus éclairé et motivant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explanation;
