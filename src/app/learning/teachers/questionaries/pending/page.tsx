import PageHeader from "@/app/learning/components/PageHeader";
import clockImage from "@/assets/clock.png";
import { obtenerCuestionariosPorEstado } from "@/services/cuestionarios.service";
import type { Metadata } from "next";
import Image from "next/image";
import { MdSchedule } from "react-icons/md";
import NewPreguntaButton from "../components/NewPreguntaButton";
import Nothing from "../components/Nothing";
import QuestionariesTabs from "../components/QuestionariesTabs";

export const metadata: Metadata = {
  title: "Pendientes (Cuestionarios): Docentes | Saly Learning",
};

export default async function PendingQuestionaries() {
  const cuestionarios = await obtenerCuestionariosPorEstado("PENDIENTE");

  return (
    <>
      <PageHeader title="Cuestionarios pendientes" />

      <NewPreguntaButton />

      <QuestionariesTabs />

      <div className="container-fluid" style={{ margin: "50px 0" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-3">
            <Image
              src={clockImage}
              alt="calendar"
              className="img-responsive center-box"
              style={{ maxWidth: 110 }}
              width={110}
              height={110}
              quality={100}
              priority
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
            ¡Bienvenido a esta sección! Aquí podrás revisar los cuestionarios
            que aún están incompletos. ¡Anímate a retomarlos y trabajar para
            completarlos!
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h2 className="text-center">Listado de cuestionarios pendientes</h2>

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
          <Nothing type="pendientes" />
        )}
      </div>
    </>
  );
}
