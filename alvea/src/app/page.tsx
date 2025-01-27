import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  // Simulez ici l'état de connexion de l'utilisateur
  const isLoggedIn = true; // Changez à `true` pour l'état connecté

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header isLoggedIn={isLoggedIn} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
