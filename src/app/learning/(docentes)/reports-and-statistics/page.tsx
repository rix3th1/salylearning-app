import categoryImage from "@/assets/category.png";
import Image from "next/image";
import Script from "next/script";

export default function ReportsAndStatisticsPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-tittles">
            SALY LEARNING <small>Reportes y estadísticas</small>
          </h1>
        </div>
      </div>
      <div className="container-fluid">
        <ul className="nav nav-tabs nav-justified" role="tablist">
          <li role="presentation" className="active">
            <a
              href="#statistics"
              aria-controls="statistics"
              role="tab"
              data-toggle="tab"
            >
              Estadísticas general
            </a>
          </li>
          <li role="presentation">
            <a
              href="#reports"
              aria-controls="reports"
              role="tab"
              data-toggle="tab"
            >
              Reporte Grado
            </a>
          </li>
        </ul>
      </div>

      {/* Gráficos rendimiento semana */}
      <div className="tab-content">
        {/* Contenido de la pestaña "Estadísticas general" */}
        <div
          role="tabpanel"
          className="tab-pane fade in active"
          id="statistics"
        >
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
        </div>
        {/* Contenido Reporte Grado */}
        <div role="tabpanel" className="tab-pane fade" id="reports">
          <div className="container-fluid" style={{ margin: "50px 0" }}>
            <div className="fila-ranking">
              <div className="columna">
                {/* Contenido de la primera columna */}
                <div className="ranking" style={{ marginRight: "1rem" }}>
                  <Image
                    width={525}
                    height={525}
                    quality={100}
                    src={categoryImage}
                    alt="Primer Lugar"
                  />
                  <p>Primer Lugar</p>
                </div>
                <div className="fila-lugares" style={{ marginRight: "1rem" }}>
                  <div className="lugar">
                    <Image
                      width={260}
                      height={260}
                      quality={100}
                      src={categoryImage}
                      alt="Segundo Lugar"
                    />
                    <p>Segundo Lugar</p>
                  </div>
                  <div className="lugar">
                    <Image
                      width={260}
                      height={260}
                      quality={100}
                      src={categoryImage}
                      alt="Tercer Lugar"
                    />
                    <p>Tercer Lugar</p>
                  </div>
                </div>
              </div>
              <div className="columna-ranking">
                {/* Contenido de demás lugares */}
                <p>Contenido de la segunda columna</p>
                <div className="other-positions">
                  <div className="position">
                    <Image
                      width={110}
                      height={110}
                      quality={100}
                      src={categoryImage}
                      alt="Imagen Pequeña"
                      className="small-image"
                    />
                    <p>4. Cuarto Puesto</p>
                  </div>
                  <div className="position">
                    <Image
                      width={110}
                      height={110}
                      quality={100}
                      src={categoryImage}
                      alt="Imagen Pequeña"
                      className="small-image"
                    />
                    <div>5. Quinto Puesto</div>
                  </div>
                  <div className="position">
                    <Image
                      width={110}
                      height={110}
                      quality={100}
                      src={categoryImage}
                      alt="Imagen Pequeña"
                      className="small-image"
                    />
                    <div>6. Sexto Puesto</div>
                  </div>
                  <div className="position">
                    <Image
                      width={110}
                      height={110}
                      quality={100}
                      src={categoryImage}
                      alt="Imagen Pequeña"
                      className="small-image"
                    />
                    <div>7. Séptimo Puesto</div>
                  </div>
                  <div className="position">
                    <Image
                      width={110}
                      height={110}
                      quality={100}
                      src={categoryImage}
                      alt="Imagen Pequeña"
                      className="small-image"
                    />
                    <div>8. Octavo Puesto</div>
                  </div>
                  <div className="position">
                    <Image
                      width={110}
                      height={110}
                      quality={100}
                      src={categoryImage}
                      alt="Imagen Pequeña"
                      className="small-image"
                    />
                    <div>9. Noveno Puesto</div>
                  </div>
                  <div className="position">
                    <Image
                      width={110}
                      height={110}
                      quality={100}
                      src={categoryImage}
                      alt="Imagen Pequeña"
                      className="small-image"
                    />
                    <div>10. Décimo Puesto</div>
                  </div>
                </div>
              </div>
            </div>
            {/*divs en una fila  */}
            <div className="chart-puntuacion">
              <div className="container-wrapper">
                <div className="chart-style02">
                  <h3>Promedio Puntuación Grado Tercero</h3>
                  <canvas id="ranking-chart-2" width={350} height={350} />
                </div>
                <div className="chart-style02">
                  <h3>Promedio Puntuación Grado Cuarto</h3>
                  <canvas id="ranking-chart-3" width={350} height={350} />
                </div>
                <div className="chart-style02">
                  <h3>Promedio Puntuación Grado Quinto</h3>
                  <canvas id="ranking-chart-4" width={350} height={350} />
                </div>
              </div>
            </div>
            {/*div estudiantes activos*/}
            <div className="chart-style02">
              <h2>Estudiantes Registrados</h2>
              <div id="active-students-list" className="student">
                <ul id="active-students">{/* estudiantes activos */}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script src="/js/grafica.js" />
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" />
    </>
  );
}
