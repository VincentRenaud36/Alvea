import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Explanation from "./components/Explanation";
import VideoPodcast from "./components/VideoPodcast";


export default function Home() {
  // Simulez ici l'état de connexion de l'utilisateur
  const isLoggedIn = true; // Changez à `true` pour l'état connecté

  return (
    <div className="min-h-screen flex flex-col mx-auto">
      <Header isLoggedIn={isLoggedIn} />
      <Hero />
      <Carousel />
      <Explanation />
      <VideoPodcast />
      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
}
