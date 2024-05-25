import PageHeader from "@/app/learning/components/PageHeader";
import { obtenerEstudiante } from "@/services/estudiantes.service";
import { obtenerPerfilUsuario } from "@/services/perfil.service";
import type { Metadata } from "next";
import Image from "next/image";
import FormAccount from "./components/FormAccount";
import ProfileButtons from "./components/ProfileButtons";

export const metadata: Metadata = {
  title: "Configuración Cuenta: Estudiantes | Saly Learning",
};

export default async function StudentsAccountPage() {
  const user = await obtenerPerfilUsuario();
  const estudiante = await obtenerEstudiante(user.id);

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
              <ProfileButtons />
            </div>

            <div className="col-md-9">
              <h4 className="mr-3">Datos del Alumno</h4>
              <hr />

              <FormAccount user={user} student={estudiante} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
