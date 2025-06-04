import { Link } from "wouter";
import { SiTwitter, SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

const footerSections = [
  {
    title: "Vehicles",
    links: [
      { label: "Model S", href: "/vehicles/model-s" },
      { label: "Model 3", href: "/vehicles/model-3" },
      { label: "Model X", href: "/vehicles/model-x" },
      { label: "Model Y", href: "/vehicles/model-y" },
      { label: "Cybertruck", href: "/vehicles/cybertruck" },
      { label: "Roadster", href: "/vehicles/roadster" },
    ],
  },
  {
    title: "Energy",
    links: [
      { label: "Solar Panels", href: "/energy/solar-panels" },
      { label: "Solar Roof", href: "/energy/solar-roof" },
      { label: "Powerwall", href: "/energy/powerwall" },
      { label: "Megapack", href: "/energy/megapack" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Charging", href: "/charging" },
      { label: "Service", href: "/service" },
      { label: "Support", href: "/support" },
      { label: "Careers", href: "/careers" },
      { label: "Investor Relations", href: "/investors" },
    ],
  },
];

const socialLinks = [
  { icon: SiTwitter, href: "https://twitter.com/tesla", label: "Twitter" },
  { icon: SiFacebook, href: "https://facebook.com/tesla", label: "Facebook" },
  { icon: SiInstagram, href: "https://instagram.com/teslamotors", label: "Instagram" },
  { icon: SiYoutube, href: "https://youtube.com/tesla", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--deep-charcoal))] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--energy-orange))] rounded-full"></div>
              <span className="font-orbitron font-bold text-xl gradient-text">TESLA</span>
            </div>
            <p className="text-gray-400 mb-6">
              Accelerating the world's transition to sustainable energy through electric vehicles and clean energy solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--electric-blue))] transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-orbitron font-bold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[hsl(var(--electric-blue))] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Tesla Reimagined. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
