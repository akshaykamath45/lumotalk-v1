import { Button } from "@/components/ui/button";
import { Calendar, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-lumo-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={scrollToTop}
        >
          <div className="w-8 h-8 bg-lumo-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="text-xl font-bold text-lumo-900">LumoTalk</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 ml-32">
          <button 
            onClick={() => scrollToSection('expert-grid')} 
            className="text-foreground hover:text-lumo-500 transition-colors"
          >
            Find Experts
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-foreground hover:text-lumo-500 transition-colors"
          >
            How It Works
          </button>
          {/* <a href="#pricing" className="text-foreground hover:text-lumo-500 transition-colors">
            Pricing
          </a> */}
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <User className="w-4 h-4 mr-2" />
            Sign In
          </Button>
          <Button 
            size="sm" 
            className="bg-lumo-500 hover:bg-lumo-600"
            onClick={() => scrollToSection('expert-grid')}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book Session
          </Button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-lumo-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full justify-start"

            >
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <button 
              onClick={() => scrollToSection('expert-grid')} 
              className="text-foreground hover:text-lumo-500 transition-colors text-left"
            >
              Find Experts
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-foreground hover:text-lumo-500 transition-colors text-left"
            >
              How It Works
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
