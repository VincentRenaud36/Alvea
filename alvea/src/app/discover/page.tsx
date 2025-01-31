"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

/** Types de données */
interface FilterCategory {
  category: string;
  options: string[];
}

interface FilterState {
  [option: string]: boolean;
}

interface Content {
  id: number;
  type: "video" | "podcast";
  name: string;
  profession: string;
  youtubeId?: string;
  userName: string;
  userJob: string;
  userDescription?: string;
  image?: string; // Pour le podcast
}

/** Filtres (exemple) */
const filterCategories: FilterCategory[] = [
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

/** Tableau mixte : 8 vidéos, 4 podcasts */
const allContents: Content[] = [
  {
    id: 1,
    type: "video",
    name: "Sophie Lambert",
    profession: "Responsable RH",
    youtubeId: "c6u-I85peig",
    userName: "Sophie Lambert",
    userJob: "Responsable RH ↗",
    userDescription: "Pellentesque nec ullamcorper odio. Lorem ipsum.Pellentesque nec ullamcorper odio. Lorem ipsum.Pellentesque nec ullamcorper odio. Lorem ipsum.Pellentesque nec ullamcorper odio. Lorem ipsum.",
  },
  {
    id: 2,
    type: "video",
    name: "Camille Moreau",
    profession: "Couturière",
    youtubeId: "cBGq5yUoABA",
    userName: "Camille Moreau",
    userJob: "Couturière ↗",
    userDescription: "Praesent aliquam ipsum lectus, non condimentum nulla.",
  },
  {
    id: 3,
    type: "podcast",
    name: "Mickael Schmidt",
    profession: "Kinésithérapeute",
    userName: "Mickael Schmidt",
    userJob: "Kinésithérapeute ↗",
    userDescription: "Podcast sur la rééducation sportive.",
    image: "/Images/podcast1.jpg",
  },
  {
    id: 4,
    type: "video",
    name: "Ismaël Laurens",
    profession: "Avocat",
    youtubeId: "lj_ruhHncWA",
    userName: "Ismaël Laurens",
    userJob: "Avocat ↗",
    userDescription: "Suspendisse porttitor massa sed condimentum fringilla.",
  },
  {
    id: 5,
    type: "video",
    name: "Bernard Alban",
    profession: "Technicien Photovoltaïque",
    youtubeId: "ffY_I21gK1s",
    userName: "Bernard Alban",
    userJob: "Technicien ↗",
    userDescription: "Sed finibus augue sed odio accumsan.",
  },
  {
    id: 6,
    type: "video",
    name: "Benoit Alliot",
    profession: "Médecin",
    youtubeId: "7dXcPSspMrk",
    userName: "Benoit Alliot",
    userJob: "Médecin ↗",
    userDescription: "Nunc ornare dui quis risus ornare.",
  },
  {
    id: 7,
    type: "podcast",
    name: "Theo Legrand",
    profession: "Architecte",
    userName: "Theo Legrand",
    userJob: "Architecte ↗",
    userDescription: "Deuxième podcast. Lorem ipsum dolor sit amet.",
    image: "/Images/podcast2.jpg",
  },
  {
    id: 8,
    type: "video",
    name: "Arthur Fisher",
    profession: "Informaticien",
    youtubeId: "QrxMuXALM7Y",
    userName: "Arthur Fisher",
    userJob: "Informaticien ↗",
    userDescription: "Phasellus ultrices magna quis nisi tristique.",
  },
  {
    id: 9,
    type: "video",
    name: "Robert Dubois",
    profession: "Responsable magasin",
    youtubeId: "9ps8QpVxinI",
    userName: "Robert Dubois",
    userJob: "Responsable magasin",
    userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10,
    type: "podcast",
    name: "Ronald Richards",
    profession: "Forgeron",
    userName: "Ronald Richards",
    userJob: "Forgeron ↗",
    userDescription: "Troisième podcast. Sed sed purus et ante dignissim.",
    image: "/Images/podcast3.jpg",
  },
  {
    id: 11,
    type: "video",
    name: "Emma Stone",
    profession: "Architecte",
    youtubeId: "VmEw3fccDtQ",
    userName: "Emma Stone",
    userJob: "Architecte ↗",
    userDescription: "Fusce et turpis vitae quam ultricies varius.",
  },
  {
    id: 12,
    type: "video",
    name: "Britany Cooper",
    profession: "Tatoueuse",
    youtubeId: "2gGaCG30szE",
    userName: "Britany Cooper",
    userJob: "Tatoueuse ↗",
    userDescription: "Quisque facilisis pharetra massa.",
  },
];

export default function Discover() {
  /** Sélection "Vidéo" ou "Podcast" */
  const [selectedType, setSelectedType] = useState<"video" | "podcast">("video");

  /** Stockage des filtres (cochés/décochés) */
  const [filtersState, setFiltersState] = useState<FilterState>({});

  /** Catégories de filtres dépliées/repliées */
  const [expandedCats, setExpandedCats] = useState<{
    [cat: string]: boolean;
  }>(() =>
    filterCategories.reduce((acc, fc) => ({ ...acc, [fc.category]: true }), {})
  );

  /** Modal : index de l'élément affiché, ou null si fermé */
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  /** Pour éviter un scroll multiple */
  const [scrollLock, setScrollLock] = useState(false);

  /** “Plus/Moins” description dans le modal */
  const [descExpanded, setDescExpanded] = useState(false);

  // Désactive le scroll de la page en background
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

  useEffect(() => {
    if (selectedIndex === null) return;
  
    const activeIframe = document.querySelectorAll("iframe")[selectedIndex];
  
    if (!activeIframe) return;
  
    const handlePlayerStateChange = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        console.log('YouTube Event Data:', data); // Log des données reçues
  
        // Vérifie qu'on écoute bien l'iframe sélectionnée
        if (data.event === "onStateChange" && data.data === 0) { // Assurez-vous que c'est 'data.data'
          console.log('Video ended. Attempting to replay...'); // Log de l'intention de replay
          activeIframe.contentWindow?.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
        }
      } catch (error) {
        console.error('Error parsing YouTube event data:', error); // Log des erreurs de parsing
      }
    };
  
    window.addEventListener("message", handlePlayerStateChange);
    console.log('Added message event listener for YouTube iframe.');
  
    // Forcer la lecture initiale
    activeIframe.contentWindow?.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
    console.log('Sent playVideo command to YouTube iframe.');
  
    return () => {
      window.removeEventListener("message", handlePlayerStateChange);
      console.log('Removed message event listener for YouTube iframe.');
    };
  }, [selectedIndex]);
  
  
  
  


  

  /** Gère l’alternance "vidéo" / "podcast" */
  const handleTypeChange = (type: "video" | "podcast") => {
    setSelectedType(type);
    setSelectedIndex(null); // ferme le modal si on en avait un
    setDescExpanded(false);
  };

  /** Toggle un filtre */
  const toggleFilterOption = (option: string) => {
    setFiltersState((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  /** Toggle l'expansion d'une catégorie de filtre */
  const toggleCat = (cat: string) => {
    setExpandedCats((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  /** Liste des items à afficher => on filtre par type. 
   * (On pourrait aussi filtrer selon filtersState si besoin.)
   */
  const displayedContents = allContents.filter((c) => c.type === selectedType);

  /** Ouvrir le modal sur l'item d'index i */
  const openModal = (i: number) => {
    setSelectedIndex(i);
    setScrollLock(false);
    setDescExpanded(false);
  };

  /** Fermer le modal */
  const closeModal = () => {
    setSelectedIndex(null);
    setScrollLock(false);
    setDescExpanded(false);
  };

  /** Au scroll molette, on passe item suivant / précédent */
  const goTo = (newIndex: number) => {
    setScrollLock(true);
    setDescExpanded(false);
    setSelectedIndex(newIndex);
    // cooldown 300ms
    setTimeout(() => {
      setScrollLock(false);
    }, 300);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (selectedIndex === null || scrollLock) return;
    if (e.deltaY > 0 && selectedIndex < displayedContents.length - 1) {
      goTo(selectedIndex + 1);
    } else if (e.deltaY < 0 && selectedIndex > 0) {
      goTo(selectedIndex - 1);
    }
  };

  /** Swipe tactile */
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
      if (diff > 0 && selectedIndex < displayedContents.length - 1) {
        goTo(selectedIndex + 1);
      }
      // swipe down => prev
      else if (diff < 0 && selectedIndex > 0) {
        goTo(selectedIndex - 1);
      }
    }
    touchStartRef.current = null;
  };

  /** Toggle la description “Plus/Moins” */
  const toggleDescription = () => setDescExpanded((p) => !p);

  /** Partager item */
  const shareItem = () => {
    if (selectedIndex === null) return;
    const itm = displayedContents[selectedIndex];
    if (itm.type === "video" && itm.youtubeId) {
      const url = `https://youtu.be/${itm.youtubeId}`;
      if (navigator.share) {
        navigator
          .share({ title: itm.name, text: "Regarde cette vidéo !", url })
          .catch(() => {});
      } else {
        navigator.clipboard
          .writeText(url)
          .then(() => alert("Lien copié !"))
          .catch(() => alert("Impossible de copier."));
      }
    } else {
      alert(`Partager ce podcast: ${itm.name}`);
    }
  };

  // L'élément sélectionné pour le modal
  const item = selectedIndex !== null ? displayedContents[selectedIndex] : null;

  return (
    <>
      <Header isLoggedIn />

      <div className="container mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar */}
        <div className="w-1/4 hidden md:block">
          <h3 className="font-bold text-lg mb-4 text-primary">Filtrer</h3>

          {/* Choix forced : Vidéo ou Podcast */}
          <div className="mb-6">
            <label className="flex items-center gap-2 mb-2 cursor-pointer">
              <input
                type="radio"
                name="content-type"
                value="video"
                checked={selectedType === "video"}
                onChange={() => handleTypeChange("video")}
              />
              Vidéo courte
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="content-type"
                value="podcast"
                checked={selectedType === "podcast"}
                onChange={() => handleTypeChange("podcast")}
              />
              Podcast
            </label>
          </div>

          {/* Autres filtres */}
          {filterCategories.map((cat) => (
            <div key={cat.category} className="mb-4">
              <h4
                className="font-semibold mb-2 flex justify-between cursor-pointer"
                onClick={() => toggleCat(cat.category)}
              >
                {cat.category}
                <span>{expandedCats[cat.category] ? "▲" : "▼"}</span>
              </h4>
              {expandedCats[cat.category] && (
                <ul className="space-y-2">
                  {cat.options.map((option) => (
                    <li key={option} className="flex items-center gap-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={!!filtersState[option]}
                          onChange={() => toggleFilterOption(option)}
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Grille */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-3/4">
          {displayedContents.map((c, i) => {
            if (c.type === "video" && c.youtubeId) {
              // Carte vidéo => 9:16 miniature
              const thumbUrl = `https://img.youtube.com/vi/${c.youtubeId}/0.jpg`;
              return (
                <div
                  key={c.id}
                  className="cursor-pointer rounded-xl overflow-hidden shadow-lg"
                  onClick={() => openModal(i)}
                >
                  <div className="aspect-[9/16] relative w-full">
                    <Image
                      src={thumbUrl}
                      alt={c.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                    <div className="absolute bottom-2 left-2 text-white">
                      <p className="font-semibold">{c.name}</p>
                      <p className="text-sm">{c.profession}</p>
                    </div>
                  </div>
                </div>
              );
            } else {
              // Podcast => design "bouton horizontal aquamarine"
              return (
                <div
                  key={c.id}
                  className="bg-jelly-bean text-white rounded-3xl shadow-lg px-4 py-2 flex items-center gap-4 cursor-pointer"
                  onClick={() => openModal(i)}
                >
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    {c.image && (
                      <Image
                        src={c.image}
                        alt={c.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    )}
                  </div>
                  {/* Textes */}
                  <div className="flex flex-col">
                    <span className="font-semibold">{c.name}</span>
                    <span className="text-sm">{c.profession}</span>
                  </div>
                  {/* Play icon */}
                  <div className="ml-auto w-8 h-8 bg-white text-jelly-bean rounded-full flex items-center justify-center">
                    ▶
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>

      <Footer isLoggedIn />

      {/* MODAL => rendu conditionnel avec animation de glissement */}
      {item && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full overflow-hidden flex items-center justify-center"
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={closeModal}
          >
            {/* Container: translateY(-selectedIndex * 100%) */}
            <div
              className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-out"
              style={{
                transform: `translateY(-${selectedIndex! * 100}%)`,
              }}
            >
              {displayedContents.map((elem, i) => (
                <div
                  key={elem.id}
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                  style={{ transform: `translateY(${i * 100}%)` }}
                >
                  {elem.type === "video" && elem.youtubeId ? (
                    <div className="relative aspect-[9/16] w-[280px] sm:w-[320px] md:w-[400px] lg:w-[450px] rounded-lg overflow-hidden bg-black animate-slide-in">
                      {/* Croix */}
                      <button
                        className="absolute top-2 right-2 text-white text-3xl z-10"
                        onClick={closeModal}
                      >
                        ✕
                      </button>

                      <div className="yt-wrapper w-full h-full" onClick={(e) => e.stopPropagation()}>
                        <div className="yt-frame-container">
                        <iframe
                          key={elem.youtubeId} // 🔥 Force le rechargement de l'iframe si nécessaire
                          src={`https://www.youtube.com/embed/${elem.youtubeId}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${elem.youtubeId}&modestbranding=1&controls=0&playsinline=1&rel=0&showinfo=0`} // Suppression de la duplication de l'ID
                          title="YouTube short"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          loading="lazy" // 🔥 Ajout du chargement paresseux
                          className="w-full h-full"
                        />
                        </div>
                      </div>

                      {/* Overlay d'info (bas) */}
                      <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-t from-black/60 to-transparent pointer-events-none" onClick={(e) => e.stopPropagation()}>
                        <div className="pointer-events-auto relative">
                          <div className="flex items-center justify-between">
                            <Link
                              href={`/profil/${elem.userName}`}
                              className="flex items-center gap-2 no-underline"
                            >
                              <div className="w-10 h-10 bg-gray-500 rounded-full" />
                              <div className="flex flex-col text-sm no-underline">
                                <span className="font-semibold no-underline">
                                  {elem.userName}
                                </span>
                                <span className="opacity-90 text-xs no-underline">
                                  {elem.userJob}
                                </span>
                              </div>
                            </Link>
                            <button
                              className="border border-white rounded-full px-3 py-1 text-sm"
                              onClick={shareItem}
                            >
                              ↗
                            </button>
                          </div>

                          {elem.userDescription && (
                            <div className="text-sm mt-2">
                              {!descExpanded ? (
                                <>
                                  <span className="whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-[70%] align-middle">
                                    {elem.userDescription}
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
                                  <span>{elem.userDescription}</span>{" "}
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
                    // PODCAST => design “fond noir” dans le modal, arrondi
                    <div className="relative w-[320px] sm:w-[380px] md:w-[420px] bg-black text-white rounded-lg overflow-hidden flex flex-col animate-slide-in">
                      {/* Croix */}
                      <button
                        className="absolute top-2 right-2 text-white text-3xl z-10"
                        onClick={closeModal}
                      >
                        ✕
                      </button>
                      <div className="aspect-[9/16] w-full relative">
                        {elem.image && (
                          <Image
                            src={elem.image}
                            alt={elem.name}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>

                      {/* Player factice (icônes) */}
                      <div className="p-4 bg-black flex flex-col gap-2">
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <span className="text-sm">1x</span>
                          <button className="border border-white rounded-full px-2 py-1 text-sm">
                            -15s
                          </button>
                          <button className="text-2xl border border-white rounded-full px-3 py-1">
                            ▶
                          </button>
                          <button className="border border-white rounded-full px-2 py-1 text-sm">
                            +15s
                          </button>
                          <button className="text-sm">🔇</button>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span>0:00</span>
                          <div className="flex-grow h-1 bg-gray-400 rounded" />
                          <span>4:32</span>
                        </div>
                      </div>

                      {/* Bas => user + share */}
                      <div className="p-4 bg-black flex items-center justify-between">
                        <div className="flex items-center gap-2 no-underline">
                          <div className="w-10 h-10 bg-gray-500 rounded-full" />
                          <div className="flex flex-col text-sm no-underline">
                            <span className="font-semibold no-underline">
                              {elem.userName}
                            </span>
                            <span className="opacity-90 text-xs no-underline">
                              {elem.userJob}
                            </span>
                          </div>
                        </div>
                        <button
                          className="border border-white rounded-full px-3 py-1 text-sm"
                          onClick={shareItem}
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

      {/* CSS => “décalage” pour masquer le top info YouTube */}
      <style jsx global>{`
        /* Animation de slide-in */
        @keyframes slideIn {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slideIn 0.5s ease-out;
        }
        @media screen and (min-width: 768px) {
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
            pointer-events: none;
            /* Autoriser l'autoplay */
            /* parfois utile : allow='autoplay; ...' => fait dans la prop iframe */
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
    </>
  );
}
