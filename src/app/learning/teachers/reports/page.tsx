import PageHeader from "@/app/learning/components/PageHeader";
import categoryImage from "@/assets/category.png";
import {
  obtenerEstudiantes,
  obtenerEstudiantesConMejorPuntaje,
} from "@/services/estudiantes.service";
import type { Metadata } from "next";
import Image from "next/image";
import StatisticsAndReportsTabs from "../components/StatisticsAndReportsTabs";
import GradesReport from "./components/GradesReport";
// import PieStatic from "@/components/Statistics/PieStatic";

export const metadata: Metadata = {
  title: "Reportes Grado: Docentes | Saly Learning",
};

export default async function ReportsAndStatisticsPage() {
  const estudiantesRegistrados = await obtenerEstudiantes();
  const nombresEstudiantes = estudiantesRegistrados.map(
    (estudiante: any) =>
      estudiante.usuario.p_nombre + " " + estudiante.usuario.p_apellido
  );
  const mejorPuntaje = await obtenerEstudiantesConMejorPuntaje();

  return (
    <>
      <PageHeader title="Reportes Grado" />

      <StatisticsAndReportsTabs />

      <div className="container-fluid" style={{ margin: "15px" }}>
        {mejorPuntaje.length > 0 ? (
          <>
            <div className="row">
              <div className="col-md-5">
                {/* Contenido de la primera columna */}
                {mejorPuntaje[0] && (
                  <div className="ranking" style={{ marginRight: "1rem" }}>
                    <Image
                      width={525}
                      height={525}
                      quality={100}
                      src={categoryImage}
                      alt="Primer Lugar"
                    />
                    <p>
                      Primer Lugar:{" "}
                      {mejorPuntaje[0]?.usuario.p_nombre +
                        " " +
                        mejorPuntaje[0]?.usuario.p_apellido}{" "}
                      - Puntuación: {mejorPuntaje[0]?.puntaje_total}
                    </p>
                  </div>
                )}
                <div className="fila-lugares" style={{ marginRight: "1rem" }}>
                  {mejorPuntaje[1] && (
                    <div className="lugar">
                      <Image
                        width={260}
                        height={260}
                        quality={100}
                        src={categoryImage}
                        alt="Segundo Lugar"
                      />
                      <p>
                        Segundo Lugar:{" "}
                        {mejorPuntaje[1]?.usuario.p_nombre +
                          " " +
                          mejorPuntaje[1]?.usuario.p_apellido}{" "}
                        - Puntuación: {mejorPuntaje[1]?.puntaje_total}
                      </p>
                    </div>
                  )}
                  {mejorPuntaje[2] && (
                    <div className="lugar">
                      <Image
                        width={260}
                        height={260}
                        quality={100}
                        src={categoryImage}
                        alt="Tercer Lugar"
                      />
                      <p>
                        {mejorPuntaje[2]?.usuario.p_nombre +
                          " " +
                          mejorPuntaje[2]?.usuario.p_apellido}{" "}
                        - Puntuación: {mejorPuntaje[2]?.puntaje_total}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-7" style={{ marginTop: "2rem" }}>
                <div className="other-positions">
                  {mejorPuntaje[3] && (
                    <div className="position">
                      <Image
                        width={110}
                        height={110}
                        quality={100}
                        src={categoryImage}
                        alt="Imagen Pequeña"
                        className="small-image"
                      />
                      <p>
                        4. Cuarto Puesto: {mejorPuntaje[3]?.usuario.p_nombre} -
                        Puntuación: {mejorPuntaje[3]?.puntaje_total}
                      </p>
                    </div>
                  )}
                  {mejorPuntaje[4] && (
                    <div className="position">
                      <Image
                        width={110}
                        height={110}
                        quality={100}
                        src={categoryImage}
                        alt="Imagen Pequeña"
                        className="small-image"
                      />
                      <div>
                        5. Quinto Puesto: {mejorPuntaje[4]?.usuario.p_nombre} -
                        Puntuación: {mejorPuntaje[4]?.puntaje_total}
                      </div>
                    </div>
                  )}
                  <div className="position">
                    <div className="row" style={{ margin: "1rem" }}>
                      <div className="col-md-6 text-center">
                        <span
                          style={{
                            fontWeight: "bold",
                            fontStyle: "italic",
                          }}
                        >
                          Reporte de calificaciones:
                        </span>
                      </div>

                      <GradesReport />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="chart-style02" style={{ marginTop: "2rem" }}>
              <h2>Estudiantes Registrados</h2>
              <div id="active-students-list" className="student">
                <ol id="active-students">
                  {nombresEstudiantes.map((nombre: string, index: number) => (
                    <li key={index}>{nombre}</li>
                  ))}
                </ol>
              </div>
            </div>
          </>
        ) : (
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="alert alert-warning">
                <p>No hay estudiantes registrados en este momento.</p>
              </div>
            </div>
          </div>
        )}

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
