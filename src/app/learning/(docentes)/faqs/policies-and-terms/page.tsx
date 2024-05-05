import userImage from "@/assets/user04.png";
import Image from "next/image";
import Link from "next/link";

export default function PoliciesAndTermsPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-tittles">
            SALY LEARNING <small>Políticas y términos</small>
          </h1>
        </div>
      </div>
      <div className="container-fluid">
        <ul className="nav nav-tabs nav-justified" style={{ fontSize: 17 }}>
          <li role="presentation">
            <Link href="/learning/faqs/introduction">Introducción</Link>
          </li>
          <li role="presentation">
            <Link href="/learning/faqs">Preguntas frecuentes</Link>
          </li>
          <li role="presentation">
            <Link href="/learning/faqs/contact-and-support">
              Información de Contacto y Soporte
            </Link>
          </li>
          <li role="presentation" className="active">
            <Link href="/learning/faqs/policies-and-terms">
              Políticas y Términos
            </Link>
          </li>
        </ul>
      </div>
      <div className="container-fluid" style={{ margin: "50px 0" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-3">
            <Image
              src={userImage}
              alt="user"
              className="img-responsive center-box"
              style={{ maxWidth: 110 }}
              width={110}
              height={110}
              quality={100}
              priority
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
            En una sección de políticas y términos de Saly Learning, se brindara
            información clave que brinde claridad y transparencia a los usuarios
            sobre cómo se manejan ciertos aspectos de la plataforma.
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container-flat-form">
          <div className="row">
            {/* Columna de Políticas de Privacidad */}
            <div className="col-md-4">
              <h2>Políticas de Privacidad</h2>
              <h3>Recopilación de Información.</h3>
              <p className="all-parrafos">
                Saly Learning recopila información personal limitada necesaria
                para proporcionar servicios educativos personalizados. Esto
                incluye el nombre del usuario, dirección de correo electrónico y
                datos de rendimiento en la plataforma.
              </p>
              <h3>Uso de la Información</h3>
              <p className="all-parrafos">
                La información recopilada se utiliza para adaptar el contenido
                educativo a las necesidades individuales del usuario, mejorar la
                experiencia de aprendizaje y enviar comunicaciones relacionadas
                con el servicio.
              </p>
              <h3>Seguridad</h3>
              <p className="all-parrafos">
                Implementamos medidas de seguridad física, electrónica y
                administrativa para proteger la información del usuario. Sin
                embargo, no podemos garantizar la seguridad absoluta en la
                transmisión de datos por Internet.
              </p>
              <h3>Cookies</h3>
              <p className="all-parrafos">
                Utilizamos cookies para mejorar la experiencia del usuario. Los
                usuarios pueden gestionar las preferencias de cookies a través
                de la configuración del navegador.
              </p>
            </div>
            {/* Columna de Términos de Servicio */}
            <div className="col-md-4">
              <h2>Términos de Servicio</h2>
              <h3>Condiciones de Uso</h3>
              <p className="all-parrafos">
                Al acceder y utilizar Saly Learning, los usuarios aceptan
                cumplir con nuestros términos de servicio. Se espera que los
                usuarios respeten las normas y regulaciones establecidas.
              </p>
              <h3>Responsabilidades del Usuario</h3>
              <p className="all-parrafos">
                Los usuarios son responsables de mantener la confidencialidad de
                su información de inicio de sesión y deben notificar cualquier
                uso no autorizado de su cuenta.
              </p>
              <h3>Propiedad Intelectual</h3>
              <p className="all-parrafos">
                Saly Learning retiene los derechos de propiedad intelectual
                sobre el contenido proporcionado en la plataforma. Los usuarios
                pueden utilizar el contenido solo con fines educativos y no
                comerciales.
              </p>
              <h3>Limitaciones de Responsabilidad</h3>
              <p className="all-parrafos">
                Saly Learning no se hace responsable de cualquier pérdida de
                datos, interrupciones del servicio o daños indirectos derivados
                del uso de la plataforma.
              </p>
            </div>
            {/* Columna de Normas de Conducta */}
            <div className="col-md-4">
              <h2>Normas de Conducta</h2>
              <h3>Comportamiento Aceptable</h3>
              <p className="all-parrafos">
                Los usuarios deben respetar a otros miembros de la comunidad y
                adherirse a las normas éticas durante la interacción en la
                plataforma. Se espera un comportamiento respetuoso y
                colaborativo.
              </p>
              <h3>Prohibiciones</h3>
              <p className="all-parrafos">
                Está prohibido el uso de Saly Learning para actividades
                ilegales, difamatorias, o que violen los derechos de propiedad
                intelectual de terceros. El spam y cualquier forma de abuso
                también están estrictamente prohibidos.
              </p>
              <p />
              <h3>Resolución de Conflictos</h3>
              <p className="all-parrafos">
                Las disputas entre usuarios y la plataforma serán abordadas de
                manera justa y rápida. Los usuarios pueden presentar
                reclamaciones a través de nuestro servicio de atención al
                cliente.
              </p>
              <h3>Cancelación de Cuenta</h3>
              <p className="all-parrafos">
                Saly Learning se reserva el derecho de cancelar la cuenta de un
                usuario en caso de violación de los términos de servicio o por
                razones de seguridad.
              </p>
              <h3>Actualizaciones y Cambios</h3>
              <p className="all-parrafos">
                Los usuarios serán notificados por correo electrónico sobre
                cambios importantes en las políticas y términos. Se espera que
                los usuarios revisen regularmente las actualizaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
