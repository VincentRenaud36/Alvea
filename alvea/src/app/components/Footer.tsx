import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1F7A93] text-white py-4">
      <div className="container mx-auto flex justify-center space-x-8 text-sm font-bold">
        <span>©2024 Alvéa</span>
        <a href="/terms" className="hover:underline">
          Conditions générales d'utilisation
        </a>
        <a href="/rules" className="hover:underline">
          Règles de bonne conduite
        </a>
        <a href="/privacy" className="hover:underline">
          Vie privée / cookies
        </a>
      </div>
    </footer>
  );
};

export default Footer;
