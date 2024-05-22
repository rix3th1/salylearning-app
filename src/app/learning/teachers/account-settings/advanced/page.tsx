import PageHeader from "@/app/learning/components/PageHeader";
import type { Metadata } from "next";
import Link from "next/link";
import AdvancedSettingsForm from "./components/AdvancedSettingsForm";

export const metadata: Metadata = {
  title: "Configuración Avanzada: Docentes | Saly Learning",
};

export default function TeacherAccountSettingsPage() {
  return (
    <>
      <PageHeader title="Configuración avanzada de cuenta" />

      <ul className="nav nav-tabs nav-justified">
        <li>
          <Link href="/learning/teachers/account-settings/profile">Perfil</Link>
        </li>
        <li className="active">
          <Link href="/learning/teachers/account-settings/advanced">
            Otras opciones
          </Link>
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
                  <h3 style={{ textAlign: "center" }}>
                    Actualizar perfíl de usuario
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
                  Actualizar perfíl
                </button>
              </form>
            </div>
            {/* Columna derecha */}

            <div className="col-md-6">
              <AdvancedSettingsForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
