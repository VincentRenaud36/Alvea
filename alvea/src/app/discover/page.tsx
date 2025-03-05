"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Composant pour les miniatures vidéo
function VideoThumbnail({ thumbUrl, alt }: { thumbUrl: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [imageUrl, setImageUrl] = useState(thumbUrl);

  useEffect(() => {
    // Vérifie si l'image HD existe
    fetch(thumbUrl)
      .then(response => {
        if (!response.ok) {
          // Si l'image HD n'existe pas, utilise la version standard
          setImageUrl(thumbUrl.replace("maxresdefault", "hqdefault"));
        }
      })
      .catch(() => {
        // En cas d'erreur, utilise la version standard
        setImageUrl(thumbUrl.replace("maxresdefault", "hqdefault"));
      });
  }, [thumbUrl]);

  return (
    <div 
      ref={containerRef}
      className="aspect-[9/16] relative w-full overflow-hidden"
    >
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className="object-cover object-center"
        style={{ transform: `scale(${scale})` }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={90}
        onLoadingComplete={({ naturalWidth, naturalHeight }) => {
          const container = containerRef.current;
          if (!container) return;
          const scaleX = container.offsetWidth / naturalWidth;
          const scaleY = container.offsetHeight / naturalHeight;
          const scaleNeeded = Math.max(scaleX, scaleY);
          setScale(scaleNeeded < 1 ? 1 : scaleNeeded);
        }}
        priority
      />
    </div>
  );
}

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
  spotifyEmbedUrl?: string; // Pour les podcasts
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

/** Tableau mixte : vidéos et podcasts */
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
    userDescription: "Salut, c'est Jean ! Depuis mon enfance, chaque récolte de marrons m'a appris l'art des traditions et du savoir-faire. Viens découvrir mes expériences authentiques sur le terrain.",
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
    userDescription: "Salut, moi c'est Ismaël ! Depuis l'ouverture de ma librairie, chaque livre m'a offert une leçon de vie. Je te raconte mes rencontres, mes coups de cœur et l'aventure du monde littéraire.",
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
    userDescription: "Salut, ici Arthur ! Ma passion pour le chocolat s'est forgée au fil des années. Je te raconte mon parcours, des premiers chocolats artisanaux aux techniques affinées par l'expérience.",
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
    userDescription: "Hey, c'est Pierre ! Chaque tasse de café recèle une histoire. Je partage avec toi mes expériences derrière le comptoir, depuis mes débuts jusqu'à l'art du café parfait.",
    image: "/Images/7-1.PNG"
  },

  // Podcasts existants
  {
    id: 3,
    type: "podcast",
    name: "Jean Lambert",
    profession: "Vendeur de marron",
    userName: "Jean Lambert",
    userJob: "Vendeur de marron ↗",
    userDescription: "Salut, c'est Jean ! Depuis mon enfance, chaque récolte de marrons m'a appris l'art des traditions et du savoir-faire. Viens découvrir mes expériences authentiques sur le terrain.",
    image: "/Images/1.PNG",
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/episode/016tVvPbPVsHrUqRyF49O5?utm_source=generator&theme=0",
  },
  {
    id: 7,
    type: "podcast",
    name: "Camille Moreau",
    profession: "Couturière",
    userName: "Camille Moreau",
    userJob: "Couturière ↗",
    userDescription: "Hello, je suis Camille ! Dans mon atelier, chaque fil raconte une histoire. Je te partage mes débuts, mes défis et ces moments magiques qui ont forgé ma passion pour la couture.",
    image: "/Images/2.PNG",
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/episode/28pcOKjAJmhsYGhj7Sw6HT?utm_source=generator&theme=0",
  },
  {
    id: 10,
    type: "podcast",
    name: "Ismaël Laurens",
    profession: "Libraire",
    userName: "Ismaël Laurens",
    userJob: "Libraire ↗",
    userDescription: "Salut, moi c'est Ismaël ! Depuis l'ouverture de ma librairie, chaque livre m'a offert une leçon de vie. Je te raconte mes rencontres, mes coups de cœur et l'aventure du monde littéraire.",
    image: "/Images/3.PNG",
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/episode/53CIzGG9autdyBB4VKyicy?utm_source=generator&theme=0",
  },
  {
    id: 12,
    type: "podcast",
    name: "Bernard Alban",
    profession: "Vendeur",
    userName: "Bernard Alban",
    userJob: "Vendeur ↗",
    userDescription: "Hey, je suis Bernard ! Fort de nombreuses années sur le terrain, je te partage mes expériences de vendeur : des challenges quotidiens aux rencontres marquantes qui ont façonné mon métier.",
    image: "/Images/4.PNG",
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/episode/0I5WLQGUsomP3x4dwmlSB5?utm_source=generator&theme=0",
  },
  {
    id: 13,
    type: "podcast",
    name: "Jeanne Alliot",
    profession: "Couturière",
    userName: "Jeanne Alliot",
    userJob: "Couturière ↗",
    userDescription: "Bonjour, je suis Jeanne ! Chaque point de couture est une aventure. Dans mes vidéos, je te fais découvrir mes expériences, de mes premiers essais aux projets qui ont changé ma vie.",
    image: "/Images/5.PNG",
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/episode/01mUFtIod7caTPLZX93CWE?utm_source=generator&theme=0",
  }
];

export default function Discover() {
  /** Sélection "Vidéo" ou "Podcast" */
  const [selectedType, setSelectedType] = useState<"video" | "podcast">("video");

  /** Stockage des filtres (cochés/décochés) */
  const [filtersState, setFiltersState] = useState<FilterState>({});

  /** Catégories de filtres dépliées/repliées */
  const [expandedCats, setExpandedCats] = useState<{ [cat: string]: boolean }>(() =>
    filterCategories.reduce((acc, fc) => ({ ...acc, [fc.category]: true }), {})
  );

  /** Recherche */
  const [searchTerm, setSearchTerm] = useState("");

  /** Modal : index de l'élément affiché, ou null si fermé */
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  /** Pour éviter un scroll multiple */
  const [scrollLock, setScrollLock] = useState(false);

  /** "Plus/Moins" description dans le modal */
  const [descExpanded, setDescExpanded] = useState(false);

  /** État pour stocker l'état du lecteur YouTube */
  const playerStateRef = useRef<number | null>(null);

  /** Mobile filters */
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Désactive le scroll de la page en background lors de l'ouverture du modal
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  // Gestion des événements du lecteur YouTube (modal)
  useEffect(() => {
    if (selectedIndex === null) return;

    const activeIframe = document.querySelectorAll("iframe")[selectedIndex];
    if (!activeIframe) return;

    const handlePlayerStateChange = (event: MessageEvent) => {
      try {
        const data = event.data;
        if (data.event === "onStateChange") {
          playerStateRef.current = data.data;
          if (data.data === 0) {
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
    setTimeout(() => {
      activeIframe.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: "playVideo",
          args: "",
        }),
        "https://www.youtube.com"
      );
    }, 1000);

    return () => {
      window.removeEventListener("message", handlePlayerStateChange);
    };
  }, [selectedIndex]);

  // Affichage de l'état du lecteur toutes les secondes (pour debug)
  useEffect(() => {
    if (selectedIndex === null) return;
    const intervalId = setInterval(() => {
      console.log(`Player State at ${new Date().toLocaleTimeString()}:`, playerStateRef.current);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [selectedIndex]);

  /** Gestion de l'alternance "vidéo" / "podcast" */
  const handleTypeChange = (type: "video" | "podcast") => {
    setSelectedType(type);
    setSelectedIndex(null);
    setDescExpanded(false);
    setSearchTerm(""); // réinitialiser la recherche lors du changement
  };

  /** Toggle d'un filtre */
  const toggleFilterOption = (option: string) => {
    setFiltersState((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  /** Toggle de l'expansion d'une catégorie de filtre */
  const toggleCat = (cat: string) => {
    setExpandedCats((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  /**
   * Liste des items à afficher :
   * On filtre par type et par la recherche.
   * La recherche compare le début (startsWith) du nom et de la profession, insensible à la casse.
   */
  const displayedContents = allContents.filter((c) => {
    if (c.type !== selectedType) return false;
    if (!searchTerm) return true;
    const lowerSearch = searchTerm.toLowerCase();
    return (
      c.name.toLowerCase().startsWith(lowerSearch) ||
      c.profession.toLowerCase().startsWith(lowerSearch)
    );
  });

  /** Ouvrir le modal pour l'élément d'index i */
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

  /** Navigation via la molette */
  const goTo = (newIndex: number) => {
    setScrollLock(true);
    setDescExpanded(false);
    setSelectedIndex(newIndex);
    setTimeout(() => setScrollLock(false), 300);
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
    if (selectedIndex === null || scrollLock || touchStartRef.current === null) return;
    const diff = touchStartRef.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 50) {
      diff > 0 && selectedIndex < displayedContents.length - 1
        ? goTo(selectedIndex + 1)
        : diff < 0 && selectedIndex > 0 && goTo(selectedIndex - 1);
    }
    touchStartRef.current = null;
  };

  /** Toggle de la description "Plus/Moins" */
  const toggleDescription = () => setDescExpanded((p) => !p);

  /** Partager l'item */
  const shareItem = () => {
    if (selectedIndex === null) return;
    const itm = displayedContents[selectedIndex];
    if (itm.type === "video" && itm.youtubeId) {
      const url = `https://youtu.be/${itm.youtubeId}`;
      if (navigator.share) {
        navigator.share({ title: itm.name, text: "Regarde cette vidéo !", url }).catch(() => {});
      } else {
        navigator.clipboard.writeText(url).then(() => alert("Lien copié !")).catch(() => alert("Impossible de copier."));
      }
    } else {
      alert(`Partager ce podcast: ${itm.name}`);
    }
  };

  // Élément pour le modal
  const item = selectedIndex !== null ? displayedContents[selectedIndex] : null;

  return (
    <>
      <Header isLoggedIn />

      {/* Barre de recherche */}
      <div className="container mx-auto px-4 py-4">
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bittersweet"
        />
      </div>

      {/* Bouton filtres mobile */}
      <button
        className="fixed bottom-4 right-4 z-50 md:hidden bg-bittersweet text-white p-4 rounded-full shadow-lg"
        onClick={(e) => {
          e.stopPropagation();
          setMobileFiltersOpen(!mobileFiltersOpen);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </button>

      {/* Drawer mobile des filtres */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${mobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileFiltersOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 h-full w-80 bg-white p-6 shadow-xl transition-transform duration-300 transform ${mobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">Filtres</h3>
            <button className="text-gray-500 hover:text-gray-700" onClick={() => setMobileFiltersOpen(false)}>
              ✕
            </button>
          </div>
          <div className="overflow-y-auto h-full pb-20">
            <div className="mb-6">
              <label className="flex items-center gap-2 mb-2 cursor-pointer">
                <input
                  type="radio"
                  name="content-type-mobile"
                  value="video"
                  checked={selectedType === "video"}
                  onChange={() => handleTypeChange("video")}
                />
                Vidéo courte
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="content-type-mobile"
                  value="podcast"
                  checked={selectedType === "podcast"}
                  onChange={() => handleTypeChange("podcast")}
                />
                Podcast
              </label>
            </div>
            {filterCategories.map((cat) => (
              <div key={cat.category} className="mb-4">
                <h4 className="font-semibold mb-2 flex justify-between cursor-pointer" onClick={() => toggleCat(cat.category)}>
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
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar desktop */}
        <div className="w-1/4 hidden md:block">
          <h3 className="font-bold text-lg mb-4 text-primary">Filtrer</h3>
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
          {filterCategories.map((cat) => (
            <div key={cat.category} className="mb-4">
              <h4 className="font-semibold mb-2 flex justify-between cursor-pointer" onClick={() => toggleCat(cat.category)}>
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

        {/* Grille des contenus */}
        <div className={`grid gap-4 md:gap-6 w-full md:w-3/4 ${
          selectedType === "video" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
        }`}>
          {displayedContents.map((c, i) => {
            if (c.type === "video" && c.youtubeId) {
              const thumbUrl = `https://img.youtube.com/vi/${c.youtubeId}/maxresdefault.jpg`;
              return (
                <div
                  key={c.id}
                  className="cursor-pointer rounded-xl overflow-hidden shadow-lg relative w-full aspect-[9/16]"
                  onClick={() => openModal(i)}
                >
                  <div className="absolute inset-0">
                    <VideoThumbnail thumbUrl={thumbUrl} alt={c.name} />
                  </div>
                  {/* Gradient noir personnalisé */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "linear-gradient(to top, black 10%, transparent 25%)" }}
                  />
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
              );
            } else if (c.type === "podcast" && c.spotifyEmbedUrl) {
              return (
                <div
                  key={c.id}
                  className="rounded-lg overflow-hidden shadow-md bg-black border border-gray-200 relative w-full flex flex-col"
                  style={{ backgroundColor: "#1f1f1f" }}
                >
                  {/* Section utilisateur */}
                  <div className="p-4 flex items-center space-x-4 bg-transparent">
                    <Link href={`/profil/${c.userName}`}>
                      <div className="w-10 h-10 rounded-full relative overflow-hidden flex-shrink-0">
                        <Image
                          src={c.image || "/Images/default-profile.png"}
                          alt={`Photo de profil de ${c.name}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                    <Link href={`/profil/${c.userName}`} className="flex flex-col">
                      <span className="font-semibold text-sm sm:text-base text-white">{c.name}</span>
                      <span className="text-xs sm:text-sm text-white">{c.profession}</span>
                    </Link>
                  </div>
                  {/* Iframe Spotify */}
                  <div className="flex-grow">
                    {c.spotifyEmbedUrl.includes("open.spotify.com/embed") ? (
                      <iframe
                        className="w-full h-full min-h-[152px]"
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

      {/* Modal pour vidéos */}
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
            <div
              className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateY(-${selectedIndex! * 100}%)` }}
            >
              {displayedContents.map((elem, i) => (
                <div
                  key={elem.id}
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                  style={{ transform: `translateY(${i * 100}%)` }}
                >
                  {elem.type === "video" && elem.youtubeId ? (
                    <div className="relative aspect-[9/16] w-[280px] sm:w-[320px] md:w-[400px] lg:w-[450px] rounded-lg overflow-hidden bg-black animate-slide-in">
                      <button
                        className="absolute top-2 right-2 text-white text-3xl z-10"
                        onClick={closeModal}
                      >
                        ✕
                      </button>
                      <div className="yt-wrapper w-full h-full" onClick={(e) => e.stopPropagation()}>
                        <div className="yt-frame-container">
                          <iframe
                            id={`player-${elem.youtubeId}`}
                            key={elem.youtubeId}
                            src={`https://www.youtube.com/embed/${elem.youtubeId}?enablejsapi=1&autoplay=1&mute=1&modestbranding=1&controls=0&playsinline=1&rel=0&showinfo=0`}
                            title="YouTube short"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            loading="lazy"
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                      <div
                        className="absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-t from-black/60 to-transparent pointer-events-none"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="pointer-events-auto relative">
                          <div className="flex items-center justify-between">
                            <Link href={`/profil/${elem.userName}`} className="flex items-center gap-2 no-underline">
                              <div className="w-10 h-10 rounded-full relative overflow-hidden">
                                <Image
                                  src={elem.image || "/Images/default-profile.png"}
                                  alt={`Photo de profil de ${elem.userName}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex flex-col text-sm no-underline">
                                <span className="font-semibold no-underline">{elem.userName}</span>
                                <span className="opacity-90 text-xs no-underline">{elem.userJob}</span>
                              </div>
                            </Link>
                            <button className="border border-white rounded-full px-3 py-1 text-sm" onClick={shareItem}>
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
                                  <button onClick={toggleDescription} className="text-xs no-underline ml-1">
                                    Plus
                                  </button>
                                </>
                              ) : (
                                <>
                                  <span>{elem.userDescription}</span>{" "}
                                  <button onClick={toggleDescription} className="text-xs no-underline">
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

      <style jsx global>{`
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
            height: 152px;
            overflow: hidden;
          }
          .iframe-container iframe {
            width: 100%;
            height: 100%;
          }
        }
        @media screen and (min-width: 768px) {
          .iframe-container {
            position: relative;
            height: 152px;
            overflow: hidden;
          }
          .iframe-container iframe {
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </>
  );
}
