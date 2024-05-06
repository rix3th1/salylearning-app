import SALYCAPIBARA from "@/assets/SALYCAPIBARA.png";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MdArrowCircleLeft,
  MdArrowCircleRight,
  MdBarChart,
  MdMenuBook,
  MdPlayCircle,
  MdTrendingUp,
} from "react-icons/md";

export const metadata: Metadata = {
  title: "Inicio: Estudiantes | Saly Learning",
};

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
                <div>
                  <p id="motivacion">
                    ¡Hola niños! ¿Están listos para comenzar una aventura
                    emocionante en el mundo de la lectura? ¡Los libros están
                    esperando por ustedes! ¡Vamos a explorar juntos historias
                    increíbles, resolver misterios y descubrir nuevos mundos!
                    ¡No esperen más, comencemos ahora!
                  </p>
                </div>
                <div>
                  <Image
                    src={SALYCAPIBARA}
                    className="img-responsive center-box"
                    alt="Motivación"
                    width={680}
                    height={700}
                    quality={100}
                    style={{ width: "auto" }}
                  />
                  <div>
                    <MdPlayCircle />
                  </div>
                </div>
              </div>
              <div className="container-items">
                <div className="items">
                  <div className="item next">
                    <img src="/img/el libro de la selva.jpg" />
                  </div>
                  <div className="item">
                    <img src="/img/el mago de oz.jpg" />
                  </div>
                  <div className="item">
                    <img src="/img/manolito gafotas.jpg" />
                  </div>
                  <div className="button-container">
                    <div className="button">
                      <MdArrowCircleLeft />
                    </div>
                    <div className="button">
                      <MdArrowCircleRight />
                    </div>
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
