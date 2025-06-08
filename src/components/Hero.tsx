import { Button } from "@/components/ui/button";
import { Calendar, Shield, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-lumo-50 via-white to-lumo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center bg-lumo-100 text-lumo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            All experts are vetted & verified
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Quality 1:1 Guidance from 
            <span className="text-lumo-500"> Vetted Experts</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We're kicking off with Financial Guidance — get answers to key questions like: 
            "Should I pay off my debt first or start investing?"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lumo-500 hover:bg-lumo-600 text-lg px-8 py-6" onClick={() => document.getElementById('expert-grid')?.scrollIntoView({ behavior: 'smooth' })}>
              <Calendar className="w-5 h-5 mr-2" />
              Book My Session
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <a href="https://forms.gle/oY6f62P2ZYtgcfk17" target="_blank" rel="noopener noreferrer">
                Apply to be a Trusted Expert
              </a>
            </Button>
          </div>

          {/* <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <span>4.9/5 rating</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span>500+ sessions completed</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-lumo-500 mr-1" />
              <span>100% verified experts</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
