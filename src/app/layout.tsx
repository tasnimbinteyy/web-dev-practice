"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} > {children}
        {
          pathname !== "/userlist" ? 
          
          <ul className="Navbar">
          <li><Link href = "/" className={`${pathname === "/" ? "active" : ""}`}> Home </Link> </li>
          <li><Link href= "/about" className={`${pathname === "/about" ? "active" : ""}`}>About</Link></li>
          <li><Link href="/userlist" className= {`${pathname === "/userlist" ? "active" : ""}`}> Userlist</Link></li>
        </ul> : <Link href= "/"> Go Home </Link> 
        }
      </body>
    </html>
  );
}
