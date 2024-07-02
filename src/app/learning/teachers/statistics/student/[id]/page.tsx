import PageHeader from "@/app/learning/components/PageHeader";
import StatisticsAndReportsTabs from "@/app/learning/teachers/components/StatisticsAndReportsTabs";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import { Suspense } from "react";
import StatisticsHeader from "../components/StatisticsHeader";

interface IProps {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Estadísticas Estudiante: Docentes | Saly Learning",
};

export default function StudentStatisticsPage({ params }: IProps) {
  return (
    <>
      <PageHeader title="Estadísticas Estudiante" />

      <StatisticsAndReportsTabs />

      <div className="container-fluid" style={{ margin: "50px 20px" }}>
        <Suspense fallback={<Fallback />}>
          <StatisticsHeader id_estudiante={params.id} />
        </Suspense>
      </div>
    </>
  );
}
