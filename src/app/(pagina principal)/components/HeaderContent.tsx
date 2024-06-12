import { MdLogin, MdOutlineArrowCircleRight } from "react-icons/md";

interface IProps {
  setIsModalInicioSesionOpen: (value: boolean) => void;
  setIsModalRegistroOpen: (value: boolean) => void;
}

export default function HeaderContent({
  setIsModalInicioSesionOpen,
  setIsModalRegistroOpen,
}: IProps) {
  return (
    <section className="d-flex gap-4 justify-content-center mb-3">
      <button
        onClick={() => {
          setIsModalInicioSesionOpen(true);
        }}
        className="btn btn-primary btn-lg px-5 py-3 fs-6 fw-bolder"
      >
        Iniciar{" "}
        <MdLogin
          style={{ position: "relative", bottom: 1, fontSize: "24px" }}
        />
      </button>
      <button
        onClick={() => {
          setIsModalRegistroOpen(true);
        }}
        className="btn btn-primary btn-lg px-5 py-3 fs-6 fw-bolder"
      >
        Registrarse{" "}
        <MdOutlineArrowCircleRight
          style={{ position: "relative", bottom: 1, fontSize: "24px" }}
        />
      </button>
    </section>
  );
}
