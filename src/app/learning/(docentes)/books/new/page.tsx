import Image from "next/image";
import { MdSave, MdUpload } from "react-icons/md";
import flatBookImage from "@/assets/flat-book.png";

export default function NewBookPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-tittles">
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
              <div
                id="librosCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                {/* Indicadores */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#librosCarousel"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#librosCarousel" data-slide-to={1} />
                  <li data-target="#librosCarousel" data-slide-to={2} />
                </ol>
                {/* Imágenes del carrusel */}
                <div className="carousel-inner">
                  <div className="item active">
                    <a href="primero.html" className="btn-1" target="_self">
                      <Image
                        src="/img/matilda.jpg"
                        alt="Matilda"
                        width={600}
                        height={400}
                        quality={100}
                      />
                      <div className="carousel-caption">
                        <h2>Matilda</h2>
                      </div>
                    </a>
                  </div>
                  <div className="item">
                    <a href="segundo.html" className="btn-1" target="_self">
                      <Image
                        src="/img/manolito gafotas.jpg"
                        alt="Manolito gafotas, Elvira Lindo"
                        quality={100}
                        width={600}
                        height={400}
                      />
                      <div className="carousel-caption">
                        <h2>Manolito gafotas, Elvira Lindo</h2>
                      </div>
                    </a>
                  </div>
                  {/* Tercer libro (con una imagen específica) */}
                  <div className="item">
                    <a href="tercero.html" className="btn-1" target="_self">
                      <Image
                        src="/img/el mago de oz.jpg"
                        alt="EL mago del oz"
                        quality={100}
                        width={600}
                        height={400}
                      />
                      <div className="carousel-caption">
                        <h2>EL mago de Oz</h2>
                      </div>
                    </a>
                  </div>
                </div>
                <a
                  className="left carousel-control"
                  href="#librosCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="glyphicon glyphicon-chevron-left"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Anterior</span>
                </a>
                <a
                  className="right carousel-control"
                  href="#librosCarousel"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="glyphicon glyphicon-chevron-right"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Siguiente</span>
                </a>
              </div>
              {/* Botón para subir libros */}
              <p className="text-center">
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
