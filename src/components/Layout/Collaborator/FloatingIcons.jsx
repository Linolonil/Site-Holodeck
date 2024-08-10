// FloatingIconsContainer.jsx
import { motion } from "framer-motion";

const iconImages = [
  "src/assets/Icons/Java.png",
  "src/assets/Icons/sql.png",
  "src/assets/Icons/visual-studio-code.png",
  "src/assets/Icons/react.png",
  "src/assets/Icons/c-sharp.png",
  "src/assets/Icons/css-icon.png",
  "src/assets/Icons/python.png",
  "src/assets/Icons/git.png",
];

const FloatingIcons = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 flex flex-wrap items-center justify-center space-x-4 sm:space-x-8 lg:space-x-12 animate-float pointer-events-none">
      {iconImages.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Ícone ${index + 1}`}
          className="w-12 h-12 sm:w-14 p-1 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-transform duration-300 transform hover:scale-110"
          animate={{ y: [0, -40, 10] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  </div>
);

export default FloatingIcons;
