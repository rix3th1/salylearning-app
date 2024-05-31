import { obtenerContadoresParaDocentes } from "@/services/contadores.service";
import type { Metadata } from "next";
import Link from "next/link";
import {
  MdAssignmentInd,
  MdBookmarkBorder,
  MdCalendarMonth,
  MdLibraryBooks,
  MdOutlineRestore,
  MdPeople,
  MdTrendingUp,
} from "react-icons/md";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Inicio: Docentes | Saly Learning",
};

export default async function HomePage() {
  const contadores = await obtenerContadoresParaDocentes();

  return (
    <>
      <PageHeader title="Inicio" />

      <section className="full-reset text-center" style={{ padding: "40px 0" }}>
        <article className="tile">
          <div className="tile-icon full-reset">
            <MdPeople />
          </div>
          <div className="tile-name">
            <Link href="/learning/teachers/reports">Grados</Link>
          </div>
          <div className="tile-num full-reset">
            {contadores[0] ? (
              contadores[0]
            ) : (
              <span style={{ fontSize: "18px" }}>Ninguno.</span>
            )}
          </div>
        </article>

        <article className="tile">
          <div className="tile-icon full-reset">
            <MdLibraryBooks />
          </div>
          <div className="tile-name">
            <Link href="/learning/teachers/books/new">Libros</Link>
          </div>
          <div className="tile-num full-reset">
            {contadores[1] > 0 ? (
              contadores[1]
            ) : (
              <span style={{ fontSize: "18px" }}>No hay libros.</span>
            )}
          </div>
        </article>

        <article className="tile">
          <div className="tile-icon full-reset">
            <MdBookmarkBorder />
          </div>
          <div className="tile-name">
            <Link href="/learning/teachers/books/popular">
              Géneros literarios
            </Link>
          </div>
          <div className="tile-num full-reset">
            {contadores[2] ? (
              contadores[2]
            ) : (
              <span style={{ fontSize: "18px" }}>Ninguno.</span>
            )}
          </div>
        </article>

        <article className="tile">
          <div className="tile-icon full-reset">
            <MdAssignmentInd />
          </div>
          <div className="tile-name">
            <Link href="/learning/teachers/questionaries/pending">
              Preguntas pendientes
            </Link>
          </div>
          <div className="tile-num full-reset">{contadores[3]}</div>
        </article>

        <article className="tile">
          <div className="tile-icon full-reset">
            <MdOutlineRestore />
          </div>
          <div className="tile-name" style={{ width: "90%" }}>
            <Link href="/learning/teachers/questionaries/not-achieved">
              Cuestionarios no logrados
            </Link>
          </div>
          <div className="tile-num full-reset">{contadores[4]}</div>
        </article>

        <article className="tile">
          <div className="tile-icon full-reset">
            <MdCalendarMonth />
          </div>
          <div className="tile-name">
            <Link href="/learning/teachers/questionaries/completed">
              Cuestionarios completados
            </Link>
          </div>
          <div className="tile-num full-reset">{contadores[5]}</div>
        </article>

        <article className="tile">
          <div className="tile-icon full-reset">
            <MdTrendingUp />
          </div>
          <div className="tile-name" style={{ width: "90%" }}>
            <Link href="/learning/teachers/statistics">
              Reportes y Estadísticas
            </Link>
          </div>
          <div className="tile-num full-reset">&nbsp;</div>
        </article>
      </section>
    </>
  );
}
