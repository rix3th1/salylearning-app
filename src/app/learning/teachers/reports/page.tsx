import PageHeader from "@/app/learning/components/PageHeader";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import { Suspense } from "react";
import GradeSelector from "../components/GradeSelector";
import StatisticsAndReportsTabs from "../components/StatisticsAndReportsTabs";
import PuntajeSection from "./components/PuntajeSection";
// import PieStatic from "@/components/Statistics/PieStatic";

export const metadata: Metadata = {
  title: "Reportes Grado: Docentes | Saly Learning",
};

export default function GradeReportsPage() {
  return (
    <>
      <PageHeader title="Reportes Grado" />

      <StatisticsAndReportsTabs />

      <div className="container-fluid" style={{ margin: "15px" }}>
        <GradeSelector />

        <Suspense fallback={<Fallback />}>
          <PuntajeSection />
        </Suspense>

        {/* <div className="container-fluid">
          <div className="row chart-puntuacion">
            <PieStatic
              title={{
                text: "Promedio Puntuación Grado Tercero",
              }}
              data={[]}
            />

            <PieStatic
              title={{
                text: "Promedio Puntuación Grado Tercero",
              }}
              data={[]}
            />
            <PieStatic
              title={{
                text: "Promedio Puntuación Grado Tercero",
              }}
              data={[]}
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
