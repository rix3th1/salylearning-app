import categoryImage from "@/assets/category.png";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function ReportsAndStatisticsPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-tittles">
            SALY LEARNING <small>Reportes de grado</small>
          </h1>
        </div>
      </div>
      <div className="container-fluid">
        <ul className="nav nav-tabs nav-justified">
          <li>
            <Link href="/learning/statistics">Estadísticas general</Link>
          </li>
          <li className="active">
            <Link href="/learning/reports">Reporte Grado</Link>
          </li>
        </ul>
      </div>

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

      <Script src="/js/grafica.js" />
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" />
    </>
  );
}
