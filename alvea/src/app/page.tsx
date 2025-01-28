import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";


export default function Home() {
  // Simulez ici l'état de connexion de l'utilisateur
  const isLoggedIn = true; // Changez à `true` pour l'état connecté

  return (
    <div className="min-h-screen flex flex-col w-screen mx-auto">
      {/* Header */}
      <Header isLoggedIn={isLoggedIn} />
      <Hero />
      <Carousel />
      {/* Footer */}
      <Footer />
    </div>
  );
}
