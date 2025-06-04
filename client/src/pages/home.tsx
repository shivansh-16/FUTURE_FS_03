import { useEffect } from "react";
import Hero from "@/components/sections/hero";
import ProductShowcase from "@/components/sections/product-showcase";
import Innovation from "@/components/sections/innovation";
import Sustainability from "@/components/sections/sustainability";
import Newsletter from "@/components/sections/newsletter";

export default function Home() {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Tesla Reimagined - Electric Future | Drive Tomorrow Today";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Experience the future of sustainable transportation with Tesla's revolutionary electric vehicles and energy solutions. Discover cutting-edge technology, unmatched performance, and sustainable energy for a cleaner tomorrow."
      );
    }
  }, []);

  return (
    <div className="pt-16">
      <Hero />
      <ProductShowcase />
      <Innovation />
      <Sustainability />
      <Newsletter />
    </div>
  );
}
