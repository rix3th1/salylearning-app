import PageHeader from "@/app/learning/components/PageHeader";
import calendarBookImage from "@/assets/calendar_book.png";
import { obtenerCuestionariosPorEstado } from "@/services/cuestionarios.service";
import type { Metadata } from "next";
import Image from "next/image";
import { MdSchedule } from "react-icons/md";
import NewPreguntaButton from "../components/NewPreguntaButton";
import Nothing from "../components/Nothing";
import QuestionariesTabs from "../components/QuestionariesTabs";

export const metadata: Metadata = {
  title: "Completados (Cuestionarios): Docentes | Saly Learning",
};

export default async function CompletedQuestionariesPage() {
  const cuestionarios = await obtenerCuestionariosPorEstado("COMPLETADO");

  return (
    <>
      <PageHeader title="Cuestionarios completos" />

      <NewPreguntaButton />

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

        {cuestionarios.length > 0 ? (
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
                  <th>Ver puntuación</th>
                </tr>
              </thead>
              <tbody>
                {cuestionarios.map((cuestionario: any, i: number) => (
                  <tr key={i} className="info">
                    <td>{i + 1}</td>
                    <td>{cuestionario.preguntas.libros.nom_libro}</td>
                    <td>
                      {`${cuestionario.preguntas.libros.mis_libros[0].usuario.p_nombre} ${cuestionario.preguntas.libros.mis_libros[0].usuario.p_apellido}`}
                    </td>
                    <td>
                      {
                        cuestionario.preguntas.libros.mis_libros[0].usuario
                          .grado_usuario.grados.nom_grado
                      }
                    </td>
                    <td>
                      {new Date(cuestionario.fecha_asignado).toLocaleString()}
                    </td>
                    <td>
                      {new Date(cuestionario.fecha_entrega).toLocaleString()}
                    </td>
                    <td>
                      <button className="btn btn-success">
                        <MdSchedule />
                      </button>
                    </td>
                  </tr>
                ))}
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
