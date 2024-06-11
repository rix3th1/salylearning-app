import PageHeader from "@/app/learning/components/PageHeader";
import BarStatic from "@/components/Statistics/BarStatic";
import { obtenerEstadisticasDocente } from "@/services/estatisticas-docente.service";
import type { Metadata } from "next";
import StatisticsAndReportsTabs from "../components/StatisticsAndReportsTabs";

export const metadata: Metadata = {
  title: "Estadísticas Generales: Docentes | Saly Learning",
};

export default async function ReportsAndStatisticsPage() {
  const estadisticas = await obtenerEstadisticasDocente();

  return (
    <>
      <PageHeader title="Estadísticas Generales" />

      <StatisticsAndReportsTabs />

      <div className="container-fluid" style={{ margin: "50px 20px" }}>
        <h2>Contenido de estadísticas generales</h2>
        <div className="row text-center">
          {/* Primera fila de gráficos de barras */}
          <div className="col-md-6">
            <div className="chart-style">
              <h3>Libros completados</h3>
              <BarStatic data={estadisticas[0]} title={{}} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="chart-style">
              <h3>Libros Incompletos</h3>
              <BarStatic data={estadisticas[1]} title={{}} />
            </div>
          </div>
        </div>
        <div className="row text-center">
          {/* Segunda fila de gráficos circulares */}
          <div className="col-md-6">
            <div className="chart-style">
              <h3>Actividades completadas</h3>
              <BarStatic data={estadisticas[2]} title={{}} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="chart-style">
              <h3>Actividades pendientes</h3>
              <BarStatic data={estadisticas[3]} title={{}} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
