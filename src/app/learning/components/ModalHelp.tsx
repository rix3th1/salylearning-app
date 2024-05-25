import { MdThumbUp } from "react-icons/md";

export default function ModalHelp() {
  return (
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
            <h4 className="modal-title text-center">Ayuda del sistema</h4>
          </div>
          <div className="modal-body">
            ¡Bienvenidos! En el menú, encontrarán una variedad emocionante de
            actividades diseñadas especialmente para ayudarlos a mejorar sus
            habilidades de lectura. Desde cuentos interactivos hasta desafíos
            divertidos, cada opción está aquí para hacer que su experiencia sea
            educativa y entretenida. No duden en explorar y descubrir nuevas
            aventuras literarias.
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
  );
}
