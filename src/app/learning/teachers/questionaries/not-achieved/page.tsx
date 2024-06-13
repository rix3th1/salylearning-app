import PageHeader from "@/app/learning/components/PageHeader";
import calendarImage from "@/assets/calendar.png";
import { obtenerCuestionariosEstudiantesPorEstado } from "@/services/cuestionario-estudiante.service";
import type { Metadata } from "next";
import Image from "next/image";
import { MdDescription } from "react-icons/md";
import Nothing from "../components/Nothing";
import QuestionariesTabs from "../components/QuestionariesTabs";

export const metadata: Metadata = {
  title: "No logrados (Cuestionarios): Docentes | Saly Learning",
};

export default async function NotAchievedQuestionaries() {
  const cuestionariosEstudiantes =
    await obtenerCuestionariosEstudiantesPorEstado("PENDIENTE");

  return (
    <>
      <PageHeader title="Cuestionarios no logrados" />

      <QuestionariesTabs />

      <div className="container-fluid" style={{ margin: "50px 0" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-3">
            <Image
              src={calendarImage}
              alt="clock"
              className="img-responsive center-box"
              style={{ maxWidth: 110 }}
              width={110}
              height={110}
              quality={100}
              priority
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
            ¡Bienvenido a esta sección! Aquí encontrarás una lista de
            cuestionarios que aún no se han completado. ¡Anímate a retomarlos y
            avanzar en tu progreso!
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h2 className="text-center">Listado de no logrados</h2>

        {cuestionariosEstudiantes.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr className="active">
                  <th>No.</th>
                  <th>Nombre de libro</th>
                  <th>Nombre de usuario</th>
                  <th>Grado</th>
                  <th>Fecha asignado</th>
                  <th>Fecha entrega</th>
                  <th>Estado</th>
                  <th>Ver puntuación</th>
                </tr>
              </thead>
              <tbody>
                {cuestionariosEstudiantes.map(
                  ({ cuestionario, estudiante }: any, index: number) => (
                    <tr key={index} className="info">
                      <td>{index + 1}</td>
                      <td>{cuestionario.preguntas[0]?.libros?.nom_libro}</td>
                      <td>
                        {`${estudiante.usuario.p_nombre} ${estudiante.usuario.p_apellido}`}
                      </td>
                      <td>
                        {estudiante.usuario.grado_usuario.grados.nom_grado}
                      </td>
                      <td>
                        {new Date(cuestionario.fecha_asignado).toLocaleString()}
                      </td>
                      <td>
                        {new Date(cuestionario.fecha_entrega).toLocaleString()}
                      </td>
                      <td>
                        <span className="label label-danger">
                          {cuestionario.estado}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-info">
                          <MdDescription />
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <Nothing type="no logrados" />
        )}
      </div>
    </>
  );
}
