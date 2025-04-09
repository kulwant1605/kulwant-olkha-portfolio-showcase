
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="font-heading text-xl font-bold text-portfolio-blue">
              Kulwant Olkha
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#certifications" className="nav-link">Certifications</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          
          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/kulwantolkha/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-portfolio-blue transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/kulwantolkha" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-portfolio-blue transition-colors">
              <Github size={20} />
            </a>
            <a href="mailto:kulwantolkha@gmail.com" className="text-gray-500 hover:text-portfolio-blue transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium nav-link">About</a>
          <a href="#education" className="block px-3 py-2 rounded-md text-base font-medium nav-link">Education</a>
          <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium nav-link">Skills</a>
          <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium nav-link">Projects</a>
          <a href="#certifications" className="block px-3 py-2 rounded-md text-base font-medium nav-link">Certifications</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium nav-link">Contact</a>
        </div>
        <div className="flex justify-center space-x-4 pb-3">
          <a href="https://www.linkedin.com/in/kulwantolkha/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-portfolio-blue transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/kulwantolkha" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-portfolio-blue transition-colors">
            <Github size={20} />
          </a>
          <a href="mailto:kulwantolkha@gmail.com" className="text-gray-500 hover:text-portfolio-blue transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
