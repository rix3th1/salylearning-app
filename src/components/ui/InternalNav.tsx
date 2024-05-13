import authOptions from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { MdHelpOutline, MdMenu } from "react-icons/md";
import PowerButton from "./PowerButton";
import SearchBookButton from "./SearchBookButton";

export default async function InternalNav() {
  const session = await getServerSession(authOptions);
  const isStudent = session?.user.rol === "ESTUDIANTE";

  return (
    <nav
      className="navbar-user-top full-reset"
      style={{ position: "sticky", zIndex: 50 }}
    >
      <ul className="list-unstyled full-reset">
        <figure>
          <Image
            src="/img/user.png"
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
            Mi Perfíl
          </Link>
        </li>
        <PowerButton />
        <SearchBookButton />
        <li className="tooltips-general btn-help" title="Ayuda">
          <MdHelpOutline style={{ fontSize: 25, marginTop: 15 }} />
        </li>
        <li className="mobile-menu-button visible-xs" style={{ float: "left" }}>
          <MdMenu style={{ fontSize: 25, marginTop: 15 }} />
        </li>
      </ul>
    </nav>
  );
}
