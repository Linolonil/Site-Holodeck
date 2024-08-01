// src/components/Layout/Header.jsx
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#8419c5] text-white relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold whitespace-nowrap">Holodeck Tecnologia</h1>
        <div className="lg:hidden">
          {/* Ícone de menu hambúrguer para dispositivos móveis */}
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
        <nav
          className={`lg:flex lg:items-center lg:justify-end lg:w-full lg:relative absolute left-0 top-0 w-full bg-[#8419c5] lg:bg-transparent ${isMenuOpen ? 'block' : 'hidden'} lg:block`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0 space-y-4 lg:space-y-0 text-center lg:text-right">
            <li>
              <a href="/" className="hover:text-gray-200 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-200 transition">
                Contato
              </a>
            </li>
            <li>
              <a href="/community-join" className="hover:text-gray-200 transition">
                Entrar na Comunidade
              </a>
            </li>
            <li>
              <a href="/collaborator" className="hover:text-gray-200 transition">
                Seja um Colaborador
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-gray-200 transition">
                Projetos
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-gray-200 transition">
                Eventos
              </a>
            </li>
            <li>
              <a href="/store" className="hover:text-gray-200 transition">
                Loja
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-200 transition">
                Blog
              </a>
            </li>
          </ul>
          {isMenuOpen && (
            <button
              onClick={toggleMenu}
              aria-label="Close Menu"
              className="absolute top-4 right-4 lg:hidden"
            >
              <AiOutlineClose size={30} />
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
