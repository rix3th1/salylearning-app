import FooterLogged from "@/components/FooterLogged";
import Aside from "@/components/ui/Aside";
import InternalNav from "@/components/ui/InternalNav";
import type { Metadata } from "next";
import Script from "next/script";
import ModalHelp from "./components/ModalHelp";
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
      <Aside />
      <div className="content-page-container full-reset custom-scroll-containers">
        <InternalNav />
        <ModalHelp />

        <main>{children}</main>
        <FooterLogged />
      </div>

      <Script src="/js/jquery-1.11.2.min.js" />
      <Script src="/js/bootstrap.min.js" />
      <Script src="/js/main.js" />
    </>
  );
}
