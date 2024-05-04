import Image from "next/image";
import Link from "next/link";

export default function CompletedQuestionariesPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-tittles">
            SALY LEARNING <small>Cuestionarios completados</small>
          </h1>
        </div>
      </div>
      <div className="conteiner-fluid">
        <ul className="nav nav-tabs nav-justified" style={{ fontSize: 17 }}>
          <li className="active">
            <Link href="/learning/questionaries/completed">Completos</Link>
          </li>
          <li>
            <Link href="/learning/questionaries/pending">Incompletos</Link>
          </li>
          <li>
            <Link href="/learning/questionaries/not-achieved">No logrados</Link>
          </li>
        </ul>
      </div>
      <div className="container-fluid" style={{ margin: "50px 0" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-3">
            <Image
              src="/img/calendar_book.png"
              alt="calendario"
              className="img-responsive center-box"
              style={{ maxWidth: 110 }}
              width={110}
              height={110}
              quality={100}
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
            ¡Bienvenido a esta sección! Aquí podrás visualizar el estado de tus
            proyectos, clasificados como completos, incompletos o no logrados.
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h2 className="text-center all-tittles">Cuestionarios completos</h2>
        <div className="table-responsive">
          <div className="div-table" style={{ margin: "0 !important" }}>
            <div
              className="div-table-row div-table-row-list"
              style={{ backgroundColor: "#dff0d8", fontWeight: "bold" }}
            >
              <div className="div-table-cell" style={{ width: "6%" }}>
                #
              </div>
              <div className="div-table-cell" style={{ width: "22%" }}>
                Nombre de libro
              </div>
              <div className="div-table-cell" style={{ width: "22%" }}>
                Nombre de usuario
              </div>
              <div className="div-table-cell" style={{ width: "10%" }}>
                Grado
              </div>
              <div className="div-table-cell" style={{ width: "10%" }}>
                Fecha asignado
              </div>
              <div className="div-table-cell" style={{ width: "10%" }}>
                Fecha entrega
              </div>
              <div className="div-table-cell" style={{ width: "8%" }}>
                Ver puntuación
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <div className="div-table" style={{ margin: "0 !important" }}>
            <div className="div-table-row div-table-row-list">
              <div className="div-table-cell" style={{ width: "6%" }}>
                #
              </div>
              <div className="div-table-cell" style={{ width: "22%" }}>
                Nombre de libro
              </div>
              <div className="div-table-cell" style={{ width: "22%" }}>
                Nombre de usuario
              </div>
              <div className="div-table-cell" style={{ width: "10%" }}>
                Grado
              </div>
              <div className="div-table-cell" style={{ width: "10%" }}>
                Fecha asignado
              </div>
              <div className="div-table-cell" style={{ width: "10%" }}>
                Fecha Entrega
              </div>
              <div className="div-table-cell" style={{ width: "8%" }}>
                <button className="btn btn-success">
                  <i className="zmdi zmdi-time-restore" />
                </button>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <div className="div-table" style={{ margin: "0 !important" }}>
              <div className="div-table-row div-table-row-list">
                <div className="div-table-cell" style={{ width: "6%" }}>
                  #
                </div>
                <div className="div-table-cell" style={{ width: "22%" }}>
                  Nombre de libro
                </div>
                <div className="div-table-cell" style={{ width: "22%" }}>
                  Nombre de usuario
                </div>
                <div className="div-table-cell" style={{ width: "10%" }}>
                  Grado
                </div>
                <div className="div-table-cell" style={{ width: "10%" }}>
                  Fecha asignado
                </div>
                <div className="div-table-cell" style={{ width: "10%" }}>
                  Fecha Entrega
                </div>
                <div className="div-table-cell" style={{ width: "8%" }}>
                  <button className="btn btn-success">
                    <i className="zmdi zmdi-time-restore" />
                  </button>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <div className="div-table" style={{ margin: "0 !important" }}>
                <div className="div-table-row div-table-row-list">
                  <div className="div-table-cell" style={{ width: "6%" }}>
                    #
                  </div>
                  <div className="div-table-cell" style={{ width: "22%" }}>
                    Nombre de libro
                  </div>
                  <div className="div-table-cell" style={{ width: "22%" }}>
                    Nombre de usuario
                  </div>
                  <div className="div-table-cell" style={{ width: "10%" }}>
                    Grado
                  </div>
                  <div className="div-table-cell" style={{ width: "10%" }}>
                    Fecha asignado
                  </div>
                  <div className="div-table-cell" style={{ width: "10%" }}>
                    Fecha Entrega
                  </div>
                  <div className="div-table-cell" style={{ width: "8%" }}>
                    <button className="btn btn-success">
                      <i className="zmdi zmdi-time-restore" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <div className="div-table" style={{ margin: "0 !important" }}>
                  <div className="div-table-row div-table-row-list">
                    <div className="div-table-cell" style={{ width: "6%" }}>
                      #
                    </div>
                    <div className="div-table-cell" style={{ width: "22%" }}>
                      Nombre de libro
                    </div>
                    <div className="div-table-cell" style={{ width: "22%" }}>
                      Nombre de usuario
                    </div>
                    <div className="div-table-cell" style={{ width: "10%" }}>
                      Grado
                    </div>
                    <div className="div-table-cell" style={{ width: "10%" }}>
                      Fecha asignado
                    </div>
                    <div className="div-table-cell" style={{ width: "10%" }}>
                      Fecha Entrega
                    </div>
                    <div className="div-table-cell" style={{ width: "8%" }}>
                      <button className="btn btn-success">
                        <i className="zmdi zmdi-time-restore" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <div className="div-table" style={{ margin: "0 !important" }}>
                    <div className="div-table-row div-table-row-list">
                      <div className="div-table-cell" style={{ width: "6%" }}>
                        #
                      </div>
                      <div className="div-table-cell" style={{ width: "22%" }}>
                        Nombre de libro
                      </div>
                      <div className="div-table-cell" style={{ width: "22%" }}>
                        Nombre de usuario
                      </div>
                      <div className="div-table-cell" style={{ width: "10%" }}>
                        Grado
                      </div>
                      <div className="div-table-cell" style={{ width: "10%" }}>
                        Fecha asignado
                      </div>
                      <div className="div-table-cell" style={{ width: "10%" }}>
                        Fecha Entrega
                      </div>
                      <div className="div-table-cell" style={{ width: "8%" }}>
                        <button className="btn btn-success">
                          <i className="zmdi zmdi-time-restore" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  tabIndex={-1}
                  role="dialog"
                  id="ModalHelp"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                        <h4 className="modal-title text-center all-tittles">
                          ayuda del sistema
                        </h4>
                      </div>
                      <div className="modal-body">
                        ¡Bienvenidos! En el menú, encontrarán una variedad
                        emocionante de actividades diseñadas especialmente para
                        ayudarlos a mejorar sus habilidades de lectura. Desde
                        cuentos interactivos hasta desafíos divertidos, cada
                        opción está aquí para hacer que su experiencia sea
                        educativa y entretenida. No duden en explorar y
                        descubrir nuevas aventuras literarias.
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-dismiss="modal"
                        >
                          <i className="zmdi zmdi-thumb-up" /> &nbsp; De acuerdo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="footer full-reset">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-12 col-sm-6">
                        <h4 className="all-tittles">Acerca de</h4>
                        <p>
                          Somos tu compañero en el viaje hacia la maestría en
                          lectura. En SALY LEARNING, nos dedicamos a brindar
                          experiencias educativas y emocionantes que inspiran el
                          amor por la lectura en niños. Nuestra plataforma
                          ofrece actividades interactivas, cuentos cautivadores
                          y desafíos creativos, diseñados para fortalecer las
                          habilidades de lectura de manera divertida y efectiva.
                        </p>
                      </div>
                      <div className="col-xs-12 col-sm-6">
                        <h4 className="all-tittles">Equipo de trabajo</h4>
                        <ul className="list-unstyled">
                          <li>
                            <i className="zmdi zmdi-check zmdi-hc-fw" />
                            &nbsp;SANDRA MILENA MURCIA G
                            <i className="zmdi zmdi-facebook zmdi-hc-fw footer-social" />
                            <i className="zmdi zmdi-twitter zmdi-hc-fw footer-social" />
                          </li>
                          <li>
                            <i className="zmdi zmdi-check zmdi-hc-fw" />
                            &nbsp;INGRID LISETH VELASQUEZ G
                            <i className="zmdi zmdi-facebook zmdi-hc-fw footer-social" />
                            <i className="zmdi zmdi-twitter zmdi-hc-fw footer-social" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer-copyright full-reset all-tittles">
                    SALY © Todos los Derechos Reservados-2023
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
