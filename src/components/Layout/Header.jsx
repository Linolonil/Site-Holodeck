import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#8419c5] text-white relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo com Fonte Personalizada */}
        <div className="text-3xl font-bold">
          Holodeck<span className="text-gray-200">.</span>
        </div>

        {/* Botão de Menu para Modo Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-white">
            {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>

        {/* Menu Desktop */}
        <nav className={`hidden lg:flex lg:items-center lg:justify-end space-x-6`}>
          <a href="/" className="hover:text-gray-200 transition-colors duration-200">Home</a>
          <a href="/contact" className="hover:text-gray-200 transition-colors duration-200">Contato</a>
          <a href="/community-join" className="hover:text-gray-200 transition-colors duration-200">Entrar na Comunidade</a>
          <a href="/collaborator" className="hover:text-gray-200 transition-colors duration-200">Seja um Colaborador</a>
          <a href="/projects" className="hover:text-gray-200 transition-colors duration-200">Projetos</a>
          <a href="/events" className="hover:text-gray-200 transition-colors duration-200">Eventos</a>
          <a href="/store" className="hover:text-gray-200 transition-colors duration-200">Loja</a>
          <a href="/blog" className="hover:text-gray-200 transition-colors duration-200">Blog</a>
        </nav>

        {/* Ícones Sociais Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="https://www.facebook.com/holodeckcommunity" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors duration-200" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/holodeckcommunity/profilecard/?igsh=bzJ6Zmlua3h3aHQ=" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors duration-200" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/holodeck-technologies-community?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Menu Mobile */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`fixed inset-0 z-50 bg-[#8419c5] flex flex-col items-center justify-center space-y-6 text-xl font-semibold lg:hidden ${
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Ícone de Fechar para Menu Mobile */}
        <button
          onClick={toggleMenu}
          aria-label="Close Menu"
          className="absolute top-4 right-4 text-white"
        >
          <AiOutlineClose size={30} />
        </button>
        
        {/* Links do Menu Mobile */}
        <a href="/" onClick={toggleMenu} className="hover:text-gray-200 transition">Home</a>
        <a href="/contact" onClick={toggleMenu} className="hover:text-gray-200 transition">Contato</a>
        <a href="/community-join" onClick={toggleMenu} className="hover:text-gray-200 transition">Entrar na Comunidade</a>
        <a href="/collaborator" onClick={toggleMenu} className="hover:text-gray-200 transition">Seja um Colaborador</a>
        <a href="/projects" onClick={toggleMenu} className="hover:text-gray-200 transition">Projetos</a>
        <a href="/events" onClick={toggleMenu} className="hover:text-gray-200 transition">Eventos</a>
        <a href="/store" onClick={toggleMenu} className="hover:text-gray-200 transition">Loja</a>
        <a href="/blog" onClick={toggleMenu} className="hover:text-gray-200 transition">Blog</a>

        {/* Ícones Sociais Mobile */}
        <div className="flex items-center space-x-6 pt-4">
          <a href="https://www.facebook.com/holodeckcommunity" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors duration-200" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/holodeckcommunity/profilecard/?igsh=bzJ6Zmlua3h3aHQ=" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors duration-200" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/holodeck-technologies-community?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
