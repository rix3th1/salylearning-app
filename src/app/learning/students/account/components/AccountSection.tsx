import { obtenerEstudiantePorIdUsuario } from "@/services/estudiantes.service";
import { obtenerPerfilUsuario } from "@/services/perfil.service";
import { profileImage } from "@/utils/getProfileImage";
import Image from "next/image";
import FormAccount from "./FormAccount";
import ProfileButtons from "./ProfileButtons";

export default async function AccountSection() {
  const user = await obtenerPerfilUsuario();
  const foto_perfil_id = user.foto_perfil?.id;
  const avatar_id = user.avatar_usuario.id;
  const estudiante = await obtenerEstudiantePorIdUsuario();

  return (
    <>
      <div className="col-md-3 text-center">
        <Image
          width={150}
          height={150}
          quality={100}
          src={profileImage(user)}
          alt="avatar"
          className="rounded-circle img-fluid"
          style={{ marginBottom: "1rem" }}
          priority
        />

        <ProfileButtons avatar_id={avatar_id} foto_perfil_id={foto_perfil_id} />
      </div>

      <div className="col-md-9">
        <h4 className="mr-3">Datos del Alumno</h4>
        <hr />

        <FormAccount user={user} student={estudiante} />
      </div>
    </>
  );
}
