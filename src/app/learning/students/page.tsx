import type { Metadata } from "next";
import Link from "next/link";
import { MdBarChart, MdMenuBook, MdTrendingUp } from "react-icons/md";
import type { ReactImageGalleryItem } from "react-image-gallery";
import Carrousel from "../teachers/books/new/components/Carrousel";
import Motivation from "./components/Motivation";

export const metadata: Metadata = {
  title: "Inicio: Estudiantes | Saly Learning",
};

const images: ReactImageGalleryItem[] = [
  {
    original: "/img/matilda.jpg",
    originalAlt: "Matilda",
    description: "Libro de Matilda",
    book_url: "/learning/students/books",
  },
  {
    original: "/img/manolito gafotas.jpg",
    originalAlt: "Manolito gafotas",
    description: "Libro de manolito gafotas",
    book_url: "/learning/students/books",
  },
  {
    original: "/img/el mago de oz.jpg",
    originalAlt: "El mago de Oz",
    description: "Libro del mago de Oz",
    book_url: "/learning/students/books",
  },
  {
    original: "/img/el libro de la selva.jpg",
    originalAlt: "El libro de la selva",
    description: "Libro de la selva",
    book_url: "/learning/students/books",
  },
];

export default function HomePage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-titles">
            SALY LEARNING <small>Inicio</small>
          </h1>
        </div>
      </div>

      <section className="card-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <article className="tile">
                <div className="tile-icon full-reset">
                  <MdMenuBook />
                </div>
                <div className="tile-name all-titles">
                  <Link href="/learning/students/books">Mis libros</Link>
                </div>
                <div className="tile-num full-reset">3</div>
              </article>
              <article className="tile">
                <div className="tile-icon full-reset">
                  <MdBarChart />
                </div>
                <div className="tile-name all-titles">
                  <Link href="/learning/students/activities/pending">
                    ¡Enfréntate a los Retos!
                  </Link>
                </div>
                <div className="tile-num full-reset">3</div>
              </article>
              <article className="tile">
                <div className="tile-icon full-reset">
                  <MdTrendingUp />
                </div>
                <div className="tile-name all-titles">
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
