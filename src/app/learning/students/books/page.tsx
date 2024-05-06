import calendarImage from "@/assets/calendar.png";

export default function BooksPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-titles">
            SALY LEARNING <small>Inicio</small>
          </h1>
        </div>
      </div>
      <section
        className="card-section text-center"
        style={{ padding: "40px 0" }}
      >
        <div className="container-fluid">
          {/* <ul className="nav nav-tabs custom-tabs" style={{ fontSize: "17px" }}>
            <li className="active">
              <a href="book-student.html">Explorar libros</a>
            </li>
            <li>
              <a href="favoritebok.html">Libros Favoritos</a>
            </li>
          </ul> */}
        </div>
        <div className="container-fluid" style={{ margin: "50px 0" }}>
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-3">
              <img
                src={calendarImage.src}
                alt="clock"
                className="img-responsive center-box"
                style={{ maxWidth: 110 }}
              />
            </div>
            <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
              ¡Bienvenidos, exploradores! Sumérgete en un mundo de aventuras,
              fantasía e historia. Descubre emocionantes relatos que te llevarán
              a lugares sorprendentes y te harán vivir experiencias
              inolvidables. ¡La magia de la lectura te espera!
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ margin: "50px 0" }}>
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
                  {/*book 1  */}
                  <div className="card d-inline-block mr-2">
                    <img
                      src="/img/manolito gafotas.jpg"
                      className="card-img-top"
                      alt="Imagen 1"
                    />
                    <div className="card-body">
                      <a id="leer1" className="btn-book">
                        Leer
                      </a>
                    </div>
                  </div>
                  {/* book 2 */}
                  <div className="card d-inline-block">
                    <img
                      src="/img/el libro de la selva.jpg"
                      className="card-img-top"
                      alt="Imagen 2"
                    />
                    <div className="card-body">
                      <a id="leer2" className="btn-book">
                        Leer
                      </a>
                    </div>
                  </div>
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
                  {/*book 1  */}
                  <div className="card d-inline-block mr-2">
                    <img
                      src="/img/manolito gafotas.jpg"
                      className="card-img-top"
                      alt="Imagen 1"
                    />
                    <div className="card-body">
                      <a id="leer3" className="btn-book">
                        Leer
                      </a>
                    </div>
                  </div>
                  {/* book 2 */}
                  <div className="card d-inline-block">
                    <img
                      src="/img/el libro de la selva.jpg"
                      className="card-img-top"
                      alt="Imagen 2"
                    />
                    <div className="card-body">
                      <a id="leer4" className="btn-book">
                        Leer
                      </a>
                    </div>
                  </div>
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
                  {/*book 1  */}
                  <div className="card d-inline-block mr-2">
                    <img
                      src="/img/manolito gafotas.jpg"
                      className="card-img-top"
                      alt="Imagen 1"
                    />
                    <div className="card-body">
                      <a id="leer5" className="btn-book">
                        Leer
                      </a>
                    </div>
                  </div>
                  {/* book 2 */}
                  <div className="card d-inline-block">
                    <img
                      src="/img/el libro de la selva.jpg"
                      className="card-img-top"
                      alt="Imagen 2"
                    />
                    <div className="card-body">
                      <a id="leer6" className="btn-book">
                        Leer
                      </a>
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
