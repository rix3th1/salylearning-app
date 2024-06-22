import { mapDataCarrousel } from "@/app/learning/libs";
import { obtenerContadoresParaEstudiantes } from "@/services/contadores.service";
import { obtenerEstudiante } from "@/services/estudiantes.service";
import { obtenerLibros } from "@/services/libros.service";
import { obtenerPerfilUsuario } from "@/services/perfil.service";
import type { Metadata } from "next";
import Link from "next/link";
import { MdBarChart, MdMenuBook, MdTrendingUp } from "react-icons/md";
import PageHeader from "../components/PageHeader";
import Carrousel from "../teachers/books/new/components/Carrousel";
import Motivation from "./components/Motivation";

export const metadata: Metadata = {
  title: "Inicio: Estudiantes | Saly Learning",
};

export default async function HomePage() {
  const user = await obtenerPerfilUsuario();
  const estudiante = await obtenerEstudiante(user.id);
  const libros = await obtenerLibros.server();
  const images = mapDataCarrousel(libros, true);
  const contadores = await obtenerContadoresParaEstudiantes(
    estudiante.id,
    user.id
  );

  return (
    <>
      <PageHeader title="Inicio" />

      <section className="card-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <article className="tile">
                <div className="tile-icon full-reset">
                  <MdMenuBook />
                </div>
                <div className="tile-name">
                  <Link href="/learning/students/books">Mis libros</Link>
                </div>
                <div className="tile-num full-reset">
                  {contadores[0] > 0 ? (
                    contadores[0]
                  ) : (
                    <span style={{ fontSize: "18px" }}>Ninguno.</span>
                  )}
                </div>
              </article>
              <article className="tile">
                <div className="tile-icon full-reset">
                  <MdBarChart />
                </div>
                <div className="tile-name">
                  <Link href="/learning/students/activities/pending">
                    ¡Enfréntate a los Retos!
                  </Link>
                </div>
                <div className="tile-num full-reset">
                  {contadores[1] > 0 ? (
                    contadores[1]
                  ) : (
                    <span style={{ fontSize: "18px" }}>
                      No hay retos pendientes!
                    </span>
                  )}
                </div>
              </article>
              <article className="tile">
                <div className="tile-icon full-reset">
                  <MdTrendingUp />
                </div>
                <div className="tile-name">
                  <Link href="/learning/students/achievements">Logros</Link>
                </div>
                <div className="tile-num full-reset">{contadores[2]}</div>
              </article>
            </div>
            <div className="col-md-6">
              <div
                className="texto-nube"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Motivation />
              </div>

              <div className="container-fluid" style={{ width: "20rem" }}>
                <Carrousel items={images} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
