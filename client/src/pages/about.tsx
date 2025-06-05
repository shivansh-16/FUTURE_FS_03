import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To accelerate the world's transition to sustainable energy.",
  },
  {
    icon: Users,
    title: "People",
    description: "Building a diverse team of the world's brightest minds.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing the boundaries of what's possible in technology.",
  },
  {
    icon: Globe,
    title: "Impact",
    description: "Creating a sustainable future for generations to come.",
  },
];

export default function About() {
  useEffect(() => {
    document.title = "About Tesla Reimagined | Mission, Vision & Values";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about Tesla's mission to accelerate the world's transition to sustainable energy. Discover our values, innovation philosophy, and commitment to a sustainable future."
      );
    }
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--deep-charcoal))] to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-orbitron font-bold text-5xl md:text-6xl text-white mb-6">
            About <span className="gradient-text">Tesla</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to accelerate the world's transition to sustainable energy through revolutionary technology and innovation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-orbitron font-bold text-4xl mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Tesla was founded in 2003 with the mission to prove that electric vehicles could be better, quicker, and more fun to drive than gasoline cars. Today, Tesla builds not only all-electric vehicles but also infinitely scalable clean energy generation and storage products.
              </p>
              <p className="text-lg text-gray-600">
                We believe the faster the world stops relying on fossil fuels and moves towards a zero-emission future, the better. Our products and services help accelerate this transition by making sustainable transportation and energy accessible to everyone.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Tesla factory and manufacturing" 
                className="w-full h-auto rounded-2xl shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--electric-blue))]/10 to-[hsl(var(--energy-orange))]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-orbitron font-bold text-4xl text-center mb-12">
            Our <span className="gradient-text">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--energy-orange))] rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    <h3 className="font-orbitron font-bold text-xl mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-orbitron font-bold text-4xl mb-12">
            Global <span className="gradient-text">Impact</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="font-orbitron font-bold text-4xl gradient-text mb-2">5M+</div>
              <div className="text-xl font-semibold mb-2">Vehicles Delivered</div>
              <p className="text-gray-600">Electric vehicles on roads worldwide, reducing emissions daily.</p>
            </div>
            <div className="p-6">
              <div className="font-orbitron font-bold text-4xl gradient-text mb-2">40K+</div>
              <div className="text-xl font-semibold mb-2">Superchargers</div>
              <p className="text-gray-600">Fast charging stations across the globe for convenient travel.</p>
            </div>
            <div className="p-6">
              <div className="font-orbitron font-bold text-4xl gradient-text mb-2">6GW+</div>
              <div className="text-xl font-semibold mb-2">Energy Deployed</div>
              <p className="text-gray-600">Clean energy generation and storage capacity installed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
