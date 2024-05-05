import Link from "next/link";
import Script from "next/script";

export default function ReportsAndStatisticsPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-tittles">
            SALY LEARNING <small>Estadísticas generales</small>
          </h1>
        </div>
      </div>
      <div className="container-fluid">
        <ul className="nav nav-tabs nav-justified">
          <li className="active">
            <Link href="/learning/statistics">Estadísticas general</Link>
          </li>
          <li>
            <Link href="/learning/reports">Reporte Grado</Link>
          </li>
        </ul>
      </div>

      <div
        className="container-fluid"
        style={{ margin: "50px 0", padding: "0 px" }}
      >
        <h2>Contenido de Estadísticas general</h2>
        <div className="chart-row">
          {/* Primera fila de gráficos de barras */}
          <div className="chart-style">
            <h3>Libros completados</h3>
            <canvas id="bar-chart-1" width={400} height={400} />
          </div>
          <div className="chart-style">
            <h3>Libros Incompletos</h3>
            <canvas id="bar-chart-2" width={400} height={400} />
          </div>
        </div>
        <div className="chart-row">
          {/* Segunda fila de gráficos circulares */}
          <div className="chart-style">
            <h3>Actividades completadas</h3>
            <canvas id="pie-chart-1" width={400} height={400} />
          </div>
          <div className="chart-style">
            <h3>Actividades pendientes</h3>
            <canvas id="pie-chart-2" width={400} height={400} />
          </div>
        </div>
      </div>

      <Script src="/js/grafica.js" />
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" />
    </>
  );
}
