import Image from "next/image";
import Link from "next/link";

export default function IntroductionPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-tittles">
            SALY LEARNING <small>Introducción</small>
          </h1>
        </div>
      </div>
      <div className="container-fluid">
        <ul className="nav nav-tabs nav-justified" style={{ fontSize: 17 }}>
          <li role="presentation" className="active">
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
          <li role="presentation">
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
              src="/img/guia.png"
              alt="user"
              className="img-responsive center-box"
              style={{ maxWidth: 160 }}
              width={160}
              height={160}
              quality={100}
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
            Bienvenidos a &quote;Saly Learning&quote;, permítenos proporcionarte
            una visión detallada de lo que nuestra plataforma educativa tiene
            para ofrecer. En esta introducción, exploraremos los objetivos
            centrales de &quote;Saly Learning&quote;, destacaremos sus
            características interactivas, abordaremos la adaptabilidad a
            diferentes niveles educativos y presentaremos cómo los educadores
            pueden hacer un seguimiento del progreso de los estudiantes.
            Descubre cómo &quote;Saly Learning&quote; está comprometido con
            brindar una experiencia educativa segura y personalizada, y cómo
            puedes unirte a nosotros para impulsar la comprensión lectora de los
            niños de manera emocionante y efectiva.
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container-flat-form">
          {/* Presentación General */}
          <div className="card shadow border-0 rounded-4 mb-5">
            <div
              className="card-body p-5"
              style={{ marginBottom: "3rem", marginTop: "1rem" }}
            >
              <p className="all-parrafos">
                &quote;Saly Learning&quote; es más que una plataforma educativa;
                es un espacio diseñado para mejorar la comprensión lectora de
                los niños de educación primaria. Nuestra misión es fomentar el
                amor por la lectura y proporcionar herramientas interactivas que
                hagan que el aprendizaje sea emocionante y significativo.
              </p>
            </div>
          </div>
          {/* Objetivos de Saly Learning */}
          <div className="card shadow border-0 rounded-4 mb-5">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="bg-light p-4 rounded-4 shadow d-flex align-items-center justify-content-center">
                  <Image
                    className="img-fluid"
                    src="/img/pregunta_niño.jpeg"
                    alt="Pregunta"
                    width={400}
                    height={400}
                    quality={100}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body p-5">
                  <h3 style={{ fontWeight: "bold" }}>Objetivos Principales</h3>
                  <p className="all-parrafos">
                    En &quote;Saly Learning&quote;, nos comprometemos a
                    desarrollar las habilidades de lectura en niños de 7 años en
                    adelante. Nuestro objetivo es proporcionar una experiencia
                    educativa envolvente y adaptativa que inspire el aprendizaje
                    continuo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Experiencia Interactiva */}
          <div className="card shadow border-0 rounded-4 mb-5">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="card-body p-5">
                  <h3 style={{ fontWeight: "bold" }}>
                    Experiencia Educativa Interactiva
                  </h3>
                  <p className="all-parrafos">
                    Sumérgete en una experiencia educativa única con &quote;Saly
                    Learning&quote;. Nuestra plataforma ofrece lecciones
                    interactivas, cuestionarios y actividades diseñadas para
                    mejorar la comprensión lectora. Los estudiantes pueden
                    participar activamente, haciendo que el aprendizaje sea
                    divertido y efectivo.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-light p-4 rounded-4 shadow d-flex align-items-center justify-content-center">
                  <Image
                    className="img-fluid"
                    src="/img/pregunta_niño.jpeg"
                    alt="Pregunta"
                    width={400}
                    height={400}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Adaptabilidad a Diferentes Niveles */}
          <div className="card shadow border-0 rounded-4 mb-5">
            <div className="row g-0">
              <div className="col-md-6 order-md-2 d-flex align-items-center justify-content-center">
                <div className="bg-light p-4 rounded-4 shadow">
                  <Image
                    className="img-fluid"
                    src="/img/pregunta_niño.jpeg"
                    alt="Pregunta"
                    width={400}
                    height={400}
                    quality={100}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body p-5">
                  <h3 style={{ fontWeight: "bold" }}>
                    Adaptabilidad Personalizada
                  </h3>
                  <p className="all-parrafos">
                    Entendemos que cada estudiante es único. Por eso,
                    &quote;Saly Learning&quote; se adapta a diferentes niveles
                    educativos, personalizando el contenido según las
                    necesidades individuales de cada estudiante. La educación
                    personalizada es la clave de nuestro enfoque.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Control Educativo */}
          <div className="card shadow border-0 rounded-4 mb-5">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="card-body p-5">
                  <h3 style={{ fontWeight: "bold" }}>
                    Control en Manos de los Educadores
                  </h3>
                  <p className="all-parrafos">
                    Los educadores tienen el control total sobre el contenido
                    que sus alumnos pueden acceder en &quote;Saly
                    Learning&quote;. Esta función asegura un entorno educativo
                    seguro y personalizado, donde cada estudiante recibe la
                    atención que merece.
                  </p>
                </div>
              </div>
              <div className="col-md-6 order-md-2 d-flex align-items-center justify-content-center">
                <div className="bg-light p-4 rounded-4 shadow">
                  <Image
                    className="img-fluid"
                    src="/img/pregunta_niño.jpeg"
                    alt="Pregunta"
                    width={400}
                    height={400}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Estadísticas y Seguimiento del Progreso */}
          <div className="card shadow border-0 rounded-4 mb-5">
            <div className="row g-0">
              <div className="col-md-6 order-md-2 d-flex align-items-center justify-content-center">
                <div className="bg-light p-4 rounded-4 shadow">
                  <Image
                    className="img-fluid"
                    src="/img/pregunta_niño.jpeg"
                    alt="Pregunta"
                    width={400}
                    height={400}
                    quality={100}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body p-5">
                  <h3 style={{ fontWeight: "bold" }}>
                    Seguimiento del Progreso
                  </h3>
                  <p className="all-parrafos">
                    Con nuestra herramienta de estadísticas, los educadores y
                    padres pueden realizar un seguimiento detallado del progreso
                    de los estudiantes. Observa cómo avanzan, identifica áreas
                    de mejora y celebra los logros en el viaje educativo de cada
                    niño.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Plataforma Responsiva */}
          <div className="card shadow border-0 rounded-4 mb-5">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="card-body p-5">
                  <h3 style={{ fontWeight: "bold" }}>
                    Acceso desde Cualquier Lugar
                  </h3>
                  <p className="all-parrafos">
                    &quote;Saly Learning&quote; es totalmente responsivo y
                    compatible con dispositivos móviles. Accede a la plataforma
                    desde cualquier lugar y en cualquier momento, brindando
                    flexibilidad a los estudiantes para aprender a su propio
                    ritmo.
                  </p>
                </div>
              </div>
              <div className="col-md-6 order-md-2 d-flex align-items-center justify-content-center">
                <div className="bg-light p-4 rounded-4 shadow">
                  <Image
                    className="img-fluid"
                    src="/img/pregunta_niño.jpeg"
                    alt="Pregunta"
                    width={400}
                    height={400}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Compromiso con la Seguridad */}
          <div className="card shadow border-0 rounded-4 mb-5">
            <div className="row g-0">
              <div className="col-md-6 order-md-2 d-flex align-items-center justify-content-center">
                <div className="bg-light p-4 rounded-4 shadow">
                  <Image
                    className="img-fluid"
                    src="/img/pregunta_niño.jpeg"
                    alt="Pregunta"
                    width={400}
                    height={400}
                    quality={100}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body p-5">
                  <h3 style={{ fontWeight: "bold" }}>Seguridad Garantizada</h3>
                  <p className="all-parrafos">
                    Nos comprometemos a proporcionar un entorno seguro en
                    &quote;Saly Learning&quote;. Implementamos medidas de
                    seguridad para proteger la privacidad y la integridad de
                    nuestros usuarios, garantizando una experiencia educativa
                    confiable.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Invitación a Participar */}
          <div className="card shadow border-0 rounded-4 mb-5">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="card-body p-5">
                  <h3 style={{ fontWeight: "bold" }}>Únete a Nosotros</h3>
                  <p className="all-parrafos">
                    Te invitamos a unirte a &quote;Saly Learning&quote; y
                    explorar el emocionante mundo del aprendizaje interactivo.
                    Descubre cómo podemos trabajar juntos para fortalecer las
                    habilidades de lectura de los niños y prepararlos para un
                    futuro lleno de conocimiento y éxito.
                  </p>
                </div>
              </div>
              <div className="col-md-6 order-md-2 d-flex align-items-center justify-content-center">
                <div className="bg-light p-4 rounded-4 shadow">
                  <Image
                    className="img-fluid"
                    src="/img/pregunta_niño.jpeg"
                    alt="Pregunta"
                    width={400}
                    height={400}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
