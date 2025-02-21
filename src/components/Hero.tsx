
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-primary py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center opacity-10 bg-black" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8">
            <img
              src="/placeholder.svg"
              alt="CÂMARA VIANA Logo"
              className="h-32 w-auto mx-auto"
            />
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-secondary mb-4">
            CÂMARA VIANA
          </h1>
          <h2 className="font-montserrat text-xl md:text-2xl text-secondary/90 mb-8">
            Advocacia e Assessoria Jurídica
          </h2>
          <p className="font-montserrat text-white/80 max-w-2xl mx-auto text-lg mb-12">
            Excelência jurídica e compromisso com resultados. Nossa missão é defender seus direitos com dedicação e profissionalismo.
          </p>
          <motion.a
            href="https://wa.me/+556193390991"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-secondary text-primary font-montserrat font-semibold px-8 py-4 rounded-md hover:bg-secondary/90 transition-colors duration-300"
          >
            Entre em Contato
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
