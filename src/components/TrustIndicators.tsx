
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Clock, Users } from "lucide-react";

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: "100% Vetted Experts",
      description: "Every expert undergoes rigorous screening for credentials and experience"
    },
    {
      icon: Award,
      title: "Certified Professionals",
      description: "All experts hold relevant certifications and proven track records"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your schedule, from 30 to 60 minutes"
    },
    {
      icon: Users,
      title: "Personalized Guidance",
      description: "Get advice tailored specifically to your financial situation and goals"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose LumoTalk?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to connecting you with legitimate experts who provide real value, not just AI-generated responses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((indicator, index) => (
            <Card key={index} className="border-lumo-200 text-center group hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-lumo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lumo-500 transition-colors">
                  <indicator.icon className="w-8 h-8 text-lumo-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {indicator.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {indicator.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
