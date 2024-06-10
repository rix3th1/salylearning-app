import PageHeader from "@/app/learning/components/PageHeader";
import categoryImage from "@/assets/category.png";
import { obtenerEstudiantes } from "@/services/estudiantes.service";
import type { Metadata } from "next";
import Image from "next/image";
import StatisticsAndReportsTabs from "../components/StatisticsAndReportsTabs";

export const metadata: Metadata = {
  title: "Reportes Grado: Docentes | Saly Learning",
};

export default async function ReportsAndStatisticsPage() {
  const estudiantesRegistrados = await obtenerEstudiantes();
  const nombresEstudiantes = estudiantesRegistrados.map(
    (estudiante: any) =>
      estudiante.usuario.p_nombre + " " + estudiante.usuario.p_apellido
  );

  return (
    <>
      <PageHeader title="Reportes Grado" />

      <StatisticsAndReportsTabs />

      <div className="container-fluid" style={{ margin: "15px" }}>
        <div className="row">
          <div className="col-md-5">
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
          <div className="col-md-7" style={{ marginTop: "2rem" }}>
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
            </div>
          </div>
        </div>
        {/*divs en una fila  */}
        <div className="container-fluid">
          <div className="row chart-puntuacion">
            <div className="chart-style02 col-md-4">
              <h3>Promedio Puntuación Grado Tercero</h3>
              <canvas id="ranking-chart-2" width={350} height={350} />
            </div>
            <div className="chart-style02 col-md-4">
              <h3>Promedio Puntuación Grado Cuarto</h3>
              <canvas id="ranking-chart-3" width={350} height={350} />
            </div>
            <div className="chart-style02 col-md-4">
              <h3>Promedio Puntuación Grado Quinto</h3>
              <canvas id="ranking-chart-4" width={350} height={350} />
            </div>
          </div>
        </div>

        <div className="chart-style02">
          <h2>Estudiantes Registrados</h2>
          <div id="active-students-list" className="student">
            <ol id="active-students">
              {nombresEstudiantes.map((nombre: string, i: number) => (
                <li key={i}>{nombre}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
