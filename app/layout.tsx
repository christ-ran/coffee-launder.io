import type { Metadata } from "next";
import "./globals.css";
import { narrow_emberly, std_emberly } from "@/libs/fonts";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Coffee Launder - Software Engineer",
  description: ""
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-dark-500 text-white ${std_emberly.variable} ${narrow_emberly.variable} box-border grain`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
