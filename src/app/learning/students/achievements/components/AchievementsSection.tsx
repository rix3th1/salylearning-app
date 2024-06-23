import { obtenerContadoresLogros } from "@/services/achievements.service";
import Image from "next/image";
import { generarLogros } from "../libs";
import { achievementsData, medalsData } from "../meta";

export default async function AchievementsSection() {
  const contadoresLogros = await obtenerContadoresLogros();
  const logrosHistorial = generarLogros(contadoresLogros);

  return (
    <>
      <div className="subcolumna">
        <div className="table-responsive" style={{ width: "100%" }}>
          <table className="tabla">
            <tbody>
              <tr>
                {achievementsData.map((achievement, index) => (
                  <td key={index} className="tabla-logros">
                    <h4>{achievement.title}</h4>
                    <p
                      id={`logros-${achievement.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {contadoresLogros[index]} {achievement.unit}
                    </p>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="subcolumna">
        <div className="row">
          <div className="col-md-12">
            <h4 style={{ marginBottom: "2rem" }}>Medallas Ganadas</h4>
            {medalsData.map((medal, index) =>
              contadoresLogros[index] >= medal.threshold ? (
                <div key={index} className="col-md-4">
                  <Image
                    src={medal.imgSrc}
                    alt={medal.alt}
                    className="img-logros"
                    width={200}
                    height={300}
                    quality={100}
                    placeholder="blur"
                  />
                  <p>{medal.title}</p>
                </div>
              ) : (
                <div key={index} className="col-md-4">
                  <p>{medal.noMedalText}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="subcolumna">
        <div className="row">
          <div className="col-md-12">
            <h4>Historial de Logros</h4>
            <ul className="list-group" style={{ color: "#317DFF" }}>
              {logrosHistorial.length > 0 ? (
                logrosHistorial.map((logro, i) => (
                  <li key={i} className="list-group-item">
                    {logro}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No se han logrado logros.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
