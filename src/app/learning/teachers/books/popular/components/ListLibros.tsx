import Image from "next/image";
import ButtonMoreInfoBook from "./ButtonMoreInfoBook";

interface IProps {
  libros: any;
}

export default function ListLibros({ libros }: IProps) {
  if (!libros.length) {
    return (
      <div className="text-center">
        <p>No hay libros disponibles para este género literario.</p>
      </div>
    );
  }

  return libros.map((libro: any, index: number) => (
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
