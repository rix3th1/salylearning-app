import PageHeader from "@/app/learning/components/PageHeader";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import { Suspense } from "react";
import ReadingSection from "./components/ReadingSection";

interface IProps {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Leer Libro: Estudiantes | Saly Learning",
};

export default function ReadBookPage({ params }: IProps) {
  return (
    <>
      <PageHeader title="Leer libro" />

      <section>
        <div className="container-fluid">
          <div className="container-fluid">
            <div className="row">
              <div className="container-fluid">
                <Suspense fallback={<Fallback />}>
                  <ReadingSection libro_id={params.id} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
