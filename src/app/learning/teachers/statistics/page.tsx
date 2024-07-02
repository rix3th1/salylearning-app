import PageHeader from "@/app/learning/components/PageHeader";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import { Suspense } from "react";
import StatisticsAndReportsTabs from "../components/StatisticsAndReportsTabs";
import Statistics from "./components/Statistics";

export const metadata: Metadata = {
  title: "Estadísticas Generales: Docentes | Saly Learning",
};

export default function GeneralStatisticsPage() {
  return (
    <>
      <PageHeader title="Estadísticas Generales" />

      <StatisticsAndReportsTabs />

      <div className="container-fluid" style={{ margin: "50px 20px" }}>
        <h2>Contenido de estadísticas generales</h2>
        <Suspense fallback={<Fallback />}>
          <Statistics />
        </Suspense>
      </div>
    </>
  );
}
