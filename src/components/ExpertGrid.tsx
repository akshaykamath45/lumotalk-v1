import ExpertCard from "./ExpertCard";

const ExpertGrid = () => {
  const experts = [
    {
      id: "1",
      name: "Sarah Chen",
      title: "Senior Financial Advisor",
      expertise: "Investment Strategy",
      rating: 4.9,
      sessions: 150,
      price: "$75",
      image: "",
      availability: "Available today"
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      title: "Certified Financial Planner",
      expertise: "Debt Management",
      rating: 4.8,
      sessions: 200,
      price: "$60",
      image: "",
      availability: "Available tomorrow"
    },
    {
      id: "3",
      name: "Dr. Emma Thompson",
      title: "Wealth Management Expert",
      expertise: "Retirement Planning",
      rating: 5.0,
      sessions: 300,
      price: "$90",
      image: "",
      availability: "Available this week"
    },
    {
      id: "4",
      name: "James Wilson",
      title: "Investment Consultant",
      expertise: "Portfolio Optimization",
      rating: 4.9,
      sessions: 175,
      price: "$80",
      image: "",
      availability: "Available today"
    },
    {
      id: "5",
      name: "Lisa Park",
      title: "Financial Coach",
      expertise: "Budgeting & Savings",
      rating: 4.7,
      sessions: 120,
      price: "$50",
      image: "",
      availability: "Available tomorrow"
    },
    {
      id: "6",
      name: "David Kumar",
      title: "Tax Strategist",
      expertise: "Tax Optimization",
      rating: 4.8,
      sessions: 95,
      price: "$85",
      image: "",
      availability: "Available this week"
    }
  ];

  return (
    <section id="expert-grid" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Find Your Expert</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with vetted financial experts who can help you achieve your goals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((expert) => (
            <ExpertCard key={expert.id} {...expert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertGrid;
