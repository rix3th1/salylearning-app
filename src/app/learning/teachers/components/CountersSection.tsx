import { obtenerContadoresParaDocentes } from "@/services/contadores.service";
import Link from "next/link";
import { tilesData } from "../meta/tilesData";

export default async function CountersSection() {
  const contadores = await obtenerContadoresParaDocentes();

  return (
    <section className="full-reset text-center" style={{ padding: "40px 0" }}>
      {tilesData.map((tile, index) => (
        <article key={index} className="tile">
          <div className="tile-icon full-reset">
            <tile.icon />
          </div>
          <div className="tile-name">
            <Link href={tile.link}>{tile.name}</Link>
          </div>
          <div className="tile-num full-reset">
            {tile.counterIndex !== null ? (
              contadores[tile.counterIndex] ? (
                contadores[tile.counterIndex]
              ) : (
                <span style={{ fontSize: "18px" }}>
                  {tile.noDataText ?? "Ninguno."}
                </span>
              )
            ) : (
              <>&nbsp;</>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
