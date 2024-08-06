// src/pages/blog.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Blog = () => {
  return (
    <div className="min-h-screen bg-transparent">

      {/* Seção de Destaque */}
      <section className="container mx-auto my-12 px-6">
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="src/assets/info-tech.png"
            alt="Artigo Destaque"
            className="w-full lg:w-1/2 h-auto object-cover"
          />
          <div className="p-8 lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              O Futuro da tecnologia: A Geração de comunidades
            </h2>
            <p className="text-gray-700 mb-6">
            medida que a tecnologia continua a evoluir a um ritmo acelerado, um dos fenômenos mais marcantes é a crescente importância das comunidades na configuração do futuro digital.            </p>
            <a
              href="https://dev.to/feministech/o-que-sao-comunidades-de-tecnologia-2e22" target="_blank" rel="noopener noreferrer" className="text-[#8419c5] hover:underline inline-block">
                  Read more
              </a>
          </div>
        </div>
      </section>

      {/* Seção de Artigos Recentes */}
      <section className="container mx-auto px-6 my-12">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Latest Articles</h3>

        {/* Filtros/Categorias */}
        <div className="flex flex-wrap items-center mb-8 space-x-4 space-y-2">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
          Technologia
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
          Marketing Digital
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
            Business
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
            More
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#8419c5]"
          />
        </div>

        {/* Lista de Artigos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Artigo 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://s2-g1.glbimg.com/jVDjlxqKVe6CHqQ7ImAX9Axhpk8=/0x0:3930x1965/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/T/v/HvcvhLQs6IMbjY60LVzw/office-sao-credito-reproducao-google-3-.jpg"
              alt="Artigo 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Content Marketing Strategies for 2024
              </h4>
              <p className="text-gray-700 mb-4">
              Função será disponibilizada em parceria com o C6 Bank e com o Picpay. Google funcionará como um iniciador de pagamentos, com acesso às contas por meio do open finance.
              </p>
              <a
              href="https://g1.globo.com/economia/noticia/2024/07/30/google-pix.ghtml" target="_blank" rel="noopener noreferrer" className="text-[#8419c5] hover:underline inline-block">
                  Read more
              </a>
            </div>
          </motion.div>

          {/* Artigo 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://s2-g1.glbimg.com/PeZSKXVfc0z06Qi2smENulsKuKs=/0x0:3240x2167/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/x/k/DAeK7aQCOrIklhM1DKeg/instagram-facebook.jpg"
              alt="Artigo 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Como se proteger contra invasões em contas de WhatsApp, Instagram, Google e mais
              </h4>
              <p className="text-gray-700 mb-4">
              Autenticação de dois fatores é acionada quando há uma tentativa de acessar a conta em um novo aparelho. Como o recurso não costuma ser ativado por padrão, é preciso ir às configurações de cada plataforma para aumentar a segurança.
              </p>
              <a
              href="https://g1.globo.com/tecnologia/noticia/2024/08/05/como-se-proteger-contra-invasoes-em-contas-de-whatsapp-instagram-google-e-mais.ghtml" target="_blank" rel="noopener noreferrer" className="text-[#8419c5] hover:underline inline-block">
                  Read more
              </a>
            </div>
          </motion.div>

          {/* Artigo 3 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://s2-g1.glbimg.com/I2cBbt4elN49ph70d0GVf8S1myU=/0x0:2000x1500/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/d/k/oWSp8gQtu60cBBNq1o5A/2001-uma-odisseia-no-espaco3.jpg"
              alt="Artigo 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Como HAL 9000, o computador de '2001: Uma Odisseia no Espaço' previu preocupações atuais sobre IA
              </h4>
              <p className="text-gray-700 mb-4">
              O clássico do diretor Stanley Kubrick (1928-1999) explora os avanços da tecnologia, apresentando talvez o cenário mais perturbador e impressionante do conflito entre a máquina e o ser humano da história da ficção científica no cinema.
              </p>
              <a
              href="https://g1.globo.com/tecnologia/noticia/2024/08/05/como-hal-9000-o-computador-de-2001-uma-odisseia-no-espaco-previu-preocupacoes-atuais-sobre-ia.ghtml" target="_blank" rel="noopener noreferrer" className="text-[#8419c5] hover:underline inline-block">
                  Read more
              </a>
            </div>
          </motion.div>

          {/* Artigo 4 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/a405/live/ae9e3140-4475-11ef-a050-6b9b8186e437.jpg.webp"
              alt="Artigo 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Por que Elon Musk vai mudar sede de empresas por lei de identidade de gênero
              </h4>
              <p className="text-gray-700 mb-4">
              O bilionário Elon Musk disse que mudará a sede de duas de suas empresas mais importantes, a empresa de foguetes SpaceX e a plataforma de mídia social X, da Califórnia para o Texas.
              </p>
              <a
              href="https://www.bbc.com/portuguese/articles/cd10knggyxko" target="_blank" rel="noopener noreferrer" className="text-[#8419c5] hover:underline inline-block">
                  Read more
              </a>
            </div>
          </motion.div>

          {/* Artigo 5 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/d485/live/93db0500-46a4-11ef-bd62-35cc0bbc7c1d.jpg.webp"
              alt="Artigo 5"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Como a China conseguiu evitar o pior do colapso tecnológico global
              </h4>
              <p className="text-gray-700 mb-4">
              "A Microsoft opera na China através de um parceiro local, a 21Vianet, que gerencia seus serviços de forma independente da sua infraestrutura global. Esse arranjo isola os serviços essenciais da China - como bancos e aviação - de interrupções globais."
              </p>
              <a
              href="https://www.bbc.com/portuguese/articles/cjl6dx7yrkno" target="_blank" rel="noopener noreferrer" className="text-[#8419c5] hover:underline inline-block">
                  Read more
              </a>
            </div>
          </motion.div>

          {/* Artigo 6 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/b49e/live/91d8be30-534e-11ef-a552-e3fb1ced2725.jpg.webp"
              alt="Artigo 6"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Os hackers norte-coreanos que tentam roubar segredos nucleares e militares
              </h4>
              <p className="text-gray-700 mb-4">
              Hackers norte-coreanos estão tentando roubar segredos nucleares e militares de governos e empresas privadas em todo o mundo, alertam Reino Unido, Estados Unidos e Coreia do Sul.
              </p>
              <a
              href="https://www.bbc.com/portuguese/articles/c3033l17lqgo" target="_blank" rel="noopener noreferrer" className="text-[#8419c5] hover:underline inline-block">
                  Read more
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
