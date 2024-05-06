export default function StudentsAccountPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-titles">
            SALY LEARNING <small>Inicio</small>
          </h1>
        </div>
      </div>
      <section className="profile-seccion">
        <div className="container">
          <div className="subcolumna">
            <div className="profile-img-container">
              <img
                id="avatar"
                src="/img/user01.png"
                alt="avatar"
                className="rounded-circle img-fluid"
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
                >
                  Subir foto
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  id="open-avatar-modal"
                >
                  Elegir Avatar
                </button>
              </div>
            </div>
            <div className="profile-info">
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
      <div id="avatarModal" className="avatar-modal">
        <div className="avatar-modal-content">
          <span className="avatar-close">×</span>
          <h5>Selecciona tu foto de perfil</h5>
          <div id="avatar-options">
            <img
              className="avatar-option"
              src="/img/user01.png"
              alt="avatar1"
            />
            <img
              className="avatar-option"
              src="/img/user02.png"
              alt="avatar2"
            />
            <img
              className="avatar-option"
              src="/img/user03.png"
              alt="avatar3"
            />
          </div>
          <div id="avatar-options">
            <img
              className="avatar-option"
              src="/img/user04.png"
              alt="avatar4"
            />
            <img
              className="avatar-option"
              src="/img/user05.png"
              alt="avatar5"
            />
            <img className="avatar-option" src="/img/user.png" alt="avatar6" />
          </div>
          <button id="accept-avatar" className="btn btn-outline-primary">
            Aceptar
          </button>
          <button id="cancel-avatar" className="btn btn-outline-primary">
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
}
