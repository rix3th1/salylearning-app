import PageHeader from "@/app/learning/components/PageHeader";
import Carrousel from "@/app/learning/teachers/books/new/components/Carrousel";
import calendarImage from "@/assets/calendar.png";
import { obtenerGenerosLiterarios } from "@/services/generos-literarios.service";
import { obtenerLibrosPorGeneroLiterario } from "@/services/libros.service";
import type { Metadata } from "next";
import Image from "next/image";
import { MdWarning } from "react-icons/md";
import type { ReactImageGalleryItem } from "react-image-gallery";

export const metadata: Metadata = {
  title: "Libros: Estudiantes | Saly Learning",
};

const mapDataCarrousel = async (genero_literario: string) => {
  const libros = await obtenerLibrosPorGeneroLiterario(genero_literario);
  return libros.map(
    (libro: any): ReactImageGalleryItem => ({
      original: libro.imagen_portada,
      originalAlt: libro.nom_libro,
      description: libro.nom_libro,
      book_url: `/learning/students/books/${libro.id}`,
    })
  );
};

export default async function BooksPage() {
  const generosLiterarios = await obtenerGenerosLiterarios.server();

  return (
    <>
      <PageHeader title="Explorar libros" />

      <section className="container-fluid">
        <div
          className="container-flat-form text-center"
          style={{ backgroundColor: "#d4edda" }}
        >
          <div className="row" style={{ padding: "50px" }}>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <Image
                src={calendarImage}
                alt="clock"
                className="img-responsive center-box"
                width={110}
                height={110}
                quality={100}
                priority
              />
            </div>
            <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
              ¡Bienvenidos, exploradores! Sumérgete en un mundo de aventuras,
              fantasía e historia. Descubre emocionantes relatos que te llevarán
              a lugares sorprendentes y te harán vivir experiencias
              inolvidables. ¡La magia de la lectura te espera!
            </div>
          </div>

          <div className="row">
            {generosLiterarios.map(async (genero: any, index: number) => {
              const images: [] = await mapDataCarrousel(genero.nom_genero);

              return (
                <div
                  key={index}
                  className="col-xs-12 col-sm-6 col-md-6 text-justify lead"
                >
                  <div className="custom-tile">
                    <h3>{genero.nom_genero}</h3>
                    <p>{genero.descripcion}</p>
                    <div className="container-items">
                      {images.length > 0 ? (
                        <Carrousel items={images} />
                      ) : (
                        <article
                          className="tile"
                          style={{ margin: "2rem 0", padding: "0.5rem" }}
                        >
                          <div className="text-center">
                            <MdWarning />
                          </div>
                          <span style={{ fontSize: "15px" }}>
                            Aún no hay libros disponibles para este género
                            literario.
                          </span>
                        </article>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
