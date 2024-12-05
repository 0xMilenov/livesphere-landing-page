import { Card } from "@/components/ui/card";
import {
  AirplayIcon as Broadcast,
  Coins,
  Users,
  Zap,
  Sparkles,
  DollarSign,
} from "lucide-react";

const steps = [
  {
    icon: Broadcast,
    title: "Create & Stream",
    description:
      "Broadcasters set up their channel and start streaming content to their audience.",
    color: "bg-[#E97451]",
  },
  {
    icon: Sparkles,
    title: "Create your own token",
    description:
      "Broadcasters can focus on growing their community and token value without the pressure to sell their tokens for income—thanks to tips in the main LiveSphere Token.",
    color: "bg-[#40A798]",
  },
  {
    icon: DollarSign,
    title: "Buy & Sell",
    description:
      "Every viewer will be able to buy or sell the broadcaster's token, supporting their community OR speculating with the price.",
    color: "bg-[#FFD84D]",
  },
  {
    icon: Coins,
    title: "Token Economy",
    description:
      "Viewers purchase and use LiveSphere tokens (LS) to interact with broadcasters and access premium features.",
    color: "bg-[#009387]",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description:
      "Viewers participate in token-gated chats, tip broadcasters, and engage with the community.",
    color: "bg-[#E97451]",
  },
  {
    icon: Zap,
    title: "Rewards & Governance",
    description:
      "All users stake tokens, earn rewards, and participate in platform governance decisions.",
    color: "bg-[#40A798]",
  },
];

export function HowItWorks() {
  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-white to-[#E5F4F1]"
      id="how-it-works"
    >
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          How{" "}
          <span className="font-covered-grace text-[#40A798]">LiveSphere</span>{" "}
          Works
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 bg-white shadow-lg border-none">
              <div className="flex items-start space-x-4">
                <div className={`${step.color} p-3 rounded-full`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
