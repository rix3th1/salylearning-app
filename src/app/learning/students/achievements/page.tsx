import PageHeader from "@/app/learning/components/PageHeader";
import faroDelSaberLogro from "@/assets/farodelsaber.png";
import genioDelQuizLogro from "@/assets/geniodelquiz.png";
import genioEmergenteLogro from "@/assets/genioemergente.png";
import PieStatic from "@/components/Statistics/PieStatic";
import {
  obtenerContadoresLogros,
  obtenerEstadisticasLogrosEstudiante,
} from "@/services/achievements.service";
import { obtenerEstudiante } from "@/services/estudiantes.service";
import { obtenerPerfilUsuario } from "@/services/perfil.service";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Logros: Estudiantes | Saly Learning",
};

function generarLogros(contadoresLogros: any[]) {
  const logros = [];

  // Logros por libros leídos
  for (let i = 10; i <= contadoresLogros[0]; i += 10) {
    logros.push(`Leídos ${i} libros.`);
  }

  // Logros por preguntas correctas
  for (let i = 100; i <= contadoresLogros[1]; i += 100) {
    logros.push(`Respondidas correctamente ${i} preguntas.`);
  }

  // Logros por tiempo de lectura
  for (let i = 100; i <= contadoresLogros[2]; i += 100) {
    logros.push(`${i} minutos de tiempo de lectura.`);
  }

  return logros;
}

export default async function AchievementsPage() {
  const user = await obtenerPerfilUsuario();
  const estudiante = await obtenerEstudiante(user.id);
  const contadoresLogros = await obtenerContadoresLogros(estudiante.id);
  const estadisticasLogros = await obtenerEstadisticasLogrosEstudiante(
    estudiante.id
  );

  const logrosHistorial = generarLogros(contadoresLogros);

  return (
    <>
      <PageHeader title="Logros" />

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
                          <p id="logros-libros">
                            {contadoresLogros[0]} unidades.
                          </p>
                        </td>
                        <td className="tabla-logros">
                          <h4>Preguntas Correctas</h4>
                          <p id="logros-preguntas">
                            {contadoresLogros[1]} unidades.
                          </p>
                        </td>
                        <td className="tabla-logros">
                          <h4>Tiempo de Lectura (min)</h4>
                          <p id="logros-tiempo">
                            {contadoresLogros[2]} minutos.
                          </p>
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
                    {contadoresLogros[0] >= 10 ? (
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
                    ) : (
                      <div className="col-md-4">
                        <p>
                          No se han logrado medallas de la generación emergente.
                        </p>
                      </div>
                    )}
                    {contadoresLogros[1] >= 100 ? (
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
                    ) : (
                      <div className="col-md-4">
                        <p>
                          No se han logrado medallas del cuestionario de
                          preguntas.
                        </p>
                      </div>
                    )}
                    {contadoresLogros[2] >= 100 ? (
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
                        <p>Llevar más de 100 minutos de lectura</p>
                      </div>
                    ) : (
                      <div className="col-md-4">
                        <p>No se han logrado medallas del tiempo de lectura.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="subcolumna">
                <div className="row">
                  <div className="col-md-12">
                    <h4>Historial de Logros</h4>
                    <ul className="list-group" style={{ color: "#317DFF" }}>
                      {logrosHistorial.length > 0 ? (
                        logrosHistorial.map((logro: any, i: number) => (
                          <li key={i} className="list-group-item">
                            {logro}
                          </li>
                        ))
                      ) : (
                        <li className="list-group-item">
                          No se han logrado logros.
                        </li>
                      )}
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
                <PieStatic title={{}} data={estadisticasLogros[0]} />
              </div>
              <div className="col-chart">
                <h4>Preguntas Respondidas Correctamente</h4>
                <PieStatic title={{}} data={estadisticasLogros[1]} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
