import calendarImage from "@/assets/calendar.png";
import type { Metadata } from "next";
import Image from "next/image";
import type { ReactImageGalleryItem } from "react-image-gallery";
import PageHeader from "../../components/PageHeader";
import Carrousel from "../../teachers/books/new/components/Carrousel";

export const metadata: Metadata = {
  title: "Libros: Estudiantes | Saly Learning",
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

export default function BooksPage() {
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
            <div className="col-xs-12 col-sm-6 col-md-6 text-justify lead">
              <div className="custom-tile">
                <h3>Aventura</h3>
                Sumérgete en emocionantes viajes llenos de acción y peligro con
                nuestros libros de aventuras. Desde explorar islas misteriosas
                hasta descubrir tesoros perdidos, cada página te llevará a un
                mundo lleno de adrenalina y emoción.
                {/*  */}
                <div className="container-items">
                  <Carrousel items={images.sort(() => Math.random())} />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 text-justify lead">
              <div className="custom-tile">
                <h3>Fantasía</h3>
                Abre las puertas a la magia y la imaginación con nuestros libros
                de fantasía. Con mundos mágicos habitados por criaturas
                extraordinarias y héroes valientes, estos libros te
                transportarán a universos donde los sueños se vuelven realidad y
                la fantasía cobra vida.
                <div className="container-items">
                  <Carrousel items={images} />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 text-justify lead">
              <div className="custom-tile">
                <h3>Historia</h3>
                Viaja en el tiempo y descubre los secretos del pasado con
                nuestros libros de historia. Desde épocas antiguas hasta eventos
                históricos más recientes, cada libro te llevará a un viaje
                fascinante a través de los acontecimientos que han moldeado
                nuestro mundo.
                <div className="container-items">
                  <Carrousel items={images} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
