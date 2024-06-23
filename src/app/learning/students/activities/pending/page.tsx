import PageHeader from "@/app/learning/components/PageHeader";
import terminasteImage from "@/assets/Terminaste.png";
import { obtenerCuestionarioEstudiantePorEstado } from "@/services/cuestionario-estudiante.service";
import { obtenerEstudiante } from "@/services/estudiantes.service";
import { obtenerPerfilUsuario } from "@/services/perfil.service";
import type { Metadata } from "next";
import Image from "next/image";
import ActivitiesTabs from "../components/ActivitiesTabs";
import FormResponderPreguntas from "./components/FormResponderPreguntas";

export const metadata: Metadata = {
  title: "Pendientes (Actividades): Estudiantes | Saly Learning",
};

export default async function PendingActivitiesPage() {
  const user = await obtenerPerfilUsuario();
  const estudiante = await obtenerEstudiante(user.id);
  const cuestionariosPendientes = await obtenerCuestionarioEstudiantePorEstado(
    "PENDIENTE",
    estudiante.id
  );

  return (
    <>
      <PageHeader title="Actividades por hacer" />

      <ActivitiesTabs />

      <section className="container-fluid">
        <div
          className="container-flat-form"
          style={{ backgroundColor: "#d4edda" }}
        >
          <div className="tab-content">
            <div>
              <section className="text-center">
                <h2>Actividades por hacer</h2>
                <p>
                  ¡Aquí encontrarás un montón de actividades divertidas para
                  realizar!
                </p>
              </section>

              <div
                className="container"
                style={{ marginTop: "2rem", marginBottom: "3rem" }}
              >
                <div className="row" style={{ padding: "0 10px" }}>
                  {cuestionariosPendientes.length > 0 ? (
                    cuestionariosPendientes.map(
                      (
                        { id: cuestionario_id, cuestionario }: any,
                        index: number
                      ) => {
                        const preguntas = cuestionario.preguntas.map(
                          (pregunta: any, index: number) => ({
                            id: pregunta.id,
                            pregunta: pregunta.pregunta,
                            opciones_respuesta:
                              cuestionario.opciones_respuesta.slice(
                                index * 4,
                                (index + 1) * 4
                              ),
                          })
                        );

                        return (
                          <div
                            key={index}
                            className="col-md-12"
                            style={{
                              backgroundColor: "#fcb67c",
                              borderRadius: "10px",
                              border: "1px solid #bec0c1",
                              padding: "40px",
                              marginBottom: "20px",
                            }}
                          >
                            <h4
                              className="mr-3"
                              style={{
                                fontWeight: "bold",
                              }}
                            >
                              {`Actividad ${cuestionario.id} - Cuestionario: ${cuestionario.preguntas[0]?.libros?.nom_libro}`}
                            </h4>
                            <hr />

                            <FormResponderPreguntas
                              preguntas={preguntas}
                              cuestionario_id={cuestionario_id}
                            />
                          </div>
                        );
                      }
                    )
                  ) : (
                    <div className="text-center">
                      <Image
                        src={terminasteImage}
                        className="img-finish"
                        style={{ margin: "2rem 0", borderRadius: "10px" }}
                        alt="estas al dia"
                        width={200}
                        height={300}
                        quality={100}
                        placeholder="blur"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
