// src/router.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../src/pages/Home';
import Contact from '../src/pages/Contact';
import CommunityJoin from '../src/pages/CommunityJoin';
import Collaborator from '../src/pages/Collaborator';
import Projects from '../src/pages/Projects';
import Events from '../src/pages/Events';
import Store from '../src/pages/Store';
import Blog from '../src/pages/Blog';
import PrivacyPolicy from '../src/utils/privacypolicy';
import Login from '../src/pages/Auth/LoginPage'; // Importar o componente Login
import Register from '../src/pages/Auth/RegisterPage'; // Importar o componente Register

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/communityjoin" element={<CommunityJoin />} />
        <Route path="/collaborator" element={<Collaborator />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/store" element={<Store />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<Login />} /> {/* Adicionando a rota de Login */}
        <Route path="/register" element={<Register />} /> {/* Adicionando a rota de Register */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
