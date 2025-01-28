'use   client'

import Image from 'next/image'
import React, { useState } from 'react'

function Explanation() {
    const [activeTab, setActiveTab] = useState("mentor");
  return (
    <div className="mt-20">
         <div className="flex justify-center mb-12">
            <button
            className={`text-lg font-bold px-4 py-2 mx-2 ${activeTab === "mentor" ? "text-jelly-bean border-b-2 border-jelly-bean" : "text-gray-400"}`}
            onClick={() => setActiveTab("mentor")}
            >
             Trouver un mentor
            </button>
            <button
            className={`text-lg font-bold px-4 py-2 mx-2 ${activeTab === "devenir" ? "text-jelly-bean border-b-2 border-jelly-bean" : "text-gray-400"}`}
            onClick={() => setActiveTab("devenir")}
            >
            Devenir mentor
            </button>
        </div>

        <h2 className="text-3xl font-bold text-center text-jelly-bean">
          Faciliter votre recherche de projet professionnel
        </h2>
        <div className="mt-10 space-y-12">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <Image
                src="/Images/imageprofil.png"
                alt="Graph"
                width={50}
                height={50}
                className="w-1/3"
            />
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-red-500">Connecter les générations</h3>
              <p className="text-gray-700 mt-2">
                Alvéa crée un pont entre les jeunes et les professionnels expérimentés. La plateforme met en relation des lycéens et étudiants avec des mentors issus de divers métiers.
              </p>
            </div>
          </div>
          {/* Section 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-jelly-bean">Découvrir des métiers autrement</h3>
              <p className="text-gray-700 mt-2">
                Plongez dans la réalité des métiers grâce à des témoignages et des rencontres. Les jeunes peuvent explorer des parcours professionnels méconnus.
              </p>
            </div>
            <Image
                src="/Images/imageprofil.png"
                alt="Graph"
                width={50}
                height={50}
                className="w-1/3"
            />
          </div>
          {/* Section 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <Image
                    src="/Images/imageprofil.png"
                    alt="Graph"
                    width={50}
                    height={50}
                    className="w-1/3"
                />
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-orange-500">Créer un avenir inspirant</h3>
              <p className="text-gray-700 mt-2">
                Une guidance sur mesure pour trouver sa voie professionnelle. Alvéa aide les jeunes à clarifier leurs choix de carrière grâce à des échanges directs.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Explanation