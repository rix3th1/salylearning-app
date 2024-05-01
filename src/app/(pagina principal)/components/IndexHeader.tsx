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
            {/* Contenido del texto del encabezado */}
            <HeaderContent
              modalInicioSesion={modalInicioSesion}
              modalRegistro={modalRegistro}
            />

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
