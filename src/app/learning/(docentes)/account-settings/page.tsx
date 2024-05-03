"use client";

import Image from "next/image";
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

      <ul className="nav nav-tabs nav-justified" role="tablist">
        <li role="presentation" className="active">
          <a
            href="#security"
            aria-controls="security"
            role="tab"
            data-toggle="tab"
          >
            Perfil
          </a>
        </li>
        <li role="presentation">
          <a href="#others" aria-controls="others" role="tab" data-toggle="tab">
            Otras opciones
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div
          role="tabpanel"
          className="tab-pane fade in active"
          id="security"
          style={{ padding: 20 }}
        >
          <div
            className="container-fluid"
            style={{ padding: 20, backgroundColor: "#adb5bd" }}
          >
            <div className="row">
              <div
                className="col-xs-12 col-md-6"
                style={{
                  width: "30%",
                  borderRadius: 15,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                  padding: "10px 20px 15px 5px",
                  justifyContent: "space-between",
                }}
              >
                <div className="report-content">
                  <div className="card mb-4">
                    <div className="card-body text-center">
                      <Image
                        id="avatar"
                        src="/img/user01.png"
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        width={150}
                        height={150}
                        quality={100}
                        priority
                      />
                      <input
                        type="file"
                        id="uploadImage"
                        style={{ display: "none" }}
                      />
                      <h5 className="my-3" style={{ fontSize: "1.5rem" }}>
                        Elizabeth Báthory
                      </h5>
                      <p className="text-muted mb-1">Docente</p>
                      <p className="text-muted mb-4">Rol: Docente</p>
                      <div className="d-flex justify-content-center mb-2">
                        <input
                          type="file"
                          id="uploadImage"
                          style={{ display: "none" }}
                          accept="image/*"
                        />
                        <button type="button" className="btn btn-primary">
                          Subir foto
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          data-toggle="modal"
                          data-target="#avatarModal"
                        >
                          Elegir avatar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal para mostrar las opciones de avatar */}
              <div
                className="modal fade"
                id="avatarModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="avatarModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div
                    className="modal-content"
                    style={{ backgroundColor: "#ced4da" }}
                  >
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            position: "relative",
                            fontSize: 35,
                            top: "8px",
                          }}
                        >
                          ×
                        </span>
                      </button>
                      <h5
                        className="modal-title"
                        id="avatarModalLabel"
                        style={{ fontSize: "2rem", textAlign: "center" }}
                      >
                        Por favor, elige un avatar
                      </h5>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="list-group avatar-list">
                            <li
                              className="list-group-item avatar-option"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Avatar 1"
                            >
                              <Image
                                width={400}
                                height={400}
                                quality={100}
                                src="/img/user.png"
                                alt="Avatar 1"
                                className="img-thumbnail"
                              />
                            </li>
                            <li
                              className="list-group-item avatar-option"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Avatar 2"
                            >
                              <Image
                                width={400}
                                height={400}
                                quality={100}
                                src="/img/user01.png"
                                alt="Avatar 2"
                                className="img-thumbnail"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="list-group avatar-list">
                            <li
                              className="list-group-item avatar-option"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Avatar 3"
                            >
                              <Image
                                width={400}
                                height={400}
                                quality={100}
                                src="/img/user02.png"
                                alt="Avatar 3"
                                className="img-thumbnail"
                              />
                            </li>
                            <li
                              className="list-group-item avatar-option"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Avatar 4"
                            >
                              <Image
                                width={400}
                                height={400}
                                quality={100}
                                src="/img/user05.png"
                                alt="Avatar 4"
                                className="img-thumbnail"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-dismiss="modal"
                      >
                        Cerrar
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        id="guardarBtn"
                        disabled
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-md-6"
                style={{
                  borderRadius: 15,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                  padding: "10px 20px 15px 5px",
                  justifyContent: "space-between",
                }}
              >
                <div className="report-content">
                  <div className="col-sm-3">
                    <p className="mb-0">Nombres</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Elizabeth</p>
                  </div>
                </div>
                <div className="report-content">
                  <div className="col-sm-3">
                    <p className="mb-0">Apellidos</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Báthory</p>
                  </div>
                </div>
                <div className="report-content">
                  <div className="col-sm-3">
                    <p className="mb-0">Edad</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">20</p>
                  </div>
                </div>
                <div className="report-content">
                  <div className="col-sm-3">
                    <p className="mb-0">Grado</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">quinto</p>
                  </div>
                </div>
                <div className="report-content">
                  <div className="col-sm-3">
                    <p className="mb-0">Correo electrónico</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Elizabeth123@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          className="tab-pane fade"
          id="others"
          style={{ backgroundColor: "#adb5bd", padding: 20 }}
        >
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
                    <label htmlFor="fechaNacimiento">
                      Fecha de Nacimiento:
                    </label>
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
                  <button type="submit" className="btn btn-primary">
                    Actualizar perfil
                  </button>
                </form>
              </div>
              {/* Columna derecha */}

              <div className="col-md-6">
                <form>
                  {/* Cambio de contraseña */}
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
                      type={
                        passwordsVisibility.newPassword ? "text" : "password"
                      }
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
                        passwordsVisibility.confirmPassword
                          ? "text"
                          : "password"
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
                            confirmPassword:
                              !passwordsVisibility.confirmPassword,
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
                            confirmPassword:
                              !passwordsVisibility.confirmPassword,
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
      </div>
    </>
  );
}
