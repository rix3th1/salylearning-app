import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Actualizar Perfíl: Docentes | Saly Learning",
};

export default function TeacherAccountSettingsPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-tittles">
            SALY LEARNING <small>Actualizar perfíl de usuario</small>
          </h1>
        </div>
      </div>

      <ul className="nav nav-tabs nav-justified">
        <li className="active">
          <Link href="/learning/teachers/account-settings/profile">Perfil</Link>
        </li>
        <li>
          <Link href="/learning/teachers/account-settings/advanced">
            Otras opciones
          </Link>
        </li>
      </ul>

      <div
        className="container-fluid"
        style={{
          padding: 20,
          margin: 20,
          marginBottom: "100px",
          backgroundColor: "#adb5bd",
        }}
      >
        <div className="row">
          <div className="col-md-6" style={{ margin: "5px 0" }}>
            <div
              style={{
                borderRadius: 15,
                backgroundColor: "#fff",
              }}
            >
              <div className="report-content">
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
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ marginRight: "15px" }}
                    >
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

          <div className="col-md-6" style={{ margin: "5px 0" }}>
            <div
              style={{
                borderRadius: 15,
                backgroundColor: "#fff",
                padding: "22px",
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
          <div className="modal-content" style={{ backgroundColor: "#ced4da" }}>
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
    </>
  );
}
