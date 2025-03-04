"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isActive = (path: string) =>
    pathname === path ? "text-acquamarine" : "hover:text-acquamarine";

  return (
    <header className="bg-jelly-bean text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo cliquable */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/">
            <Image
              src="/Images/alvea-logo.svg"
              alt="Alvéa Logo"
              width={140}
              height={50}
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex flex-grow justify-center space-x-6 lg:space-x-12 text-base font-bold`}
        >
          <Link href="/" className={`relative group ${isActive("/")}`}>
            Accueil
            <span
              className={`absolute bottom-0 left-0 h-1 bg-acquamarine transition-all duration-300 ${
                pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
          <Link
            href="/discover"
            className={`relative group ${isActive("/discover")}`}
          >
            Découvrir
            <span
              className={`absolute bottom-0 left-0 h-1 bg-acquamarine transition-all duration-300 ${
                pathname === "/discover" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
          <Link
            href="/forum"
            className={`relative group ${isActive("/forum")}`}
          >
            Forum
            <span
              className={`absolute bottom-0 left-0 h-1 bg-acquamarine transition-all duration-300 ${
                pathname === "/forum" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
          <Link
            href="/about"
            className={`relative group ${isActive("/about")}`}
          >
            À Propos
            <span
              className={`absolute bottom-0 left-0 h-1 bg-acquamarine transition-all duration-300 ${
                pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <Link
              href="/account"
              className="bg-white text-jelly-bean px-4 py-2 rounded font-bold hover:bg-white"
            >
              Mon compte
            </Link>
          ) : (
            <>
              <Link
                href="/signup"
                className="bg-white text-jelly-bean px-4 py-2 rounded font-bold hover:bg-white"
              >
                S&apos;inscrire
              </Link>
              <Link
                href="/login"
                className="border border-white px-4 py-2 rounded font-bold hover:bg-white hover:text-jelly-bean"
              >
                Se connecter
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-jelly-bean text-white px-6 py-4 md:hidden">
          <nav className="flex flex-col space-y-4 text-base font-bold">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={isActive("/")}
            >
              Accueil
            </Link>
            <Link
              href="/discover"
              onClick={() => setMenuOpen(false)}
              className={isActive("/discover")}
            >
              Découvrir
            </Link>
            <Link
              href="/forum"
              onClick={() => setMenuOpen(false)}
              className={isActive("/forum")}
            >
              Forum
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className={isActive("/about")}
            >
              À Propos
            </Link>
          </nav>
          <div className="flex flex-col space-y-4 mt-4">
            {isLoggedIn ? (
              <Link
                href="/account"
                onClick={() => setMenuOpen(false)}
                className="bg-white text-jelly-bean px-4 py-2 rounded font-bold hover:bg-white"
              >
                Mon compte
              </Link>
            ) : (
              <>
                <Link
                  href="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="bg-white text-jelly-bean px-4 py-2 rounded font-bold hover:bg-white"
                >
                  S&apos;inscrire
                </Link>
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="border border-white px-4 py-2 rounded font-bold hover:bg-white hover:text-jelly-bean"
                >
                  Se connecter
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
