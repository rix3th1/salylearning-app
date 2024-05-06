import Link from "next/link";

export default function PendingActivitiesPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-titles">
            SALY LEARNING <small>Actividades</small>
          </h1>
        </div>
      </div>

      <section className="card-section text-center" id="contenido">
        <div className="container-fluid">
          <ul className="nav nav-tabs custom-tabs">
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/learning/students/activities/pending"
              >
                Por hacer
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                href="/learning/students/activities/done"
              >
                Hecho
              </Link>
            </li>
          </ul>

          <div className="tab-content">
            <img
              src="/img/Terminaste.gif"
              className="img-finish"
              alt="estas al dia"
            />
            <div id="hecho">
              {/* Contenido de "Hecho" */}
              <h2>Actividades hechas</h2>
              <p>¡Felicidades por completar estas actividades!</p>
              <div className="row">
                {/* Tarjetas de actividades hechas aquí */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
