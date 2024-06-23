import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "../components/PageHeader";
import BooksExplore from "./components/BooksExplore";
import CounterSection from "./components/CounterSection";
import Motivation from "./components/Motivation";

export const metadata: Metadata = {
  title: "Inicio: Estudiantes | Saly Learning",
};

export default function HomePage() {
  return (
    <>
      <PageHeader title="Inicio" />

      <section className="card-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Suspense fallback={<Fallback />}>
                <CounterSection />
              </Suspense>
            </div>

            <div className="col-md-6">
              <div
                className="texto-nube"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Motivation />
              </div>

              <Suspense fallback={<Fallback />}>
                <BooksExplore />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
