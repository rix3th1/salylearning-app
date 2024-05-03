import Aside from "@/components/ui/Aside";
import type { Metadata } from "next";
import "./bootstrap.min.css";
import "./style.css";
import FooterLogged from "@/components/FooterLogged";
import InternalNav from "@/components/ui/InternalNav";

export const metadata: Metadata = {
  title: "Inicio: Docentes | Saly Learning",
};

export default function IndexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Aside />
      <div className="content-page-container full-reset custom-scroll-containers">
        <InternalNav />
        <main>{children}</main>
        <FooterLogged />
      </div>
    </>
  );
}
