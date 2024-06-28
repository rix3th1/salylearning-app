import type { Metadata } from "next";
import Script from "next/script";
import "./css/bootstrap.min.css";
import "./css/style.css";

export const metadata: Metadata = {
  title: "Inicio | Saly Learning",
};

export default function LearningLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Script src="/js/jquery-1.11.2.min.js" strategy="lazyOnload" />
    </>
  );
}
