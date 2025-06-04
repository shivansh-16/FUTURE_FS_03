import { LucideIcon } from "lucide-react";
import { Bot, Battery, Cpu } from "lucide-react";

export interface Innovation {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const innovations: Innovation[] = [
  {
    id: "fsd",
    title: "Full Self-Driving",
    description: "Advanced neural networks process real-time data to navigate complex driving scenarios with superhuman precision.",
    icon: Bot,
  },
  {
    id: "battery",
    title: "4680 Battery Technology",
    description: "Revolutionary battery cells that deliver 5x more energy, 6x more power, and enable 16% range increase.",
    icon: Battery,
  },
  {
    id: "ai",
    title: "AI Supercomputer",
    description: "Custom-built neural processing unit delivering 36 trillion operations per second for real-time decision making.",
    icon: Cpu,
  },
];
