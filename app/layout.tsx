import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {ReactNode} from "react";
import Head from "next/head";

// const PoppinsBlack = localFont({
//   src: "./fonts/Poppins-Black.ttf",
//   variable: "--font-poppins-black",
//   weight: "100 900",
// });
// const PoppinsBlackItalic = localFont({
//   src: "./fonts/Poppins-BlackItalic.ttf",
//   variable: "--font-poppins-black-italic",
//   weight: "100 900",
// });
const PoppinsBold = localFont({
  src: "./fonts/Poppins-Bold.ttf",
  variable: "--font-poppins-bold",
  weight: "100 900",
});
// const PoppinsBoldItalic = localFont({
//   src: "./fonts/Poppins-BoldItalic.ttf",
//   variable: "--font-poppins-bold-italic",
//   weight: "100 900",
// });
// const PoppinsExtraBold = localFont({
//   src: "./fonts/Poppins-ExtraBold.ttf",
//   variable: "--font-poppins-extra-bold",
//   weight: "100 900",
// });
// const PoppinsExtraBoldItalic = localFont({
//   src: "./fonts/Poppins-ExtraBoldItalic.ttf",
//   variable: "--font-poppins-extra-bold-italic",
//   weight: "100 900",
// });
// const PoppinsExtraLight = localFont({
//   src: "./fonts/Poppins-ExtraLight.ttf",
//   variable: "--font-poppins-extra-light",
//   weight: "100 900",
// });
// const PoppinsExtraLightItalic = localFont({
//   src: "./fonts/Poppins-ExtraLightItalic.ttf",
//   variable: "--font-poppins-extra-light-italic",
//   weight: "100 900",
// });
const PoppinsItalic = localFont({
  src: "./fonts/Poppins-Italic.ttf",
  variable: "--font-poppins-italic",
  weight: "100 900",
});
const PoppinsLight = localFont({
  src: "./fonts/Poppins-Light.ttf",
  variable: "--font-poppins-light",
  weight: "100 900",
});
// const PoppinsLightItalic = localFont({
//   src: "./fonts/Poppins-LightItalic.ttf",
//   variable: "--font-poppins-light-italic",
//   weight: "100 900",
// });
// const PoppinsMedium = localFont({
//   src: "./fonts/Poppins-Medium.ttf",
//   variable: "--font-poppins-medium",
//   weight: "100 900",
// });
// const PoppinsMediumItalic = localFont({
//   src: "./fonts/Poppins-MediumItalic.ttf",
//   variable: "--font-poppins-medium-italic",
//   weight: "100 900",
// });
const PoppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins-regular",
  weight: "100 900",
});
const PoppinsSemiBold = localFont({
  src: "./fonts/Poppins-SemiBold.ttf",
  variable: "--font-poppins-semi-bold",
  weight: "100 900",
});
// const PoppinsSemiBoldItalic = localFont({
//   src: "./fonts/Poppins-SemiBoldItalic.ttf",
//   variable: "--font-poppins-semi-bold-italic",
//   weight: "100 900",
// });
// const PoppinsThin = localFont({
//   src: "./fonts/Poppins-Thin.ttf",
//   variable: "--font-poppins-thin",
//   weight: "100 900",
// });
// const PoppinsThinItalic = localFont({
//   src: "./fonts/Poppins-ThinItalic.ttf",
//   variable: "--font-poppins-thin-italic",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Anton Kazachenko",
  description: "Anton Kazachenko's portfolio",
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html
      className={`${PoppinsRegular.variable} ${PoppinsBold.variable} ${PoppinsItalic.variable} ${PoppinsSemiBold.variable} ${PoppinsLight.variable}`}>
    <Head>
      <link rel="icon" href="/icons/AK.svg" type="image/svg+xml" />
    </Head>
    <body>
    <main>{children}</main>
    </body>
    </html>
  );
}
