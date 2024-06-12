"use client";

import { useState } from "react";
import HeaderContent from "./HeaderContent";
import ImageSection from "./ImageSection";
import ModalIniciarSesion from "./ModalIniciarSesion";
import ModalRegistro from "./ModalRegistro";

export default function IndexHeader() {
  const [isModalIniciarSesionOpen, setIsModalIniciarSesionOpen] =
    useState(false);
  const [isModalRegistroOpen, setIsModalRegistroOpen] = useState(false);

  return (
    <header className="py-5">
      <div className="container px-5 pb-5">
        <div className="row align-items-center justify-content-center">
          <section className="col-xxl-5">
            <article className="text-center">
              <p className="fs-3 fw-light text-muted">
                Leer te da el superpoder de aprender y soñar a la vez.
              </p>
              <h1 className="display-3 fw-bolder mb-5">
                <span className="text-gradient d-inline">
                  ¡Usa ese superpoder!
                </span>
              </h1>
              {/* Contenido del texto del encabezado */}
              <HeaderContent
                setIsModalInicioSesionOpen={setIsModalIniciarSesionOpen}
                setIsModalRegistroOpen={setIsModalRegistroOpen}
              />
            </article>

            {/* Modal de inicio de sesión */}
            <ModalIniciarSesion
              isModalIniciarSesionOpen={isModalIniciarSesionOpen}
              setIsModalIniciarSesionOpen={setIsModalIniciarSesionOpen}
            />

            {/* Modal de registro usuarios*/}
            <ModalRegistro
              isModalRegistroOpen={isModalRegistroOpen}
              setIsModalRegistroOpen={setIsModalRegistroOpen}
            />

            <ImageSection />
          </section>
        </div>
      </div>
    </header>
  );
}
