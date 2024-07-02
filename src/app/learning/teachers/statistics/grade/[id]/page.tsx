import PageHeader from "@/app/learning/components/PageHeader";
import GradeSelector from "@/app/learning/teachers/components/GradeSelector";
import StatisticsAndReportsTabs from "@/app/learning/teachers/components/StatisticsAndReportsTabs";
import Statistics from "@/app/learning/teachers/statistics/components/Statistics";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import { Suspense } from "react";
import StatisticsTitle from "../../../components/StatisticsTitle";

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

        <Suspense fallback={<Fallback />}>
          <StatisticsTitle
            label="Estadísticas de estudiantes grado"
            id_grado={params.id}
          />
        </Suspense>

        <Suspense fallback={<Fallback />}>
          <Statistics id_grado={params.id} />
        </Suspense>
      </div>
    </>
  );
}
