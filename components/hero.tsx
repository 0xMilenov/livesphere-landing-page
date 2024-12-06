"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import landing from "@/public/landing.png";

export function Hero() {
  return (
    <section
      className="bg-[#E5F4F1] pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16"
      aria-label="Hero section"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
          <div className="md:w-1/2 md:pr-8 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Meet your{" "}
              <span className="font-covered-grace text-[#40A798]">
                favorite
              </span>
              <br />
              new{" "}
              <span className="font-covered-grace text-[#40A798]">
                broadcasting
              </span>
              <br />
              platform.
            </h1>
            <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl">
              LiveSphere is a decentralized platform that connects broadcasters
              and viewers through live streaming, token economies, and direct
              engagement.
            </p>
            <Button
              className="mt-6 md:mt-8 bg-[#E97451] hover:bg-[#E97451]/90 text-white px-4 md:px-6 py-2 text-sm md:text-base transition-all duration-300 ease-in-out transform hover:scale-105 border border-black w-[200px]"
              style={{ boxShadow: "3px 3px 0 rgba(0,0,0,1)" }}
              aria-label="View documentation"
              onClick={() =>
                window.open(
                  "https://0xmilenov.gitbook.io/livesphere/",
                  "_blank"
                )
              }
            >
              Documentation
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 px-4 md:px-0">
            <Image
              src={landing}
              alt="LiveSphere App Preview"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
