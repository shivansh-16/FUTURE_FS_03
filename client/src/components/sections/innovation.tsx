import { innovations } from "@/data/innovations";

export default function Innovation() {
  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--deep-charcoal))] via-gray-900 to-[hsl(var(--deep-charcoal))] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-6">
            Leading <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced technology that redefines what's possible in electric mobility and sustainable energy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {innovations.map((innovation) => {
              const IconComponent = innovation.icon;
              return (
                <div key={innovation.id} className="glass-effect p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--energy-orange))] rounded-full flex items-center justify-center">
                      <IconComponent className="text-white text-xl" />
                    </div>
                    <h3 className="font-orbitron font-bold text-xl text-white">{innovation.title}</h3>
                  </div>
                  <p className="text-gray-300">{innovation.description}</p>
                </div>
              );
            })}
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Tesla Supercharger station with modern design" 
              className="w-full h-auto rounded-2xl shadow-2xl" 
            />
            
            {/* Floating stats */}
            <div className="absolute top-4 right-4 glass-effect p-4 rounded-xl text-white">
              <div className="font-orbitron font-bold text-2xl gradient-text">40,000+</div>
              <div className="text-sm">Superchargers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[hsl(var(--electric-blue))] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[hsl(var(--energy-orange))] rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
}
