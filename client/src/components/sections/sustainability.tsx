import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const sustainabilityStats = [
  { value: "5.6M", label: "Tons CO₂ Saved" },
  { value: "50+", label: "Gigafactories" },
  { value: "4M+", label: "Vehicles Delivered" },
  { value: "100%", label: "Renewable Energy" },
];

export default function Sustainability() {
  return (
    <section className="py-20 bg-[hsl(var(--warm-white))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Solar panel farm with renewable energy infrastructure" 
              className="w-full h-auto rounded-2xl shadow-xl" 
            />
          </div>
          
          <div>
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
              Sustainable <span className="gradient-text">Future</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our mission extends beyond vehicles. We're accelerating the world's transition to sustainable energy through integrated solar, storage, and transportation solutions.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {sustainabilityStats.map((stat, index) => (
                <Card key={index} className="text-center p-4 bg-white rounded-xl shadow-lg">
                  <CardContent className="p-0">
                    <div className="font-orbitron font-bold text-3xl gradient-text mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className="px-8 py-4 bg-gradient-to-r from-[hsl(var(--success-green))] to-[hsl(var(--electric-blue))] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Learn About Sustainability
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
