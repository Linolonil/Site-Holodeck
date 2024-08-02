  // src/pages/Contato.jsx
  import React from 'react';
  import { motion } from 'framer-motion';

  const Contato = () => {
    return (
      <div className="min-h-screen p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto p-6 md:p-8 rounded-lg border border-gray-300 shadow-lg bg-gray-100 bg-opacity-80"
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
              className="w-full bg-[#8419c5] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#782fa6] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Enviar Mensagem
            </button>
          </form>

          <div className="mt-8">
            <h2 className="text-lg md:text-xl font-bold text-gray-900">Informações de Contato:</h2>
            <p className="text-gray-700 mt-2">E-mail: <a href="mailto:holodeckcomunity@gmail.com" className="text-[#8419c5] hover:underline">holodeckcomunity@gmail.com</a></p>
            <p className="text-gray-700">Telefone: <a href="tel:+5592993007673" className="text-[#8419c5] hover:underline"> +5592993007673</a></p>
            <p className="text-gray-700">Endereço: Rua Pandora, 309, Alvorada, Manaus, AM</p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg md:text-xl font-bold text-gray-900">Redes Sociais:</h2>
            <ul className="flex flex-wrap gap-4 mt-2">
              <li><a href="https://www.linkedin.com/in/holodeck-technologies-community?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-[#8419c5] hover:underline">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/holodeckcommunity/profilecard/?igsh=bzJ6Zmlua3h3aHQ=" target="_blank" rel="noopener noreferrer" className="text-[#8419c5] hover:underline">Instagram</a></li>
            </ul>
          </div>
        </motion.div>
      </div>
    );
  };

  export default Contato;
