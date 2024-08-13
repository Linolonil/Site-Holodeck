// src/App.jsx
import React from "react";
import AppRouter from "./router";
import BackgroundParticles from "./components/Layout/BackgroundParticles"; // Caminho correto para o BackgroundParticles
import Header from "../src/components/Layout/Header";
import Footer from "./components/Layout/Footer"; // Importe o Footer
import "./styles/index.css"; // Importe o CSS do Tailwind aqui

const App = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* <BackgroundParticles /> */}
      <div className="flex-grow relative z-10">
      <Header />
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
};

export default App;
