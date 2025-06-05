import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, MapPin, Smartphone } from "lucide-react";

const chargingFeatures = [
  {
    id: "supercharger",
    title: "Supercharger Network",
    description: "Access to the world's largest fast-charging network with over 40,000 Superchargers globally.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  },
  {
    id: "home-charging",
    title: "Home Charging",
    description: "Convenient overnight charging at home with Wall Connector or Mobile Connector.",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  },
  {
    id: "destination-charging",
    title: "Destination Charging",
    description: "Charge at hotels, restaurants, and shopping centers while you enjoy your destination.",
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  },
];

const chargingStats = [
  { value: "40K+", label: "Global Superchargers" },
  { value: "15 min", label: "To 200 Miles Range" },
  { value: "99.9%", label: "Uptime Reliability" },
  { value: "24/7", label: "Support Available" },
];

export default function Charging() {
  useEffect(() => {
    document.title = "Charging Solutions - Tesla Reimagined | Supercharger Network";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover Tesla's comprehensive charging solutions including Supercharger network, home charging, and destination charging. Fast, reliable, and convenient charging for your Tesla vehicle."
      );
    }
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--deep-charcoal))] to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-orbitron font-bold text-5xl md:text-6xl text-white mb-6">
            Charging <span className="gradient-text">Network</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Power your journey with the world's most comprehensive electric vehicle charging infrastructure.
          </p>
        </div>
      </section>

      {/* Charging Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl mb-6">
              Charge <span className="gradient-text">Anywhere</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From home to highway, we've got you covered with flexible charging solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chargingFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Card key={feature.id} className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--energy-orange))] rounded-full flex items-center justify-center">
                        <IconComponent className="text-white text-lg" />
                      </div>
                      <h3 className="font-orbitron font-bold text-2xl">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    
                    <Button className="w-full py-3 bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--energy-orange))] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Charging Stats */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--electric-blue))]/10 to-[hsl(var(--energy-orange))]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-orbitron font-bold text-4xl mb-12">
            Charging <span className="gradient-text">by the Numbers</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {chargingStats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="font-orbitron font-bold text-4xl gradient-text mb-2">{stat.value}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-orbitron font-bold text-4xl mb-6">
            Ready to <span className="gradient-text">Charge Forward</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Find charging stations near you and plan your next electric journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-4 bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--energy-orange))] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              <MapPin className="mr-2 h-5 w-5" />
              Find Chargers
            </Button>
            <Button variant="outline" className="px-8 py-4 rounded-full font-semibold">
              <Smartphone className="mr-2 h-5 w-5" />
              Download App
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}