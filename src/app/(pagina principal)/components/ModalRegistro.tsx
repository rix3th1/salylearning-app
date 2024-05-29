import FormRegistro from "./FormRegistro";

interface IProps {
  setIsModalRegistroOpen: (value: boolean) => void;
  isModalRegistroOpen: boolean;
}

export default function ModalRegistro({
  isModalRegistroOpen,
  setIsModalRegistroOpen,
}: IProps) {
  return (
    <div
      className="modal"
      style={{ display: isModalRegistroOpen ? "block" : "none" }}
    >
      <div className="row justify-content-center pt-5 mt-5 m-1">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 formulario">
          <span
            onClick={() => {
              setIsModalRegistroOpen(false);
            }}
            className="close_modal"
            style={{ float: "right", cursor: "pointer" }}
          >
            ×
          </span>

          <FormRegistro
            isModalRegistroOpen={isModalRegistroOpen}
            setIsModalRegistroOpen={setIsModalRegistroOpen}
          />
        </div>
      </div>
    </div>
  );
}
