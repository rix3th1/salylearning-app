import { defaultAvatarRoute } from "@/app/constants";
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
  const foto_perfil_id = user.foto_perfil?.id;
  const avatar_id = user.avatar_usuario.id;
  const estudiante = await obtenerEstudiante(user.id);

  const profileImage =
    (user.use_avatar && user.avatar_usuario.avatar.nom_avatar
      ? `/img/avatars/${user.rol}/${user.avatar_usuario.avatar.nom_avatar}`
      : user.foto_perfil.foto) || defaultAvatarRoute;

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
                src={profileImage}
                alt="avatar"
                className="rounded-circle img-fluid"
                style={{ marginBottom: "1rem" }}
                priority
              />

              <ProfileButtons
                avatar_id={avatar_id}
                foto_perfil_id={foto_perfil_id}
              />
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
