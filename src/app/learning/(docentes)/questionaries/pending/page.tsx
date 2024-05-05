import clockImage from "@/assets/clock.png";
import Image from "next/image";
import Link from "next/link";
import { MdSchedule } from "react-icons/md";

export default function PendingQuestionaries() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-tittles">
            SALY LEARNING <small>Cuestionarios incompletos</small>
          </h1>
        </div>
      </div>
      <div className="conteiner-fluid">
        <ul className="nav nav-tabs nav-justified" style={{ fontSize: 17 }}>
          <li>
            <Link href="/learning/questionaries/completed">Completos</Link>
          </li>
          <li className="active">
            <Link href="/learning/questionaries/pending">Incompletos</Link>
          </li>
          <li>
            <Link href="/learning/questionaries/not-achieved">No logrados</Link>
          </li>
        </ul>
      </div>
      <div className="container-fluid" style={{ margin: "50px 0" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-3">
            <Image
              src={clockImage}
              alt="calendar"
              className="img-responsive center-box"
              style={{ maxWidth: 110 }}
              width={110}
              height={110}
              quality={100}
              priority
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
            ¡Bienvenido a esta sección! Aquí podrás revisar los cuestionarios
            que aún están incompletos. ¡Anímate a retomarlos y trabajar para
            completarlos!
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h2 className="text-center all-tittles">
          Listado de cuestionarios pendientes
        </h2>

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
