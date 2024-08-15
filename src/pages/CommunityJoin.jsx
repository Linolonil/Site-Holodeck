// src/pages/Community.jsx
import React from "react";
import { motion } from "framer-motion";
import CarouselSection from "../components/Layout/Collaborator/CarouselSection";

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#3e34af] to-[#7b39d8]">
{/* Hero Section */}
<section id="comunidade" className="relative flex items-center justify-center h-screen bg-white">
  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('src/assets/image-comunidade-2.jpg')" }}></div>
  
  <div className="relative z-10 text-center p-12 max-w-4xl mx-auto bg-white bg-opacity-70 rounded-xl shadow-lg">
  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Holodeck Community</h1>
  <p className="text-lg md:text-xl text-gray-700 mt-4">Impulsione o compartilhamento do seu conhecimento. Trabalhe juntos em artigos e projetos, desenvolvendo seu conhecimento e compartilhando suas habilidades.</p>
  
  {/* Botão de Ação */}
  <div className="mt-8">
    <a
      href="#access"
      className="inline-block px-10 py-4 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-black transition duration-300"
    >
      Me tornar membro
    </a>
  </div>

  {/* Texto adicional */}
  <div className="mt-8 text-gray-600">
    <p>Conecte-se com nossos fundadores.</p>
  </div>
</div>

  
  {/* Additional Visuals */}
  <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-gray-100">
    <p className="text-sm">Impulsionando a próxima geração de desenvolvedores e inovadores</p>
  </div>
</section>

      {/* Mission Section */}
      <section className="container mx-auto py-16 px-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black">Nossa Missão</h2>
            <p className="text-lg font-medium ">
              A Holodeck é uma comunidade vibrante de entusiastas de tecnologia e inovação no norte do Brasil.
              Nossa missão é reunir pessoas apaixonadas por tecnologia, promovendo eventos, projetos colaborativos e aprendizado contínuo.
            </p>
          </div>
          <div>
            <img src="src/assets/image-comunidade.jpg" alt="Missão" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Nossos Projetos</h2>
          <CarouselSection />
        </div>
      </section>

     {/* Testimonials Section */}
<section className="bg-gray-100 py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-12">O que dizem nossos membros</h2>
    <div className="flex flex-col md:flex-row mx-4 justify-center space-y-6 md:space-y-0 md:space-x-6">
      {/* Small Card */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg md:w-1/3">
        <p className="text-gray-700">"Participar da Holodeck foi um divisor de águas para minha carreira. A colaboração e apoio da comunidade são inigualáveis."</p>
        <p className="mt-4 font-semibold text-gray-800">- Pedro Lima</p>
      </div>
      {/* Medium Card */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg md:w-1/2">
        <p className="text-gray-700">"A Holodeck me deu a oportunidade de aprender e compartilhar conhecimento em um ambiente acolhedor e inovador."</p>
        <p className="mt-4 font-semibold text-gray-800">- Ana Costa</p>
      </div>
      {/* Large Card */}
      <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg md:w-2/3">
        <p className="text-gray-700">"Sou muito grato por fazer parte dessa comunidade. A experiência tem sido enriquecedora em todos os sentidos, e me sinto constantemente desafiado e inspirado."</p>
        <p className="mt-4 font-semibold text-gray-800">- Lucas Fernandes</p>
      </div>
    </div>

    {/* Another Row with Diverse Sizes */}
    <div className="flex flex-col md:flex-row justify-center mx-4 space-y-6 md:space-y-0 md:space-x-6 mt-12">
      {/* Large Card */}
      <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg md:w-2/3">
        <p className="text-gray-700">"A comunidade da Holodeck tem sido um verdadeiro suporte na minha jornada profissional. A energia colaborativa é contagiante e inspiradora."</p>
        <p className="mt-4 font-semibold text-gray-800">- Júlia Martins</p>
      </div>
      {/* Small Card */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg md:w-1/3">
        <p className="text-gray-700">"O networking aqui é incrível. Consegui me conectar com pessoas talentosas e dispostas a compartilhar seu conhecimento."</p>
        <p className="mt-4 font-semibold text-gray-800">- Felipe Rocha</p>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contato" className="bg-gradient-to-r from-[#3e34af] to-[#7b39d8] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-bold">Entre em Contato</h2>
              <p>Estamos sempre prontos para ouvir suas ideias e responder suas perguntas. Sinta-se à vontade para entrar em contato conosco!</p>
              <ul className="space-y-4">
                <li>Email: <a href="mailto:holodeckcomunity@gmail.com" className="underline">holodeckcomunity@gmail.com</a></li>
                <li>Telefone: <a href="tel:+5592993007673" className="underline">+5592993007673</a></li>
                <li>Endereço: xx xxxxx, xxx, Alvorada, Manaus, AM</li>
              </ul>
            </div>
            <div>
              <form className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-gray-700">Nome:</label>
                  <input 
                  type="text" id="nome" name="nome" className="w-full p-3 rounded-md shadow-sm border border-gray-300" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700">Email:</label>
                  <input type="email" id="email" name="email" className="w-full p-3 rounded-md shadow-sm border border-gray-300" />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-gray-700">Mensagem:</label>
                  <textarea id="mensagem" name="mensagem" rows="4" className="w-full p-3 rounded-md shadow-sm border border-gray-300"></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700">Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
