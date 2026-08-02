import type { Metadata, Viewport } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

// ── Fonts ──────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["300", "400", "500"],
});

// ── Metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Harshit Bhoriya — Software Engineer",
    template: "%s | Harshit Bhoriya",
  },
  description:
    "Software Engineer, AI Engineer & Full Stack Developer. Building elegant systems and meaningful products.",
  metadataBase: new URL("https://harshitbhoriya.me"),
  openGraph: {
    type: "website",
    url: "https://harshitbhoriya.me",
    title: "Harshit Bhoriya — Software Engineer",
    description:
      "Software Engineer, AI Engineer & Full Stack Developer. Building elegant systems and meaningful products.",
    siteName: "Harshit Bhoriya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Bhoriya — Software Engineer",
    description:
      "Software Engineer, AI Engineer & Full Stack Developer. Building elegant systems and meaningful products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// ── Root Layout ────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        <SmoothScrollProvider>
          <ScrollProgress />
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
