
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-playfair text-4xl font-bold text-primary">
              Sobre Nós
            </h2>
            <p className="font-montserrat text-gray-600 leading-relaxed">
              Com anos de experiência no mercado jurídico, a CÂMARA VIANA se destaca
              pela excelência no atendimento e compromisso com os resultados. Nossa
              equipe é formada por profissionais altamente qualificados e
              comprometidos com a defesa dos interesses de nossos clientes.
            </p>
            <p className="font-montserrat text-gray-600 leading-relaxed">
              Buscamos sempre a melhor solução jurídica, aliando conhecimento
              técnico e visão estratégica para alcançar os objetivos de nossos
              clientes de forma eficiente e ética.
            </p>
            <div className="flex gap-8">
              <div>
                <h3 className="font-playfair text-3xl font-bold text-secondary">15+</h3>
                <p className="font-montserrat text-gray-600">Anos de Experiência</p>
              </div>
              <div>
                <h3 className="font-playfair text-3xl font-bold text-secondary">500+</h3>
                <p className="font-montserrat text-gray-600">Casos de Sucesso</p>
              </div>
              <div>
                <h3 className="font-playfair text-3xl font-bold text-secondary">100%</h3>
                <p className="font-montserrat text-gray-600">Comprometimento</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <img
                src="/office.jpg"
                alt="Escritório CÂMARA VIANA"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
