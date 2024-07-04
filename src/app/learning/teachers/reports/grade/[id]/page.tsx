import PageHeader from "@/app/learning/components/PageHeader";
import GradeSelector from "@/app/learning/teachers/components/GradeSelector";
import StatisticsAndReportsTabs from "@/app/learning/teachers/components/StatisticsAndReportsTabs";
import StatisticsTitle from "@/app/learning/teachers/components/StatisticsTitle";
import PuntajeSection from "@/app/learning/teachers/reports/components/PuntajeSection";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import { Suspense } from "react";
// import PieStatic from "@/components/Statistics/PieStatic";

interface IProps {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Reportes Por Grado: Docentes | Saly Learning",
};

export default function ByGradeReportsPage({ params }: IProps) {
  return (
    <>
      <PageHeader title="Reportes Por Grado" />

      <StatisticsAndReportsTabs />

      <div className="container-fluid" style={{ margin: "15px" }}>
        <GradeSelector id_grado={params.id} />

        <Suspense fallback={<Fallback />}>
          <StatisticsTitle
            label="Reporte de estudiantes grado"
            id_grado={params.id}
          />
        </Suspense>

        <Suspense fallback={<Fallback />}>
          <PuntajeSection id_grado={params.id} />
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
