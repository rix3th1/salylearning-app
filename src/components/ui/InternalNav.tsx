import { obtenerPerfilUsuario } from "@/services/perfil.service";
import { profileImage } from "@/utils/getProfileImage";
import Image from "next/image";
import MenuButton from "./MenuButton";
import MyProfileButton from "./MyProfileButton";
import NavInteractionButtons from "./NavInteractionButtons";

export default async function InternalNav() {
  const user = await obtenerPerfilUsuario();
  const isStudent = user?.rol === "ESTUDIANTE";

  return (
    <nav
      className="navbar-user-top full-reset"
      style={{ position: "sticky", zIndex: 7 }}
    >
      <ul className="list-unstyled full-reset">
        <figure>
          <Image
            src={profileImage(user)}
            alt="Imagen usuario"
            className="img-responsive img-circle center-box"
            width={100}
            height={100}
            quality={100}
            priority
          />
        </figure>

        <MyProfileButton
          href={`/learning/${
            isStudent ? "students/account" : "teachers/account-settings/profile"
          }`}
        />
        <NavInteractionButtons isStudent={isStudent} />
        <MenuButton />
      </ul>
    </nav>
  );
}
