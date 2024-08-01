// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto mt-8 sm:mt-12 lg:mt-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-center text-black">
          Bem-vindo à Home
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-black-200 text-center">
          Este é o conteúdo da página inicial do site Holodeck.
        </p>
      </div>
    </div>
  );
};

export default Home;
