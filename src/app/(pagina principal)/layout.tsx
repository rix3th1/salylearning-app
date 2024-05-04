import { plus_jakarta_sans } from "@/app/fonts";
import Footer from "@/components/ui/Footer";
import Nav from "@/components/ui/Nav";
import type { Metadata } from "next";
import Script from "next/script";
import "./paginaprincipal.css";

export const metadata: Metadata = {
  title: "Software Saly | Página principal",
};

export default function MainPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className={plus_jakarta_sans.className}>
        <Nav />
        <section>{children}</section>
        <Footer />
      </main>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
    </>
  );
}