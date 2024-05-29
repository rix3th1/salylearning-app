interface IProps {
  setIsModalInicioSesionOpen: (value: boolean) => void;
  setIsModalRegistroOpen: (value: boolean) => void;
}

export default function HeaderContent({
  setIsModalInicioSesionOpen,
  setIsModalRegistroOpen,
}: IProps) {
  return (
    <section className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
      <button
        onClick={() => {
          setIsModalInicioSesionOpen(true);
        }}
        className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
      >
        Iniciar
      </button>
      <button
        onClick={() => {
          setIsModalRegistroOpen(true);
        }}
        className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
      >
        Registrarse
      </button>
    </section>
  );
}
