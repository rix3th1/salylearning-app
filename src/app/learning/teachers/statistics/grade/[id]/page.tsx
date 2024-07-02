import PageHeader from "@/app/learning/components/PageHeader";
import GradeSelector from "@/app/learning/teachers/components/GradeSelector";
import StatisticsAndReportsTabs from "@/app/learning/teachers/components/StatisticsAndReportsTabs";
import Statistics from "@/app/learning/teachers/statistics/components/Statistics";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import { Suspense } from "react";

interface IProps {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Estadísticas Generales: Docentes | Saly Learning",
};

export default function ByGradeStatisticsPage({ params }: IProps) {
  return (
    <>
      <PageHeader title="Estadísticas Por Grado" />

      <StatisticsAndReportsTabs />

      <div className="container-fluid" style={{ margin: "15px" }}>
        <GradeSelector id_grado={params.id} />

        <h2>Contenido de estadísticas por grado</h2>
        <Suspense fallback={<Fallback />}>
          <Statistics id_grado={params.id} />
        </Suspense>
      </div>
    </>
  );
}
