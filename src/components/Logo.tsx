
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-2"
    >
      <img
        src="https://i.postimg.cc/MKd9d6FV/Captura-de-tela-2024-12-09-120951-3-removebg-preview.png"
        alt="Hypnos Logo"
        className="h-12 w-auto"
      />
    </motion.div>
  );
};

export default Logo;
