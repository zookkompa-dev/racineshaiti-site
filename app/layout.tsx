import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Racines Haïti - Histoire et Culture",
  description:
    "Découvrez l'histoire riche et complexe d'Haïti, de la colonisation à nos jours. Une exploration numérique de la culture, la révolution et l'héritage haïtien.",
  keywords: [
    "Haïti",
    "histoire",
    "culture",
    "révolution haïtienne",
    "éducation",
    "diaspora",
  ],
  openGraph: {
    title: "Racines Haïti - Histoire et Culture",
    description: "Explorez l'histoire complète d'Haïti avec des récits authentiques",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-haiti-cream">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
