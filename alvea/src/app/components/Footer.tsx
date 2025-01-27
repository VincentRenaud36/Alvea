import React from "react";

const Footer = () => {
  return (
    <footer className="bg-jelly-bean text-background py-4">
      <div className="container mx-auto flex justify-center space-x-8 text-sm font-bold">
        <span>©2024 Alvéa</span>
        <a href="/terms" className="hover:text-acquamarine">
          Conditions générales d'utilisation
        </a>
        <a href="/rules" className="hover:text-acquamarine">
          Règles de bonne conduite
        </a>
        <a href="/privacy" className="hover:text-acquamarine">
          Vie privée / cookies
        </a>
      </div>
    </footer>
  );
};

export default Footer;
