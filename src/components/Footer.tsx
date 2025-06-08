import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-lumo-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-lumo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold">LumoTalk</span>
            </div>
            <p className="text-lumo-200 mb-6 max-w-md">
              Connecting you with vetted experts for quality 1:1 guidance. 
              Get the financial advice you need from professionals you can trust.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.x.com/LumoTalk" target="_blank" rel="noopener noreferrer" className="text-lumo-200 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/lumotalk/" target="_blank" rel="noopener noreferrer" className="text-lumo-200 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-lumo-200">
              <li>
                <button 
                  onClick={() => scrollToSection('expert-grid')} 
                  className="hover:text-white transition-colors"
                >
                  Find Experts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')} 
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-lumo-200">
              <li><a href="" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="https://forms.gle/oY6f62P2ZYtgcfk17" className="hover:text-white transition-colors">Apply as Expert</a></li>
              <li><a href="https://www.lumotalk.com/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="https://www.lumotalk.com/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>

            </ul>
          </div>
        </div>

        <div className="border-t border-lumo-800 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-lumo-200 text-sm">
            © 2025 LumoTalk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
