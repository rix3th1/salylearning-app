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
              priority
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}