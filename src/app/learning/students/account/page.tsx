import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";

export const metadata: Metadata = {
  title: "Configuración Cuenta: Estudiantes | Saly Learning",
};

export default function StudentsAccountPage() {
  return (
    <>
      <PageHeader title="Actualizar perfíl estudiante" />

      <section className="container-fluid">
        <div className="row">
          <div
            className="col-md-8 col-md-offset-2"
            style={{
              backgroundColor: "#C6E4FA",
              borderRadius: "10px",
              border: "1px solid #D5D7D8",
              padding: "20px",
            }}
          >
            <div className="col-md-3 text-center">
              <Image
                width={150}
                height={150}
                quality={100}
                id="avatar"
                src="/img/user01.png"
                alt="avatar"
                className="rounded-circle img-fluid"
                style={{ marginBottom: "1rem" }}
                priority
              />
              <input
                type="file"
                id="uploadImage"
                style={{ display: "none" }}
                accept="image/*"
              />
              <div className="profile-buttons">
                <button
                  type="button"
                  className="btn btn-primary mr-2"
                  id="uploadButton"
                  style={{ margin: "1rem .2rem" }}
                >
                  Subir foto
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  id="open-avatar-modal"
                  style={{ margin: "0 .2rem" }}
                >
                  Elegir Avatar
                </button>
              </div>
            </div>

            <div className="col-md-9">
              <h4 className="mr-3">Datos del Alumno</h4>
              <div>
                <hr />
                <div className="form-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Nombre del alumno"
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="apellidos">Apellidos:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellidos"
                    placeholder="Apellidos del alumno"
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="edad">Edad:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="edad"
                    placeholder="Edad del alumno"
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="grado">Grado:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="grado"
                    placeholder="Grado del alumno"
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="curso">Curso Actual:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="curso"
                    placeholder="Curso actual del alumno"
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="apodo">Apodo:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apodo"
                    placeholder="Apodo del alumno"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*modal selección avatar*/}
      <div
        id="avatarModal"
        className="avatar-modal"
        style={{ display: "none" }}
      >
        <div className="avatar-modal-content">
          <span className="avatar-close">×</span>
          <h5>Selecciona tu foto de perfíl</h5>
          <div id="avatar-options">
            <Image
              className="avatar-option"
              src="/img/user01.png"
              alt="avatar1"
              width={100}
              height={100}
              quality={75}
            />
            <Image
              className="avatar-option"
              src="/img/user02.png"
              alt="avatar2"
              width={100}
              height={100}
              quality={75}
            />
            <Image
              className="avatar-option"
              src="/img/user03.png"
              alt="avatar3"
              width={100}
              height={100}
              quality={75}
            />
          </div>
          <div id="avatar-options">
            <Image
              className="avatar-option"
              src="/img/user04.png"
              alt="avatar4"
              width={100}
              height={100}
              quality={75}
            />
            <Image
              className="avatar-option"
              src="/img/user05.png"
              alt="avatar5"
              width={100}
              height={100}
              quality={75}
            />
            <Image
              className="avatar-option"
              src="/img/user.png"
              alt="avatar6"
              width={100}
              height={100}
              quality={75}
            />
          </div>
          <button
            id="accept-avatar"
            className="btn btn-outline-primary"
            style={{ margin: "0 .5rem", marginTop: "1rem" }}
          >
            Aceptar
          </button>
          <button
            id="cancel-avatar"
            className="btn btn-outline-primary"
            style={{ margin: "0 .5rem", marginTop: "1rem" }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
}
