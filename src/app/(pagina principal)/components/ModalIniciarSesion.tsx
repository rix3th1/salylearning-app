import ForgotPasswordButton from "./ForgotPasswordButton";
import FormIniciarSesion from "./FormIniciarSesion";

interface IProps {
  setIsModalIniciarSesionOpen: (value: boolean) => void;
  isModalIniciarSesionOpen: boolean;
}

export default function ModalIniciarSesion({
  isModalIniciarSesionOpen,
  setIsModalIniciarSesionOpen,
}: IProps) {
  return (
    <div
      className="modal"
      style={{ display: isModalIniciarSesionOpen ? "block" : "none" }}
    >
      <div className="row justify-content-center pt-5 mt-5 m-1">
        <div className="col-md-6 col-sm-8 col-xl-4 col-lg-5 formulario">
          <span
            onClick={() => {
              setIsModalIniciarSesionOpen(false);
            }}
            className="close_modal"
            style={{ float: "right", cursor: "pointer" }}
          >
            ×
          </span>

          <FormIniciarSesion
            setIsModalIniciarSesionOpen={setIsModalIniciarSesionOpen}
          />

          <section className="mx-sm-4 text-end py-4">
            <ForgotPasswordButton
              setIsModalIniciarSesionOpen={setIsModalIniciarSesionOpen}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
