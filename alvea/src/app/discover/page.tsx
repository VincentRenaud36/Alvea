"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

/** Définition des types de contenus */
interface Filter {
  category: string;
  options: string[];
}

interface Content {
  name: string;
  type: "video" | "podcast";
  profession: string;
  youtubeId?: string;
  userName?: string;
  userJob?: string;
  userDescription?: string;
  image?: string; // Image d'illustration (pour podcast, par ex.)
}

/** Exemple de filtres en sidebar */
const filters: Filter[] = [
  {
    category: "Types de contenu",
    options: ["Vidéo courte", "Podcast"],
  },
  {
    category: "Secteurs d'activité",
    options: [
      "Agriculture - pêche",
      "BTP",
      "Banque - Assurance - finance",
      "Distribution - Commerce de gros",
      "Enseignement - formation",
      "Immobilier",
      "Industrie agro - alimentaire",
      "Industrie Auto - méca - navale",
      "Industrie aérospatiale",
      "Industrie manufacturière",
      "Chimie",
      "Industrie pharmaceutique",
      "Industrie pétrolière - pétrochimie",
      "Industrie high-tech - télécom",
      "Média - internet - communication",
      "Restauration",
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

/** Tableau mixte : vidéos YouTube + podcasts */
const contents: Content[] = [
  {
    name: "Robert Dubois",
    type: "video",
    profession: "Responsable magasin",
    youtubeId: "9ps8QpVxinI",
    userName: "Robert Dubois",
    userJob: "Responsable magasin",
    userDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nunc.",
  },
  {
    name: "Mickael Schmidt",
    type: "podcast",
    profession: "Kinésithérapeute",
    userName: "Mickael Schmidt",
    userJob: "Kinésithérapeute ↗",
    userDescription:
      "Exemple de podcast. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/Images/podcast1.jpg",
  },
  {
    name: "Camille Moreau",
    type: "video",
    profession: "Couturière",
    youtubeId: "cBGq5yUoABA",
    userName: "Camille Moreau",
    userJob: "Couturière ↗",
    userDescription:
      "Praesent aliquam ipsum lectus, non condimentum nulla rhoncus vel.",
  },
  {
    name: "Ismaël Laurens",
    type: "video",
    profession: "Avocat",
    youtubeId: "lj_ruhHncWA",
    userName: "Ismaël Laurens",
    userJob: "Avocat ↗",
    userDescription:
      "Suspendisse porttitor massa sed condimentum fringilla. In vitae sapien vel elit.",
  },
  {
    name: "Arthur Fisher",
    type: "video",
    profession: "Informaticien",
    youtubeId: "QrxMuXALM7Y",
    userName: "Arthur Fisher",
    userJob: "Informaticien ↗",
    userDescription:
      "Phasellus ultrices magna quis nisi tristique. Integer id pellentesque libero.",
  },
  {
    name: "Britany Cooper",
    type: "video",
    profession: "Tatoueuse",
    youtubeId: "2gGaCG30szE",
    userName: "Britany Cooper",
    userJob: "Tatoueuse ↗",
    userDescription:
      "Quisque facilisis pharetra massa. Nulla ut leo at arcu sodales.",
  },
  {
    name: "Bernard Alban",
    type: "video",
    profession: "Technicien Photovoltaïque",
    youtubeId: "ffY_I21gK1s",
    userName: "Bernard Alban",
    userJob: "Technicien ↗",
    userDescription:
      "Sed finibus augue sed odio accumsan, at cursus quam luctus.",
  },
  {
    name: "Theo Legrand",
    type: "podcast",
    profession: "Architecte",
    userName: "Theo Legrand",
    userJob: "Architecte ↗",
    userDescription:
      "Deuxième exemple de podcast. Lorem ipsum dolor sit amet, consectetur.",
    image: "/Images/podcast2.jpg",
  },
  {
    name: "Ronald Richards",
    type: "podcast",
    profession: "Forgeron",
    userName: "Ronald Richards",
    userJob: "Forgeron ↗",
    userDescription:
      "Troisième exemple de podcast. Sed sed purus et ante dignissim vehicula.",
    image: "/Images/podcast3.jpg",
  },
  {
    name: "Benoit Alliot",
    type: "video",
    profession: "Médecin",
    youtubeId: "7dXcPSspMrk",
    userName: "Benoit Alliot",
    userJob: "Médecin ↗",
    userDescription:
      "Nunc ornare dui quis risus ornare, id commodo ex volutpat. Lorem ipsum.",
  },
  {
    name: "Sophie Lambert",
    type: "video",
    profession: "Responsable RH",
    youtubeId: "c6u-I85peig",
    userName: "Sophie Lambert",
    userJob: "Responsable RH ↗",
    userDescription:
      "Pellentesque nec ullamcorper odio. Morbi in magna quis purus fermentum dictum.",
  },
  {
    name: "Emma Stone",
    type: "video",
    profession: "Architecte",
    youtubeId: "VmEw3fccDtQ",
    userName: "Emma Stone",
    userJob: "Architecte ↗",
    userDescription:
      "Fusce et turpis vitae quam ultricies varius. In porttitor a tortor quis.",
  },
];

export default function Discover() {
  const [expandedFilters, setExpandedFilters] = useState<{ [k: string]: boolean }>(
    filters.reduce((acc, { category }) => ({ ...acc, [category]: true }), {})
  );

  // Index de l'item sélectionné (null => modal fermé)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Empêche un défilement multiple
  const [scrollLock, setScrollLock] = useState(false);

  // Gère la description “Plus/Moins”
  const [descExpanded, setDescExpanded] = useState(false);

  // Désactivation du scroll en background
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  // Ouvrir le modal
  const openModal = (index: number) => {
    setSelectedIndex(index);
    setScrollLock(false);
    setDescExpanded(false);
  };

  // Fermer le modal
  const closeModal = () => {
    setSelectedIndex(null);
    setScrollLock(false);
    setDescExpanded(false);
  };

  // Gère le “Plus / Moins”
  const toggleDescription = () => setDescExpanded((p) => !p);

  // Filtres
  const toggleFilter = (cat: string) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  // Partager
  const shareContent = () => {
    if (selectedIndex === null) return;
    const item = contents[selectedIndex];
    if (item.type === "video" && item.youtubeId) {
      const url = `https://youtu.be/${item.youtubeId}`;
      if (navigator.share) {
        navigator
          .share({ title: item.name, text: "Regarde cette vidéo !", url })
          .catch(() => {});
      } else {
        navigator.clipboard
          .writeText(url)
          .then(() => alert("Lien copié !"))
          .catch(() => alert("Impossible de copier."));
      }
    } else {
      alert(`Partager ce podcast: ${item.name}`);
    }
  };

  // Slide vertical : molette
  const goToIndex = (newIndex: number) => {
    setScrollLock(true);
    setDescExpanded(false);
    setSelectedIndex(newIndex);
    // On réduit le cooldown à 300ms
    setTimeout(() => {
      setScrollLock(false);
    }, 300);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (selectedIndex === null || scrollLock) return;
    const delta = e.deltaY;
    if (delta > 0 && selectedIndex < contents.length - 1) {
      goToIndex(selectedIndex + 1);
    } else if (delta < 0 && selectedIndex > 0) {
      goToIndex(selectedIndex - 1);
    }
  };

  // Slide vertical : swipe (tactile)
  const touchStartRef = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartRef.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (selectedIndex === null || scrollLock) return;
    if (touchStartRef.current === null) return;

    const diff = touchStartRef.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 50) {
      // swipe up => next
      if (diff > 0 && selectedIndex < contents.length - 1) {
        goToIndex(selectedIndex + 1);
      }
      // swipe down => prev
      else if (diff < 0 && selectedIndex > 0) {
        goToIndex(selectedIndex - 1);
      }
    }
    touchStartRef.current = null;
  };

  return (
    <>
      <Header isLoggedIn={true} />

      {/* Conteneur principal */}
      <div className="container mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar (filtres) */}
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

        {/* Grille en rangées */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-3/4">
          {contents.map((item, i) => {
            // On choisit un ratio vertical pour vidéo/podcast
            // (9:16). Optionnel : adapter pour le podcast si vous voulez carré.
            let thumbnailUrl = "";
            if (item.type === "video" && item.youtubeId) {
              thumbnailUrl = `https://img.youtube.com/vi/${item.youtubeId}/0.jpg`;
            } else if (item.type === "podcast" && item.image) {
              thumbnailUrl = item.image;
            }

            return (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openModal(i)}
              >
                <div className="aspect-[9/16] relative w-full">
                  {thumbnailUrl && (
                    <Image
                      src={thumbnailUrl}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  )}

                  {/* Gradient sombre en haut pour le titre */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                  {/* Infos en haut (nom + profession) */}
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm">{item.profession}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer isLoggedIn={true} />

      {/* MODAL SLIDER */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80"
          onClick={closeModal} // Clique overlay => ferme
        >
          {/* Container qui gère tout (scroll + slides) */}
          <div
            className="relative w-full h-full flex items-center justify-center overflow-hidden"
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={(e) => e.stopPropagation()} // on évite de fermer si on clique "dans" le container
          >
            {/* SLIDER vertical => height = nbItems * 100% => transform: translateY(-index*100%) */}
            <div className="relative w-full h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateY(-${selectedIndex * 100}%)` }}
            >
              {contents.map((item, i) => (
                <div
                  key={i}
                  className="absolute w-full h-full top-0 left-0 flex items-center justify-center"
                  style={{ transform: `translateY(${i * 100}%)` }}
                >
                  {/* Conteneur central : 9/16 ou format podcast */}
                  {item.type === "video" ? (
                    <div className="relative aspect-[9/16] w-[280px] sm:w-[320px] md:w-[400px] lg:w-[450px] bg-black overflow-hidden">
                      {/* Bouton fermer (sans background) */}
                      <button
                        className="absolute top-2 right-2 text-white text-3xl z-10"
                        onClick={closeModal}
                      >
                        ✕
                      </button>

                      {/* Iframe YouTube en mode “décalé” pour masquer le top info */}
                      {item.youtubeId && (
                        <div className="yt-wrapper w-full h-full">
                          <div className="yt-frame-container">
                            <iframe
                              src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${item.youtubeId}`}
                              title="YouTube short embed"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      )}

                      {/* Infos pro + desc + share (façon overlay en bas) */}
                      <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                        <div className="pointer-events-auto relative">
                          <div className="flex items-center justify-between">
                            <Link
                              href={`/profil/${item.userName || "inconnu"}`}
                              className="flex items-center gap-2 no-underline"
                            >
                              <div className="w-10 h-10 bg-gray-500 rounded-full" />
                              <div className="flex flex-col text-sm no-underline">
                                <span className="font-semibold no-underline">
                                  {item.userName}
                                </span>
                                <span className="opacity-90 text-xs no-underline">
                                  {item.userJob}
                                </span>
                              </div>
                            </Link>
                            <button
                              className="text-sm no-underline border border-white rounded-full px-3 py-1"
                              onClick={shareContent}
                            >
                              ↗
                            </button>
                          </div>

                          {item.userDescription && (
                            <div className="text-sm mt-2">
                              {!descExpanded ? (
                                <>
                                  <span className="whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-[70%] align-middle">
                                    {item.userDescription}
                                  </span>{" "}
                                  <button
                                    onClick={toggleDescription}
                                    className="text-xs no-underline ml-1"
                                  >
                                    Plus
                                  </button>
                                </>
                              ) : (
                                <>
                                  <span>{item.userDescription}</span>{" "}
                                  <button
                                    onClick={toggleDescription}
                                    className="text-xs no-underline"
                                  >
                                    Moins
                                  </button>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // PODCAST
                    <div className="relative w-[320px] sm:w-[380px] md:w-[400px] lg:w-[450px] bg-black rounded-lg flex flex-col">
                      {/* Bouton fermer (sans background) */}
                      <button
                        className="absolute top-2 right-2 text-white text-3xl z-10"
                        onClick={closeModal}
                      >
                        ✕
                      </button>

                      {/* Partie “visuelle” (style format vertical) */}
                      <div className="aspect-[9/16] w-full relative overflow-hidden">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        )}
                        {/* Gradient en haut/bas */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                      </div>

                      {/* Player style => On imite le screen #2 */}
                      <div className="p-4 text-white bg-black flex flex-col gap-2">
                        {/* Barre player factice */}
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <span className="text-sm">1x</span>
                          <button className="border border-white rounded-full px-2 py-1 text-sm">
                            -15s
                          </button>
                          <button className="text-2xl border border-white rounded-full px-2 py-1">
                            ▶
                          </button>
                          <button className="border border-white rounded-full px-2 py-1 text-sm">
                            +15s
                          </button>
                          <button className="text-sm">🔇</button>
                        </div>
                        {/* Timeline factice */}
                        <div className="flex items-center gap-2 text-sm">
                          <span>0:00</span>
                          <div className="flex-grow h-1 bg-gray-400 rounded" />
                          <span>4:32</span>
                        </div>
                      </div>

                      {/* Footer overlay => user info + share (façon Reels) */}
                      <div className="p-4 bg-black text-white flex justify-between items-center">
                        <div className="flex items-center gap-2 no-underline">
                          <div className="w-10 h-10 bg-gray-500 rounded-full" />
                          <div className="flex flex-col text-sm no-underline">
                            <span className="font-semibold no-underline">
                              {item.userName}
                            </span>
                            <span className="opacity-90 text-xs no-underline">
                              {item.userJob}
                            </span>
                          </div>
                        </div>
                        <button
                          className="text-sm no-underline border border-white rounded-full px-3 py-1"
                          onClick={shareContent}
                        >
                          ↗
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CSS global => “décalage” pour masquer le top info YouTube */}
      <style jsx global>{`
        @media screen and (min-width: 768px) {
          .yt-wrapper {
            overflow: hidden;
            max-width: 100%;
            height: 100%;
          }
          .yt-frame-container {
            position: relative;
            padding-bottom: 177.78%; /* pour ratio 9:16 */
            width: 400%;
            left: -150%;
          }
          .yt-frame-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none; /* pas de clic sur la vidéo */
          }
        }
        @media screen and (max-width: 767px) {
          .yt-wrapper {
            overflow: hidden;
            max-width: 100%;
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
            pointer-events: none;
          }
        }
      `}</style>
    </>
  );
}
