import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Search, User, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse Experts",
      description: "Search through our carefully vetted financial experts by expertise area, availability, and pricing."
    },
    {
      icon: User,
      title: "Select Your Expert",
      description: "Review profiles, ratings, and specializations to find the perfect match for your specific needs."
    },
    {
      icon: Calendar,
      title: "Book Your Session",
      description: "Choose your preferred date, time, and session length. Get instant confirmation with calendar integration."
    },
    {
      icon: CheckCircle,
      title: "Get Expert Guidance",
      description: "Join your video call and receive personalized, actionable advice from a trusted professional."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-lumo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with LumoTalk in four simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-lumo-200">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-lumo-100 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-lumo-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
