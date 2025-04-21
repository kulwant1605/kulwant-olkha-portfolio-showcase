
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-50 to-blue-50 py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-portfolio-navy">
              Hi, I'm <span className="text-portfolio-blue">Kulwant Olkha</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Computer Science Student & Developer
            </h2>
            <p className="text-gray-700 mb-8 max-w-md">
              A passionate B.Tech CSE student with a strong foundation in DSA, programming languages, and machine learning. I love building solutions that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">
                <a href="/lovable-uploads/9982cc9f-ac8e-4936-a3e3-4ef9108078ef.png" download="Kulwant_Olkha_CV.png">
                  Download CV
                </a>
              </Button>
              <Button variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/lovable-uploads/fef5ee6d-6d52-405d-89f5-04f8a0cbdde6.png"
                alt="Kulwant Olkha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-portfolio-blue">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
