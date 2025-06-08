
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ExpertCardProps {
  id?: string;
  name: string;
  title: string;
  expertise: string;
  rating: number;
  sessions: number;
  price: string;
  image: string;
  availability: string;
}

const ExpertCard = ({ id, name, title, expertise, rating, sessions, price, image, availability }: ExpertCardProps) => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    const expertId = id || Math.random().toString(36).substring(7);
    navigate(`/appointment/${expertId}`);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-lumo-200 hover:border-lumo-300">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-16 h-16 bg-lumo-100 rounded-full flex items-center justify-center overflow-hidden">
            <span className="text-lumo-700 font-semibold text-lg">{name.split(' ').map(n => n[0]).join('')}</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-lumo-600 transition-colors">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm">{title}</p>
            <p className="text-lumo-600 text-sm font-medium">{expertise}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <span>{rating}</span>
            </div>
            <div>
              <span>{sessions} sessions</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-foreground">{price}</div>
            <div className="text-xs text-muted-foreground">per 30 min</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <span className="text-muted-foreground">{availability}</span>
          </div>
        </div>

        <Button 
          onClick={handleBookAppointment}
          className="w-full bg-lumo-500 hover:bg-lumo-600 group-hover:scale-105 transition-transform"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Book Appointment
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExpertCard;
