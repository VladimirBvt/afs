import type { Metadata } from "next";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./_/styles/globals.scss";
import "./_/styles/reset.scss";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "AFS",
  description: "AFS test next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppinsFont.variable}>{children}</body>
    </html>
  );
}
