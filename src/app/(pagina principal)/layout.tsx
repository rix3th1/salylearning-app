import Footer from "@/components/ui/Footer";
import Nav from "@/components/ui/Nav";
import type { Metadata } from "next";
import "./paginaprincipal.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Software Saly | Página principal",
};

export default function IndexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
    </>
  );
}
