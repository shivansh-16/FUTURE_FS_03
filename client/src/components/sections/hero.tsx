import { useState, useEffect } from "react";
import { ChevronDown, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(var(--electric-blue))] rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(var(--energy-orange))] rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center z-10 relative">
        <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
          <h1 className="font-orbitron font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
            Drive The{" "}
            <span className="gradient-text">Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Experience revolutionary electric vehicles that combine cutting-edge technology, unmatched performance, and sustainable energy for a cleaner tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button className="px-8 py-4 bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--energy-orange))] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[hsl(var(--electric-blue))]/25 animate-glow">
              Explore Vehicles
            </Button>
            <Button variant="outline" className="px-8 py-4 glass-effect text-white border-white/20 rounded-full font-semibold hover:bg-white/20">
              Schedule Test Drive
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-8 text-white">
            <div className="text-center">
              <div className="font-orbitron font-bold text-2xl gradient-text">405</div>
              <div className="text-sm text-gray-400">Miles Range</div>
            </div>
            <div className="text-center">
              <div className="font-orbitron font-bold text-2xl gradient-text">1.99s</div>
              <div className="text-sm text-gray-400">0-60 mph</div>
            </div>
            <div className="text-center">
              <div className="font-orbitron font-bold text-2xl gradient-text">200mph</div>
              <div className="text-sm text-gray-400">Top Speed</div>
            </div>
          </div>
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
          {/* Tesla Model S showcase image */}
          <img 
            src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
            alt="Tesla Model S in modern setting" 
            className="w-full h-auto rounded-2xl shadow-2xl" 
          />
          
          {/* Floating feature cards */}
          <div className="absolute -left-4 top-1/4 glass-effect p-4 rounded-xl text-white animate-float">
            <Zap className="text-[hsl(var(--electric-blue))] text-2xl mb-2" />
            <div className="font-semibold">Supercharging</div>
          </div>
          
          <div className="absolute -right-4 bottom-1/4 glass-effect p-4 rounded-xl text-white animate-float" style={{ animationDelay: '-2s' }}>
            <Shield className="text-[hsl(var(--success-green))] text-2xl mb-2" />
            <div className="font-semibold">Auto Pilot</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronDown className="text-white text-2xl" />
        </div>
      </div>
    </section>
  );
}
