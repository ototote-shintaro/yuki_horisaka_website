import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuki Horisaka",
  description: "Yuki Horisaka Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen max-w-full'>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
