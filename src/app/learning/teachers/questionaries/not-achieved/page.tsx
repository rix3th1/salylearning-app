import PageHeader from "@/app/learning/components/PageHeader";
import calendarImage from "@/assets/calendar.png";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MdDescription } from "react-icons/md";

export const metadata: Metadata = {
  title: "No logrados (Cuestionarios): Docentes | Saly Learning",
};

export default function NotAchievedQuestionaries() {
  return (
    <>
      <PageHeader title="Cuestionarios no logrados" />

      <div className="conteiner-fluid">
        <ul className="nav nav-tabs nav-justified" style={{ fontSize: 17 }}>
          <li>
            <Link href="/learning/teachers/questionaries/completed">
              Completos
            </Link>
          </li>
          <li>
            <Link href="/learning/teachers/questionaries/pending">
              Incompletos
            </Link>
          </li>
          <li className="active">
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
              src={calendarImage}
              alt="clock"
              className="img-responsive center-box"
              style={{ maxWidth: 110 }}
              width={110}
              height={110}
              quality={100}
              priority
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
            ¡Bienvenido a esta sección! Aquí encontrarás una lista de
            cuestionarios que aún no se han completado. ¡Anímate a retomarlos y
            avanzar en tu progreso!
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h2 className="text-center">Listado de no logrados</h2>

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
                <th>Estado</th>
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
                    <span className="label label-danger">No logrado</span>
                  </td>
                  <td>
                    <button className="btn btn-info">
                      <MdDescription />
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
