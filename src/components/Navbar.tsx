import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Início",
    href: "#inicio"
  }, {
    name: "Serviços",
    href: "#servicos"
  }, {
    name: "Sobre Nós",
    href: "#sobre"
  }, {
    name: "Contato",
    href: "#contato"
  }];
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="#" className="text-primary hover:text-secondary transition-colors flex items-center gap-2">
              <img alt="CÂMARA VIANA Logo" className="h-8 w-8 object-contain" src="/lovable-uploads/48db7352-0b85-486d-b0f3-89216a2b7e5a.png" />
              <span className="font-playfair text-2xl font-bold">CÂMARA VIANA</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map(link => <a key={link.name} href={link.href} className="font-montserrat text-primary hover:text-secondary transition-colors duration-300 text-sm font-medium">
                  {link.name}
                </a>)}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary hover:text-secondary transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(link => <a key={link.name} href={link.href} className="block font-montserrat text-primary hover:text-secondary transition-colors duration-300 px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;