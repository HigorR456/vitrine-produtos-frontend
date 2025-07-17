import { Header } from "@/components/layout/header";
import "./globals.css";
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ProductsShowcase",
  description: "Ecommerce product showcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
