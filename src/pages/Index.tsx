import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <nav className="container mx-auto py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">AuthPanel</h1>
        <div className="space-x-4">
          <Button variant="ghost" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button onClick={() => navigate("/register")}>Get Started</Button>
        </div>
      </nav>

      <main className="container mx-auto mt-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text">
            Modern Authentication Solution
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Secure, scalable, and easy to manage. Perfect for businesses of all sizes with multi-level access control.
          </p>
          <div className="space-x-4">
            <Button size="lg" onClick={() => navigate("/register")}>
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg bg-white/5 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const features = [
  {
    title: "Admin Dashboard",
    description: "Complete control over users, permissions, and system settings.",
  },
  {
    title: "Reseller Panel",
    description: "Empower your partners with dedicated management tools.",
  },
  {
    title: "User Management",
    description: "Efficiently manage users with role-based access control.",
  },
];

export default Index;