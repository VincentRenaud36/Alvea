import React from "react";
import Image from "next/image";

interface HeaderProps {
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  return (
    <header className="bg-[#1F7A93] text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Images/alvea-logo.png"
            alt="Alvéa Logo"
            width={140}
            height={50}
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8 text-base font-bold">
          <a
            href="/"
            className="relative group hover:text-[#80D8E5]"
          >
            Accueil
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#80D8E5] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/discover"
            className="relative group hover:text-[#80D8E5]"
          >
            Découvrir
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#80D8E5] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/forum"
            className="relative group hover:text-[#80D8E5]"
          >
            Forum
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#80D8E5] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/about"
            className="relative group hover:text-[#80D8E5]"
          >
            À Propos
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#80D8E5] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <a
              href="/account"
              className="bg-white text-[#1F7A93] px-4 py-2 rounded font-bold hover:bg-gray-200"
            >
              Mon compte
            </a>
          ) : (
            <>
              <a
                href="/signup"
                className="bg-white text-[#1F7A93] px-4 py-2 rounded font-bold hover:bg-gray-200"
              >
                S'inscrire
              </a>
              <a
                href="/login"
                className="border border-white px-4 py-2 rounded font-bold hover:bg-white hover:text-[#1F7A93]"
              >
                Se connecter
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
