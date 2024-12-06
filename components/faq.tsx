"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

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
  const [selectedQuestion, setSelectedQuestion] = useState(faqs[0].question);

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="border-2 border-black rounded-2xl p-6 md:p-12">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h2 className="text-[#2D5545] text-3xl md:text-4xl font-bold mb-6 md:mb-8">
                FAQs.
              </h2>
              <div className="space-y-3 md:space-y-4">
                {faqs.map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedQuestion(faq.question)}
                    className={`w-full flex items-center justify-between px-3 md:px-4 py-2.5 md:py-3 rounded-lg hover:bg-gray-100 group text-left ${
                      selectedQuestion === faq.question
                        ? "bg-gray-200"
                        : "bg-gray-50"
                    }`}
                  >
                    <span className="font-medium text-sm md:text-base pr-2">
                      {faq.question}
                    </span>
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 transition-transform ${
                        selectedQuestion === faq.question ? "" : "rotate-180"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 md:mt-0">
              <h2 className="text-[#2D5545] text-3xl md:text-4xl font-bold mb-6 md:mb-8">
                Ans.
              </h2>
              <div className="bg-[#FFD84D] p-6 md:p-8 rounded-lg">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full mb-4"></div>
                <p className="text-black text-base md:text-lg">
                  {
                    faqs.find((faq) => faq.question === selectedQuestion)
                      ?.answer
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
