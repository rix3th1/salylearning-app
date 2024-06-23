import { mapDataCarrousel } from "@/app/learning/libs";
import Carrousel from "@/app/learning/teachers/books/new/components/Carrousel";
import { obtenerLibrosPorGeneroLiterario } from "@/services/libros.service";
import { MdWarning } from "react-icons/md";

interface IProps {
  nom_genero: string;
}

export default async function BooksCarrousel({ nom_genero }: IProps) {
  const libros = await obtenerLibrosPorGeneroLiterario(nom_genero);
  const images: [] = mapDataCarrousel(libros, true);

  return (
    <div className="container-items">
      {images.length > 0 ? (
        <Carrousel items={images} />
      ) : (
        <article
          className="tile"
          style={{ margin: "2rem 0", padding: "0.5rem" }}
        >
          <div className="text-center">
            <MdWarning />
          </div>
          <span style={{ fontSize: "15px" }}>
            Aún no hay libros disponibles para este género literario.
          </span>
        </article>
      )}
    </div>
  );
}
