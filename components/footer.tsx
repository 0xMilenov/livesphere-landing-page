import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
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
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#tokenomics"
                  className="hover:text-[#E97451] transition-colors"
                >
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link
                  href="#roadmap"
                  className="hover:text-[#E97451] transition-colors"
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-[#E97451] transition-colors"
                >
                  FAQ
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
              <a href="#" className="hover:text-[#E97451] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-[#E97451] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-[#E97451] transition-colors">
                <Youtube size={24} />
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
