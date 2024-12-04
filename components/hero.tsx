import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="bg-[#E5F4F1] pt-24 md:pt-32 pb-16"
      aria-label="Hero section"
    >
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Meet your{" "}
              <span className="font-['Covered_By_Your_Grace'] text-[#40A798]">
                favorite
              </span>
              <br />
              new{" "}
              <span className="font-['Covered_By_Your_Grace'] text-[#40A798]">
                broadcasting
              </span>
              <br />
              platform.
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl">
              LiveSphere is a decentralized platform that connects broadcasters
              and viewers through live streaming, token economies, and direct
              engagement.
            </p>
            <Button
              className="mt-8 bg-[#E97451] hover:bg-[#E97451]/90 text-white px-8 py-3 text-lg transition-all duration-300 ease-in-out transform hover:scale-105 border border-black"
              style={{ boxShadow: "2px 2px 0 rgba(0,0,0,0.1)" }}
              aria-label="Join our waitlist"
            >
              Documentation
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/placeholder.svg"
              alt="LiveSphere App Preview"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}