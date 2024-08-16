// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Seção de Boas-Vindas */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-extrabold mb-4 text-black mt-8"
        >
          Seja bem-vindo à <span className="text-[#a9e916] text-5xl ">Holodeck Technologies</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl font-normal text-gray-700"
        >
        Encontre o melhor lugar para se desenvolver e se conectar com grandes oportunidades
        </motion.h2>
      </section>

      {/* Seção: Nossos Valores */}
      <section className="flex flex-col gap-9 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-100 bg-opacity-80 p-6 rounded-lg shadow-md mx-auto max-w-4xl"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Nossos Valores</h2>
          <p className="text-base sm:text-lg text-gray-600">
            <strong>Comunidade:</strong> Valorizamos cada membro e promovemos o crescimento coletivo.<br />
            <strong>Integridade:</strong> Atuamos com honestidade e ética em todas as nossas ações.<br />
            <strong>Excelência:</strong> Comprometemo-nos com a qualidade e a melhoria contínua.<br />
            <strong>Colaboração:</strong> Trabalhamos juntos para alcançar objetivos comuns.<br />
            <strong>Inovação:</strong> Buscamos constantemente novas soluções e ideias.
          </p>
        </motion.div>
      </section>

      {/* Seção: Participação e Projetos */}
      <section className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 bg-gray-100 bg-opacity-80 p-6 rounded-lg shadow-md flex flex-col items-center text-center max-w-4xl"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Junte-se a Nós</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
          Navegue por nossos projetos e veja como estamos mudando o cenário tecnológico.
          Participe de eventos inspiradores, onde você poderá aprender, compartilhar e crescer ao lado de outros entusiastas de tecnologia. 
          Contribua ativamente para o desenvolvimento da nossa comunidade, ajudando a criar um ambiente onde a inovação floresce e o conhecimento é compartilhado.
          </p>
          <a href="/communityjoin" className="mt-4 inline-block px-6 py-3 bg-[#3c297a] text-white font-semibold rounded-lg shadow-lg hover:bg-[#606060] transition-colors duration-300">
            Saiba Mais
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 bg-gray-100 bg-opacity-80 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center max-w-4xl"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Últimos Projetos</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Descubra os projetos mais recentes da nossa comunidade e veja como estamos transformando o futuro da tecnologia.
          </p>
          <a href="/projects" className="inline-block px-6 py-3 bg-[#3c297a] text-white font-semibold rounded-lg shadow-lg hover:bg-[#606060] transition-colors duration-300">
            Explore Projetos
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
