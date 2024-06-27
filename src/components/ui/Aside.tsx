import { dm_sans } from "@/app/fonts";
import authOptions from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import {
  MdAccountCircle,
  MdAddCircle,
  MdAssignment,
  MdBarChart,
  MdBook,
  MdBookmark,
  MdCheckCircle,
  MdHelpOutline,
  MdHome,
  MdKeyboardArrowDown,
  MdLocalActivity,
  MdLocationOff,
  MdManageAccounts,
  MdMarkAsUnread,
  MdPerson,
  MdStar,
  MdStarHalf,
  MdTrendingUp,
} from "react-icons/md";
import CloseButton from "./CloseButton";
import SalyFigure from "./SalyFigure";

export default async function Aside() {
  const session = await getServerSession(authOptions);
  const isStudent = session?.user.rol === "ESTUDIANTE";
  const isTeacher = session?.user.rol === "DOCENTE";

  return (
    <div
      className="navbar-lateral full-reset"
      style={{
        position: "fixed",
      }}
    >
      <span className="visible-xs font-movile-menu"></span>
      <div className="full-reset container-menu-movile">
        <div className="logo full-reset">
          <CloseButton />
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
          <SalyFigure canChange={isStudent} />
        </div>
        <div
          className={`full-reset nav-lateral-list-menu ${dm_sans.className}`}
        >
          <ul
            className="list-unstyled"
            style={{
              overflowY: "auto",
              maxHeight: "40vh",
            }}
          >
            <li>
              <Link
                className="saly-link"
                href={`/learning/${isStudent ? "students" : "teachers"}`}
              >
                <MdHome style={{ fontSize: 15 }} />
                &nbsp;&nbsp; Inicio
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
                  <MdAssignment />
                  &nbsp;&nbsp; Libros
                </span>
                <MdKeyboardArrowDown
                  style={{ fontSize: 20, margin: "0 5px" }}
                />
              </div>
              <ul className="list-unstyled">
                {isTeacher && (
                  <>
                    <li>
                      <Link
                        className="saly-link"
                        href="/learning/teachers/books/new"
                      >
                        <MdBook />
                        &nbsp;&nbsp; Nuevo libro
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="saly-link"
                        href="/learning/teachers/books/popular"
                      >
                        <MdBookmark />
                        &nbsp;&nbsp; Populares
                      </Link>
                    </li>
                  </>
                )}
                {isStudent && (
                  <li>
                    <Link className="saly-link" href="/learning/students/books">
                      <MdBook />
                      &nbsp;&nbsp; Explorar libros
                    </Link>
                  </li>
                )}
              </ul>
            </li>
            {isTeacher && (
              <>
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
                      <MdLocalActivity />
                      &nbsp;&nbsp; Actividades
                    </span>
                    <MdKeyboardArrowDown
                      style={{ fontSize: 20, margin: "0 5px" }}
                    />
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="saly-link"
                        href="/learning/teachers/activities/new"
                      >
                        <MdAddCircle />
                        &nbsp;&nbsp;Asignar
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
                      &nbsp;&nbsp; Cuestionarios
                    </span>
                    <MdKeyboardArrowDown
                      style={{ fontSize: 20, margin: "0 5px" }}
                    />
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="saly-link"
                        href="/learning/teachers/questionaries/completed"
                      >
                        <MdCheckCircle />
                        &nbsp;&nbsp;Completados
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="saly-link"
                        href="/learning/teachers/questionaries/pending"
                      >
                        <MdStarHalf />
                        &nbsp;&nbsp;Pendientes
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="saly-link"
                        href="/learning/teachers/questionaries/not-achieved"
                      >
                        <MdLocationOff />
                        &nbsp;&nbsp;No logrados
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
                      <MdTrendingUp />
                      &nbsp;&nbsp; Reportes y estadísticas
                    </span>
                    <MdKeyboardArrowDown
                      style={{ fontSize: 20, margin: "0 5px" }}
                    />
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="saly-link"
                        href="/learning/teachers/reports"
                      >
                        <MdTrendingUp />
                        &nbsp;&nbsp;Reportes
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="saly-link"
                        href="/learning/teachers/statistics"
                      >
                        <MdBarChart />
                        &nbsp;&nbsp;Estadísticas
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
                      <MdAccountCircle />
                      &nbsp;&nbsp; Configuración de cuenta
                    </span>
                    <MdKeyboardArrowDown
                      style={{ fontSize: 20, margin: "0 5px" }}
                    />
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="saly-link"
                        href="/learning/teachers/account-settings/profile"
                      >
                        <MdPerson />
                        &nbsp;&nbsp;Perfíl
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="saly-link"
                        href="/learning/teachers/account-settings/advanced"
                      >
                        <MdManageAccounts />
                        &nbsp;&nbsp;Avanzadas
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="saly-link" href="/learning/teachers/faqs">
                    <MdHelpOutline />
                    &nbsp;&nbsp; Preguntas frecuentes
                  </Link>
                </li>
              </>
            )}
            {isStudent && (
              <>
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
                      <MdLocalActivity />
                      &nbsp;&nbsp; Actividades
                    </span>
                    <MdKeyboardArrowDown
                      style={{ fontSize: 20, margin: "0 5px" }}
                    />
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="saly-link"
                        href="/learning/students/activities/pending"
                      >
                        <MdStar />
                        &nbsp;&nbsp;Por hacer
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="saly-link"
                        href="/learning/students/activities/done"
                      >
                        <MdCheckCircle />
                        &nbsp;&nbsp;Hecho
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className="saly-link"
                    href="/learning/students/achievements"
                  >
                    <MdTrendingUp />
                    &nbsp;&nbsp; Mi progreso
                  </Link>
                </li>
                <li>
                  <Link className="saly-link" href="/learning/students/account">
                    <MdAccountCircle />
                    &nbsp;&nbsp; Configuración
                  </Link>
                </li>
                <li>
                  <Link className="saly-link" href="/learning/students/help">
                    <MdHelpOutline />
                    &nbsp;&nbsp; Ayuda
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
