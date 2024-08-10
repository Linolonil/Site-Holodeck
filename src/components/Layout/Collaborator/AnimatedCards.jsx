import { motion } from "framer-motion";

const cardData = [
  {
    src: "src/assets/laptop-com-icone-de-codigo.avif",
    alt: "Oculus Rift / Rift S",
    title: "Oculus Rift / Rift S",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-700",
  },
  {
    src: "src/assets/laptop-com-icone-de-codigo.avif",
    alt: "Oculus Quest",
    title: "Oculus Quest",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-700",
  },
  {
    src: "src/assets/laptop-com-icone-de-codigo.avif",
    alt: "Index, Vive",
    title: "Index, Vive",
    gradientFrom: "from-yellow-500",
    gradientTo: "to-yellow-700",
  },
];

const AnimatedCards = () => (
  <div className="container mx-auto px-4">
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className={`bg-gradient-to-br ${card.gradientFrom} ${card.gradientTo} p-8 rounded-3xl flex flex-col items-center shadow-xl hover:shadow-2xl transition duration-300`}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        >
          <img
            src={card.src}
            alt={card.alt}
            className="w-28 h-28 mb-4"
          />
          <span className="text-white text-lg font-semibold">
            {card.title}
          </span>
        </motion.div>
      ))}
    </section>
  </div>
);

export default AnimatedCards;
