import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.scss";
import "../styles/main.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "qpd.studio - Разработка сайтов",
  description:
    "Мы — команда профессионалов, специализирующихся на создании уникальных и современных веб-сайтов. Наша цель — помогать бизнесам и предпринимателям реализовывать свои идеи в интернете с помощью качественного и индивидуального подхода к каждому проекту.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <div className="wrapper">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
