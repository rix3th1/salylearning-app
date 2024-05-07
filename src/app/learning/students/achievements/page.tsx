import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logros: Estudiantes | Saly Learning",
};

export default function AchievementsPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-titles">
            SALY LEARNING <small>Logros</small>
          </h1>
        </div>
      </div>
      <section className="contenedor-logros">
        <div className="fila_principal">
          <div className="columna_principal">
            <div className="subcolumna">
              <table className="table">
                <tbody>
                  <tr>
                    <td className="table-logros">
                      <h4>Libros Leídos</h4>
                      <p id="logros-libros">2</p>
                    </td>
                    <td className="table-logros">
                      <h4>Preguntas Correctas</h4>
                      <p id="logros-preguntas">2</p>
                    </td>
                    <td className="table-logros">
                      <h4>Tiempo de Lectura (min)</h4>
                      <p id="logros-tiempo">2</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="subcolumna">
              <h4>Medallas Ganadas</h4>
              <div className="row">
                <div className="col-md-3">
                  <img
                    src="/img/genioemergente.png"
                    alt="Medalla 1"
                    className="img-logros"
                  />
                  <p>Leer 10 libros</p>
                </div>
                <div className="col-md-3">
                  <img
                    src="/img/geniodelquiz.png"
                    alt="Medalla 2"
                    className="img-logros"
                  />
                  <p>Responder 100 preguntas correctamente</p>
                </div>
                <div className="col-md-3">
                  <img
                    src="/img/farodelsaber.png"
                    alt="Medalla 2"
                    className="img-logros"
                  />
                  <p>Responder 100 preguntas correctamente</p>
                </div>
              </div>
            </div>
            <div className="subcolumna">
              <div className="row">
                <div className="col-md-6">
                  <h4>Historial de Logros</h4>
                  <ul className="list-group">
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
          <div className="columna_secundaria">
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
      </section>
    </>
  );
}
