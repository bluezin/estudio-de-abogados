import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mendoza & Asociados | Estudio Jurídico",
    template: "%s | Mendoza & Asociados",
  },
  description:
    "Estudio jurídico especializado en derecho civil, penal, laboral y corporativo. Más de 25 años de trayectoria defendiendo con integridad y compromiso.",
  keywords: [
    "abogados",
    "estudio jurídico",
    "derecho civil",
    "derecho penal",
    "derecho laboral",
    "asistencia legal",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}