import { obtenerContadoresParaEstudiantes } from "@/services/contadores.service";
import Link from "next/link";
import { tilesData } from "../meta/tilesData";

export default async function CounterSection() {
  const contadores = await obtenerContadoresParaEstudiantes();

  return tilesData.map((tile, index) => (
    <article key={index} className="tile">
      <div className="tile-icon full-reset">
        <tile.icon />
      </div>
      <div className="tile-name">
        <Link href={tile.link}>{tile.name}</Link>
      </div>
      <div className="tile-num full-reset">
        {contadores[tile.counterIndex] > 0 ? (
          contadores[tile.counterIndex]
        ) : (
          <span style={{ fontSize: "18px" }}>
            {tile.noDataText ?? "Ninguno."}
          </span>
        )}
      </div>
    </article>
  ));
}
