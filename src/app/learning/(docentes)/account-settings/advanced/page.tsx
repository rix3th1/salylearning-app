"use client";

import Link from "next/link";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function TeacherAccountSettingsPage() {
  const [passwordsVisibility, setPasswordsVisibility] = useState({
    password: false,
    newPassword: false,
    confirmPassword: false,
  });

  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-tittles">
            SALY LEARNING <small>Configuraciones avanzadas de cuenta</small>
          </h1>
        </div>
      </div>

      <ul className="nav nav-tabs nav-justified">
        <li>
          <Link href="/learning/account-settings/profile">Perfil</Link>
        </li>
        <li className="active">
          <Link href="/learning/account-settings/advanced">Otras opciones</Link>
        </li>
      </ul>

      <div style={{ backgroundColor: "#adb5bd", padding: 20 }}>
        <div
          className="container-fluid"
          style={{
            borderRadius: 15,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            maxWidth: "80%",
          }}
        >
          <div
            className="row"
            style={{
              padding: "10px 20px 15px 5px",
              justifyContent: "space-between",
            }}
          >
            {/* Columna izquierda */}
            <div className="col-md-6">
              <form>
                <div className="form-group text-center pt-3">
                  <h3 className="all-tittles" style={{ textAlign: "center" }}>
                    Actualizar perfil de usuario
                  </h3>
                </div>
                <div className="form-group mx-sm-4 pt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre usuario"
                    name="username"
                    autoComplete="username"
                  />
                </div>
                <div className="form-group mx-sm-4 pt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombres"
                    name="first_name"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group mx-sm-4 pt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apellidos"
                    name="last_name"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group mx-sm-4 pt-3">
                  <input
                    type="gmail"
                    className="form-control"
                    placeholder="Correo electrónico"
                    name="email"
                    autoComplete="email"
                  />
                </div>
                <div className="form-group mx-sm-4 pt-3">
                  <input
                    type="gmail"
                    className="form-control"
                    placeholder="Confirmar correo electrónico"
                    name="email-confirm"
                  />
                </div>
                <div className="form-group mx-sm-4 pt-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Código docente"
                    name="cod_docente"
                  />
                </div>
                {/* <div className="form-group mx-sm-4 pt-3">
                    <select
                      className="form-control"
                      id="gradoEscolar"
                      name="gradoEscolar"
                    >
                      <option value="select_grado">
                        Seleccione su grado escolar
                      </option>
                      <option value="primero">Primero</option>
                      <option value="segundo">Segundo</option>
                      <option value="tercero">Tercero</option>
                      <option value="cuarto">Cuarto</option>
                      <option value="quinto">Quinto</option>
                    </select>
                  </div> */}
                <div className="form-group mx-sm-4 pt-3">
                  <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                  />
                </div>
                <div className="form-group mx-sm-4 pt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ciudad"
                    name="city"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ marginBottom: "40px" }}
                >
                  Actualizar perfil
                </button>
              </form>
            </div>
            {/* Columna derecha */}

            <div className="col-md-6">
              <form>
                {/* Cambio de contraseña */}
                <div className="form-group text-center pt-3">
                  <h3 className="all-tittles" style={{ textAlign: "center" }}>
                    Cambia tu contraseña
                  </h3>
                </div>
                <div className="form-group mx-sm-4 pt-3">
                  <label htmlFor="contrasenaActual">Cambiar contraseña</label>
                  <input
                    type={passwordsVisibility.password ? "text" : "password"}
                    className="form-control"
                    id="contrasenaActual"
                    placeholder="Ingrese su Contraseña"
                    required
                    autoComplete="current-password"
                  />
                  {!passwordsVisibility.password ? (
                    <MdVisibility
                      onClick={() =>
                        setPasswordsVisibility({
                          ...passwordsVisibility,
                          password: !passwordsVisibility.password,
                        })
                      }
                      style={{
                        position: "absolute",
                        top: "20%",
                        transform: "translateY(-100%)",
                        right: 20,
                        cursor: "pointer",
                      }}
                    />
                  ) : (
                    <MdVisibilityOff
                      onClick={() =>
                        setPasswordsVisibility({
                          ...passwordsVisibility,
                          password: !passwordsVisibility.password,
                        })
                      }
                      style={{
                        position: "absolute",
                        top: "20%",
                        transform: "translateY(-100%)",
                        right: 20,
                        cursor: "pointer",
                      }}
                    />
                  )}
                </div>
                <div className="form-group mx-sm-4 pt-3">
                  <label htmlFor="nuevaContrasena">Nueva Contraseña</label>
                  <input
                    type={passwordsVisibility.newPassword ? "text" : "password"}
                    className="form-control"
                    id="nuevaContrasena"
                    name="nuevaContrasena"
                    placeholder="Ingrese la nueva contraseña"
                    autoComplete="new-password"
                  />

                  {!passwordsVisibility.newPassword ? (
                    <MdVisibility
                      onClick={() =>
                        setPasswordsVisibility({
                          ...passwordsVisibility,
                          newPassword: !passwordsVisibility.newPassword,
                        })
                      }
                      style={{
                        position: "absolute",
                        top: "49%",
                        transform: "translateY(-100%)",
                        right: 20,
                        cursor: "pointer",
                      }}
                    />
                  ) : (
                    <MdVisibilityOff
                      onClick={() =>
                        setPasswordsVisibility({
                          ...passwordsVisibility,
                          newPassword: !passwordsVisibility.newPassword,
                        })
                      }
                      style={{
                        position: "absolute",
                        top: "49%",
                        transform: "translateY(-100%)",
                        right: 20,
                        cursor: "pointer",
                      }}
                    />
                  )}
                </div>
                <div className="form-group mx-sm-4 pt-3">
                  <label htmlFor="confirmarContrasena">
                    Confirmar Contraseña
                  </label>
                  <input
                    type={
                      passwordsVisibility.confirmPassword ? "text" : "password"
                    }
                    className="form-control"
                    id="confirmarContrasena"
                    name="confirmarContrasena"
                    placeholder="Confirme la nueva contraseña"
                    autoComplete="new-password"
                  />

                  {!passwordsVisibility.confirmPassword ? (
                    <MdVisibility
                      onClick={() =>
                        setPasswordsVisibility({
                          ...passwordsVisibility,
                          confirmPassword: !passwordsVisibility.confirmPassword,
                        })
                      }
                      style={{
                        position: "absolute",
                        top: "78%",
                        transform: "translateY(-100%)",
                        right: 20,
                        cursor: "pointer",
                      }}
                    />
                  ) : (
                    <MdVisibilityOff
                      onClick={() =>
                        setPasswordsVisibility({
                          ...passwordsVisibility,
                          confirmPassword: !passwordsVisibility.confirmPassword,
                        })
                      }
                      style={{
                        position: "absolute",
                        top: "78%",
                        transform: "translateY(-100%)",
                        right: 20,
                        cursor: "pointer",
                      }}
                    />
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
