import categoryImage from "@/assets/category.png";
import Fallback from "@/components/Fallback";
import { obtenerEstudiantesConMejorPuntaje } from "@/services/estudiantes.service";
import Image from "next/image";
import { Suspense } from "react";
import GradeReport from "./GradeReport";
import StudentsList from "./StudentsList";

interface IProps {
  id_grado?: string;
}

export default async function PuntajeSection({ id_grado }: IProps) {
  const mejorPuntaje = await obtenerEstudiantesConMejorPuntaje(id_grado);

  return mejorPuntaje.length > 0 ? (
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
            <div className="position" style={{ margin: "2rem 0" }}>
              <div className="col-md-12 text-center">
                <span
                  style={{
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  Reporte de calificaciones:
                </span>
              </div>

              <GradeReport gradeSelected={id_grado} />
            </div>
          </div>
        </div>
      </div>

      <div className="chart-style02" style={{ marginTop: "2rem" }}>
        <h2>Estudiantes Registrados (Ver Estadística)</h2>
        <div id="active-students-list" className="student">
          <Suspense fallback={<Fallback />}>
            <StudentsList id_grado={id_grado} />
          </Suspense>
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
  );
}
