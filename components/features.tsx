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

import staking from "@/public/other LS/staking.png";
import coins from "@/public/other LS/coins.png";
import coin from "@/public/other LS/coin.png";
import blockchain from "@/public/other LS/blockchain.png";
import tipping from "@/public/other LS/tipping.png";
import chatting from "@/public/other LS/chatting.png";

const features = [
  {
    title: "Broadcaster Tokens",
    description:
      "Broadcasters mint their unique tokens to represent their brand. Viewers can buy, sell, and trade these tokens to support their favorite creators.",
    icon: Broadcast,
    bgColor: "bg-[#F5F2FF]",
    iconPosition: "top",
    demo: (
      <div className="w-full aspect-video bg-white rounded-lg p-4 flex items-center justify-center">
        <Image src={coins} alt="Coin icon" width={170} height={170} />
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
      <div className="w-full aspect-video bg-white rounded-lg p-4 flex items-center justify-center">
        <Image
          src={coin}
          alt="Coin icon 2"
          width={170}
          height={170}
          className="text-white"
        />
      </div>
    ),
  },
  {
    title: "Tipping System",
    description:
      "Viewers tip LS Tokens directly during live streams, providing broadcasters with immediate income.",
    icon: Zap,
    bgColor: "bg-[#FDF6F4]",
    iconPosition: "top",
    demo: (
      <div className="w-full aspect-video bg-white rounded-lg p-4 flex items-center justify-center">
        <Image
          src={tipping}
          alt="Coin icon 3"
          width={170}
          height={170}
          className="text-white"
        />
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
      <div className="w-full aspect-video bg-white rounded-lg p-4 flex items-center justify-center">
        <Image
          src={chatting}
          alt="Coin icon 4"
          width={170}
          height={170}
          className="text-white"
        />
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
      <div className="w-full aspect-video bg-white rounded-lg p-4 flex items-center justify-center">
        <Image
          src={staking}
          alt="Coin icon 5"
          width={170}
          height={170}
          className="text-white"
        />
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
      <div className="w-full aspect-video bg-white rounded-lg p-4 flex items-center justify-center">
        <Image
          src={blockchain}
          alt="Coin icon 6"
          width={170}
          height={170}
          className="text-white"
        />
      </div>
    ),
  },
];

export function Features() {
  return (
    <section className="py-20 px-4" id="what-is-livesphere">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What is{" "}
          <span className="font-covered-grace text-[#40A798]">LiveSphere</span>?
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
