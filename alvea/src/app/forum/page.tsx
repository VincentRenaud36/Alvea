import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
  // Simulez ici l'état de connexion de l'utilisateur
  const isLoggedIn = true; // Changez à `true` pour l'état connecté

  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn={isLoggedIn} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Liste des discussions */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Discussions générales</h1>
              <button className="bg-[#1F7A93] text-white px-4 py-2 rounded-md hover:bg-opacity-90">
                Créer un nouveau sujet
              </button>
            </div>
            <div className="space-y-4 flex flex-col items-center">
              {/* Sujet 1 */}
              <div className="bg-white rounded-xl p-4 border-2 w-full max-w-md">
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full">
                    <Image
                      src="/Images/1.PNG"
                      alt="Avatar"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href="#" className="text-lg font-semibold hover:text-[#1F7A93]">
                      Quel métier choisir après le lycée ?
                    </Link>
                    <div className="text-gray-500">Question</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Dernier message il y a 2 heures • 15 réponses
                    </div>
                  </div>
                </div>
              </div>

              {/* Sujet 2 */}
              <div className="bg-white rounded-xl p-4 border-2 w-full max-w-md">
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full">
                    <Image
                      src="/Images/2.PNG"
                      alt="Avatar"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href="#" className="text-lg font-semibold hover:text-[#1F7A93]">
                      Comment trouver un stage en entreprise ?
                    </Link>
                    <div className="text-gray-500">Conseil</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Dernier message il y a 30 minutes • 23 réponses
                    </div>
                  </div>
                </div>
              </div>

              {/* Sujet 3 */}
              <div className="bg-white rounded-xl p-4 border-2 w-full max-w-md">
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full">
                    <Image
                      src="/Images/3.PNG"
                      alt="Avatar"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href="#" className="text-lg font-semibold hover:text-[#1F7A93]">
                      Les études d'ingénieur : par où commencer ?
                    </Link>
                    <div className="text-gray-500">Discussion</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Dernier message il y a 1 jour • 45 réponses
                    </div>
                  </div>
                </div>
              </div>

              {/* Sujet 4 */}
              <div className="bg-white rounded-xl p-4 border-2 w-full max-w-md">
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full">
                    <Image
                      src="/Images/4.PNG"
                      alt="Avatar"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href="#" className="text-lg font-semibold hover:text-[#1F7A93]">
                      Retour d'expérience : ma reconversion professionnelle
                    </Link>
                    <div className="text-gray-500">Témoignage</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Dernier message il y a 3 jours • 32 réponses
                    </div>
                  </div>
                </div>
              </div>

              {/* Sujet 5 */}
              <div className="bg-white rounded-xl p-4 border-2 w-full max-w-md">
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full">
                    <Image
                      src="/Images/5.PNG"
                      alt="Avatar"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href="#" className="text-lg font-semibold hover:text-[#1F7A93]">
                      Astuces pour réussir ses examens
                    </Link>
                    <div className="text-gray-500">Conseil</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Dernier message il y a 4 heures • 20 réponses
                    </div>
                  </div>
                </div>
              </div>

              {/* Sujet 6 */}
              <div className="bg-white rounded-xl p-4 border-2 w-full max-w-md">
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full">
                    <Image
                      src="/Images/6-1.PNG"
                      alt="Avatar"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href="#" className="text-lg font-semibold hover:text-[#1F7A93]">
                      Partager ses astuces de codage
                    </Link>
                    <div className="text-gray-500">Discussion</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Dernier message il y a 5 heures • 18 réponses
                    </div>
                  </div>
                </div>
              </div>

              {/* Sujet 7 */}
              <div className="bg-white rounded-xl p-4 border-2 w-full max-w-md">
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full">
                    <Image
                      src="/Images/6-2.PNG"
                      alt="Avatar"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href="#" className="text-lg font-semibold hover:text-[#1F7A93]">
                      Les dernières tendances tech
                    </Link>
                    <div className="text-gray-500">Actualité</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Dernier message il y a 6 heures • 25 réponses
                    </div>
                  </div>
                </div>
              </div>

              {/* Sujet 8 */}
              <div className="bg-white rounded-xl p-4 border-2 w-full max-w-md">
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full">
                    <Image
                      src="/Images/7-1.PNG"
                      alt="Avatar"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href="#" className="text-lg font-semibold hover:text-[#1F7A93]">
                      Comment organiser un projet étudiant ?
                    </Link>
                    <div className="text-gray-500">Conseil</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Dernier message il y a 7 heures • 12 réponses
                    </div>
                  </div>
                </div>
              </div>

              {/* Sujet 9 */}
              <div className="bg-white rounded-xl p-4 border-2 w-full max-w-md">
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full">
                    <Image
                      src="/Images/7-2.PNG"
                      alt="Avatar"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href="#" className="text-lg font-semibold hover:text-[#1F7A93]">
                      Conseils pour un entretien d'embauche
                    </Link>
                    <div className="text-gray-500">Conseil</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Dernier message il y a 8 heures • 30 réponses
                    </div>
                  </div>
                </div>
              </div>

              {/* Sujet 10 */}
              <div className="bg-white rounded-xl p-4 border-2 w-full max-w-md">
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full">
                    <Image
                      src="/Images/1.PNG"
                      alt="Avatar"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href="#" className="text-lg font-semibold hover:text-[#1F7A93]">
                      Les meilleures méthodes de travail
                    </Link>
                    <div className="text-gray-500">Discussion</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Dernier message il y a 9 heures • 22 réponses
                    </div>
                  </div>
                </div>
              </div>

              {/* Sujet 11 */}
              <div className="bg-white rounded-xl p-4 border-2 w-full max-w-md">
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full">
                    <Image
                      src="/Images/2.PNG"
                      alt="Avatar"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href="#" className="text-lg font-semibold hover:text-[#1F7A93]">
                      Comment gérer le stress au quotidien ?
                    </Link>
                    <div className="text-gray-500">Discussion</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Dernier message il y a 10 heures • 16 réponses
                    </div>
                  </div>
                </div>
              </div>

              {/* Sujet 12 */}
              <div className="bg-white rounded-xl p-4 border-2 w-full max-w-md">
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full">
                    <Image
                      src="/Images/3.PNG"
                      alt="Avatar"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href="#" className="text-lg font-semibold hover:text-[#1F7A93]">
                      Partager ses projets personnels
                    </Link>
                    <div className="text-gray-500">Témoignage</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Dernier message il y a 12 heures • 14 réponses
                    </div>
                  </div>
                </div>
              </div>

              {/* Sujet 13 */}
              <div className="bg-white rounded-xl p-4 border-2 w-full max-w-md">
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full">
                    <Image
                      src="/Images/4.PNG"
                      alt="Avatar"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href="#" className="text-lg font-semibold hover:text-[#1F7A93]">
                      Les conseils pour démarrer en freelance
                    </Link>
                    <div className="text-gray-500">Conseil</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Dernier message il y a 13 heures • 19 réponses
                    </div>
                  </div>
                </div>
              </div>

              {/* Sujet 14 */}
              <div className="bg-white rounded-xl p-4 border-2 w-full max-w-md">
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full">
                    <Image
                      src="/Images/5.PNG"
                      alt="Avatar"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href="#" className="text-lg font-semibold hover:text-[#1F7A93]">
                      Quelle formation pour se reconvertir ?
                    </Link>
                    <div className="text-gray-500">Discussion</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Dernier message il y a 14 heures • 21 réponses
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar avec catégories */}
          <div className="w-80">
            <h2 className="text-xl font-semibold mb-4">Catégories</h2>
            <hr />
            <div className="space-y-2 mt-4">
              <div className="flex justify-between items-center">
                <span>Stages et carrières</span>
                <span className="px-2 py-1 rounded-full text-sm">15</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Parcours Professionnel</span>
                <span className="px-2 py-1 rounded-full text-sm">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Études</span>
                <span className="px-2 py-1 rounded-full text-sm">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
}
