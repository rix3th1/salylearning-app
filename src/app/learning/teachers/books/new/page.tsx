import flatBookImage from "@/assets/flat-book.png";
import type { Metadata } from "next";
import Image from "next/image";
import { MdSave, MdUpload } from "react-icons/md";
import type { ReactImageGalleryItem } from "react-image-gallery";
import Carrousel from "./components/Carrousel";

export const metadata: Metadata = {
  title: "Libros: Docentes | Saly Learning",
};

const images: ReactImageGalleryItem[] = [
  {
    original: "/img/matilda.jpg",
    originalAlt: "Matilda",
    description: "Libro de Matilda",
  },
  {
    original: "/img/manolito gafotas.jpg",
    originalAlt: "Manolito gafotas",
    description: "Libro de manolito gafotas",
  },
  {
    original: "/img/el mago de oz.jpg",
    originalAlt: "El mago de Oz",
    description: "Libro del mago de Oz",
  },
];

export default function NewBookPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>
            SALY LEARNING <small>Libros</small>
          </h1>
        </div>
      </div>

      <div className="container-fluid" style={{ margin: "50px 0" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-3">
            <Image
              src={flatBookImage}
              alt="pdf"
              className="img-responsive center-box"
              style={{ maxWidth: 110 }}
              width={110}
              height={110}
              quality={100}
              priority
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
            Estamos emocionados de darles la bienvenida a nuestra sección de
            libros. Aquí encontrarán historias increíbles, personajes
            fascinantes y aventuras inolvidables.
            <br />
            ¡Sumérjanse en el mundo mágico de la lectura y descubran la alegría
            de imaginar!
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container-flat-form">
          <div className="title-flat-form title-flat-blue">Nuevos libros</div>
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2">
              {/* Carrusel */}
              <Carrousel items={images} />

              {/* Botón para subir libros */}
              <section className="text-center" style={{ marginTop: "2rem" }}>
                <input
                  type="file"
                  id="inputLibro"
                  style={{ display: "none" }}
                />
                <button
                  type="button"
                  className="btn btn-success"
                  style={{ marginRight: "15px" }}
                >
                  <MdUpload /> Subir Libro
                </button>
                <button type="submit" className="btn btn-primary">
                  <MdSave /> Guardar
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
