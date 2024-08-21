import React from "react";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar - Menu e Botão de Ação */}
      <header className="flex justify-end items-center mb-8 p-8">
        <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
          Login
        </button>
      </header>

      {/* Hero Section - Imagem e Título Principal */}
      <section className="relative flex flex-col items-center justify-center text-center mb-16 p-8">
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
          <video
            src="src/assets/homebg.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
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
      <section className="mb-16 p-8">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="text-sm font-semibold mb-4 md:mb-0">
            250+ USUÁRIOS SATISFEITOS E ABERTOS
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

      {/* Seção Principal que engloba todas as seções */}
      <section className="w-full p-8 bg-gray-950 text-white">
        <div className="w-full max-w-screen-xl mx-auto">
          <h1 className="text-4xl mt-7 font-bold text-center mb-12">
            Explore Nossa Comunidade
          </h1>

          {/* Seção de Cards */}
          <section className="mb-16 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Crie sua conta
                </h2>
                <div className="w-full h-40 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="src/assets/technot.png"
                    alt="Criação de perfil"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-300 text-base leading-relaxed text-center">
                  Navegue por nossos projetos e veja como estamos mudando o
                  cenário tecnológico. Participe de eventos inspiradores, onde
                  você poderá aprender, compartilhar e crescer ao lado de outros
                  entusiastas de tecnologia.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Eventos e Encontros
                </h2>
                <div className="w-full h-40 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="src/assets/image-comunidade-2.jpg"
                    alt="Eventos e Encontros"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-300 text-base leading-relaxed text-center">
                  Descubra os projetos mais recentes da nossa comunidade e veja
                  como estamos transformando o futuro da tecnologia. Participe
                  de eventos onde você pode aprender, compartilhar e crescer com
                  outros entusiastas de tecnologia.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Inovação e Tecnologia
                </h2>
                <div className="w-full h-40 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="src/assets/imgprogram.png"
                    alt="Inovação e Tecnologia"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-300 text-base leading-relaxed text-center">
                  Mergulhe em inovações e novas tecnologias que estão moldando o
                  futuro. Explore como nossa comunidade está na vanguarda da
                  tecnologia e participe de discussões sobre as últimas
                  tendências.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Card 4 */}
              <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Colaboração e Crescimento
                </h2>
                <div className="w-full h-40 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="src/assets/tags.png"
                    alt="Colaboração e Crescimento"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-300 text-base leading-relaxed text-center">
                  Envolva-se em projetos colaborativos e descubra novas
                  oportunidades para crescimento pessoal e profissional.
                  Trabalhe com outros membros para alcançar objetivos comuns.
                </p>
              </div>
              {/* Card 5 */}
              <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Recursos e Ferramentas
                </h2>
                <div className="w-full h-40 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="src/assets/ferramentas.png"
                    alt="Recursos e Ferramentas"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-300 text-base leading-relaxed text-center">
                  Acesse uma variedade de recursos e ferramentas que ajudam a
                  facilitar o aprendizado e a inovação. Explore nossos materiais
                  e aproveite ao máximo as oportunidades oferecidas.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* <section className="mb-16 p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Membros Ativos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={`src/assets/member${index + 1}.jpg`} // Substitua pelos caminhos das imagens reais
                  alt={`Membro ${index + 1}`}
                  className="w-16 h-16 rounded-full border-2 border-gray-200 mb-4 object-cover"
                />
                <p className="text-gray-700 font-medium">Membro {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Seção: Parcerias */}
      <section className="text-center p-8">
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
