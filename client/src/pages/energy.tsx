import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Home, Building, Factory } from "lucide-react";

const energyProducts = [
  {
    id: "solar-panels",
    name: "Solar Panels",
    description: "Generate clean energy for your home with sleek, efficient solar panels.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  },
  {
    id: "powerwall",
    name: "Powerwall",
    description: "Store solar energy for use anytime with our home battery system.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  },
  {
    id: "megapack",
    name: "Megapack",
    description: "Utility-scale energy storage for grid stabilization and peak shifting.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  },
];

export default function Energy() {
  useEffect(() => {
    document.title = "Energy Solutions - Tesla Reimagined | Solar & Storage";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Transform your energy consumption with Tesla's solar panels, Powerwall home battery, and Megapack utility storage. Generate, store, and use clean energy efficiently."
      );
    }
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--deep-charcoal))] to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-orbitron font-bold text-5xl md:text-6xl text-white mb-6">
            Energy <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Accelerate the world's transition to sustainable energy with integrated solar, storage, and grid solutions.
          </p>
        </div>
      </section>

      {/* Energy Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {energyProducts.map((product) => {
              const IconComponent = product.icon;
              return (
                <Card key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--energy-orange))] rounded-full flex items-center justify-center">
                        <IconComponent className="text-white text-lg" />
                      </div>
                      <h3 className="font-orbitron font-bold text-2xl">{product.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    
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

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--electric-blue))]/10 to-[hsl(var(--energy-orange))]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-orbitron font-bold text-4xl mb-12">
            Why Choose <span className="gradient-text">Tesla Energy</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--energy-orange))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white text-2xl" />
              </div>
              <h3 className="font-orbitron font-bold text-xl mb-3">Clean Energy</h3>
              <p className="text-gray-600">Generate your own clean energy and reduce dependence on fossil fuels.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--energy-orange))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="text-white text-2xl" />
              </div>
              <h3 className="font-orbitron font-bold text-xl mb-3">Energy Independence</h3>
              <p className="text-gray-600">Store energy for use during outages and peak demand periods.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--energy-orange))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="text-white text-2xl" />
              </div>
              <h3 className="font-orbitron font-bold text-xl mb-3">Cost Savings</h3>
              <p className="text-gray-600">Reduce electricity bills and take advantage of time-of-use rates.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
