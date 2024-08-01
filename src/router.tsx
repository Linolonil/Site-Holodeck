// src/router.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importação das páginas
import Home from '../src/pages/Home';
import Contact from '../src/pages/Contact';
import CommunityJoin from '../src/pages/CommunityJoin';
import Collaborator from '../src/pages/Collaborator';
import Projects from '../src/pages/Projects';
import Events from '../src/pages/Events';
import Store from '../src/pages/Store';
import Blog from '../src/pages/Blog'; // Opcional

// Importação dos componentes de layout
import Header from '../src/components/Layout/Header';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community-join" element={<CommunityJoin />} />
        <Route path="/collaborator" element={<Collaborator />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/store" element={<Store />} />
        {/* Blog é opcional, caso queira adicionar */}
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
