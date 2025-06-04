export interface Vehicle {
  id: string;
  name: string;
  description: string;
  range: string;
  acceleration: string;
  price: string;
  image: string;
  alt: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "model-3",
    name: "Model 3",
    description: "The compact sedan that started the revolution",
    range: "358 mi",
    acceleration: "3.1s",
    price: "$42,990",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    alt: "Tesla Model 3 electric sedan",
  },
  {
    id: "model-y",
    name: "Model Y",
    description: "The versatile SUV for every adventure",
    range: "330 mi",
    acceleration: "4.8s",
    price: "$52,990",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    alt: "Tesla Model Y electric SUV",
  },
  {
    id: "model-s",
    name: "Model S",
    description: "The flagship sedan with unmatched performance",
    range: "405 mi",
    acceleration: "1.99s",
    price: "$89,990",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    alt: "Tesla Model S luxury electric sedan",
  },
];
