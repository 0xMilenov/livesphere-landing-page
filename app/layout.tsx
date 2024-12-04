import "@/app/globals.css";
import { Inter, Montserrat } from "next/font/google";

export const viewport = {
  themeColor: "#ffffff",
};

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
      <body className={`${inter.className} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
