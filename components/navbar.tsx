"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="container flex justify-between py-4 max-w-6xl">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-placeholder.svg"
            alt="LiveSphere Logo"
            width={40}
            height={40}
          />
          <span className="text-xl md:text-2xl font-bold font-['Montserrat']">
            LiveSphere
          </span>
        </Link>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#what-is-livesphere"
            className="text-gray-700 hover:text-gray-900"
            onClick={(e) => scrollToSection(e, "what-is-livesphere")}
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-gray-700 hover:text-gray-900"
            onClick={(e) => scrollToSection(e, "how-it-works")}
          >
            How it works
          </Link>
          <Link
            href="#roadmap"
            className="text-gray-700 hover:text-gray-900"
            onClick={(e) => scrollToSection(e, "roadmap")}
          >
            Roadmap
          </Link>
          <Link
            href="#tokenomics"
            className="text-gray-700 hover:text-gray-900"
            onClick={(e) => scrollToSection(e, "tokenomics")}
          >
            Tokenomics
          </Link>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link
                href="#what-is-livesphere"
                className="text-gray-700 hover:text-gray-900"
                onClick={(e) => scrollToSection(e, "what-is-livesphere")}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-700 hover:text-gray-900"
                onClick={(e) => scrollToSection(e, "how-it-works")}
              >
                How it works
              </Link>
              <Link
                href="#roadmap"
                className="text-gray-700 hover:text-gray-900"
                onClick={(e) => scrollToSection(e, "roadmap")}
              >
                Roadmap
              </Link>
              <Link
                href="#tokenomics"
                className="text-gray-700 hover:text-gray-900"
                onClick={(e) => scrollToSection(e, "tokenomics")}
              >
                Tokenomics
              </Link>
              <Button
                className="bg-[#E97451] hover:bg-[#E97451]/90 text-white border border-black w-full"
                style={{ boxShadow: "3px 3px 0 rgba(0,0,0,1)" }}
                onClick={() =>
                  window.open("https://t.me/+yAfL2-MxN5w3MGY0", "_blank")
                }
              >
                Join Us
              </Button>
            </div>
          </div>
        )}

        <Button
          className="hidden md:block bg-[#E97451] hover:bg-[#E97451]/90 text-white border border-black"
          style={{ boxShadow: "3px 3px 0 rgba(0,0,0,1)" }}
          onClick={() =>
            window.open("https://t.me/+yAfL2-MxN5w3MGY0", "_blank")
          }
        >
          Join Us
        </Button>
      </div>
    </nav>
  );
}
