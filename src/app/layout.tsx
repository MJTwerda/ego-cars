import Header from "@/components/header/Header";
import ThemeProviderWrapper from "@/components/ThemeProvider/ThemeProvider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ego Cars",
  description: "Develop challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserratFont.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProviderWrapper>
          <Header />
          <main className="flex-grow">{children}</main>
          <div className="bg-black h-12 mt-12"></div>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
