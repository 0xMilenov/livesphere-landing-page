import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  AirplayIcon as Broadcast,
  Coins,
  MessageSquare,
  Shield,
  Zap,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Broadcaster Tokens",
    description:
      "Broadcasters mint their unique tokens to represent their brand. Viewers can buy, sell, and trade these tokens to support their favorite creators.",
    icon: Broadcast,
    bgColor: "bg-[#FDF6F4]",
    iconPosition: "top",
    demo: (
      <div className="w-full aspect-video bg-white/50 rounded-lg p-4 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center justify-center size-12 bg-[#E97451] rounded-full">
            <Broadcast className="text-white" />
          </div>
          <div className="flex items-center justify-center size-12 bg-[#40A798] rounded-full">
            <Coins className="text-white" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "LiveSphere Token Utility",
    description:
      "LiveSphere tokens power the ecosystem by enabling tipping, staking rewards, and community decision-making.",
    icon: Coins,
    bgColor: "bg-[#E5F4F1]",
    iconPosition: "bottom",
    demo: (
      <div className="w-full aspect-video bg-white/50 rounded-lg p-4">
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Coins className="text-[#40A798]" />
            <span className="font-medium">1000 LS</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Tipping System",
    description:
      "Viewers tip LS Tokens directly during live streams, providing broadcasters with immediate income.",
    icon: Zap,
    bgColor: "bg-[#F5F2FF]",
    iconPosition: "top",
    demo: (
      <div className="w-full aspect-video bg-white/50 rounded-lg p-4">
        <div className="flex flex-col items-center justify-center h-full gap-2">
          <div className="flex items-center gap-1 text-sm">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            Live Tips
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">2,145</span>
            <span className="text-green-500">↑12%</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Token-Gated Chat",
    description:
      "Chat access requires LS Tokens, ensuring meaningful engagement with broadcasters.",
    icon: MessageSquare,
    bgColor: "bg-[#E5F4F1]",
    iconPosition: "bottom",
    demo: (
      <div className="w-full aspect-video bg-white/50 rounded-lg p-4">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 mb-2">
            <div className="size-2 rounded-full bg-green-500"></div>
            <span className="text-sm">Chat Active</span>
          </div>
          <div className="flex-1 flex items-end">
            <div className="w-full h-1/2 bg-white rounded-lg"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Staking and Rewards",
    description:
      "Users and viewers can stake LiveSphere tokens to earn rewards and participate in governance.",
    icon: Shield,
    bgColor: "bg-[#FDF6F4]",
    iconPosition: "top",
    demo: (
      <div className="w-full aspect-video bg-white/50 rounded-lg p-4">
        <div className="h-full flex items-center justify-center">
          <div className="grid grid-cols-3 gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="size-4 bg-[#40A798] rounded-sm"></div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Blockchain-Powered Transparency",
    description:
      "Blockchain technology ensures trust and eliminates intermediaries.",
    icon: Users,
    bgColor: "bg-[#F5F2FF]",
    iconPosition: "bottom",
    demo: (
      <div className="w-full aspect-video bg-white/50 rounded-lg p-4">
        <div className="h-full flex items-center justify-center">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="size-2 rounded-full bg-[#40A798]"></div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What is{" "}
          <span className="font-['Covered_By_Your_Grace'] text-[#40A798]">
            LiveSphere
          </span>
          ?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`${feature.bgColor} border-0 shadow-none overflow-hidden`}
            >
              <div className="p-6 flex flex-col h-full gap-6">
                {feature.iconPosition === "top" && feature.demo}
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
                {feature.iconPosition === "bottom" && feature.demo}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
