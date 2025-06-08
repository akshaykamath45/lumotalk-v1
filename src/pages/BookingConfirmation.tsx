
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, Clock, User, Download, Video, ArrowLeft, X } from 'lucide-react';

interface AppointmentData {
  expert: {
    name: string;
    title: string;
    expertise: string;
    price: string;
  };
  date: Date;
  timeSlot: {
    start: string;
    end: string;
  };
  duration: number;
  title: string;
  description: string;
}

const BookingConfirmation = () => {
  const { appointmentId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const appointmentData = location.state as AppointmentData;

  if (!appointmentData) {
    return (
      <div className="min-h-screen bg-lumo-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Appointment not found</h1>
            <Button onClick={() => navigate('/')}>Return to Home</Button>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCalendar = () => {
    const { expert, date, timeSlot, duration, title, description } = appointmentData;
    
    // Create start and end times
    const startDateTime = new Date(date);
    const [startHour, startMinute] = timeSlot.start.split(':').map(Number);
    startDateTime.setHours(startHour, startMinute, 0, 0);
    
    const endDateTime = new Date(startDateTime);
    endDateTime.setMinutes(endDateTime.getMinutes() + duration);

    // Format dates for calendar (YYYYMMDDTHHMMSS)
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const startDateStr = formatDate(startDateTime);
    const endDateStr = formatDate(endDateTime);

    // Create calendar event content
    const eventTitle = `${title} with ${expert.name}`;
    const eventDescription = `${description}\n\nExpert: ${expert.name}\nSpecialty: ${expert.expertise}\nDuration: ${duration} minutes`;

    // Create .ics file content
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//LumoTalk//EN
BEGIN:VEVENT
UID:${appointmentId}@lumotalk.com
DTSTART:${startDateStr}
DTEND:${endDateStr}
SUMMARY:${eventTitle}
DESCRIPTION:${eventDescription}
LOCATION:Video Call - LumoTalk
STATUS:CONFIRMED
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:Reminder
TRIGGER:-PT15M
END:VALARM
END:VEVENT
END:VCALENDAR`;

    // Create and download file
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `appointment-${appointmentId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleJoinMeeting = () => {
    // Mock meeting link - in a real app this would come from the backend
    const meetingLink = `https://meet.lumotalk.com/room/${appointmentId}`;
    window.open(meetingLink, '_blank');
  };

  const handleCancelAppointment = () => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      // In a real app, this would make an API call to cancel the appointment
      console.log('Appointment cancelled:', appointmentId);
      navigate('/', { replace: true });
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-lumo-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">✓</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Booking Confirmed!</h1>
          <p className="text-lg text-muted-foreground">
            Your appointment has been successfully scheduled
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Appointment Details */}
          <Card>
            <CardHeader>
              <CardTitle>Appointment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-lumo-100 text-lumo-700 font-semibold">
                    {appointmentData.expert.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-foreground">{appointmentData.expert.name}</h3>
                  <p className="text-muted-foreground text-sm">{appointmentData.expert.title}</p>
                  <p className="text-lumo-600 text-sm font-medium">{appointmentData.expert.expertise}</p>
                </div>
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-lumo-500" />
                  <div>
                    <p className="font-medium">{formatDate(new Date(appointmentData.date))}</p>
                    <p className="text-sm text-muted-foreground">
                      {appointmentData.timeSlot.start} - {appointmentData.timeSlot.end}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-lumo-500" />
                  <div>
                    <p className="font-medium">{appointmentData.duration} minutes</p>
                    <p className="text-sm text-muted-foreground">Duration</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-lumo-500" />
                  <div>
                    <p className="font-medium">{appointmentData.title}</p>
                    <p className="text-sm text-muted-foreground">{appointmentData.description}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Amount:</span>
                  <span className="text-xl font-bold text-lumo-600">{appointmentData.expert.price}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={handleJoinMeeting}
                className="w-full bg-lumo-500 hover:bg-lumo-600"
                size="lg"
              >
                <Video className="w-4 h-4 mr-2" />
                Join Meeting
              </Button>

              <Button 
                onClick={handleAddToCalendar}
                variant="outline"
                className="w-full"
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Add to Calendar
              </Button>

              <Button 
                onClick={handleCancelAppointment}
                variant="outline"
                className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                size="lg"
              >
                <X className="w-4 h-4 mr-2" />
                Cancel Appointment
              </Button>

              <div className="mt-6 p-4 bg-lumo-50 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">What's Next?</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• You'll receive a confirmation email shortly</li>
                  <li>• Meeting link will be available 15 minutes before the call</li>
                  <li>• Prepare your questions in advance</li>
                  <li>• You can reschedule up to 24 hours before the meeting</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Questions? Contact us at{' '}
            <a href="mailto:support@lumotalk.com" className="text-lumo-500 hover:text-lumo-600">
              support@lumotalk.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
