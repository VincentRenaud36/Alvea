"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

/* -----------------------------------------------------
  Composant pour la miniature vidéo (type "YouTube Shorts")
------------------------------------------------------ */
function VideoThumbnail({ thumbUrl, alt }: { thumbUrl: string; alt: string }) {
  const [imageUrl, setImageUrl] = useState(thumbUrl);

  useEffect(() => {
    // Vérifie si l'image HD maxresdefault est dispo, sinon bascule sur hqdefault
    fetch(thumbUrl)
      .then((res) => {
        if (!res.ok) {
          setImageUrl(thumbUrl.replace("maxresdefault", "hqdefault"));
        }
      })
      .catch(() => {
        setImageUrl(thumbUrl.replace("maxresdefault", "hqdefault"));
      });
  }, [thumbUrl]);

  return (
    <div className="aspect-[9/16] relative w-full overflow-hidden bg-black rounded-2xl">
      {/* Wrapper qui force la largeur à 400% et se décale pour centrer l'image */}
      <div className="absolute top-0 left-[-150%] w-[400%] h-full">
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}

/* -----------------------------------------------------
  Page principale
------------------------------------------------------ */
export default function Home() {
  const isLoggedIn = true;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  // Ouvrir/fermer la modal vidéo
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Données du calendrier (adaptées au screenshot)
  const days = [
    {
      dayName: "lun",
      date: "2 déc.",
      timeslots: ["10:30", "11:00", "11:30", "12:00", "12:30"],
    },
    {
      dayName: "mar",
      date: "3 déc.",
      timeslots: ["14:30", "15:00", "16:30"],
    },
    {
      dayName: "mer",
      date: "4 déc.",
      timeslots: [], // vide
    },
    {
      dayName: "jeu",
      date: "5 déc.",
      timeslots: ["13:00", "15:00", "16:30"],
    },
    {
      dayName: "ven",
      date: "6 déc.",
      timeslots: ["16:00", "16:30", "17:00"],
    },
    {
      dayName: "sam",
      date: "7 déc.",
      timeslots: [], // vide
    },
    {
      dayName: "dim",
      date: "8 déc.",
      timeslots: [], // vide
    },
  ];

  // On calcule le nb max de créneaux sur la semaine
  const maxSlots = Math.max(...days.map((d) => d.timeslots.length));

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />

      <div className="max-w-7xl mx-auto mt-8 px-4">
        {/* Bouton RETOUR */}
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[var(--jelly-bean)] hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Retour</span>
          </button>
        </div>

        {/* Profil / Identité */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex">
            {/* Photo de profil agrandie */}
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
              <Image
                src="/Images/7-1.PNG"
                alt="Avatar"
                width={80}
                height={80}
                className="object-cover object-center"
              />
            </div>
            <div className="ml-4 text-xl">
              <p className="font-semibold">Robert Dubois</p>
              <p>Responsable magasin</p>
            </div>
          </div>
          <Link href="/messagerie">
            <button className="bg-[var(--bittersweet)] text-white px-5 py-2 rounded-full text-md font-semibold">
              Contacter
            </button>
          </Link>
        </div>

        {/* Disponibilité */}
        <div>
          <h2 className="relative text-[1.5rem] font-semibold inline-block">
            <span className="relative z-10">Disponibilité</span>
            <span className="absolute bottom-1 -left-2 w-full h-3 bg-[var(--acquamarine)] -z-10"></span>
          </h2>
          <div className="flex gap-4 mt-2 font-medium">
            <p className="text-[var(--jelly-bean)]">Semaine</p>
            <p className="text-[var(--jelly-bean)]">Week-end</p>
            <p className="text-gray-400">Vacances scolaires</p>
          </div>
          <hr className="my-6" />

          {/* Vidéo + Présentation */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Container 9/16 => miniature 16/9 recadrée */}
            <div
              className="bg-gray-200 rounded-2xl cursor-pointer w-full md:w-[300px] lg:w-[1080px] mx-auto"
              onClick={openModal}
            >
              <VideoThumbnail
                thumbUrl="https://img.youtube.com/vi/IfVsIMaMvDU/maxresdefault.jpg"
                alt="Miniature de la vidéo"
              />
            </div>

            <div className="lg:ml-6 px-4">
              <h3 className="text-2xl font-semibold">Présentation</h3>
              <p className="mt-4">
                Je m&apos;appelle Robert Dubois, j&apos;ai 47 ans, et je suis responsable de magasin au Comptoir de
                Mathilde, une enseigne spécialisée dans les gourmandises artisanales. Mon rôle consiste à gérer
                l&apos;ensemble des opérations du magasin : de l&apos;organisation des équipes à la gestion des stocks,
                en passant par l&apos;accueil et le conseil auprès des clients. Je veille également à ce que nos
                produits, comme les chocolats, confiseries et autres délices, soient mis en valeur pour offrir une
                expérience unique à chaque visiteur. Ce métier me passionne parce qu&apos;il allie le contact humain,
                la gestion et l&apos;amour des produits authentiques.
              </p>
            </div>
          </div>
        </div>

        {/* Expériences */}
        <div className="mt-20">
          <h2 className="relative text-[1.5rem] font-semibold inline-block">
            <span className="relative z-10">Mon Expérience</span>
            <span className="absolute bottom-1 -left-2 w-full h-3 bg-[var(--texas-rose)] -z-10"></span>
          </h2>
          <div className="mt-6 space-y-4">
            {/* Expérience 1 */}
            <div className="border-2 rounded-md p-4">
              <p className="text-xl font-semibold">Le Comptoir de Mathilde, Toulon</p>
              <p className="font-semibold text-[#141F2F] opacity-80">Responsable de magasin</p>
              <p className="text-gray-400 -mt-1 text-sm">Septembre 2015 - Présent</p>
              <p className="mt-2 font-medium">
                En tant que responsable, je supervise une équipe de six personnes, gère les approvisionnements,
                organise les plannings et veille à l&apos;atteinte des objectifs de vente. Mon rôle inclut également la
                mise en place de stratégies pour améliorer l&apos;expérience client, en valorisant les produits locaux
                et artisanaux qui font la renommée de l&apos;enseigne.
              </p>
            </div>
            {/* Expérience 2 */}
            <div className="border-2 rounded-md p-4">
              <p className="text-xl font-semibold">Boulangerie Pâtisserie La Douceur, Marseille</p>
              <p className="font-semibold text-[#141F2F] opacity-80">Chef de Rayon</p>
              <p className="text-gray-400 -mt-1 text-sm">Mars 2010 - Août 2015</p>
              <p className="mt-2 font-medium">
                Responsable de la gestion du rayon pâtisserie, j&apos;ai coordonné l&apos;équipe de vendeurs, optimisé
                l&apos;agencement des produits et assuré la qualité du service client dans un environnement très
                dynamique.
              </p>
            </div>
            {/* Expérience 3 */}
            <div className="border-2 rounded-md p-4">
              <p className="text-xl font-semibold">Supermarché Le Bon Choix, Nice</p>
              <p className="font-semibold text-[#141F2F] opacity-80">Manager Adjoint</p>
              <p className="text-gray-400 -mt-1 text-sm">Janvier 2005 - Février 2010</p>
              <p className="mt-2 font-medium">
                En tant que manager adjoint, j&apos;ai assisté le directeur dans la gestion quotidienne, supervisé les
                équipes et participé à la mise en œuvre de promotions qui ont permis d&apos;augmenter le chiffre
                d&apos;affaires de manière significative.
              </p>
            </div>
          </div>
        </div>

        {/* Planifiez votre rencontre */}
        <div className="mt-20">
          <h2 className="relative text-[1.5rem] font-semibold inline-block">
            <span className="relative z-10">Planifiez votre rencontre</span>
            <span className="absolute bottom-1 -left-2 w-full h-3 bg-[var(--bittersweet)] -z-10"></span>
          </h2>

          {/* Container du calendrier */}
          <div className="mt-6 border border-gray-300 rounded-lg px-6 py-4">
            {/* Navigation du calendrier (flèches en ronds bleus) */}
            <div className="flex items-center justify-between mb-4">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--jelly-bean)] text-white hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <p className="font-semibold text-gray-700">
                Décembre 2024 - semaine 1&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline h-4 w-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </p>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--jelly-bean)] text-white hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Grille des jours / créneaux */}
            <div className="grid grid-cols-7 gap-6">
              {days.map((day, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* "Carte" jour-date avec top/bottom, contour jelly-bean */}
                  <div className="rounded-md border border-[var(--jelly-bean)] overflow-hidden w-full text-center">
                    {/* Partie haute : fond jelly-bean, texte blanc */}
                    <div className="bg-[var(--jelly-bean)] text-white p-2 font-semibold">
                      {day.dayName}
                    </div>
                    {/* Partie basse : fond blanc, texte noir */}
                    <div className="bg-white text-black p-2">
                      {day.date}
                    </div>
                  </div>

                  {/* Liste des créneaux ou tirets */}
                  <div className="mt-2 flex flex-col gap-2 items-center">
                    {/* On boucle exactement maxSlots fois, si le slot existe on l'affiche, sinon tirets */}
                    {Array.from({ length: maxSlots }).map((_, i) => {
                      const slot = day.timeslots[i];
                      return slot ? (
                        <span
                          key={i}
                          className="bg-[var(--acquamarine)] text-white text-center rounded-md px-2 py-1 w-[60px]"
                        >
                          {slot}
                        </span>
                      ) : (
                        <span
                          key={i}
                          className="font-bold text-gray-400 text-center w-[60px]"
                        >
                          — 
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL : affiche la vidéo en plein écran */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative w-[320px] sm:w-[380px] md:w-[420px] lg:w-[500px] bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton de fermeture */}
            <button
              className="absolute top-2 right-2 text-white text-3xl z-10"
              onClick={closeModal}
            >
              ✕
            </button>
            {/* Contenu de la vidéo */}
            <div className="yt-wrapper w-full h-full">
              <div className="yt-frame-container">
                <iframe
                  src="https://www.youtube.com/embed/IfVsIMaMvDU?autoplay=1&mute=1&modestbranding=1&controls=0&playsinline=1&rel=0&enablejsapi=1&showinfo=0"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS spécifique au "décalage" pour reproduire l'effet "Short" */}
      <style jsx global>{`
        @media screen and (min-width: 768px) {
          .yt-wrapper {
            overflow: hidden;
            width: 100%;
            height: 100%;
          }
          .yt-frame-container {
            position: relative;
            padding-bottom: 177.78%; /* Inverse du ratio 9/16 */
            width: 400%;
            left: -150%;
          }
          .yt-frame-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }
        }
        @media screen and (max-width: 767px) {
          .yt-wrapper {
            overflow: hidden;
            width: 100%;
            height: 100%;
          }
          .yt-frame-container {
            position: relative;
            padding-bottom: 177.78%;
            width: 400%;
            left: -150%;
          }
          .yt-frame-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }
      `}</style>

      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
}
