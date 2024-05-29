import { obtenerPerfilUsuario } from "@/services/perfil.service";
import { profileImage } from "@/utils/getProfileImage";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import HelpButton from "./HelpButton";
import PowerButton from "./PowerButton";
import SearchBookButton from "./SearchBookButton";

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
        <PowerButton />
        <SearchBookButton />
        <HelpButton />
        <li className="mobile-menu-button visible-xs" style={{ float: "left" }}>
          <MdMenu style={{ fontSize: 25, marginTop: 15 }} />
        </li>
      </ul>
    </nav>
  );
}
