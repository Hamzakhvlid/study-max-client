import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Suspense } from "react";
import Loading from "./loading";

const poppins = localFont({
  src: "./fonts/poppins/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});
const poppinsSemibold = localFont({
  src: "./fonts/poppins/Poppins-SemiBold.ttf",
  variable: "--font-poppinssemibold",
  weight: "600",
});

const poppinsBold = localFont({
  src: "./fonts/poppins/Poppins-Bold.ttf",
  variable: "--font-poppinsbold",
  weight: "800",
});

export const metadata: Metadata = {
  title: "Study Max",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <StoreProvider>
          <body
            className={`${poppinsBold.variable} ${poppinsSemibold.variable} ${poppins.variable} font-poppins antialiased`}
          >
            {children}
          </body>
        </StoreProvider>
      </Suspense>
    </html>
  );
}
