// src/components/Layout/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black  py-8 text-white">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Holodeck Community. Todos os direitos reservados.</p>
      <div className="mt-4 space-x-4">
        <a href="https://www.linkedin.com/in/holodeck-technologies-community" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        <a href="https://www.instagram.com/holodeckcommunity" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
