import type { Metadata } from "next";
import IndexHeader from "./components/IndexHeader";
import IndexSection from "./components/IndexSection";

export const metadata: Metadata = {
  title: "Software Saly | Inicio",
};

export default function HomePage() {
  return (
    <>
      <IndexHeader />
      <IndexSection />
    </>
  );
}
