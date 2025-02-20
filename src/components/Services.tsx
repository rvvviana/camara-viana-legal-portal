
import { Scale, FileText, Briefcase, Users } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Scale,
    title: "Direito Civil",
    description: "Assessoria completa em questões de direito civil, incluindo contratos, responsabilidade civil e direito de família.",
  },
  {
    icon: FileText,
    title: "Direito Tributário",
    description: "Planejamento tributário estratégico e representação em processos administrativos e judiciais.",
  },
  {
    icon: Briefcase,
    title: "Direito Empresarial",
    description: "Consultoria empresarial, fusões e aquisições, e proteção dos interesses corporativos.",
  },
  {
    icon: Users,
    title: "Direito Trabalhista",
    description: "Representação em causas trabalhistas e consultoria preventiva para empregadores.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="font-montserrat text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções jurídicas personalizadas para atender às suas necessidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-4 text-center">
                {service.title}
              </h3>
              <p className="font-montserrat text-gray-600 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
