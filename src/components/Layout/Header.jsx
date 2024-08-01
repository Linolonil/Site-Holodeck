// src/components/Layout/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Holodeck Tecnologia</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/contact">Contato</a></li>
          <li><a href="/community-join">Entrar na Comunidade</a></li>
          <li><a href="/collaborator">Seja um Colaborador</a></li>
          <li><a href="/projects">Projetos</a></li>
          <li><a href="/events">Eventos</a></li>
          <li><a href="/store">Loja</a></li>
          <li><a href="/blog">Blog</a></li> {/* Opcional */}
        </ul>
      </nav>
    </header>
  );
};

export default Header; // Certifique-se de exportar o componente corretamente

