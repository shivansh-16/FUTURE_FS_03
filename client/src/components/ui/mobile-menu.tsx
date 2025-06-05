import { Link } from "wouter";
import { X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ id: string; href: string; label: string }>;
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-80 max-w-[80vw] bg-white shadow-xl transform transition-transform">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--energy-orange))] rounded-full"></div>
            <span className="font-orbitron font-bold gradient-text">TESLA</span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="block py-3 text-lg text-[hsl(var(--deep-charcoal))] hover:text-[hsl(var(--electric-blue))] transition-colors"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="pt-4 border-t space-y-3">
            <Button variant="outline" className="w-full justify-start" onClick={onClose}>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button className="w-full bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--energy-orange))] text-white">
              Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
