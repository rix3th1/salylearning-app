import PageHeader from "@/app/learning/components/PageHeader";
import type { Metadata } from "next";
import Link from "next/link";
import { MdCheck, MdCheckCircle, MdPending } from "react-icons/md";

export const metadata: Metadata = {
  title: "Pendientes (Actividades): Estudiantes | Saly Learning",
};

export default function PendingActivitiesPage() {
  return (
    <>
      <PageHeader title="Actividades por hacer" />

      <section className="container-fluid">
        <div
          className="container-flat-form text-center"
          style={{ backgroundColor: "#d4edda" }}
        >
          <ul className="nav nav-tabs custom-tabs">
            <li className="nav-item active">
              <Link
                className="nav-link"
                href="/learning/students/activities/pending"
              >
                <MdPending /> Por hacer
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/learning/students/activities/done"
              >
                <MdCheckCircle /> Hecho
              </Link>
            </li>
          </ul>

          <div className="tab-content">
            <div id="por-hacer">
              {/* Contenido de "Por hacer" */}
              <h2>Actividades por hacer</h2>
              <p>
                ¡Aquí encontrarás un montón de actividades divertidas para
                realizar!
              </p>
              <div className="row">
                <div className="col-md-4">
                  <div className="activity-card por-hacer" id="actividad1">
                    <h4>
                      {
                        '¿Cuál es el nombre del protagonista del libro "Charlie y la fábrica de chocolate" de Roald Dahl?'
                      }
                    </h4>
                    <p>
                      <input
                        type="radio"
                        id="pregunta1-opcion1"
                        name="pregunta1"
                        defaultValue="Charlie Bucket"
                      />
                      <label htmlFor="pregunta1-opcion1">Charlie Bucket</label>
                      <br />
                      <input
                        type="radio"
                        id="pregunta1-opcion2"
                        name="pregunta1"
                        defaultValue="Willy Wonka"
                      />
                      <label htmlFor="pregunta1-opcion2">Willy Wonka</label>
                      <br />
                      <input
                        type="radio"
                        id="pregunta1-opcion3"
                        name="pregunta1"
                        defaultValue="Matilda Wormwood"
                      />
                      <label htmlFor="pregunta1-opcion3">
                        Matilda Wormwood
                      </label>
                      <br />
                      <input
                        type="radio"
                        id="pregunta1-opcion4"
                        name="pregunta1"
                        defaultValue="Harry Potter"
                      />
                      <label htmlFor="pregunta1-opcion4">Harry Potter</label>
                    </p>
                    <button className="btn btn-default">
                      <MdCheck /> Enviar
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="activity-card por-hacer" id="actividad2">
                    <h4>
                      {
                        'En el cuento clásico "La Cenicienta", ¿qué animal ayuda a Cenicienta a llegar al baile?'
                      }
                    </h4>
                    <p>
                      <input
                        type="radio"
                        id="pregunta2-opcion1"
                        name="pregunta2"
                        defaultValue="Un hada madrina"
                      />
                      <label htmlFor="pregunta2-opcion1">Un hada madrina</label>
                      <br />
                      <input
                        type="radio"
                        id="pregunta2-opcion2"
                        name="pregunta2"
                        defaultValue="Un ratón"
                      />
                      <label htmlFor="pregunta2-opcion2">Un ratón</label>
                      <br />
                      <input
                        type="radio"
                        id="pregunta2-opcion3"
                        name="pregunta2"
                        defaultValue="Un pájaro"
                      />
                      <label htmlFor="pregunta2-opcion3">Un pájaro</label>
                      <br />
                      <input
                        type="radio"
                        id="pregunta2-opcion4"
                        name="pregunta2"
                        defaultValue="Un gato"
                      />
                      <label htmlFor="pregunta2-opcion4">Un gato</label>
                    </p>
                    <button className="btn btn-default">
                      <MdCheck /> Enviar
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="activity-card por-hacer" id="actividad3">
                    <h4>
                      {
                        '¿Cuál es el nombre del protagonista del libro "El Principito" de Antoine de Saint-Exupéry?'
                      }
                    </h4>
                    <p>
                      <input
                        type="radio"
                        id="pregunta3-opcion1"
                        name="pregunta3"
                        defaultValue="Peter Pan"
                      />
                      <label htmlFor="pregunta3-opcion1">Peter Pan</label>
                      <br />
                      <input
                        type="radio"
                        id="pregunta3-opcion2"
                        name="pregunta3"
                        defaultValue="El Principito"
                      />
                      <label htmlFor="pregunta3-opcion2">El Principito</label>
                      <br />
                      <input
                        type="radio"
                        id="pregunta3-opcion3"
                        name="pregunta3"
                        defaultValue="Aladino"
                      />
                      <label htmlFor="pregunta3-opcion3">Aladino</label>
                      <br />
                      <input
                        type="radio"
                        id="pregunta3-opcion4"
                        name="pregunta3"
                        defaultValue="Mowgli"
                      />
                      <label htmlFor="pregunta3-opcion4">Mowgli</label>
                    </p>
                    <button className="btn btn-default">
                      <MdCheck /> Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
