import { FaCheck, FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function FooterLogged() {
  return (
    <footer className="footer full-reset">
      <div className="container-fluid">
        <div className="row">
          <article className="col-xs-12 col-sm-6">
            <h4 className="all-tittles">Acerca de</h4>
            <p>
              Somos tu compañero en el viaje hacia la maestría en lectura. En
              SALY LEARNING, nos dedicamos a brindar experiencias educativas y
              emocionantes que inspiran el amor por la lectura en niños. Nuestra
              plataforma ofrece actividades interactivas, cuentos cautivadores y
              desafíos creativos, diseñados para fortalecer las habilidades de
              lectura de manera divertida y efectiva.
            </p>
          </article>
          <section className="col-xs-12 col-sm-6">
            <h4 className="all-tittles">Equipo de trabajo</h4>
            <ul className="list-unstyled">
              <li>
                <FaCheck /> SANDRA MILENA MURCIA G &nbsp;&nbsp;&nbsp;
                <FaFacebook />
                &nbsp;&nbsp;&nbsp;
                <FaXTwitter />
              </li>
              <li>
                <FaCheck /> INGRID LISETH VELÁSQUEZ G&nbsp;&nbsp;&nbsp;
                <FaFacebook />
                &nbsp;&nbsp;&nbsp;
                <FaXTwitter />
              </li>
            </ul>
          </section>
        </div>
      </div>
      <summary className="footer-copyright full-reset all-tittles">
        SALY &copy; Todos los Derechos Reservados 2023
      </summary>
    </footer>
  );
}
