"use client";

import { useRef } from "react";
import HeaderContent from "./HeaderContent";
import ImageSection from "./ImageSection";
import ModalIniciarSesion from "./ModalIniciarSesion";
import ModalRegistro from "./ModalRegistro";

export default function IndexHeader() {
  const modalInicioSesion = useRef<HTMLDivElement>(null);
  const modalRegistro = useRef<HTMLDivElement>(null);

  return (
    <header className="py-5">
      <div className="container px-5 pb-5">
        <div className="row gx-5 align-items-center">
          <section className="col-xxl-5">
            <article className="text-center text-xxl-start">
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
                modalInicioSesion={modalInicioSesion}
                modalRegistro={modalRegistro}
              />
            </article>

            {/* Modal de inicio de sesión */}
            <ModalIniciarSesion modalInicioSesion={modalInicioSesion} />

            {/* Modal de registro usuarios*/}
            <ModalRegistro modalRegistro={modalRegistro} />

            <ImageSection />
          </section>
        </div>
      </div>
    </header>
  );
}
