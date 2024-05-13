import ForgotPasswordButton from "./ForgotPasswordButton";
import FormIniciarSesion from "./FormIniciarSesion";

interface IProps {
  modalInicioSesion: React.RefObject<HTMLDivElement>;
}

export default function ModalIniciarSesion({ modalInicioSesion }: IProps) {
  return (
    <div className="modal" ref={modalInicioSesion}>
      <div className="row justify-content-center pt-5 mt-5 m-1">
        <div className="col-md-6 col-sm-8 col-xl-4 col-lg-5 formulario">
          <span
            onClick={() => {
              if (modalInicioSesion.current) {
                modalInicioSesion.current.style.display = "none";
              }
            }}
            className="close_modal"
            style={{ float: "right", cursor: "pointer" }}
          >
            ×
          </span>

          <FormIniciarSesion />

          <section className="mx-sm-4 text-end py-4">
            <ForgotPasswordButton />
          </section>
        </div>
      </div>
    </div>
  );
}
