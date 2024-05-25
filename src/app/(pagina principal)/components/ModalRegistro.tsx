import FormRegistro from "./FormRegistro";

interface IProps {
  modalRegistro: React.RefObject<HTMLDivElement>;
}

export default function ModalRegistro({ modalRegistro }: IProps) {
  return (
    <div className="modal" ref={modalRegistro}>
      <div className="row justify-content-center pt-5 mt-5 m-1">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 formulario">
          <span
            onClick={() => {
              if (modalRegistro.current) {
                modalRegistro.current.style.display = "none";
              }
            }}
            className="close_modal"
            style={{ float: "right", cursor: "pointer" }}
          >
            ×
          </span>

          <FormRegistro modalRegistro={modalRegistro} />
        </div>
      </div>
    </div>
  );
}
