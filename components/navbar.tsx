import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-placeholder.svg"
            alt="LiveSphere Logo"
            width={40}
            height={40}
          />
          <span className="text-2xl font-bold font-['Montserrat']">
            LiveSphere
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#what-is-livesphere"
            className="text-gray-700 hover:text-gray-900"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-gray-700 hover:text-gray-900"
          >
            How it works
          </Link>
          <Link href="#roadmap" className="text-gray-700 hover:text-gray-900">
            Roadmap
          </Link>
          <Link
            href="#tokenomics"
            className="text-gray-700 hover:text-gray-900"
          >
            Tokenomics
          </Link>
        </div>

        <Button
          className="bg-[#E97451] hover:bg-[#E97451]/90 text-white border border-black"
          style={{ boxShadow: "2px 2px 0 rgba(0,0,0,0.1)" }}
        >
          Join Us
        </Button>
      </div>
    </nav>
  );
}
