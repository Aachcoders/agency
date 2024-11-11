
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles.css";
import { FacebookPixel } from "./components/facebook-pixel";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Futuristic",
  description: "Create the Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><FacebookPixel />
        {children}
      </body>
    </html>
  );
}
