"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is LiveSphere?",
    answer:
      "LiveSphere is a decentralized platform that connects broadcasters and viewers through live streaming, token economies, and direct engagement. Our platform enables content creators to monetize their content while building meaningful relationships with their audience through blockchain technology.",
  },
  {
    question: "How do I start broadcasting?",
    answer:
      "To start broadcasting on LiveSphere, you need to create an account, complete the KYC process, set up your wallet, and use our intuitive interface to go live. Detailed instructions can be found in our getting started guide.",
  },
  {
    question: "What is LiveSphere token utility?",
    answer:
      "LiveSphere tokens (LS) power the ecosystem by enabling tipping, staking rewards, and community decision-making. They're essential for participating in the platform's economy and accessing premium features.",
  },
  {
    question: "What is the transaction fee?",
    answer:
      "LiveSphere charges a minimal 5% transaction fee, ensuring that 95% of earnings go directly to the broadcasters. This fee structure fosters a fair and sustainable ecosystem for all participants.",
  },
  {
    question: "How do rewards work?",
    answer:
      "Users can earn rewards by staking LiveSphere tokens, participating in community governance, and achieving platform milestones. Broadcasters also receive rewards through tips and engagement from their audience.",
  },
];

export function FAQ() {
  const [selectedAnswer, setSelectedAnswer] = useState(faqs[0].answer);

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="border-2 border-black rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-[#2D5545] text-4xl font-bold mb-8">FAQs.</h2>
              <Accordion
                type="single"
                collapsible
                className="space-y-4"
                onValueChange={(value) => {
                  const selected = faqs.find((faq) => faq.question === value);
                  if (selected) {
                    setSelectedAnswer(selected.answer);
                  }
                }}
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={faq.question}
                    className="border-none"
                  >
                    <div className="space-y-1">
                      <AccordionTrigger className="bg-gray-50 px-4 py-3 rounded-lg hover:no-underline hover:bg-gray-100 group">
                        <span className="font-medium">{faq.question}</span>
                      </AccordionTrigger>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <h2 className="text-[#2D5545] text-4xl font-bold mb-8">Ans.</h2>
              <div className="bg-[#FFD84D] p-8 rounded-lg">
                <div className="w-4 h-4 bg-black rounded-full mb-4"></div>
                <p className="text-black text-lg">{selectedAnswer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
