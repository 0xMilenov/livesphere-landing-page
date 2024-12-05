"use client";

import Link from "next/link";
import { Youtube, MessageSquare, X } from "lucide-react";

export function Footer() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-[#2D5545] text-white py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">LiveSphere</h3>
            <p className="text-sm text-gray-300">
              Decentralized live streaming platform powered by blockchain
              technology.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="hover:text-[#E97451] transition-colors"
                  onClick={(e) => scrollToSection(e, "what-is-livesphere")}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#tokenomics"
                  className="hover:text-[#E97451] transition-colors"
                  onClick={(e) => scrollToSection(e, "how-it-works")}
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="#roadmap"
                  className="hover:text-[#E97451] transition-colors"
                  onClick={(e) => scrollToSection(e, "roadmap")}
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-[#E97451] transition-colors"
                  onClick={(e) => scrollToSection(e, "tokenomics")}
                >
                  Tokenomics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#E97451] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#E97451] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="hover:text-[#E97451] transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://t.me/+yAfL2-MxN5w3MGY0"
                className="hover:text-[#E97451] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare size={24} aria-label="Telegram" />
              </a>
              <a href="#" className="hover:text-[#E97451] transition-colors">
                <Youtube size={24} aria-label="YouTube" />
              </a>
              <a href="#" className="hover:text-[#E97451] transition-colors">
                <X size={24} aria-label="X" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} LiveSphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
