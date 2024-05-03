import SALYCAPIBARA from "@/assets/SALYCAPIBARA.png";
import Image from "next/image";
import {
  MdAccountCircle,
  MdAssignment,
  MdBook,
  MdBookmarkBorder,
  MdCheckCircle,
  MdHelpOutline,
  MdHome,
  MdKeyboardArrowDown,
  MdLocationOff,
  MdMarkAsUnread,
  MdStarHalf,
  MdTrendingUp,
} from "react-icons/md";

export default function Aside() {
  return (
    <div
      className="navbar-lateral full-reset"
      style={{
        position: "fixed",
      }}
    >
      <div className="visible-xs font-movile-menu mobile-menu-button"></div>
      <div className="full-reset container-menu-movile custom-scroll-containers">
        <div className="logo full-reset all-tittles">
          <i
            className="visible-xs zmdi zmdi-close pull-left mobile-menu-button"
            style={{
              lineHeight: "55px",
              cursor: "pointer",
              padding: "0 10px",
              marginLeft: "7px",
            }}
          ></i>
          SALY LEARNING
        </div>
        <div
          className="full-reset"
          style={{
            backgroundColor: "#e9ecef",
            padding: "10px 0",
            color: "#fff",
          }}
        >
          <figure>
            <Image
              className="img-responsive center-box"
              quality={100}
              src={SALYCAPIBARA}
              alt="SALYLEARNING CAPIBARA"
              width={280}
              height={300}
              style={{
                width: "55%",
              }}
              priority
            />
          </figure>
        </div>
        <div className="full-reset nav-lateral-list-menu">
          <ul className="list-unstyled">
            <li>
              <a href="home.html">
                <MdHome style={{ fontSize: 15 }} /> &nbsp;&nbsp; Inicio
              </a>
            </li>
            <li>
              <div
                className="dropdown-menu-button"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>
                  <MdAssignment /> &nbsp;&nbsp; Libros
                </span>
                <MdKeyboardArrowDown
                  style={{ fontSize: 20, margin: "0 5px" }}
                />
              </div>
              <ul className="list-unstyled">
                <li>
                  <a href="book.html">
                    <MdBook />
                    &nbsp;&nbsp; Nuevo libro
                  </a>
                </li>
                <li>
                  <a href="catalog.html">
                    <MdBookmarkBorder />
                    &nbsp;&nbsp; Populares
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div
                className="dropdown-menu-button"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>
                  <MdMarkAsUnread />
                  &nbsp;&nbsp;Cuestionarios
                </span>
                <MdKeyboardArrowDown
                  style={{ fontSize: 20, margin: "0 5px" }}
                />
              </div>
              <ul className="list-unstyled">
                <li>
                  <a href="loan.html">
                    <MdCheckCircle />
                    &nbsp;&nbsp;Completados
                  </a>
                </li>
                <li>
                  <a href="loanpending.html">
                    <MdStarHalf />
                    &nbsp;&nbsp; Pendientes
                  </a>
                </li>
                <li>
                  <a href="loanreservation.html">
                    <MdLocationOff />
                    &nbsp;&nbsp;No logrados
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="report.html">
                <MdTrendingUp />
                &nbsp;&nbsp; Reportes y estadísticas
              </a>
            </li>
            <li>
              <a href="advancesettings.html">
                <MdAccountCircle />
                &nbsp;&nbsp; Configuración de cuenta
              </a>
            </li>
            <li>
              <a href="category.html">
                <MdHelpOutline />
                &nbsp;&nbsp; Preguntas frecuentes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
