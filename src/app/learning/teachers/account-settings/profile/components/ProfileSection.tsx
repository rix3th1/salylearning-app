import { obtenerPerfilUsuario } from "@/services/perfil.service";
import { profileImage } from "@/utils/getProfileImage";
import Image from "next/image";
import { MdCabin, MdSchool, MdVerifiedUser } from "react-icons/md";
import ProfileButtons from "./ProfileButtons";

export default async function ProfileSection() {
  const user = await obtenerPerfilUsuario();
  const foto_perfil_id = user.foto_perfil?.id;
  const avatar_id = user.avatar_usuario.id;
  const name = `${user?.p_nombre} ${user?.p_apellido}`;
  const rol = `${user?.rol[0]}${user?.rol.slice(1).toLowerCase()}`;
  const sede = user?.sede;
  const grado = user?.grado_usuario?.grados?.nom_grado;

  return (
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
              <p className="text-muted" style={{ fontWeight: "bold" }}>
                {rol}
              </p>
              <p className="text-muted">
                <MdVerifiedUser style={{ position: "relative", top: 2 }} />{" "}
                <span style={{ fontWeight: "bold" }}>Rol:</span> {rol}
              </p>
              <p className="text-muted">
                <MdSchool style={{ position: "relative", top: 2 }} />{" "}
                <span style={{ fontWeight: "bold" }}>Grado clase:</span> {grado}
              </p>
              <p className="text-muted" style={{ marginBottom: 20 }}>
                <MdCabin style={{ position: "relative", top: 2 }} />{" "}
                <span style={{ fontWeight: "bold" }}>Sede:</span> {sede}
              </p>

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
              <p className="mb-0">Email</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
