import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: "ZERO — Sistemas de gestión",
  description:
    "Sistemas de gestión para kiosco, restaurant, comercio, autoservicio, distribuidora, mayorista, ferretería, indumentaria, panadería y farmacia. Web, móvil y escritorio.",
  icons: { icon: "/brand/favicon.ico" },
};

export const viewport = {
  themeColor: "#19273A",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body className={`${inter.variable} ${plex.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
