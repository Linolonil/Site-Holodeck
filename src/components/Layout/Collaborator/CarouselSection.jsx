import React, { useRef, useEffect } from 'react';

const CarouselSection = () => {
  const containerRef = useRef(null);
  const requestRef = useRef(null);
  const xOffset = useRef(0);
  const speed = useRef(0.5); // Ajustar velocidade

  useEffect(() => {
    const container = containerRef.current;
    const items = container.children;
    const numItems = items.length;

    // Duplicar itens para efeito infinito
    container.innerHTML += container.innerHTML;
    container.style.width = `${items[0].getBoundingClientRect().width * numItems * 2}px`;

    const animate = () => {
      xOffset.current -= speed.current;
      if (Math.abs(xOffset.current) >= container.scrollWidth / 2) {
        xOffset.current = 0;
        container.style.transition = 'none';
      } else {
        container.style.transition = 'transform 0.5s ease';
      }
      container.style.transform = `translateX(${xOffset.current}px)`;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current); // Limpar animação ao desmontar o componente
  }, []);

  const handleMouseDown = (e) => {
    xOffset.current -= e.pageX - containerRef.current.getBoundingClientRect().left;
  };

  const handleMouseMove = (e) => {
    if (e.buttons !== 1) return; // Checar se o botão do mouse está pressionado
    containerRef.current.style.transform = `translateX(${xOffset.current - e.pageX}px)`;
  };

  const handleMouseUp = () => {
    xOffset.current = parseFloat(containerRef.current.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
  };

  const handleTouchStart = (e) => {
    xOffset.current -= e.touches[0].clientX - containerRef.current.getBoundingClientRect().left;
  };

  const handleTouchMove = (e) => {
    containerRef.current.style.transform = `translateX(${xOffset.current - e.touches[0].clientX}px)`;
  };

  const handleTouchEnd = () => {
    xOffset.current = parseFloat(containerRef.current.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
  };

  return (
    <section className="relative max-w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex lg:justify-center whitespace-nowrap"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: 'grab', display: 'flex' }}
      >
        {/* Carousel items */}
        <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[400px] px-2 inline-block">
          <div className="bg-gradient-to-br from-red-500 to-red-800 p-8 rounded-3xl flex flex-col items-center transition duration-300">
            <img
              src="src/assets/Icons/Java.png"
              alt="Projetos em Java"
              className="w-28 h-28 mb-4"
            />
            <span className="text-white text-lg font-semibold">Projetos em Java</span>
          </div>
        </div>

        <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[400px] px-2 inline-block">
          <div className="bg-gradient-to-br from-orange-500 to-orange-800 p-8 rounded-3xl flex flex-col items-center transition duration-300">
            <img
              src="src/assets/Icons/visual-studio-code.png"
              alt="Repositorio"
              className="w-28 h-28 mb-4"
            />
            <span className="text-white text-lg font-semibold">Repositorio</span>
          </div>
        </div>

        <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[400px] px-2 inline-block">
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-800 p-8 rounded-3xl flex flex-col items-center transition duration-300">
            <img
             src="src/assets/Icons/python.png"
              alt="IA em Python"
              className="w-28 h-28 mb-4"
            />
            <span className="text-white text-lg font-semibold">IA em Python</span>
          </div>
        </div>

        <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[400px] px-2 inline-block">
          <div className="bg-gradient-to-br from-blue-900 to-blue-500 p-8 rounded-3xl flex flex-col items-center transition duration-300">
            <img
             src="src/assets/Icons/react.png"
              alt="React"
              className="w-28 h-28 mb-4"
            />
            <span className="text-white text-lg font-semibold">IA em Python</span>
          </div>
        </div>

        <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[400px] px-2 inline-block">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl flex flex-col items-center transition duration-300">
            <img
             src="src/assets/Icons/sql.png"
              alt="sql"
              className="w-28 h-28 mb-4"
            />
            <span className="text-white text-lg font-semibold">IA em Python</span>
          </div>
        </div>

        {/* Repetição dos itens para efeito infinito */}
        <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[400px] px-2 inline-block">
          <div className="bg-gradient-to-br from-red-500 to-red-800 p-8 rounded-3xl flex flex-col items-center transition duration-300">
            <img
            src="src/assets/Icons/c-sharp.png"
              alt="C#"
              className="w-28 h-28 mb-4"
            />
            <span className="text-white text-lg font-semibold">Projetos em Java</span>
          </div>
        </div>

        <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[400px] px-2 inline-block">
          <div className="bg-gradient-to-br from-orange-500 to-orange-800 p-8 rounded-3xl flex flex-col items-center transition duration-300">
            <img
             src="src/assets/Icons/visual-studio-code.png"
              alt="vs-code"
              className="w-28 h-28 mb-4"
            />
            <span className="text-white text-lg font-semibold">Repositorio</span>
          </div>
        </div>

        <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[400px] px-2 inline-block">
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-800 p-8 rounded-3xl flex flex-col items-center transition duration-300">
            <img
            src="src/assets/Icons/python.png"
              alt="IA em Python"
              className="w-28 h-28 mb-4"
            />
            <span className="text-white text-lg font-semibold">IA em Python</span>
          </div>
        </div>

        <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[400px] px-2 inline-block">
          <div className="bg-gradient-to-br from-blue-900 to-blue-500 p-8 rounded-3xl flex flex-col items-center transition duration-300">
            <img
             src="src/assets/Icons/git.png"
              alt="git-repositorio"
              className="w-28 h-28 mb-4"
            />
            <span className="text-white text-lg font-semibold">IA em Python</span>
          </div>
        </div>

        <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[400px] px-2 inline-block">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl flex flex-col items-center transition duration-300">
            <img
            src="src/assets/Icons/sql.png"
              alt="sql"
              className="w-28 h-28 mb-4"
            />
            <span className="text-white text-lg font-semibold">IA em Python</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
