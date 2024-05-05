import {
  FaCheck,
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import team from "@/meta/team.json";

export default function FooterLogged() {
  return (
    <footer className="footer full-reset">
      <div className="container-fluid">
        <div className="row">
          <article className="col-xs-12 col-sm-6">
            <h4 className="all-tittles">Sobre nosotros</h4>
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
            <h4 className="all-tittles">Equipo de trabajo:</h4>
            <ul className="list-unstyled">
              {team.map((member, i) => (
                <li key={i}>
                  <FaCheck /> {member.name} &nbsp;
                  <FaFacebook />
                  &nbsp;
                  <FaXTwitter />
                  &nbsp;
                  <FaInstagram />
                  &nbsp;
                  <FaLinkedin />
                  &nbsp;
                  <FaGithub />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <summary className="footer-copyright full-reset all-tittles">
        SALY&copy; Todos los derechos reservados {new Date().getFullYear()}
      </summary>
    </footer>
  );
}
