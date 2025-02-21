import { motion } from "framer-motion";
const FloatingCloud = () => {
  return <motion.div className="fixed left-4 bottom-8 z-50 cursor-pointer" initial={{
    opacity: 0,
    x: -50
  }} animate={{
    opacity: 1,
    x: 0
  }} transition={{
    duration: 0.5
  }} whileHover={{
    scale: 1.1
  }} whileTap={{
    scale: 0.9
  }}>
      <a href="https://wa.me/+556193390991" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
      // You can replace this with your cloud image
      alt="Câmara Viana Logo" className="w-16 h-16 p-2" src="/lovable-uploads/7750f386-1477-4e2a-9386-aa4cb2850666.png" />
      </a>
    </motion.div>;
};
export default FloatingCloud;