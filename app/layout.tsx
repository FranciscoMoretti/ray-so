import { Fira_Code, IBM_Plex_Mono, Inter, JetBrains_Mono, Roboto_Mono, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import cn from "classnames";
import { GeistMono } from "geist/font/mono";
import { Viewport } from "next";

import { TooltipProvider } from "@/components/tooltip";
import { Toaster } from "@/components/toast";
import { Navigation } from "@/components/navigation";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  variable: "--font-jetbrainsmono",
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  variable: "--font-ibmplexmono",
});
const firaCode = Fira_Code({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-firacode" });
const soehneMono = localFont({
  src: "./assets/soehne-mono-buch.woff2",
  variable: "--font-soehne-mono",
});
const commitMono = localFont({
  src: "./assets/commit-mono-regular.woff2",
  variable: "--font-commitmono",
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-roboto-mono",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-space-mono",
});

const geistMonoFontName = GeistMono.style.fontFamily.split(",")[0];

const title = "Code Image";
const description = "Create beautiful images of your code";

export const metadata = {
  title: title,
  description: description,
  openGraph: {
    type: "website",
    title: title,
    description: description,
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
  },
  keywords: "generate, create, convert, source, code, snippet, image, picture, share, export",
};

export const viewport: Viewport = {
  themeColor: "#181818",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <TooltipProvider>
        <body className={cn("isolate", inter.className)}>
          <div
            className={cn(
              "h-full",
              jetBrainsMono.variable,
              ibmPlexMono.variable,
              firaCode.variable,
              soehneMono.variable,
              commitMono.variable,
              robotoMono.variable,
              spaceMono.variable,
            )}
            style={
              {
                "--font-geist-mono": geistMonoFontName,
              } as React.CSSProperties
            }
          >
            <Navigation />
            <main className="flex flex-col min-h-full pt-[50px]">{children}</main>
          </div>
          <Toaster position="top-center" offset={70} duration={2000} />
        </body>
      </TooltipProvider>
    </html>
  );
}

