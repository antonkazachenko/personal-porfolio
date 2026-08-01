import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import { I18nProvider } from "@/app/i18n/I18nProvider";

// Poppins is self-hosted by next/font at build time (subsetted woff2, ~15 kB per
// weight). It replaces six raw .ttf files that added up to ~950 kB of preloaded,
// render-priority bytes on every page load.
//
// One declaration per weight, each keeping the CSS variable name it had as a
// localFont, so the ~95 `font-family: var(--font-poppins-*)` rules in
// components/styles.css keep resolving to the same weight they always did.
const PoppinsLight = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
  variable: "--font-poppins-light",
});
const PoppinsRegular = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-poppins-regular",
});
const PoppinsMedium = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
  variable: "--font-poppins-medium",
});
const PoppinsSemiBold = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
  variable: "--font-poppins-semi-bold",
});
const PoppinsBold = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  variable: "--font-poppins-bold",
});

export const metadata: Metadata = {
  title: "Anton Kazachenko",
  description: "Anton Kazachenko's portfolio",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      // optional legacy fallback:
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html
      suppressHydrationWarning
      className={[
        PoppinsLight.variable,
        PoppinsRegular.variable,
        PoppinsMedium.variable,
        PoppinsSemiBold.variable,
        PoppinsBold.variable,
      ].join(" ")}
    >
      <head>
        {/* Apply the saved theme before paint to avoid a flash of the wrong theme.
            Mirrors the default in useTheme.ts (dark). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        <link rel="icon" href="/icons/AK.svg" type="image/svg+xml" />
      </head>
    <body>
    <I18nProvider>
      <main>{children}</main>
    </I18nProvider>
    </body>
    </html>
  );
}
