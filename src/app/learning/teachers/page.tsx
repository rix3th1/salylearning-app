import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "../components/PageHeader";
import CountersSection from "./components/CountersSection";

export const metadata: Metadata = {
  title: "Inicio: Docentes | Saly Learning",
};

export default function HomePage() {
  return (
    <>
      <PageHeader title="Inicio" />

      <Suspense fallback={<Fallback />}>
        <CountersSection />
      </Suspense>
    </>
  );
}
