import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Clock, Calendar as CalendarIcon, User, ArrowLeft } from 'lucide-react';

interface Expert {
  id: string;
  name: string;
  title: string;
  expertise: string;
  rating: number;
  sessions: number;
  price: string;
  availability: string;
  experience: string;
  bio: string;
}

interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

const AppointmentPage = () => {
  const { expertId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedDuration, setSelectedDuration] = useState(30);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [expert, setExpert] = useState<Expert | null>(null);
  const [appointmentTitle, setAppointmentTitle] = useState('');
  const [appointmentDescription, setAppointmentDescription] = useState('');

  // Mock expert data with more details
  const experts = [
    {
      id: "1",
      name: "Sarah Chen",
      title: "Senior Financial Advisor",
      expertise: "Investment Strategy",
      rating: 4.9,
      sessions: 150,
      price: "$75",
      availability: "Available today",
      experience: "8+ years",
      bio: "Specialized in helping young professionals build wealth through strategic investments and portfolio optimization."
    },
    {
      id: "2", 
      name: "Michael Rodriguez",
      title: "Certified Financial Planner",
      expertise: "Debt Management",
      rating: 4.8,
      sessions: 200,
      price: "$60",
      availability: "Available tomorrow",
      experience: "10+ years",
      bio: "Expert in debt consolidation and financial recovery strategies for individuals and families."
    },
    {
      id: "3",
      name: "Dr. Emma Thompson",
      title: "Wealth Management Expert", 
      expertise: "Retirement Planning",
      rating: 5.0,
      sessions: 300,
      price: "$90",
      availability: "Available this week",
      experience: "15+ years",
      bio: "Former Wall Street analyst specializing in retirement planning and long-term wealth preservation strategies."
    },
    {
      id: "4",
      name: "James Wilson",
      title: "Investment Consultant",
      expertise: "Portfolio Optimization",
      rating: 4.9,
      sessions: 175,
      price: "$80",
      availability: "Available today",
      experience: "12+ years",
      bio: "Expert in portfolio optimization and investment strategies for high-net-worth individuals and institutions."
    },
    {
      id: "5",
      name: "Lisa Park",
      title: "Financial Coach",
      expertise: "Budgeting & Savings",
      rating: 4.7,
      sessions: 120,
      price: "$50",
      availability: "Available tomorrow",
      experience: "6+ years",
      bio: "Dedicated to helping individuals and families achieve financial freedom through effective budgeting and savings strategies."
    },
    {
      id: "6",
      name: "David Kumar",
      title: "Tax Strategist",
      expertise: "Tax Optimization",
      rating: 4.8,
      sessions: 95,
      price: "$85",
      availability: "Available this week",
      experience: "9+ years",
      bio: "Specialized in tax planning and optimization strategies for businesses and individuals."
    }
  ];

  useEffect(() => {
    const foundExpert = experts.find(e => e.id === expertId);
    setExpert(foundExpert || null);
  }, [expertId]);

  useEffect(() => {
    if (selectedDate) {
      generateTimeSlots();
    }
  }, [selectedDate, selectedDuration]);

  const generateTimeSlots = () => {
    const slots: TimeSlot[] = [];
    const startHour = 9;
    const endHour = 17;

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const start = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const endTime = new Date();
        endTime.setHours(hour, minute + selectedDuration, 0, 0);
        const end = `${endTime.getHours().toString().padStart(2, '0')}:${endTime.getMinutes().toString().padStart(2, '0')}`;
        
        if (endTime.getHours() <= endHour) {
          slots.push({
            start,
            end,
            available: Math.random() > 0.3 // Mock availability
          });
        }
      }
    }
    setAvailableSlots(slots);
    setSelectedTimeSlot(null);
  };

  const isDateAvailable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today && Math.random() > 0.2; // Mock availability
  };

  const groupedSlots = availableSlots.reduce((acc, slot) => {
    const hour = slot.start.split(':')[0];
    if (!acc[hour]) {
      acc[hour] = [];
    }
    acc[hour].push(slot);
    return acc;
  }, {} as Record<string, TimeSlot[]>);

  const handleBooking = () => {
    if (selectedDate && selectedTimeSlot && expert && appointmentTitle && appointmentDescription) {
      const appointmentId = Math.random().toString(36).substring(7);
      navigate(`/booking-confirmation/${appointmentId}`, {
        state: {
          expert,
          date: selectedDate,
          timeSlot: selectedTimeSlot,
          duration: selectedDuration,
          title: appointmentTitle,
          description: appointmentDescription
        }
      });
    }
  };

  const isFormValid = selectedDate && selectedTimeSlot && appointmentTitle.trim() && appointmentDescription.trim();

  if (!expert) {
    return (
      <div className="min-h-screen bg-lumo-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Expert not found</h1>
            <Button onClick={() => navigate('/')}>Return to Home</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lumo-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Experts
          </Button>
          <h1 className="text-3xl font-bold text-foreground mb-2">Book an Appointment</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Calendar and About Expert (5/12) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Select Date
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => !isDateAvailable(date)}
                  className="rounded-md border w-fit mx-auto"
                />
              </CardContent>
            </Card>

            {/* About Expert */}
            <Card>
              <CardHeader>
                <CardTitle>About the Expert</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-lumo-100 text-lumo-700 text-lg font-semibold">
                      {expert.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">{expert.name}</h3>
                    <p className="text-muted-foreground">{expert.title}</p>
                    <p className="text-lumo-600 font-medium">{expert.expertise}</p>
                    <p className="text-sm text-muted-foreground mt-1">Experience: {expert.experience}</p>
                    <p className="text-sm text-muted-foreground mt-2">{expert.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Duration and Time Slots (4/12) */}
          <div className="lg:col-span-4 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Select Duration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[30, 45, 60].map((duration) => (
                    <Button
                      key={duration}
                      variant={selectedDuration === duration ? "default" : "outline"}
                      onClick={() => setSelectedDuration(duration)}
                      className={`w-full ${selectedDuration === duration ? "bg-lumo-500 hover:bg-lumo-600" : ""}`}
                    >
                      {duration} minutes
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Time Slots */}
            {selectedDate && (
              <Card>
                <CardHeader>
                  <CardTitle>Available time slots for {selectedDate.toLocaleDateString()}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                    {Object.entries(groupedSlots).map(([hour, slots]) => (
                      <div key={hour}>
                        <h4 className="font-medium text-foreground mb-2">{hour}:00</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {slots.filter(slot => slot.available).map((slot, index) => (
                            <Button
                              key={index}
                              variant={selectedTimeSlot?.start === slot.start ? "default" : "outline"}
                              size="sm"
                              onClick={() => setSelectedTimeSlot(slot)}
                              className={selectedTimeSlot?.start === slot.start ? "bg-lumo-500 hover:bg-lumo-600" : ""}
                            >
                              {slot.start} - {slot.end}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Order Summary and Booking Form (3/12) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Selected Date:</p>
                  <p className="font-medium">{selectedDate ? selectedDate.toLocaleDateString() : 'Not selected'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Selected Time:</p>
                  <p className="font-medium">{selectedTimeSlot ? `${selectedTimeSlot.start} - ${selectedTimeSlot.end}` : 'Not selected'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duration:</p>
                  <p className="font-medium">{selectedDuration} minutes</p>
                </div>
                <div className="border-t pt-3">
                  <p className="text-sm text-muted-foreground">Total Price:</p>
                  <p className="text-xl font-bold text-lumo-600">{expert.price}</p>
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card>
              <CardHeader>
                <CardTitle>Booking Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Appointment Title *</Label>
                  <Input
                    id="title"
                    placeholder="Investment Strategy Review, Debt Management Plan, Retirement Planning"
                    value={appointmentTitle}
                    onChange={(e) => setAppointmentTitle(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">Appointment Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Please describe your financial situation and specific questions..."
                    value={appointmentDescription}
                    onChange={(e) => setAppointmentDescription(e.target.value)}
                    required
                    rows={4}
                  />
                </div>
                <Button 
                  onClick={handleBooking}
                  disabled={!isFormValid}
                  className="w-full bg-lumo-500 hover:bg-lumo-600"
                  size="lg"
                >
                  <User className="w-4 h-4 mr-2" />
                  Book my call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
