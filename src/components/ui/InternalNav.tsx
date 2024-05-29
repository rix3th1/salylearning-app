import { obtenerPerfilUsuario } from "@/services/perfil.service";
import { profileImage } from "@/utils/getProfileImage";
import Image from "next/image";
import Link from "next/link";
import MenuButton from "./MenuButton";
import NavInteractionButtons from "./NavInteractionButtons";

export default async function InternalNav() {
  const user = await obtenerPerfilUsuario();
  const isStudent = user?.rol === "ESTUDIANTE";

  return (
    <nav
      className="navbar-user-top full-reset"
      style={{ position: "sticky", zIndex: 1 }}
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
        <li style={{ color: "#fff", cursor: "default" }}>
          <Link
            href={`/learning/${
              isStudent
                ? "students/account"
                : "teachers/account-settings/profile"
            }`}
            className="simple-link"
          >
            Mi perfíl
          </Link>
        </li>
        <NavInteractionButtons />
        <MenuButton />
      </ul>
    </nav>
  );
}
