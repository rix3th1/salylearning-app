import PageHeader from "@/app/learning/components/PageHeader";
import { obtenerPerfilUsuario } from "@/services/perfil.service";
import { profileImage } from "@/utils/getProfileImage";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProfileButtons from "./components/ProfileButtons";

export const metadata: Metadata = {
  title: "Actualizar Perfíl: Docentes | Saly Learning",
};

export default async function TeacherAccountSettingsPage() {
  const user = await obtenerPerfilUsuario();
  const foto_perfil_id = user.foto_perfil?.id;
  const avatar_id = user.avatar_usuario.id;
  const name = `${user?.p_nombre} ${user?.p_apellido}`;
  const rol = `${user?.rol[0]}${user?.rol.slice(1).toLowerCase()}`;
  const grade = user.grado_usuario.grados.nom_grado;

  return (
    <>
      <PageHeader title="Actualizar perfíl docente" />

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
                    src={profileImage(user)}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    width={150}
                    height={150}
                    quality={100}
                    priority
                  />
                  <h5 className="my-3" style={{ fontSize: "1.5rem" }}>
                    {name}
                  </h5>
                  <p className="text-muted mb-1">{rol}</p>
                  <p className="text-muted mb-4">Rol: {rol}</p>

                  <ProfileButtons
                    avatar_id={avatar_id}
                    foto_perfil_id={foto_perfil_id}
                  />
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
                  <p className="text-muted mb-0">
                    {user?.p_nombre} {user?.s_nombre}
                  </p>
                </div>
              </div>
              <div className="report-content">
                <div className="col-sm-3">
                  <p className="mb-0">Apellidos</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">
                    {user?.p_apellido} {user?.s_apellido}
                  </p>
                </div>
              </div>
              <div className="report-content">
                <div className="col-sm-3">
                  <p className="mb-0">Edad</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">
                    {user?.edad > 0 ? user?.edad : "No establecida"}
                  </p>
                </div>
              </div>
              <div className="report-content">
                <div className="col-sm-3">
                  <p className="mb-0">Grado</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{grade}</p>
                </div>
              </div>
              <div className="report-content">
                <div className="col-sm-3">
                  <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user?.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
