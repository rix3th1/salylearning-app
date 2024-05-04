import SALYCAPIBARA from "@/assets/SALYCAPIBARA.png";
import Image from "next/image";
import Link from "next/link";
import {
  MdAccountCircle,
  MdAssignment,
  MdBook,
  MdBookmark,
  MdCheckCircle,
  MdClose,
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
          <MdClose
            className="visible-xs pull-left mobile-menu-button"
            style={{
              cursor: "pointer",
              margin: "17px 26px",
            }}
          />
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
              <Link href="/learning">
                <MdHome style={{ fontSize: 15 }} /> &nbsp;&nbsp; Inicio
              </Link>
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
                  <Link href="/learning/books/new">
                    <MdBook />
                    &nbsp;&nbsp; Nuevo libro
                  </Link>
                </li>
                <li>
                  <Link href="/learning/books/popular">
                    <MdBookmark />
                    &nbsp;&nbsp; Populares
                  </Link>
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
                  <Link href="/learning/questionaries/completed">
                    <MdCheckCircle />
                    &nbsp;&nbsp;Completados
                  </Link>
                </li>
                <li>
                  <Link href="/learning/questionaries/pending">
                    <MdStarHalf />
                    &nbsp;&nbsp; Pendientes
                  </Link>
                </li>
                <li>
                  <Link href="/learning/questionaries/not-achieved">
                    <MdLocationOff />
                    &nbsp;&nbsp;No logrados
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/learning/reports-and-statistics">
                <MdTrendingUp />
                &nbsp;&nbsp; Reportes y estadísticas
              </Link>
            </li>
            <li>
              <Link href="/learning/account-settings">
                <MdAccountCircle />
                &nbsp;&nbsp; Configuración de cuenta
              </Link>
            </li>
            <li>
              <Link href="/learning/faqs">
                <MdHelpOutline />
                &nbsp;&nbsp; Preguntas frecuentes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
