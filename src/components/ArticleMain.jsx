
function ArticleMain() {
  return (
    <>
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
              medida que a tecnologia continua a evoluir a um ritmo acelerado,
              um dos fenômenos mais marcantes é a crescente importância das
              comunidades na configuração do futuro digital.{" "}
            </p>
            <a
              href="https://dev.to/feministech/o-que-sao-comunidades-de-tecnologia-2e22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8419c5] hover:underline inline-block"
            >
              Read more
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ArticleMain