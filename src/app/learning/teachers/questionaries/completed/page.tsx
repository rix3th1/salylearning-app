import PageHeader from "@/app/learning/components/PageHeader";
import calendarBookImage from "@/assets/calendar_book.png";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MdSchedule } from "react-icons/md";

export const metadata: Metadata = {
  title: "Completados (Cuestionarios): Docentes | Saly Learning",
};

export default function CompletedQuestionariesPage() {
  return (
    <>
      <PageHeader title="Cuestionarios completos" />

      <div className="conteiner-fluid">
        <ul className="nav nav-tabs nav-justified" style={{ fontSize: 17 }}>
          <li className="active">
            <Link href="/learning/teachers/questionaries/completed">
              Completos
            </Link>
          </li>
          <li>
            <Link href="/learning/teachers/questionaries/pending">
              Incompletos
            </Link>
          </li>
          <li>
            <Link href="/learning/teachers/questionaries/not-achieved">
              No logrados
            </Link>
          </li>
        </ul>
      </div>
      <div className="container-fluid" style={{ margin: "50px 0" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-3">
            <Image
              src={calendarBookImage}
              alt="calendario"
              className="img-responsive center-box"
              style={{ maxWidth: 110 }}
              width={110}
              height={110}
              quality={100}
              priority
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
            ¡Bienvenido a esta sección! Aquí podrás visualizar el estado de tus
            proyectos, clasificados como completos, incompletos o no logrados.
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h2 className="text-center">Cuestionarios completos</h2>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr className="active">
                <th>No.</th>
                <th>Nombre de libro</th>
                <th>Nombre de usuario</th>
                <th>Grado</th>
                <th>Fecha asignado</th>
                <th>Fecha entrega</th>
                <th>Ver puntuación</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }, (_, i) => (
                <tr key={i} className="info">
                  <td>{i + 1}</td>
                  <td>El principito</td>
                  <td>Carlos</td>
                  <td>3</td>
                  <td>12/08/2021</td>
                  <td>12/08/2021</td>
                  <td>
                    <button className="btn btn-success">
                      <MdSchedule />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
