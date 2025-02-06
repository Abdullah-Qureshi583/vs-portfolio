import type { Metadata } from "next";

import "./globals.css";
import LayoutWrapper from "@/components/customComponets/LayoutWrapper";

export const metadata: Metadata = {
  title: "Abdullah Qureshi | Portfolio | Developer",
  description: "Personal Portfolio of Abdullah Qureshi", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-SpaceGrotesk"}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
