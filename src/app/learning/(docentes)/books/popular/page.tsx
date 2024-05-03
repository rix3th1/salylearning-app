import Image from "next/image";
import { MdInfo, MdSearch } from "react-icons/md";

export default function PopularBooksPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-tittles">
            SALY LEARNING <small>Libros populares</small>
          </h1>
        </div>
      </div>
      <div className="container-fluid" style={{ margin: "40px 0" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-3">
            <Image
              src="/img/checklist.png"
              alt="pdf"
              className="img-responsive center-box"
              width={110}
              height={110}
              quality={100}
              priority
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
            ¡Bienvenidos a nuestra encantadora sección de libros populares!
            Aquí, en el mágico rincón de la lectura, nos emociona compartir
            historias cautivadoras y aventuras inolvidables diseñadas
            especialmente para los pequeños exploradores de la imaginación.
            <br />
            Si deseas buscar un libro por nombre o título has click en el icono
            &nbsp;
            <MdSearch />
            &nbsp; que se encuentra en la barra superior
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ margin: "0 0 50px 0" }}>
        <h2 className="text-center" style={{ margin: "0 0 25px 0" }}>
          POPULARES
        </h2>
      </div>

      <div className="container-fluid" id="libros-container">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="media media-hover" data-tiempo="semana">
            <div className="media-left media-middle">
              <a
                href="#!"
                className="tooltips-general"
                data-toggle="tooltip"
                data-placement="right"
                title="Más información del libro"
              >
                <Image
                  className="media-object"
                  src="/img/matilda.jpg"
                  alt="Libro"
                  width={60}
                  height={60}
                  quality={75}
                />
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">Matilda, de Roald Dahl</h4>
              <div className="pull-left">
                <strong>Roald Dahl</strong>
                <br />
                <strong>publicación original: 1 de octubre de 1988</strong>
                <br />
              </div>
              <p className="text-center pull-right">
                <a
                  href="https://es.wikipedia.org/wiki/Matilda"
                  className="btn btn-info btn-xs"
                  style={{ marginRight: 10 }}
                >
                  <MdInfo /> Más información
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
