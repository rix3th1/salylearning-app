import PageHeader from "@/app/learning/components/PageHeader";
import calendarImage from "@/assets/calendar.png";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import BookExplore from "./components/BookExplore";

export const metadata: Metadata = {
  title: "Libros: Estudiantes | Saly Learning",
};

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

          <Suspense fallback={<Fallback />}>
            <BookExplore />
          </Suspense>
        </div>
      </section>
    </>
  );
}
