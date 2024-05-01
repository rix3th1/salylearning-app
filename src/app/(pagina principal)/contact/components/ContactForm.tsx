export default function ContactForm() {
  return (
    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
      {/* Name input*/}
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="name"
          type="text"
          placeholder="Ingrese su nombre"
          data-sb-validations="required"
          autoComplete="name"
        />
        <label htmlFor="name">Nombre completo</label>
        <div className="invalid-feedback" data-sb-feedback="name:required">
          Ingrese un nombre.
        </div>
      </div>
      {/* Email address input*/}
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="email"
          type="email"
          placeholder="name@example.com"
          data-sb-validations="required,email"
          autoComplete="email"
        />
        <label htmlFor="email">Correo electrónico</label>
        <div className="invalid-feedback" data-sb-feedback="email:required">
          Debe ingresar un correo electrónico.
        </div>
        <div className="invalid-feedback" data-sb-feedback="email:email">
          Correo electrónico invalido.
        </div>
      </div>
      {/* Phone number input*/}
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="phone"
          type="tel"
          placeholder="(123) 456-7890"
          data-sb-validations="required"
          autoComplete="tel"
        />
        <label htmlFor="phone">Teléfono</label>
        <div className="invalid-feedback" data-sb-feedback="phone:required">
          Numero telefónico no ingresado
        </div>
      </div>
      {/* Message input*/}
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="message"
          placeholder="Enter your message here..."
          style={{ height: "10rem" }}
          data-sb-validations="required"
          defaultValue={""}
        />
        <label htmlFor="message">Mensaje o comentario</label>
        <div className="invalid-feedback" data-sb-feedback="message:required">
          Se requiere un mensaje.
        </div>
      </div>
      <div className="d-none" id="submitSuccessMessage">
        <div className="text-center mb-3">
          <div className="fw-bolder">Envío exitoso</div>
        </div>
      </div>
      {/* error al enviar el formulario*/}
      <div className="d-none" id="submitErrorMessage">
        <div className="text-center text-danger mb-3">
          Ha ocurrido un error al enviar el mensaje
        </div>
      </div>
      {/* Submit Button*/}
      <div className="d-grid">
        <button
          className="btn btn-primary btn-lg disabled"
          id="submitButton"
          type="submit"
        >
          ENVIAR
        </button>
      </div>
    </form>
  );
}
