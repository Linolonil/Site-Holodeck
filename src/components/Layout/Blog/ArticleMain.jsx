import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";
import { articlesMain} from "../../../assets/Blog/assets.jsx"
import "./styles.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function ArticleMain() {
  const swiperRef = useRef(null);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const handleMouseEnter = () => {
    if (swiperRef.current) swiperRef.current.swiper.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) swiperRef.current.swiper.autoplay.start();
  };

  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      scrollbar={{ draggable: true }}
      transition={{ duration: 0.7 }}
      className="container w-screen  mx-auto mt-4  pt-4  px-6 min-h-fit "
    >
      <Swiper
        ref={swiperRef}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={2000} // Ajuste a duração da transição
        className=" py-6"
      >
        {articlesMain.map((article, index) => (
          <SwiperSlide key={index}>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden "
            >
              <img
                src={article.imgSrc}
                alt="Artigo Destaque"
                className="h-96  lg:h-80 w-full lg:w-1/2  object-cover"
              />
              <div className="h-96 lg:h-80  p-8 lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  {article.title}
                </h2>
                <p className="text-gray-700 mb-6">{article.content}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8419c5] hover:underline inline-block  p-2 w-24"
                >
                  Read more
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </motion.section>
  );
}

export default ArticleMain;
