import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { vehicles } from "@/data/vehicles";

export default function Vehicles() {
  useEffect(() => {
    document.title = "Electric Vehicles - Tesla Reimagined | Model S, 3, X, Y";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore Tesla's complete lineup of electric vehicles. From the Model 3 sedan to the Model Y SUV, discover revolutionary performance, cutting-edge technology, and sustainable transportation."
      );
    }
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-[hsl(var(--warm-white))]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--deep-charcoal))] to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-orbitron font-bold text-5xl md:text-6xl text-white mb-6">
            Electric <span className="gradient-text">Vehicles</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete range of electric vehicles, each designed to deliver exceptional performance, safety, and sustainability.
          </p>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-orbitron font-bold text-2xl mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-gray-500">
                      <span className="block">Range: {vehicle.range}</span>
                      <span className="block">0-60: {vehicle.acceleration}</span>
                    </div>
                    <div className="font-orbitron font-bold text-xl gradient-text">{vehicle.price}</div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button className="w-full py-3 bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--energy-orange))] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                      Configure
                    </Button>
                    <Button variant="outline" className="w-full py-3 rounded-xl">
                      Test Drive
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
