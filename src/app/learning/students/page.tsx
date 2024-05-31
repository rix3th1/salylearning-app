import { obtenerContadoresParaEstudiantes } from "@/services/contadores.service";
import { obtenerLibros } from "@/services/libros.service";
import type { Metadata } from "next";
import Link from "next/link";
import { MdBarChart, MdMenuBook, MdTrendingUp } from "react-icons/md";
import type { ReactImageGalleryItem } from "react-image-gallery";
import PageHeader from "../components/PageHeader";
import Carrousel from "../teachers/books/new/components/Carrousel";
import Motivation from "./components/Motivation";

export const metadata: Metadata = {
  title: "Inicio: Estudiantes | Saly Learning",
};

const mapDataCarrousel = async () => {
  const libros = await obtenerLibros();
  return libros.map(
    (libro: any): ReactImageGalleryItem => ({
      original: libro.imagen_portada,
      originalAlt: libro.nom_libro,
      description: libro.nom_libro,
      book_url: `/learning/students/books/${libro.id}`,
    })
  );
};

export default async function HomePage() {
  const images = await mapDataCarrousel();
  const contadores = await obtenerContadoresParaEstudiantes();

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
                  {contadores[1] - contadores[1]}
                </div>
              </article>
              <article className="tile">
                <div className="tile-icon full-reset">
                  <MdTrendingUp />
                </div>
                <div className="tile-name">
                  <Link href="/learning/students/achievements">Logros</Link>
                </div>
                <div className="tile-num full-reset">3</div>
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
