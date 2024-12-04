import { inter, montserrat } from "./fonts";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { WhyUse } from "@/components/why-use";
import { Roadmap } from "@/components/roadmap";
import { Tokenomics } from "@/components/tokenomics";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className={`${inter.className} ${montserrat.variable}`}>
      <main>
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <WhyUse />
        <Roadmap />
        <Tokenomics />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
