import terminasteImage from "@/assets/Terminaste.png";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hechas (Actividades): Estudiantes | Saly Learning",
};

export default function PendingActivitiesPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-titles">
            SALY LEARNING <small>Actividades hechas</small>
          </h1>
        </div>
      </div>

      <section className="container-fluid">
        <div
          className="container-flat-form text-center"
          style={{ backgroundColor: "#d4edda" }}
        >
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
            <div id="hecho">
              {/* Contenido de "Hecho" */}
              <h2>¡Actividades hechas!</h2>
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
