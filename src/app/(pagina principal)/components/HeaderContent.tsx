interface IProps {
  modalInicioSesion: React.RefObject<HTMLDivElement>;
  modalRegistro: React.RefObject<HTMLDivElement>;
}

export default function HeaderContent({
  modalInicioSesion,
  modalRegistro,
}: IProps) {
  return (
    <article className="text-center text-xxl-start">
      <p className="fs-3 fw-light text-muted">
        Leer te da el superpoder de aprender y soñar a la vez.
      </p>
      <h1 className="display-3 fw-bolder mb-5">
        <span className="text-gradient d-inline">¡Usa ese superpoder!</span>
      </h1>
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
    </article>
  );
}
