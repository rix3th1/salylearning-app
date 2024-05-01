import Link from "next/link";

export default function FormIniciarSesion() {
  return (
    <form>
      <h1 className="text-light text-center pt-3 pb-1">INICIAR SESIÓN</h1>

      <div className="form-group mx-sm-4 py-3">
        <input
          name="username"
          type="text"
          className="form-control"
          placeholder="Ingrese su usuario"
          required
          autoComplete="username"
        />
      </div>
      <div className="form-group mx-sm-4 pb-4">
        <input
          name="password"
          type="password"
          className="form-control"
          placeholder="Ingrese su contraseña"
          required
        />
      </div>
      <div className="form-group mx-sm-4 py-2">
        <button type="submit" className="btn w-100 ingresar">
          INGRESAR
        </button>
      </div>
      <div className="form-group mx-sm-4 text-end py-4">
        <span>
          <Link href="#" className="olvide">
            Olvidé mi contraseña?
          </Link>
        </span>
      </div>
    </form>
  );
}
