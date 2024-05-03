import {
  MdAssignmentInd,
  MdBookmarkBorder,
  MdCalendarMonth,
  MdLibraryBooks,
  MdOutlineRestore,
  MdPeople,
  MdThumbUp,
  MdTrendingUp,
} from "react-icons/md";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-tittles">
            SALY LEARNING <small>Inicio</small>
          </h1>
        </div>
      </div>
      <section className="full-reset text-center" style={{ padding: "40px 0" }}>
        <article className="tile">
          <div className="tile-icon full-reset">
            <MdPeople />
          </div>
          <div className="tile-name all-tittles">
            <a href="report.html">Grados</a>
          </div>
          <div className="tile-num full-reset">3</div>
        </article>
        <article className="tile">
          <div className="tile-icon full-reset">
            <MdLibraryBooks />
          </div>
          <div className="tile-name all-tittles">
            <a href="book.html">Libros</a>
          </div>
          <div className="tile-num full-reset">30</div>
        </article>
        <article className="tile">
          <div className="tile-icon full-reset">
            <MdBookmarkBorder />
          </div>
          <div className="tile-name all-tittles">
            <a href="catalog.html">Géneros literarios</a>
          </div>
          <div className="tile-num full-reset">4</div>
        </article>
        <article className="tile">
          <div className="tile-icon full-reset">
            <MdAssignmentInd />
          </div>
          <div className="tile-name all-tittles">
            <a href="loanpending.html">Preguntas pendientes</a>
          </div>
          <div className="tile-num full-reset">17</div>
        </article>
        <article className="tile">
          <div className="tile-icon full-reset">
            <MdOutlineRestore />
          </div>
          <div className="tile-name all-tittles" style={{ width: "90%" }}>
            <a href="loanreservation.html">Cuestionarios no logrados</a>
          </div>
          <div className="tile-num full-reset">9</div>
        </article>
        <article className="tile">
          <div className="tile-icon full-reset">
            <MdCalendarMonth />
          </div>
          <div className="tile-name all-tittles">
            <a href="loan.html">Cuestionarios completados</a>
          </div>
          <div className="tile-num full-reset">7</div>
        </article>
        <article className="tile">
          <div className="tile-icon full-reset">
            <MdTrendingUp />
          </div>
          <div className="tile-name all-tittles" style={{ width: "90%" }}>
            <a href="report.html">Reportes y Estadísticas</a>
          </div>
          <div className="tile-num full-reset">&nbsp;</div>
        </article>
      </section>
      <div className="modal fade" tabIndex={-1} role="dialog" id="ModalHelp">
        <div className="modal-dialog modal-lg">
          <div className="modal-content" style={{ backgroundColor: "#f8f9fa" }}>
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
                Ayuda del sistema
              </h4>
            </div>
            <div className="modal-body">
              ¡Bienvenidos! En el menú, encontrarán una variedad emocionante de
              actividades diseñadas especialmente para ayudarlos a mejorar sus
              habilidades de lectura. Desde cuentos interactivos hasta desafíos
              divertidos, cada opción está aquí para hacer que su experiencia
              sea educativa y entretenida. No duden en explorar y descubrir
              nuevas aventuras literarias.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                <MdThumbUp /> &nbsp; De acuerdo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
