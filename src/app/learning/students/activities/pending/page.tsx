import PageHeader from "@/app/learning/components/PageHeader";
import terminasteImage from "@/assets/Terminaste.png";
import { obtenerCuestionariosPorEstado } from "@/services/cuestionarios.service";
import type { Metadata } from "next";
import Image from "next/image";
import ActivitiesTabs from "../components/ActivitiesTabs";

export const metadata: Metadata = {
  title: "Pendientes (Actividades): Estudiantes | Saly Learning",
};

export default async function PendingActivitiesPage() {
  const cuestionariosPendientes = await obtenerCuestionariosPorEstado(
    "PENDIENTE"
  );

  return (
    <>
      <PageHeader title="Actividades por hacer" />

      <section className="container-fluid">
        <div
          className="container-flat-form "
          style={{ backgroundColor: "#d4edda" }}
        >
          <ActivitiesTabs />

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
                    cuestionariosPendientes.map((c: any, i: number) => {
                      const preguntas = c.preguntas.map(
                        ({ pregunta }: any) => ({
                          pregunta,
                          opciones_respuesta: c.opciones_respuesta,
                        })
                      );

                      return (
                        <div
                          key={i}
                          className="col-md-12"
                          style={{
                            backgroundColor: "#fcb67c",
                            borderRadius: "10px",
                            border: "1px solid #bec0c1",
                            padding: "40px",
                            marginBottom: "20px", // Espacio entre las filas
                          }}
                        >
                          <h4
                            className="mr-3"
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            Actividad {i + 1} -{" "}
                            {c.preguntas[0]?.libros?.nom_libro}
                          </h4>
                          <hr />

                          <form>
                            {preguntas.map((p: any, j: number) => (
                              <div
                                key={j}
                                className="form-group"
                                style={{
                                  marginBottom: "20px",
                                }}
                              >
                                <h4 style={{ fontStyle: "italic" }}>
                                  <span style={{ fontWeight: "bold" }}>
                                    {j + 1}.
                                  </span>{" "}
                                  {p.pregunta}
                                </h4>
                                <div className="form-check">
                                  {p.opciones_respuesta.map(
                                    ({ opcion, respuesta }: any) => (
                                      <div className="form-check" key={opcion}>
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name={p.pregunta}
                                          id={opcion}
                                          value={opcion}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor={opcion}
                                        >
                                          {" "}
                                          {opcion}.{" "}
                                          <span
                                            style={{ fontWeight: "normal" }}
                                          >
                                            {respuesta}
                                          </span>
                                        </label>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            ))}
                          </form>
                        </div>
                      );
                    })
                  ) : (
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
