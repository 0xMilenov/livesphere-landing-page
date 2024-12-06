import "@/app/globals.css";
import { Inter, Montserrat } from "next/font/google";
import { Covered_By_Your_Grace } from "next/font/google";

export const viewport = {
  themeColor: "#ffffff",
};

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const coveredByYourGrace = Covered_By_Your_Grace({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-covered-grace",
});

export const metadata = {
  title: "LiveSphere",
  description: "Decentralized broadcasting platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${inter.className} ${montserrat.variable} ${coveredByYourGrace.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
