import PageHeader from "@/app/learning/components/PageHeader";
import flatBookImage from "@/assets/flat-book.png";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import BooksExplore from "./components/BooksExplore";

export const metadata: Metadata = {
  title: "Libros: Docentes | Saly Learning",
};

export default function NewBookPage() {
  return (
    <>
      <PageHeader title="Libros" />

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
              <Suspense fallback={<Fallback />}>
                <BooksExplore />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
