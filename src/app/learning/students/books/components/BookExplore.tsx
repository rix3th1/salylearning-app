import Fallback from "@/components/Fallback";
import { obtenerGenerosLiterarios } from "@/services/generos-literarios.service";
import { Suspense } from "react";
import BooksCarrousel from "./BooksCarrousel";

export default async function BookExplore() {
  const generosLiterarios = await obtenerGenerosLiterarios.server();

  return (
    <div className="row">
      {generosLiterarios.map(async (genero: any, index: number) => (
        <div
          key={index}
          className="col-xs-12 col-sm-6 col-md-6 text-justify lead"
        >
          <div className="custom-tile">
            <h3>{genero.nom_genero}</h3>
            <p>{genero.descripcion}</p>

            <Suspense fallback={<Fallback />}>
              <BooksCarrousel nom_genero={genero.nom_genero} />
            </Suspense>
          </div>
        </div>
      ))}
    </div>
  );
}
