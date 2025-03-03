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
  spotifyEmbedUrl?: string; // Ajouté pour les podcasts
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

/** Tableau mixte : 8 vidéos, 11 podcasts */
const allContents: Content[] = [
  // Vidéos existantes
  {
    id: 1,
    type: "video",
    name: "Jean Lambert",
    profession: "Vendeur de marron",
    youtubeId: "AFFGRUhf9GI",
    userName: "Jean Lambert",
    userJob: "Vendeur de marron ↗",
    userDescription: "Salut, c’est Jean ! Depuis mon enfance, chaque récolte de marrons m’a appris l’art des traditions et du savoir-faire. Viens découvrir mes expériences authentiques sur le terrain.",
    image: "/Images/1.PNG"
  },
  {
    id: 2,
    type: "video",
    name: "Camille Moreau",
    profession: "Couturière",
    youtubeId: "PXtiIVKBieA",
    userName: "Camille Moreau",
    userJob: "Couturière ↗",
    userDescription: "Hello, je suis Camille ! Dans mon atelier, chaque fil raconte une histoire. Je te partage mes débuts, mes défis et ces moments magiques qui ont forgé ma passion pour la couture.",
    image: "/Images/2.PNG"
  },
  {
    id: 4,
    type: "video",
    name: "Ismaël Laurens",
    profession: "Libraire",
    youtubeId: "Ogh9zAfz6hE",
    userName: "Ismaël Laurens",
    userJob: "Libraire ↗",
    userDescription: "Salut, moi c’est Ismaël ! Depuis l’ouverture de ma librairie, chaque livre m’a offert une leçon de vie. Je te raconte mes rencontres, mes coups de cœur et l’aventure du monde littéraire.",
    image: "/Images/3.PNG"
  },
  {
    id: 5,
    type: "video",
    name: "Bernard Alban",
    profession: "Vendeur",
    youtubeId: "BX2Uherloaw",
    userName: "Bernard Alban",
    userJob: "Vendeur ↗",
    userDescription: "Hey, je suis Bernard ! Fort de nombreuses années sur le terrain, je te partage mes expériences de vendeur : des challenges quotidiens aux rencontres marquantes qui ont façonné mon métier.",
    image: "/Images/4.PNG"
  },
  {
    id: 6,
    type: "video",
    name: "Jeanne Alliot",
    profession: "Couturière",
    youtubeId: "D17H_8Y1TEg",
    userName: "Jeanne Alliot",
    userJob: "Couturière ↗",
    userDescription: "Bonjour, je suis Jeanne ! Chaque point de couture est une aventure. Dans mes vidéos, je te fais découvrir mes expériences, de mes premiers essais aux projets qui ont changé ma vie.",
    image: "/Images/5.PNG"
  },
  {
    id: 8,
    type: "video",
    name: "Arthur Fisher",
    profession: "Chocolatier",
    youtubeId: "8-N7GCJ7iT4",
    userName: "Arthur Fisher",
    userJob: "Chocolatier ↗",
    userDescription: "Salut, ici Arthur ! Ma passion pour le chocolat s’est forgée au fil des années. Je te raconte mon parcours, des premiers chocolats artisanaux aux techniques affinées par l’expérience.",
    image: "/Images/6-1.PNG"
  },
  {
    id: 11,
    type: "video",
    name: "Pierre Stone",
    profession: "Barista",
    youtubeId: "IfVsIMaMvDU",
    userName: "Pierre Stone",
    userJob: "Barista ↗",
    userDescription: "Hey, c’est Pierre ! Chaque tasse de café recèle une histoire. Je partage avec toi mes expériences derrière le comptoir, depuis mes débuts jusqu’à l’art du café parfait.",
    image: "/Images/7-1.PNG"
  },

  // Podcasts existants
  {
    id: 3,
    type: "podcast",
    name: "Mickael Schmidt",
    profession: "Kinésithérapeute",
    userName: "Mickael Schmidt",
    userJob: "Kinésithérapeute ↗",
    userDescription: "Podcast sur la rééducation sportive.",
    image: "/Images/podcast1.jpg",
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/episode/2VrnOiaym1fDHTpM2KsL7U?utm_source=generator",
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
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/episode/2VrnOiaym1fDHTpM2KsL7U?utm_source=generator",
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
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/episode/2VrnOiaym1fDHTpM2KsL7U?utm_source=generator",
  },
  // Duplication des Podcasts pour atteindre 11 podcasts
  ...Array.from({ length: 8 }, (_, index) => ({
    id: 13 + index,
    type: "podcast" as const,
    name: "Mickael Schmidt",
    profession: "Kinésithérapeute", 
    userName: "Mickael Schmidt",
    userJob: "Kinésithérapeute ↗",
    userDescription: "Podcast sur la rééducation sportive.",
    image: "/Images/podcast1.jpg",
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/episode/2VrnOiaym1fDHTpM2KsL7U?utm_source=generator",
  })),
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
    filterCategories.reduce(
      (acc, fc) => ({ ...acc, [fc.category]: true }),
      {}
    )
  );

  /** Modal : index de l'élément affiché, ou null si fermé */
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  /** Pour éviter un scroll multiple */
  const [scrollLock, setScrollLock] = useState(false);

  /** "Plus/Moins" description dans le modal */
  const [descExpanded, setDescExpanded] = useState(false);

  /** État pour stocker l'état du lecteur YouTube */
  const playerStateRef = useRef<number | null>(null);

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

  // Gestion des événements du lecteur YouTube
  useEffect(() => {
    if (selectedIndex === null) return;

    const activeIframe = document.querySelectorAll("iframe")[selectedIndex];

    if (!activeIframe) return;

    const handlePlayerStateChange = (event: MessageEvent) => {
      console.log("Received message:", event.data);
      try {
        const data = event.data;
        console.log("YouTube Event Data:", data);

        if (data.event === "onStateChange") {
          playerStateRef.current = data.data;

          if (data.data === 0) {
            console.log("Video ended. Attempting to replay...");
            activeIframe.contentWindow?.postMessage(
              JSON.stringify({
                event: "command",
                func: "seekTo",
                args: [0, true],
              }),
              "https://www.youtube.com"
            );
          }
        }
      } catch (error) {
        console.error("Error processing YouTube event data:", error);
      }
    };

    window.addEventListener("message", handlePlayerStateChange);
    console.log("Added message event listener for YouTube iframe.");

    // Forcer la lecture initiale avec un léger délai
    setTimeout(() => {
      activeIframe.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: "playVideo",
          args: "",
        }),
        "https://www.youtube.com" // Spécifiez l'origine pour des raisons de sécurité
      );
      console.log("Sent playVideo command to YouTube iframe.");
    }, 1000); // Attendre 1 seconde pour s'assurer que l'iframe est prête

    return () => {
      window.removeEventListener("message", handlePlayerStateChange);
      console.log("Removed message event listener for YouTube iframe.");
    };
  }, [selectedIndex]);

  // Nouveau useEffect pour interroger et afficher l'état du lecteur toutes les secondes
  useEffect(() => {
    if (selectedIndex === null) return;

    const intervalId = setInterval(() => {
      console.log(
        `Player State at ${new Date().toLocaleTimeString()}:`,
        playerStateRef.current
      );
    }, 1000); // Toutes les secondes

    return () => {
      clearInterval(intervalId); // Nettoyer l'intervalle lors du démontage ou du changement
    };
  }, [selectedIndex]);

  /** Gère l'alternance "vidéo" / "podcast" */
  const handleTypeChange = (type: "video" | "podcast") => {
    setSelectedType(type);
    setSelectedIndex(null); // Ferme le modal si on en avait un
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
  const displayedContents = allContents.filter(
    (c) => c.type === selectedType
  );

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
    if (
      e.deltaY > 0 &&
      selectedIndex < displayedContents.length - 1
    ) {
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
    const diff =
      touchStartRef.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 50) {
      // swipe up => next
      if (
        diff > 0 &&
        selectedIndex < displayedContents.length - 1
      ) {
        goTo(selectedIndex + 1);
      }
      // swipe down => prev
      else if (diff < 0 && selectedIndex > 0) {
        goTo(selectedIndex - 1);
      }
    }
    touchStartRef.current = null;
  };

  /** Toggle la description "Plus/Moins" */
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
          <h3 className="font-bold text-lg mb-4 text-primary">
            Filtrer
          </h3>

          {/* Choix forcé : Vidéo ou Podcast */}
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
                <span>
                  {expandedCats[cat.category] ? "▲" : "▼"}
                </span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-3/4">
        {displayedContents.map((c, i) => {
          if (c.type === "video" && c.youtubeId) {
            // Carte vidéo => 9:16 miniature
            const thumbUrl = `https://img.youtube.com/vi/${c.youtubeId}/0.jpg`;
            return (
              <div
                key={c.id}
                className="cursor-pointer rounded-xl overflow-hidden shadow-lg h-[500px]"
                onClick={() => openModal(i)}
              >
                <div className="h-full relative w-full">
                  <Image
                    src={thumbUrl}
                    alt={c.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 text-white">
                    <Link href={`/profil/${c.userName}`} className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-full flex-shrink-0 relative overflow-hidden">
                        <Image
                          src={c.image || "/Images/default-profile.png"}
                          alt={`Photo de profil de ${c.name}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{c.name}</p>
                        <p className="text-sm">{c.profession}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
            } else if (c.type === "podcast" && c.spotifyEmbedUrl) {
              return (
                <div
                  key={c.id}
                  className="rounded-lg overflow-hidden shadow-md bg-jelly-bean border border-gray-200 relative w-full h-auto sm:h-48 md:h-56 lg:h-64 flex flex-col"
                  style={{ backgroundColor: "#005a6f" }}
                >
                  {/* Section utilisateur */}
                  <div className="p-4 flex items-center space-x-4 bg-transparent">
                    <Link href={`/profil/${c.userName}`}>
                      <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0" />
                    </Link>
                    <Link href={`/profil/${c.userName}`} className="flex flex-col">
                      <span className="font-semibold text-sm sm:text-base text-white">{c.name}</span>
                      <span className="text-xs sm:text-sm text-white">{c.profession}</span>
                    </Link>
                  </div>
        
                  {/* Iframe Spotify */}
                  <div className="flex-grow iframe-container">
                    {c.spotifyEmbedUrl.includes("open.spotify.com/embed") ? (
                      <iframe
                        className="w-full h-full border-0"
                        src={c.spotifyEmbedUrl}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        allowFullScreen
                        title={`Podcast de ${c.name}`}
                      ></iframe>
                    ) : null}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <Footer isLoggedIn />

      {/* MODAL => rendu conditionnel avec animation de glissement uniquement pour les vidéos */}
      {item && item.type === "video" && (
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

                      <div
                        className="yt-wrapper w-full h-full"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="yt-frame-container">
                          <iframe
                            id={`player-${elem.youtubeId}`} // Assignation d'un ID unique
                            key={elem.youtubeId} // 🔥 Force le rechargement de l'iframe si nécessaire
                            src={`https://www.youtube.com/embed/${elem.youtubeId}?enablejsapi=1&autoplay=1&mute=1&modestbranding=1&controls=0&playsinline=1&rel=0&showinfo=0`} // Suppression de la duplication de l'ID
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
                      <div
                        className="absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-t from-black/60 to-transparent pointer-events-none"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="pointer-events-auto relative">
                          <div className="flex items-center justify-between">
                            <Link
                              href={`/profil/${elem.userName}`}
                              className="flex items-center gap-2 no-underline"
                            >
                              <div className="w-10 h-10 rounded-full relative overflow-hidden">
                                <Image
                                  src={elem.image || "/Images/default-profile.png"}
                                  alt={`Photo de profil de ${elem.userName}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
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
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CSS => "décalage" pour masquer le top info YouTube */}
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

          @media screen and (max-width: 767px) {
    .iframe-container {
      position: relative;
      padding-bottom: 100%; /* Ratio 1:1 pour mobile */
      height: 0;
      overflow: hidden;
    }

    .iframe-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    .iframe-container {
      position: relative;
      padding-bottom: 56.25%; /* Ratio 16:9 pour desktop */
      height: 0;
      overflow: hidden;
    }

    .iframe-container iframe {
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
