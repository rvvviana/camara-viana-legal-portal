
import { motion } from "framer-motion";

interface LawyerType {
  name: string;
  role: string;
  experience: number;
  specialties: string[];
  education: string;
  description: string;
  image: string;
}

const mainLawyer: LawyerType = {
  name: "Danilo Viana",
  role: "Advogado Principal",
  experience: 15,
  specialties: ["Direito Civil", "Direito Empresarial", "Direito Tributário"],
  education: "Universidade de São Paulo (USP)",
  description: "Com mais de 15 anos de experiência na área jurídica, o Dr. João Câmara é especializado em direito civil, empresarial e tributário. Sua abordagem personalizada e comprometida garante que cada cliente receba a atenção e dedicação que merece, sempre buscando as melhores soluções jurídicas para cada caso.",
  image: "/lawyer-main.jpg"
};

const partnerLawyers: LawyerType[] = [
  {
    name: "Dra. Maria Silva",
    role: "Advogada Sócia",
    experience: 10,
    specialties: ["Direito Trabalhista", "Direito Previdenciário"],
    education: "Universidade Federal do Rio de Janeiro (UFRJ)",
    description: "Especialista em direito trabalhista e previdenciário, a Dra. Maria traz 10 anos de experiência em negociações e processos trabalhistas complexos.",
    image: "/lawyer-1.jpg"
  },
  {
    name: "Dr. Pedro Santos",
    role: "Advogado Sócio",
    experience: 8,
    specialties: ["Direito Empresarial", "Contratos"],
    education: "Pontifícia Universidade Católica (PUC)",
    description: "Com foco em direito empresarial e contratos, o Dr. Pedro é reconhecido por sua expertise em estruturação de negócios e consultoria empresarial.",
    image: "/lawyer-2.jpg"
  },
  {
    name: "Dra. Ana Costa",
    role: "Advogada Sócia",
    experience: 12,
    specialties: ["Direito Civil", "Direito do Consumidor"],
    education: "Universidade de Brasília (UnB)",
    description: "Especializada em direito civil e do consumidor, a Dra. Ana possui vasta experiência em resolução de conflitos e proteção dos direitos do consumidor.",
    image: "/lawyer-3.jpg"
  }
];

const TeamSection = () => {
  return (
    <section id="equipe" className="py-24 bg-primary">
      {/* Main Lawyer Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <img
              src={mainLawyer.image}
              alt={mainLawyer.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20"></div>
          </div>

          <div className="text-white space-y-6">
            <h2 className="font-playfair text-4xl font-bold text-secondary">
              {mainLawyer.name}
            </h2>
            <p className="font-montserrat text-xl text-secondary/90">{mainLawyer.role}</p>
            <p className="font-montserrat text-gray-300 leading-relaxed">
              {mainLawyer.description}
            </p>
            <div className="space-y-4">
              <p className="font-montserrat text-gray-300">
                <span className="text-secondary">Formação:</span> {mainLawyer.education}
              </p>
              <div>
                <p className="text-secondary mb-2">Áreas de Atuação:</p>
                <div className="flex flex-wrap gap-2">
                  {mainLawyer.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-montserrat"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Partner Lawyers Section */}
      <div className="container mx-auto px-4">
        <h3 className="font-playfair text-3xl font-bold text-secondary text-center mb-12">
          Nossa Equipe
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerLawyers.map((lawyer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-xl"
            >
              <div className="relative h-[300px]">
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-playfair text-xl font-bold text-primary mb-2">
                  {lawyer.name}
                </h4>
                <p className="font-montserrat text-primary/80 mb-4">{lawyer.role}</p>
                <p className="font-montserrat text-gray-600 mb-4">
                  {lawyer.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {lawyer.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-primary/5 text-primary px-3 py-1 rounded-full text-sm font-montserrat"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
