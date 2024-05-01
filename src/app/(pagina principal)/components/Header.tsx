"use client";

import { useRef } from "react";
import Puntos1 from "../svgs/Puntos1";
import Puntos2 from "../svgs/Puntos2";
import Puntos3 from "../svgs/Puntos3";
import Puntos4 from "../svgs/Puntos4";
import Image from "next/image";

export default function Header() {
  const modalInicioSesion = useRef<HTMLDivElement>(null);
  const modalRegistro = useRef<HTMLDivElement>(null);

  return (
    <header className="py-5">
      <div className="container px-5 pb-5">
        <div className="row gx-5 align-items-center">
          <div className="col-xxl-5">
            {/* Contenido del texto del encabezado*/}
            <div className="text-center text-xxl-start">
              <div className="fs-3 fw-light text-muted">
                Leer te da el superpoder de aprender y soñar a la vez.
              </div>
              <h1 className="display-3 fw-bolder mb-5">
                <span className="text-gradient d-inline">
                  ¡Usa ese superpoder!
                </span>
              </h1>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
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
              </div>
            </div>
            {/* Modal de inicio de sesión */}
            <div className="modal" ref={modalInicioSesion}>
              <div className="row justify-content-center pt-5 mt-5 m-1">
                <div className="col-md-6 col-sm-8 col-xl-4 col-lg-5 formulario">
                  <span
                    onClick={() => {
                      if (modalInicioSesion.current) {
                        modalInicioSesion.current.style.display = "none";
                      }
                    }}
                    className="close_modal"
                    style={{ float: "right", cursor: "pointer" }}
                  >
                    ×
                  </span>
                  <form>
                    <div className="form-group text-center pt-3">
                      <h1 className="text-light">INICIAR SESIÓN</h1>
                    </div>
                    <div className="form-group mx-sm-4 py-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese su usuario"
                        required
                      />
                    </div>
                    <div className="form-group mx-sm-4 pb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese su capacidad"
                        required
                      />
                    </div>
                    <div className="form-group mx-sm-4 py-2">
                      <input
                        type="submit"
                        className="btn w-100 ingresar"
                        defaultValue="INGRESAR"
                      />
                    </div>
                    <div className="form-group mx-sm-4 text-end py-4">
                      <span>
                        <a href="#" className="olvide">
                          Olvidé mi contraseña?{" "}
                        </a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/**/}
            {/* Modal de registro usuarios*/}
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
                  <form>
                    <div className="form-group text-center pt-3">
                      <h1 className="text-light">INICIAR SESIÓN</h1>
                    </div>
                    {/* Primera Fila */}
                    <div className="row">
                      <div className="form-group col-md-6 py-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Primer nombre"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6 py-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Segundo nombre"
                        />
                      </div>
                    </div>
                    {/* Segunda Fila */}
                    <div className="row">
                      <div className="form-group col-md-6 py-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Primer apellido"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6 py-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Segundo apellido"
                        />
                      </div>
                    </div>
                    {/* Tercera Fila */}
                    <div className="row">
                      <div className="form-group col-md-6 py-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Edad"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6 py-3">
                        <select
                          id="gradoEscolar"
                          className="form-control"
                          required
                        >
                          <option disabled selected>
                            Seleccione su grado escolar
                          </option>
                          <option value={1}>Primero</option>
                          <option value={2}>Segundo</option>
                          <option value={3}>Tercero</option>
                          <option value={4}>Cuarto</option>
                          <option value={5}>Quinto</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6 py-3">
                        <select id="rol" className="form-control" required>
                          <option disabled selected>
                            Seleccione su rol
                          </option>
                          <option value={1}>Docente</option>
                          <option value={2}>Estudiante</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6 py-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Correo electrónico"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6 py-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Contraseña"
                          required
                          minLength={6}
                        />
                      </div>
                    </div>
                    {/* cuarta Fila */}
                    <div className="row">
                      <div className="form-group col-md-6 py-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirmar contraseña"
                          required
                          minLength={6}
                        />
                      </div>
                      <div className="form-group col-md-6 py-2 mb-4">
                        <input
                          type="submit"
                          className="btn w-100 ingresar"
                          defaultValue="INGRESAR"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/**/}
            <div className="col-xxl-7">
              {/* Imagen de encabezado */}
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="profile bg-gradient-primary-to-secondary">
                  <Image
                    className="profile-img"
                    src="/img/SALYCAPIBARA.png"
                    alt="..."
                    width={480}
                    height={700}
                  />
                  <div className="dots-1">
                    {/* Puntos SVG*/}
                    <Puntos1 />
                    {/* END of SVG dots*/}
                  </div>
                  <div className="dots-2">
                    {/* SVG Dots*/}
                    <Puntos2 />
                    {/* END of SVG dots*/}
                  </div>
                  <div className="dots-3">
                    {/* SVG Dots*/}
                    <Puntos3 />
                    {/* END of SVG dots*/}
                  </div>
                  <div className="dots-4">
                    {/* SVG Dots*/}
                    <Puntos4 />
                    {/* FINAL de puntos SVG*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
