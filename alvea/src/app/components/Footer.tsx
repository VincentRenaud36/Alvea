"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  isLoggedIn: boolean;
}

const Footer: React.FC<FooterProps> = ({ isLoggedIn }) => {
  return (
    <footer className="bg-white text-[#6F6C90] py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Version Desktop */}
        <div className="hidden md:grid grid-cols-3 items-start gap-8">
          {/* Logo et réseaux sociaux */}
          <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <Image
              src="/Images/alvea-logo-text.svg"
              alt="Alvéa Logo"
              width={140}
              height={50}
              priority
            />
            </Link>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" target="_blank">
                <Image
                  src="/Images/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://x.com" target="_blank">
                <Image
                  src="/Images/x.svg"
                  alt="X"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Image
                  src="/Images/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Image
                  src="/Images/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://youtube.com" target="_blank">
                <Image
                  src="/Images/youtube.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>

          {/* Pages */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-gray-900 mb-4">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline text-[#1F7A93]">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/discover" className="hover:underline text-[#1F7A93]">
                  Découvrir
                </Link>
              </li>
              <li>
                <Link href="/forum" className="hover:underline text-[#1F7A93]">
                  Forum
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline text-[#1F7A93]">
                  À Propos
                </Link>
              </li>
              <li>
                {isLoggedIn ? (
                  <Link href="/quiz" className="hover:underline text-[#1F7A93]">
                    Quiz
                  </Link>
                ) : (
                  <span className="text-gray-400 cursor-not-allowed">Quiz</span>
                )}
              </li>
            </ul>
          </div>

          {/* Nous contacter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-gray-900 mb-4">Nous contacter</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Image
                  src="/Images/email.svg"
                  alt="Email"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <span>contact@alvea.fr</span>
              </li>
              <li className="flex items-center">
                <Image
                  src="/Images/phone.svg"
                  alt="Téléphone"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <span>+33 6 13 14 15 16</span>
              </li>
              <li className="flex items-center">
                <Image
                  src="/Images/location.svg"
                  alt="Adresse"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <span>70 Av. Roger Devoucoux, 83000 Toulon</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Version Mobile */}
        <div className="md:hidden space-y-8">
          {/* Logo et réseaux sociaux */}
          <div className="flex flex-col items-center">
            <Image
              src="/Images/alvea-logo-text.svg"
              alt="Alvéa Logo"
              width={140}
              height={50}
              priority
            />
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" target="_blank">
                <Image
                  src="/Images/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://x.com" target="_blank">
                <Image
                  src="/Images/x.svg"
                  alt="X"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Image
                  src="/Images/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Image
                  src="/Images/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://youtube.com" target="_blank">
                <Image
                  src="/Images/youtube.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>

          {/* Pages */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-gray-900 mb-4">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline text-[#1F7A93]">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/discover" className="hover:underline text-[#1F7A93]">
                  Découvrir
                </Link>
              </li>
              <li>
                <Link href="/forum" className="hover:underline text-[#1F7A93]">
                  Forum
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline text-[#1F7A93]">
                  À Propos
                </Link>
              </li>
              <li>
                {isLoggedIn ? (
                  <Link href="/quiz" className="hover:underline text-[#1F7A93]">
                    Quiz
                  </Link>
                ) : (
                  <span className="text-gray-400 cursor-not-allowed">Quiz</span>
                )}
              </li>
            </ul>
          </div>

          {/* Nous contacter */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-gray-900 mb-4">Nous contacter</h3>
            <ul className="space-y-2 text-sm text-center">
              <li className="flex items-center justify-center">
                <Image
                  src="/Images/email.svg"
                  alt="Email"
                  width={16}
                  height={16}
                  className="mr-2"
                  />
                  <span>contact@alvea.fr</span>
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="/Images/phone.svg"
                    alt="Téléphone"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  <span>+33 6 13 14 15 16</span>
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="/Images/location.svg"
                    alt="Adresse"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  <span>70 Av. Roger Devoucoux, 83000 Toulon</span>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bas */}
          <div className="mt-8 border-t border-gray-200 pt-4 text-center">
            <p className="text-sm">
              Copyright © 2024 Alvéa &nbsp;|&nbsp;
              <Link href="/terms" className="hover:underline text-[#1F7A93]">
                Termes et conditions
              </Link>
              &nbsp;|&nbsp;
              <Link href="/privacy" className="hover:underline text-[#1F7A93]">
                Politique de confidentialité
              </Link>
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  