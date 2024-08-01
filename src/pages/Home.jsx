import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen">
      <div className="container mx-auto flex flex-col items-center justify-center">

        {/* Primeira Seção: Introdução e Valores */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-black">
            Seja bem-vindo à <span>Holodeck Technologies</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-700">
            Tornando o Norte à inovação, tecnologia e excelência.
          </h2>
        </section>

        {/* Segunda Seção: Valores */}
        <section className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-gray-100 bg-opacity-80 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Nossos Valores</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              <strong>Comunidade:</strong> Valorizamos cada membro e promovemos o crescimento coletivo.<br />
              <strong>Integridade:</strong> Atuamos com honestidade e ética em todas as nossas ações.<br />
              <strong>Excelência:</strong> Comprometemo-nos com a qualidade e a melhoria contínua.<br />
              <strong>Colaboração:</strong> Trabalhamos juntos para alcançar objetivos comuns.<br />
              <strong>Inovação:</strong> Buscamos constantemente novas soluções e ideias.
            </p>
          </motion.div>
        </section>

        {/* Terceira Seção: Participação e Projetos */}
        <section className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 bg-gray-100 bg-opacity-80 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Junte-se a Nós</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Explore nossos projetos, participe de eventos e contribua para o crescimento da nossa comunidade. Clique no botão abaixo para saber mais!
            </p>
            <a href="/communityjoin" className="mt-4 inline-block px-6 py-3 bg-[#8419c5] text-white font-semibold rounded-lg shadow-lg hover:bg-[#8419c5] transition-colors duration-300">
              Saiba Mais
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 bg-gray-100 bg-opacity-80 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Últimos Projetos</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Descubra os projetos mais recentes da nossa comunidade e veja como estamos transformando o futuro da tecnologia.
            </p>
            <a href="/projects" className="inline-block px-6 py-3 bg-[#8419c5] text-white font-semibold rounded-lg shadow-lg hover:bg-[#8419c5] transition-colors duration-300">
              Explore Projetos
            </a>
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default Home;
