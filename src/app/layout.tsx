import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Lavishly_Yours } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const lavishly = Lavishly_Yours({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lavishly", 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${cormorant.variable} ${lavishly.variable}`}>
      <body className="bg-gray-100 min-h-screen flex justify-center items-start antialiased font-serif py-10">
        <main className="bg-white w-full max-w-[500px] shadow-2xl flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}