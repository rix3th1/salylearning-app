import Image from "next/image";
import { MdHelpOutline, MdMenu } from "react-icons/md";
import PowerButton from "./PowerButton";
import SearchBookButton from "./SearchBookButton";

export default function InternalNav() {
  return (
    <nav className="navbar-user-top full-reset" style={{ position: "sticky" }}>
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
          <span className="all-tittles">Mi Perfil</span>
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
