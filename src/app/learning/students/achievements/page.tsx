import faroDelSaberLogro from "@/assets/farodelsaber.png";
import genioDelQuizLogro from "@/assets/geniodelquiz.png";
import genioEmergenteLogro from "@/assets/genioemergente.png";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Logros: Estudiantes | Saly Learning",
};

export default function AchievementsPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>
            SALY LEARNING <small>Logros</small>
          </h1>
        </div>
      </div>

      <section className="container-fluid">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="subcolumna">
                <div className="table-responsive" style={{ width: "100%" }}>
                  <table className="tabla">
                    <tbody>
                      <tr>
                        <td className="tabla-logros">
                          <h4>Libros Leídos</h4>
                          <p id="logros-libros">2</p>
                        </td>
                        <td className="tabla-logros">
                          <h4>Preguntas Correctas</h4>
                          <p id="logros-preguntas">2</p>
                        </td>
                        <td className="tabla-logros">
                          <h4>Tiempo de Lectura (min)</h4>
                          <p id="logros-tiempo">2</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="subcolumna">
                <div className="row">
                  <div className="col-md-12">
                    <h4 style={{ marginBottom: "2rem" }}>Medallas Ganadas</h4>
                    <div className="col-md-4">
                      <Image
                        src={genioEmergenteLogro}
                        alt="Medalla 1"
                        className="img-logros"
                        width={200}
                        height={300}
                        quality={100}
                        placeholder="blur"
                      />
                      <p>Leer 10 libros</p>
                    </div>
                    <div className="col-md-4">
                      <Image
                        src={genioDelQuizLogro}
                        alt="Medalla 2"
                        className="img-logros"
                        width={200}
                        height={300}
                        quality={100}
                        placeholder="blur"
                      />
                      <p>Responder 100 preguntas correctamente</p>
                    </div>
                    <div className="col-md-4">
                      <Image
                        src={faroDelSaberLogro}
                        alt="Medalla 2"
                        className="img-logros"
                        width={200}
                        height={300}
                        quality={100}
                        placeholder="blur"
                      />
                      <p>Responder 100 preguntas correctamente</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="subcolumna">
                <div className="row">
                  <div className="col-md-6">
                    <h4>Historial de Logros</h4>
                    <ul className="list-group" style={{ color: "#317DFF" }}>
                      <li className="list-group-item">
                        Leídos 5 libros (02/03/2024)
                      </li>
                      <li className="list-group-item">
                        Respondidas correctamente 60 preguntas (01/03/2024)
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h4>Logros Destacados</h4>
                    <ul className="list-unstyled">
                      <li>Leídos 15 libros en un mes</li>
                      <li>
                        Responder correctamente todas las preguntas de un libro
                        difícil
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-4"
              style={{
                backgroundColor: "#97CFF9",
                borderRadius: "10px",
                padding: "2rem 0",
              }}
            >
              <div className="col-chart">
                <h4>Progreso en Lectura</h4>
                <canvas id="logros-chart-1" width={200} height={200} />
              </div>
              <div className="col-chart">
                <h4>Preguntas Respondidas Correctamente</h4>
                <canvas id="logros-chart-2" width={200} height={200} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
