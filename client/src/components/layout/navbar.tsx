import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/ui/mobile-menu";

// Navigation links configuration with unique IDs to prevent React key conflicts
const navLinks = [
  { id: "vehicles", href: "/vehicles", label: "Vehicles" },
  { id: "energy", href: "/energy", label: "Energy" },
  { id: "charging", href: "/charging", label: "Charging" },
  { id: "about", href: "/about", label: "About" },
  { id: "contact", href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--energy-orange))] rounded-full"></div>
              <span className="font-orbitron font-bold text-xl gradient-text">TESLA</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    location === link.href
                      ? "text-[hsl(var(--electric-blue))]"
                      : "text-[hsl(var(--deep-charcoal))] hover:text-[hsl(var(--electric-blue))]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-[hsl(var(--deep-charcoal))] hover:text-[hsl(var(--electric-blue))]">
                <Search className="h-5 w-5" />
              </Button>
              <Button className="bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--energy-orange))] text-white hover:shadow-lg hover:shadow-[hsl(var(--electric-blue))]/25">
                Account
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navLinks={navLinks}
      />
    </>
  );
}
