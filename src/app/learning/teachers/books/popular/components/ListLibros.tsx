import { obtenerLibrosPopulares } from "@/services/libros.service";
import Image from "next/image";
import ButtonMoreInfoBook from "./ButtonMoreInfoBook";

export default async function ListLibros() {
  const librosPopulares = await obtenerLibrosPopulares();

  if (!librosPopulares.length) {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="alert alert-warning">
            <p>En este momento no hay libros populares.</p>
          </div>
        </div>
      </div>
    );
  }

  return librosPopulares.map((libro: any, index: number) => (
    <div key={index} className="media media-hover" data-tiempo="semana">
      <div className="media-left media-middle">
        <Image
          className="media-object"
          src={libro.imagen_portada}
          alt={libro.nom_libro}
          width={60}
          height={60}
          quality={75}
          style={{ borderRadius: "5px" }}
        />
      </div>
      <div className="media-body">
        <h4 className="media-heading">{`"${libro.nom_libro}" de ${libro.autor}`}</h4>
        <div className="pull-left" style={{ fontWeight: "bold" }}>
          {libro.autor}
          <br />
          Publicación original: {new Date(libro.fecha_pub).getFullYear()}
        </div>
        <p className="text-center pull-right">
          <ButtonMoreInfoBook libro_descripcion={libro.descripcion} />
        </p>
      </div>
    </div>
  ));
}
