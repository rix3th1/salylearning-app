"use client";

import { THandleClick } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdAccountCircle,
  MdAddBox,
  MdAnalytics,
  MdAutoStories,
  MdCancel,
  MdCheckCircle,
  MdCollectionsBookmark,
  MdHelp,
  MdHome,
  MdKeyboardArrowDown,
  MdLeaderboard,
  MdLocalActivity,
  MdManageAccounts,
  MdMenuBook,
  MdNoteAdd,
  MdOutlineAccountCircle,
  MdOutlineAddBox,
  MdOutlineAnalytics,
  MdOutlineAutoStories,
  MdOutlineCancel,
  MdOutlineCheckCircle,
  MdOutlineCollectionsBookmark,
  MdOutlineHelpOutline,
  MdOutlineHome,
  MdOutlineLeaderboard,
  MdOutlineLocalActivity,
  MdOutlineManageAccounts,
  MdOutlineMenuBook,
  MdOutlineNoteAdd,
  MdOutlinePending,
  MdOutlineQuestionAnswer,
  MdOutlineQuiz,
  MdOutlineSettings,
  MdPending,
  MdQuestionAnswer,
  MdQuiz,
  MdSettings,
} from "react-icons/md";

interface IProps {
  isStudent: boolean;
  isTeacher: boolean;
}

export default function AsideOptionsList({ isStudent, isTeacher }: IProps) {
  const pathname = usePathname().split("/").slice(3).join("/");

  const handleClickCloseDropdowns = (e: THandleClick<HTMLDivElement>) => {
    const dropMenu = $(e.target).next("ul");
    dropMenu.slideToggle("slow");
  };

  const handleClickCloseMobileMenu = () => {
    const mobileMenu = $(".navbar-lateral");
    mobileMenu.css("display", "none");
  };

  return (
    <ul
      className="list-unstyled"
      style={{
        overflowY: "auto",
        maxHeight: "40vh",
      }}
    >
      <li>
        <Link
          onClick={handleClickCloseMobileMenu}
          href={`/learning/${isStudent ? "students" : "teachers"}`}
        >
          {pathname === "" ? (
            <MdHome style={{ position: "relative", top: 2 }} />
          ) : (
            <MdOutlineHome style={{ position: "relative", top: 2 }} />
          )}
          &nbsp;&nbsp; Inicio
        </Link>
      </li>
      <li>
        <div
          className="dropdown-menu-button"
          onClick={handleClickCloseDropdowns}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            {pathname.includes("books") ? (
              <MdAutoStories />
            ) : (
              <MdOutlineAutoStories />
            )}
            &nbsp;&nbsp; Libros
          </span>
          <MdKeyboardArrowDown style={{ fontSize: 20, margin: "0 5px" }} />
        </div>
        <ul className="list-unstyled">
          {isTeacher && (
            <>
              <li>
                <Link
                  onClick={handleClickCloseMobileMenu}
                  href="/learning/teachers/books/new"
                >
                  {pathname === "books/new" ? (
                    <MdNoteAdd style={{ position: "relative", top: 2 }} />
                  ) : (
                    <MdOutlineNoteAdd
                      style={{ position: "relative", top: 2 }}
                    />
                  )}
                  &nbsp;&nbsp; Nuevo libro
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClickCloseMobileMenu}
                  href="/learning/teachers/books/popular"
                >
                  {pathname === "books/popular" ? (
                    <MdCollectionsBookmark
                      style={{ position: "relative", top: 2 }}
                    />
                  ) : (
                    <MdOutlineCollectionsBookmark
                      style={{ position: "relative", top: 2 }}
                    />
                  )}
                  &nbsp;&nbsp; Populares
                </Link>
              </li>
            </>
          )}
          {isStudent && (
            <li>
              <Link
                onClick={handleClickCloseMobileMenu}
                href="/learning/students/books"
              >
                {pathname === "books" ? (
                  <MdMenuBook style={{ position: "relative", top: 2 }} />
                ) : (
                  <MdOutlineMenuBook style={{ position: "relative", top: 2 }} />
                )}
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
              onClick={handleClickCloseDropdowns}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                {pathname === "activities/new" ? (
                  <MdLocalActivity style={{ position: "relative", top: 2 }} />
                ) : (
                  <MdOutlineLocalActivity
                    style={{ position: "relative", top: 2 }}
                  />
                )}
                &nbsp;&nbsp; Actividades
              </span>
              <MdKeyboardArrowDown style={{ fontSize: 20, margin: "0 5px" }} />
            </div>
            <ul className="list-unstyled">
              <li>
                <Link
                  onClick={handleClickCloseMobileMenu}
                  href="/learning/teachers/activities/new"
                >
                  {pathname === "activities/new" ? (
                    <MdAddBox style={{ position: "relative", top: 2 }} />
                  ) : (
                    <MdOutlineAddBox style={{ position: "relative", top: 2 }} />
                  )}
                  &nbsp;&nbsp;Asignar
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div
              className="dropdown-menu-button"
              onClick={handleClickCloseDropdowns}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                {pathname === "questionaries/completed" ||
                pathname === "questionaries/pending" ||
                pathname === "questionaries/not-achieved" ? (
                  <MdQuiz style={{ position: "relative", top: 2 }} />
                ) : (
                  <MdOutlineQuiz style={{ position: "relative", top: 2 }} />
                )}
                &nbsp;&nbsp; Cuestionarios
              </span>
              <MdKeyboardArrowDown style={{ fontSize: 20, margin: "0 5px" }} />
            </div>
            <ul className="list-unstyled">
              <li>
                <Link
                  onClick={handleClickCloseMobileMenu}
                  href="/learning/teachers/questionaries/completed"
                >
                  {pathname === "questionaries/completed" ? (
                    <MdCheckCircle style={{ position: "relative", top: 2 }} />
                  ) : (
                    <MdOutlineCheckCircle
                      style={{ position: "relative", top: 2 }}
                    />
                  )}
                  &nbsp;&nbsp;Completos
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClickCloseMobileMenu}
                  href="/learning/teachers/questionaries/pending"
                >
                  {pathname === "questionaries/pending" ? (
                    <MdPending style={{ position: "relative", top: 2 }} />
                  ) : (
                    <MdOutlinePending
                      style={{ position: "relative", top: 2 }}
                    />
                  )}
                  &nbsp;&nbsp;Incompletos
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClickCloseMobileMenu}
                  href="/learning/teachers/questionaries/not-achieved"
                >
                  {pathname === "questionaries/not-achieved" ? (
                    <MdCancel style={{ position: "relative", top: 2 }} />
                  ) : (
                    <MdOutlineCancel style={{ position: "relative", top: 2 }} />
                  )}
                  &nbsp;&nbsp;No logrados
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div
              className="dropdown-menu-button"
              onClick={handleClickCloseDropdowns}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                {pathname === "reports" || pathname === "statistics" ? (
                  <MdAnalytics style={{ position: "relative", top: 2 }} />
                ) : (
                  <MdOutlineAnalytics
                    style={{ position: "relative", top: 2 }}
                  />
                )}
                &nbsp;&nbsp; Reportes y estadísticas
              </span>
              <MdKeyboardArrowDown style={{ fontSize: 20, margin: "0 5px" }} />
            </div>
            <ul className="list-unstyled">
              <li>
                <Link
                  onClick={handleClickCloseMobileMenu}
                  href="/learning/teachers/reports"
                >
                  {pathname === "reports" ? (
                    <MdLeaderboard style={{ position: "relative", top: 2 }} />
                  ) : (
                    <MdOutlineLeaderboard
                      style={{ position: "relative", top: 2 }}
                    />
                  )}
                  &nbsp;&nbsp;Reportes
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClickCloseMobileMenu}
                  href="/learning/teachers/statistics"
                >
                  {pathname === "statistics" ? (
                    <MdAnalytics style={{ position: "relative", top: 2 }} />
                  ) : (
                    <MdOutlineAnalytics
                      style={{ position: "relative", top: 2 }}
                    />
                  )}
                  &nbsp;&nbsp;Estadísticas
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div
              className="dropdown-menu-button"
              onClick={handleClickCloseDropdowns}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                {pathname === "account-settings/profile" ||
                pathname === "account-settings/advanced" ? (
                  <MdSettings style={{ position: "relative", top: 2 }} />
                ) : (
                  <MdOutlineSettings style={{ position: "relative", top: 2 }} />
                )}
                &nbsp;&nbsp; Configuración de cuenta
              </span>
              <MdKeyboardArrowDown style={{ fontSize: 20, margin: "0 5px" }} />
            </div>
            <ul className="list-unstyled">
              <li>
                <Link
                  onClick={handleClickCloseMobileMenu}
                  href="/learning/teachers/account-settings/profile"
                >
                  {pathname === "account-settings/profile" ? (
                    <MdAccountCircle style={{ position: "relative", top: 2 }} />
                  ) : (
                    <MdOutlineAccountCircle
                      style={{ position: "relative", top: 2 }}
                    />
                  )}
                  &nbsp;&nbsp;Perfíl
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClickCloseMobileMenu}
                  href="/learning/teachers/account-settings/advanced"
                >
                  {pathname === "account-settings/advanced" ? (
                    <MdManageAccounts
                      style={{ position: "relative", top: 2 }}
                    />
                  ) : (
                    <MdOutlineManageAccounts
                      style={{ position: "relative", top: 2 }}
                    />
                  )}
                  &nbsp;&nbsp;Avanzadas
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              onClick={handleClickCloseMobileMenu}
              href="/learning/teachers/faqs"
            >
              {pathname === "faqs" ||
              pathname === "faqs/introduction" ||
              pathname === "faqs/contact-and-support" ||
              pathname === "faqs/policies-and-terms" ? (
                <MdQuestionAnswer style={{ position: "relative", top: 2 }} />
              ) : (
                <MdOutlineQuestionAnswer
                  style={{ position: "relative", top: 2 }}
                />
              )}
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
              onClick={handleClickCloseDropdowns}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                {pathname === "activities/pending" ||
                pathname === "activities/done" ? (
                  <MdLocalActivity style={{ position: "relative", top: 2 }} />
                ) : (
                  <MdOutlineLocalActivity
                    style={{ position: "relative", top: 2 }}
                  />
                )}
                &nbsp;&nbsp; Actividades
              </span>
              <MdKeyboardArrowDown style={{ fontSize: 20, margin: "0 5px" }} />
            </div>
            <ul className="list-unstyled">
              <li>
                <Link
                  onClick={handleClickCloseMobileMenu}
                  href="/learning/students/activities/pending"
                >
                  {pathname === "activities/pending" ? (
                    <MdPending style={{ position: "relative", top: 2 }} />
                  ) : (
                    <MdOutlinePending
                      style={{ position: "relative", top: 2 }}
                    />
                  )}
                  &nbsp;&nbsp;Por hacer
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClickCloseMobileMenu}
                  href="/learning/students/activities/done"
                >
                  {pathname === "activities/done" ? (
                    <MdCheckCircle style={{ position: "relative", top: 2 }} />
                  ) : (
                    <MdOutlineCheckCircle
                      style={{ position: "relative", top: 2 }}
                    />
                  )}
                  &nbsp;&nbsp;Hecho
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              onClick={handleClickCloseMobileMenu}
              href="/learning/students/achievements"
            >
              {pathname === "achievements" ? (
                <MdAnalytics style={{ position: "relative", top: 2 }} />
              ) : (
                <MdOutlineAnalytics style={{ position: "relative", top: 2 }} />
              )}
              &nbsp;&nbsp; Mi progreso
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClickCloseMobileMenu}
              href="/learning/students/account"
            >
              {pathname === "account" ? (
                <MdAccountCircle style={{ position: "relative", top: 2 }} />
              ) : (
                <MdOutlineAccountCircle
                  style={{ position: "relative", top: 2 }}
                />
              )}
              &nbsp;&nbsp; Configuración
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClickCloseMobileMenu}
              href="/learning/students/help"
            >
              {pathname === "help" ? (
                <MdHelp style={{ position: "relative", top: 2 }} />
              ) : (
                <MdOutlineHelpOutline
                  style={{ position: "relative", top: 2 }}
                />
              )}
              &nbsp;&nbsp; Ayuda
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}
