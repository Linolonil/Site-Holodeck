// src/pages/Community.jsx
import React from "react";
import { motion } from "framer-motion";
import FloatingIcons from "../components/Layout/Collaborator/FloatingIcons"; // Ajuste o caminho conforme necessário
import CarouselSection from "../components/Layout/Collaborator/CarouselSection";

const Community = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-full justify-center m-2 flex flex-col lg:flex-row mt-5 lg:mt-14 mb-10">
        <motion.section
          id="comunidade"
          className="relative max-w-7xl max-h-max rounded-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Imagem de fundo */}
          <div className="absolute inset-0">
            <img
              src="src/assets/image-comunidade.jpg"
              alt="Comunidade"
              className="w-full h-full object-cover opacity-100"
            />
          </div>

          {/* Seção Principal */}
          <div className="relative p-8 md:p-12 flex flex-col-reverse md:flex-row items-center justify-center z-10">
            {/* Texto e Botão */}
            <div className="w-full md:w-2/5  space-y-6">
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-white mb-8">
                <span className="text-[#3c297a]">
                  Conheça a Holodeck Community
                </span>
              </h1>
              <p className="text-base md:text-justify text-white mb-6">
                A Holodeck é uma comunidade vibrante de entusiastas de
                tecnologia e inovação no norte do Brasil. Nossa missão é reunir
                pessoas apaixonadas por tecnologia, promovendo eventos, projetos
                colaborativos e aprendizado contínuo.
              </p>

              <br></br>
              <br></br>

              <motion.a
                href="/communityjoin"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Explore Mais
              </motion.a>
            </div>

            {/* Imagem de Fundo com Opacidade Reduzida */}
            <div className="relative w-full md:w-1/2"></div>
          </div>

          {/* Seção de Estatísticas */}
          <div className="relative flex flex-col md:flex-row items-center justify-around p-2 md:p-12 bg-[#191825] border-t-8 border-[#a9e916]  z-10">
            <div className="text-center flex-1 mb-2 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                80%
              </h2>
              <p className="text-sm font-light text-gray-300">Engajamento</p>
            </div>
            <div className="border-r border-gray-700 h-8 md:h-12 mx-4 hidden md:block"></div>
            <div className="text-center flex-1 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                3
              </h2>
              <p className="text-sm font-light text-gray-300">
                Projetos Completos
              </p>
            </div>
            <div className="border-r border-gray-700 h-8 md:h-12 mx-4 hidden md:block"></div>
            <div className="text-center flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                76+
              </h2>
              <p className="text-sm font-light text-gray-300">Colaboradores</p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Container principal para ambas as seções */}
      <div className="max-w-full m-2 flex flex-col lg:flex-row mt-14 mb-10">
        {/* Seção 1: Seja um Colaborador */}
        <motion.section
          id="colaborador"
          className="relative max-w-7xl max-h-max mx-auto rounded-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          style={{
            backgroundImage:
              "linear-gradient(to right, #7b39d8, #3e34af, #7152ff)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "300px",
          }}
        >
          {/* Div para o conteúdo de texto à esquerda */}
          <div className="flex-grow mt-5 p-9 sm:p-5 md:p-6 lg:p-8 xl:p-10 text-left  ">
            <FloatingIcons />
            <br />

            <div className="w-full md:w-1/2 mb-9 mt-20">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-20 font-semibold text-white">
                Encontre e Colabore com sua equipe em Holodeck
              </h1>

              <p className="mt-11 mb-4 text-white font-light leading-relaxed">
                Conecte-se com toda a equipe e colabore no desenvolvimento de
                projetos colaborativos, fortalecendo seu conhecimento e
                compartilhando com todos.
              </p>

              <a
                href="/projects"
                className="inline-block px-6 py-3 bg-[#3c297a] text-white font-semibold rounded-lg shadow-lg hover:bg-[#606060] transition-colors duration-300"
              >
                Explore Projetos
              </a>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Seção de Projetos */}
      <section className=" bg-[#EBF8FF] max-w-full">
        <CarouselSection />
      </section>

      {/* Seção 3: Contato */}
      <section id="contato" className="max-w-full m-2 flex flex-col lg:flex-row mt-14 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-6 md:p-8 rounded-lg border border-gray-300 shadow-lg bg-gray-100 bg-opacity-80"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Entre em Contato Conosco
          </h1>
          <p className="text-gray-700 mb-6">
            Acreditamos que a comunicação é a chave para o sucesso. Se você
            tiver alguma dúvida, sugestão ou apenas quiser bater um papo sobre
            tecnologia, não hesite em nos contatar!
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="nome" className="block text-gray-700">
                  Nome:
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  E-mail:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="assunto" className="block text-gray-700">
                  Assunto:
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="mensagem" className="block text-gray-700">
                  Mensagem:
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3c297a] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#3c297a] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Enviar Mensagem
            </button>
          </form>

          <div className="mt-8">
            <h2 className="text-lg md:text-xl font-bold text-gray-900">
              Informações de Contato:
            </h2>
            <p className="text-gray-700 mt-2">
              E-mail:{" "}
              <a
                href="mailto:holodeckcomunity@gmail.com"
                className="text-[#3c297a] hover:underline"
              >
                holodeckcomunity@gmail.com
              </a>
            </p>
            <p className="text-gray-700">
              Telefone:{" "}
              <a
                href="tel:+5592993007673"
                className="text-[#372578] hover:underline"
              >
                {" "}
                +5592993007673
              </a>
            </p>
            <p className="text-gray-700">
              Endereço: xx xxxxx, xxx, Alvorada, Manaus, AM
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg md:text-xl font-bold text-gray-900">
              Redes Sociais:
            </h2>
            <ul className="flex flex-wrap gap-4 mt-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/holodeck-technologies-community?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#372578] hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/holodeckcommunity/profilecard/?igsh=bzJ6Zmlua3h3aHQ="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3c297a] hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Community;
