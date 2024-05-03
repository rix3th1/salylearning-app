import {
  MdOutlinePowerSettingsNew,
  MdSearch,
  MdHelpOutline,
  MdMenu,
} from "react-icons/md";

export default function InternalNav() {
  return (
    <nav className="navbar-user-top full-reset" style={{ position: "sticky" }}>
      <ul className="list-unstyled full-reset">
        <figure>
          <img
            src="/img/user.png"
            alt="Imagen usuario"
            className="img-responsive img-circle center-box"
          />
        </figure>
        <li style={{ color: "#fff", cursor: "default" }}>
          <span className="all-tittles">Mi Perfil</span>
        </li>
        <li
          className="tooltips-general exit-system-button"
          data-href="index.html"
          title="Salir del sistema"
        >
          <MdOutlinePowerSettingsNew style={{ fontSize: 25, marginTop: 15 }} />
        </li>
        <li
          className="tooltips-general search-book-button"
          data-href="searchbook.html"
          title="Buscar libro"
        >
          <MdSearch style={{ fontSize: 25, marginTop: 15 }} />
        </li>
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
