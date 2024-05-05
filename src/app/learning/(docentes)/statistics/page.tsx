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

      <div className="container-fluid" style={{ margin: "50px 20px" }}>
        <h2>Contenido de estadísticas generales</h2>
        <div className="row text-center">
          {/* Primera fila de gráficos de barras */}
          <div className="col-md-6">
            <div className="chart-style">
              <h3>Libros completados</h3>
              <canvas id="bar-chart-1" width={400} height={400} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="chart-style">
              <h3>Libros Incompletos</h3>
              <canvas id="bar-chart-2" width={400} height={400} />
            </div>
          </div>
        </div>
        <div className="row text-center">
          {/* Segunda fila de gráficos circulares */}
          <div className="col-md-6">
            <div className="chart-style">
              <h3>Actividades completadas</h3>
              <canvas id="pie-chart-1" width={400} height={400} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="chart-style">
              <h3>Actividades pendientes</h3>
              <canvas id="pie-chart-2" width={400} height={400} />
            </div>
          </div>
        </div>
      </div>

      <Script src="/js/grafica.js" />
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" />
    </>
  );
}
