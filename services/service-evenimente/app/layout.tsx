import type { Metadata } from "next";
// Using Google Fonts CDN instead of next/font/google because of subsetting bugs 
// that drop Romanian characters (ș, ț) causing them to render in a bolder fallback font.
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { EmadelmarMenu } from "@/app/emadelmar-menu/emadelmar-menu";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { BusinessHoursGatekeeper } from "@/components/business-hours-gatekeeper";
import { ErrorBoundary } from "@/components/error-boundary";

export const metadata: Metadata = {
  metadataBase: new URL('https://emadelmar.originzero.art'),
  title: {
    default: "Ema del Mar - Restaurant Mediterranean",
    template: "%s | Ema del Mar",
  },
  description: "Dacă vrei să servești cina într-un restaurant exclusivist, cochet, într-o atmosferă liniștită, atunci Ema del Mar e alegerea perfectă.",
  keywords: ["restaurant", "mediterranean", "fructe de mare", "fine dining", "Ema del Mar", "steakhouse", "cina romantica"],
  openGraph: {
    title: "Ema del Mar - Restaurant Mediterranean",
    description: "Dacă vrei să servești cina într-un restaurant exclusivist, cochet, într-o atmosferă liniștită, atunci Ema del Mar e alegerea perfectă.",
    url: "https://emadelmar.originzero.art",
    siteName: "Ema del Mar",
    images: [
      {
        url: "/images/hero/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Ema del Mar",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    title: "Ema del Mar",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Lora:ital,wght@0,400..700;1,400..700&family=Great+Vibes&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          "min-h-[100vh] bg-background font-sans antialiased text-foreground"
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <LoadingScreen />
            <BusinessHoursGatekeeper />
            <div className="flex min-h-[100vh] flex-col">
              <EmadelmarMenu />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
