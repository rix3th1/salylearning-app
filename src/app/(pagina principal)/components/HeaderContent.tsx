interface IProps {
  modalInicioSesion: React.RefObject<HTMLDivElement>;
  modalRegistro: React.RefObject<HTMLDivElement>;
}

export default function HeaderContent({
  modalInicioSesion,
  modalRegistro,
}: IProps) {
  return (
    <section className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
      <button
        onClick={() => {
          if (modalInicioSesion.current) {
            modalInicioSesion.current.style.display = "block";
          }
        }}
        className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
      >
        Iniciar
      </button>
      <button
        onClick={() => {
          if (modalRegistro.current) {
            modalRegistro.current.style.display = "block";
          }
        }}
        className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
      >
        Registrarse
      </button>
    </section>
  );
}
