import PageHeader from "@/app/learning/components/PageHeader";
import calendarBookImage from "@/assets/calendar_book.png";
import { obtenerCuestionariosEstudiantesPorEstado } from "@/services/cuestionario-estudiante.service";
import type { Metadata } from "next";
import Image from "next/image";
import BotonCalificar from "../components/BotonCalificar";
import Nothing from "../components/Nothing";
import QuestionariesTabs from "../components/QuestionariesTabs";
import { RelativeTime } from "../components/RelativeTime";

export const metadata: Metadata = {
  title: "Completados (Cuestionarios): Docentes | Saly Learning",
};

export default async function CompletedQuestionariesPage() {
  const cuestionariosEstudiantes =
    await obtenerCuestionariosEstudiantesPorEstado("COMPLETADO");

  return (
    <>
      <PageHeader title="Cuestionarios completos" />

      <QuestionariesTabs />

      <div className="container-fluid" style={{ margin: "50px 0" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-3">
            <Image
              src={calendarBookImage}
              alt="calendario"
              className="img-responsive center-box"
              style={{ maxWidth: 110 }}
              width={110}
              height={110}
              quality={100}
              priority
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
            ¡Bienvenido a esta sección! Aquí podrás visualizar el estado de tus
            proyectos, clasificados como completos, incompletos o no logrados.
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h2 className="text-center">Cuestionarios completos</h2>

        {cuestionariosEstudiantes.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr className="active">
                  <th>No.</th>
                  <th>Nombre de libro</th>
                  <th>Nombre estudiante</th>
                  <th>Grado</th>
                  <th>Fecha asignado</th>
                  <th>Fecha entrega</th>
                  <th>Estado</th>
                  <th>Calificación</th>
                </tr>
              </thead>
              <tbody>
                {cuestionariosEstudiantes.map(
                  (
                    {
                      id: cuestionario_id,
                      fecha_asignado,
                      fecha_entrega,
                      calificacion,
                      estado,
                      cuestionario,
                      estudiante,
                    }: any,
                    index: number
                  ) => (
                    <tr key={index} className="success">
                      <td>{index + 1}</td>
                      <td>{cuestionario.preguntas[0]?.libros?.nom_libro}</td>
                      <td>
                        {`${estudiante.usuario.p_nombre} ${estudiante.usuario.p_apellido}`}
                      </td>
                      <td>
                        {estudiante.usuario.grado_usuario.grados.nom_grado}
                      </td>
                      <td>
                        <RelativeTime datetime={fecha_asignado} />
                      </td>
                      <td>
                        <RelativeTime datetime={fecha_entrega} />
                      </td>
                      <td>
                        <span className="label label-success">{estado}</span>
                      </td>
                      <td>
                        <BotonCalificar
                          id_cuestionario={cuestionario_id}
                          estadoCuestionario={estado}
                          calificacion={calificacion}
                        />
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <Nothing type="completados" />
        )}
      </div>
    </>
  );
}
