import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-100">
      {/* Navbar - Menu e Botão de Ação */}
      <header className="flex justify-end items-center mb-8">
        <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
          Login
        </button>
      </header>

      {/* Hero Section - Imagem e Título Principal */}
      <section className="relative flex flex-col items-center justify-center text-center mb-16">
        {/* <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
          <img
            src="src/assets/homebg.mp4"
            alt="Holodeck Background"
            className="w-full h-full object-cover"
          />
        </div> */}
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
          <video
            src="src/assets/homebg.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex rounded-lg flex-col justify-center items-center p-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-4xl font-bold text-white mb-4"
          >
            BEM VINDO AO MUNDO{" "}
            <span className="text-[#a9e916]">HOLODECK TECHNOLOGIES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg sm:text-xl font-normal text-gray-200 mb-6"
          >
            Explore o futuro e se conecte com oportunidades tecnológicas.
          </motion.p>
          <motion.a
            href="/communityjoin"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.1 }}
          >
            <button className="bg-[#a9e916] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#8dcf12] transition duration-300">
              Comece Agora
            </button>
          </motion.a>
        </div>
      </section>

      {/* Seção de Informações Rápidas */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="text-sm font-semibold mb-4 md:mb-0">
            250+ SATISFIED & OPEN USERS
          </div>
          <div className="flex items-center gap-3">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition duration-300"
              >
                <img
                  src="src/assets/natan.JPG"
                  alt={`User ${index + 1}`}
                  className="w-8 h-8 rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Features */}
      <section className="mb-16 lg:p-9">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">CRIE SUA CONTA</h2>
            <p className="text-gray-700 text-base sm:text-lg lg:w-3/5 leading-relaxed">
              Navegue por nossos projetos e veja como estamos mudando o cenário
              tecnológico. Participe de eventos inspiradores, onde você poderá
              aprender, compartilhar e crescer ao lado de outros entusiastas de
              tecnologia. Contribua ativamente para o desenvolvimento da nossa
              comunidade, ajudando a criar um ambiente onde a inovação floresce
              e o conhecimento é compartilhado.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="src/assets/technot.png"
              alt="Profile Creation"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Seção de Projetos e Eventos */}
      <section className="mb-16 lg:p-9">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img
              src="src/assets/image-comunidade-2.jpg"
              alt="Projects"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          <div className="flex-1 lg:pl-20">
            <h2 className="text-3xl font-bold mb-4">EVENTS AND MEETINGS</h2>
            <p className="text-gray-700 text-base sm:text-lg lg:w-3/5 leading-relaxed">
              Descubra os projetos mais recentes da nossa comunidade e veja como
              estamos transformando o futuro da tecnologia. Participe de eventos
              onde você pode aprender, compartilhar e crescer com outros
              entusiastas de tecnologia.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Valores e Princípios */}
      <section className="mb-16 lg:p-9">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">NOSSOS VALORES</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              <strong>Comunidade:</strong> Valorizamos cada membro e promovemos
              o crescimento coletivo.
              <br />
              <strong>Integridade:</strong> Atuamos com honestidade e ética em
              todas as nossas ações.
              <br />
              <strong>Excelência:</strong> Comprometemo-nos com a qualidade e a
              melhoria contínua.
              <br />
              <strong>Colaboração:</strong> Trabalhamos juntos para alcançar
              objetivos comuns.
              <br />
              <strong>Inovação:</strong> Buscamos constantemente novas soluções
              e ideias.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="src/assets/image-comunidade-2.jpg"
              alt="Profile Creation"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Seção: Parcerias */}
      <section className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
          Nossos Parceiros
        </h2>
        <div className="flex justify-center gap-8">
          <motion.img
            src="src/assets/PARCEIROS/logoSebrae.png"
            alt="Parceiro Sebrae"
            className="h-12 transition-transform bg-black rounded-lg lg:pl-4 lg:pr-4 shadow-xl transform hover:scale-110"
            whileHover={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src="src/assets/PARCEIROS/logowhite.png"
            alt="Parceiro White"
            className="h-12 transition-transform bg-black rounded-lg lg:pl-2 shadow-xl transform hover:scale-110"
            whileHover={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src="src/assets/PARCEIROS/logo-parceiro.png"
            alt="Parceiro Parceiro"
            className="h-12 transition-transform bg-black rounded-lg lg:pl-4 lg:pr-4 shadow-xl transform hover:scale-110"
            whileHover={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
