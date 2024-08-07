// src/pages/Community.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Community = () => {
  return (
    <div className="min-h-screen p-8 md:p-16 bg-gradient-to-br space-y-16">

<motion.section
  id="comunidade"
  className="relative max-w-7xl mx-auto rounded-xl shadow-2xl overflow-hidden"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
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
  <div className="relative p-8 md:p-12 flex flex-col-reverse md:flex-row items-center justify-between z-10">
    {/* Texto e Botão */}
    <div className="w-full md:w-1/2 space-y-6">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-4">
        Bem-vindo à Comunidade Holodeck
      </h1>
      <p className="text-base md:text-lg text-white mb-6">
        A Holodeck é uma comunidade vibrante de entusiastas de tecnologia e inovação no norte do Brasil. Nossa missão é reunir pessoas apaixonadas por tecnologia, promovendo eventos, projetos colaborativos e aprendizado contínuo.
      </p>
      <motion.button
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300"
        whileHover={{ scale: 1.05 }}
      >
        Explore Mais
      </motion.button>
    </div>

    {/* Imagem de Fundo com Opacidade Reduzida */}
    <div className="relative w-full md:w-1/2">
    </div>
  </div>

  {/* Seção de Estatísticas */}
  <div className="relative flex flex-col md:flex-row items-center justify-around p-8 md:p-12 bg-[#191825] border-t-8 border-[#a9e916] mt-56 z-10">
    <div className="text-center flex-1 mb-6 md:mb-0">
      <h2 className="text-2xl md:text-3xl font-semibold text-white">80%</h2>
      <p className="text-sm font-light text-gray-300">Engajamento</p>
    </div>
    <div className="border-r border-gray-700 h-8 md:h-12 mx-4 hidden md:block"></div>
    <div className="text-center flex-1 mb-6 md:mb-0">
      <h2 className="text-2xl md:text-3xl font-semibold text-white">3</h2>
      <p className="text-sm font-light text-gray-300">Projetos Completos</p>
    </div>
    <div className="border-r border-gray-700 h-8 md:h-12 mx-4 hidden md:block"></div>
    <div className="text-center flex-1">
      <h2 className="text-2xl md:text-3xl font-semibold text-white">76+</h2>
      <p className="text-sm font-light text-gray-300">Colaboradores</p>
    </div>
  </div>
</motion.section>

      {/* Seção 2: Seja um Colaborador */}
      <section id="colaborador" className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Seja um Colaborador</h1>
        <p className="text-gray-700 mb-6">
          A colaboração é a essência da nossa comunidade. Estamos sempre à procura de indivíduos talentosos e motivados que desejam fazer a diferença. 
          Como colaborador, você terá a oportunidade de liderar iniciativas, participar de projetos de código aberto e contribuir para o crescimento da comunidade.
        </p>
        <div className="bg-[#3c297a] text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contribua com a Holodeck</h2>
          <p className="text-white mb-4">
            A sua contribuição pode ter um impacto significativo. Ajude-nos a transformar a Holodeck em um farol de inovação e tecnologia. 
            Participe de nossos projetos e ajude a moldar o futuro.
          </p>
          <button className="bg-white text-[#3c297a] py-2 px-4 rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Saiba Mais
          </button>
        </div>
      </section>

      {/* Seção 3: Contato */}
      <section id="contato" className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-6 md:p-8 rounded-lg border border-gray-300 shadow-lg bg-gray-100 bg-opacity-80"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Entre em Contato Conosco</h1>
          <p className="text-gray-700 mb-6">
            Acreditamos que a comunicação é a chave para o sucesso. Se você tiver alguma dúvida, sugestão ou apenas quiser bater um papo sobre tecnologia, não hesite em nos contatar!
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="nome" className="block text-gray-700">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="assunto" className="block text-gray-700">Assunto:</label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="mensagem" className="block text-gray-700">Mensagem:</label>
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
            <h2 className="text-lg md:text-xl font-bold text-gray-900">Informações de Contato:</h2>
            <p className="text-gray-700 mt-2">E-mail: <a href="mailto:holodeckcomunity@gmail.com" className="text-[#3c297a] hover:underline">holodeckcomunity@gmail.com</a></p>
            <p className="text-gray-700">Telefone: <a href="tel:+5592993007673" className="text-[#372578] hover:underline"> +5592993007673</a></p>
            <p className="text-gray-700">Endereço: xx xxxxx, xxx, Alvorada, Manaus, AM</p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg md:text-xl font-bold text-gray-900">Redes Sociais:</h2>
            <ul className="flex flex-wrap gap-4 mt-2">
              <li><a href="https://www.linkedin.com/in/holodeck-technologies-community?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-[#372578] hover:underline">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/holodeckcommunity/profilecard/?igsh=bzJ6Zmlua3h3aHQ=" target="_blank" rel="noopener noreferrer" className="text-[#3c297a] hover:underline">Instagram</a></li>
            </ul>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Community;
