import { Phone, Mail, Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold text-secondary mb-4">
              CÂMARA VIANA
            </h3>
            <p className="font-montserrat text-gray-300 mb-6">
              Advocacia e Assessoria Jurídica de excelência, comprometida com
              resultados e a satisfação de nossos clientes.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-secondary mb-4">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-secondary" />
                <a href="tel:+5561933909991" className="font-montserrat text-gray-300 hover:text-secondary transition-colors">
                  +55 61 9339-0991
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-secondary" />
                <a href="mailto:contato@camaraviana.com" className="font-montserrat text-gray-300 hover:text-secondary transition-colors">
                  contato@camaraviana.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-secondary" />
                <a href="https://instagram.com/rvvianaa" target="_blank" rel="noopener noreferrer" className="font-montserrat text-gray-300 hover:text-secondary transition-colors">@rvvianaa
              </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-secondary mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="font-montserrat text-gray-300 hover:text-secondary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="font-montserrat text-gray-300 hover:text-secondary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="font-montserrat text-gray-300 hover:text-secondary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="font-montserrat text-gray-300 hover:text-secondary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="font-montserrat text-sm text-gray-400">
            © {new Date().getFullYear()} CÂMARA VIANA - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;