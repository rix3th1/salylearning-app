import ayudaImage from "@/assets/ayuda.png";
import categoryImage from "@/assets/category.png";
import misLibrosImage from "@/assets/mis-libros.png";
import leyendoImage from "@/assets/niñoleyendo.jpeg";
import preguntaImage from "@/assets/pregunta_niño.png";
import rendimientoImage from "@/assets/rendimiento.png";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes: Docentes | Saly Learning",
};

export default function FaqsPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>
            SALY LEARNING <small>Preguntas frecuentes</small>
          </h1>
        </div>
      </div>
      <div className="container-fluid">
        <ul className="nav nav-tabs nav-justified" style={{ fontSize: 17 }}>
          <li role="presentation">
            <Link href="/learning/teachers/faqs/introduction">
              Introducción
            </Link>
          </li>
          <li role="presentation" className="active">
            <Link href="/learning/teachers/faqs">Preguntas frecuentes</Link>
          </li>
          <li role="presentation">
            <Link href="/learning/teachers/faqs/contact-and-support">
              Información de Contacto y Soporte
            </Link>
          </li>
          <li role="presentation">
            <Link href="/learning/teachers/faqs/policies-and-terms">
              Políticas y Términos
            </Link>
          </li>
        </ul>
      </div>
      <div className="container-fluid" style={{ margin: "50px 0" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-3">
            <Image
              src={categoryImage}
              alt="user"
              className="img-responsive center-box"
              style={{ maxWidth: 110, marginBottom: "20px" }}
              width={110}
              height={110}
              quality={100}
              priority
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
            {
              '¡Bienvenido a la sección de Preguntas Frecuentes de "Saly Learning"! Aquí encontrarás respuestas a las dudas más comunes sobre Saly. Explorando esta sección, podrás conocer más sobre el funcionamiento del software, cómo se integra en la institución educativa, y cómo acceder al soporte técnico en caso de necesitar ayuda. ¡Descubre todo lo que necesitas saber para aprovechar al máximo "Saly Learning" y mejorar la experiencia educativa!'
            }
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container-flat-form">
          <div className="title-flat-form title-flat-blue">
            Sobre el Software
          </div>

          <div className="row" style={{ marginBottom: "20px" }}>
            <div
              className="col-md-2 text-center"
              style={{ marginBottom: "20px" }}
            >
              <div className="float-start">
                <Image
                  src={leyendoImage}
                  alt="Niño leyendo"
                  width={200}
                  height={200}
                  style={{ minWidth: 200, borderRadius: "10px" }}
                  quality={100}
                  placeholder="blur"
                />
              </div>
            </div>

            <div className="col-md-10">
              <div
                className="content"
                style={{
                  backgroundColor: "#ced4da",
                  padding: "1.5rem",
                  borderRadius: "10px",
                  minHeight: 200,
                }}
              >
                <h4 style={{ fontWeight: "bold" }}>
                  {'¿Cómo funciona "Saly Learning"?'}
                </h4>
                <p className="all-parrafos">
                  Saly Learning utiliza una interfaz interactiva y actividades
                  diseñadas para mejorar la comprensión lectora. Los estudiantes
                  pueden acceder a lecciones, ejercicios y evaluaciones que se
                  adaptan a su nivel.
                </p>
              </div>
            </div>
            <hr />
          </div>

          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-md-10" style={{ marginBottom: "20px" }}>
              <div
                className="content"
                style={{
                  backgroundColor: "#ced4da",
                  padding: "1.5rem",
                  borderRadius: "10px",
                  minHeight: 200,
                }}
              >
                <h4 style={{ fontWeight: "bold" }}>
                  ¿Cómo puedo acceder a los contenidos de Saly Learning?
                </h4>
                <p className="all-parrafos" />
                <p>
                  Para acceder a los contenidos de Saly Learning, simplemente
                  inicia sesión en tu cuenta. Si eres nuevo, regístrate
                  proporcionando la información requerida. Los educadores tienen
                  el control del contenido que sus alumnos pueden ver,
                  asegurando una experiencia educativa personalizada.
                </p>
              </div>
            </div>

            <div className="col-md-2 text-center">
              <div className="float-end">
                <Image
                  width={200}
                  height={200}
                  style={{ minWidth: 200, borderRadius: "10px" }}
                  quality={100}
                  src={preguntaImage}
                  alt="Niño preguntando"
                  placeholder="blur"
                />
              </div>
            </div>
            <hr />
          </div>

          <div className="row" style={{ marginBottom: "20px" }}>
            <div
              className="col-md-2 text-center"
              style={{ marginBottom: "20px" }}
            >
              <div className="float-start">
                <Image
                  width={200}
                  height={200}
                  style={{ minWidth: 200, borderRadius: "10px" }}
                  quality={100}
                  src={rendimientoImage}
                  alt="Estadísticas"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="col-md-10">
              <div
                className="content"
                style={{
                  backgroundColor: "#ced4da",
                  padding: "1.5rem",
                  borderRadius: "10px",
                  minHeight: 200,
                }}
              >
                <h4 style={{ fontWeight: "bold" }}>
                  ¿Cómo puedo monitorear el progreso de mi hijo/a en Saly
                  Learning?
                </h4>
                <p className="all-parrafos">
                  Los educadores y padres pueden realizar un seguimiento del
                  progreso de los estudiantes utilizando la función de
                  estadísticas en Saly Learning. Esta herramienta proporciona
                  información detallada sobre el rendimiento académico,
                  permitiendo una evaluación precisa del progreso.
                </p>
              </div>
            </div>
            <hr />
          </div>

          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-md-10" style={{ marginBottom: "20px" }}>
              <div
                className="content"
                style={{
                  backgroundColor: "#ced4da",
                  padding: "1.5rem",
                  borderRadius: "10px",
                  minHeight: 200,
                }}
              >
                <h4 style={{ fontWeight: "bold" }}>
                  ¿Saly Learning es compatible con dispositivos móviles?
                </h4>
                <p className="all-parrafos">
                  Sí, Saly Learning es totalmente responsivo y compatible con
                  dispositivos móviles. Aunque la plataforma está diseñada para
                  computadoras, los usuarios pueden acceder a los contenidos
                  desde sus dispositivos móviles para una experiencia educativa
                  flexible.
                </p>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <div className="float-end">
                <Image
                  width={200}
                  height={200}
                  style={{ minWidth: 200, borderRadius: "10px" }}
                  quality={100}
                  src={misLibrosImage}
                  alt="Dispositivos móviles"
                  placeholder="blur"
                />
              </div>
            </div>
            <hr />
          </div>

          <div className="row" style={{ marginBottom: "20px" }}>
            <div
              className="col-md-2 text-center"
              style={{ marginBottom: "20px" }}
            >
              <div className="float-start">
                <Image
                  width={200}
                  height={200}
                  style={{ minWidth: 200, borderRadius: "10px" }}
                  quality={100}
                  src={ayudaImage}
                  alt="Contacto"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="col-md-10">
              <div
                className="content"
                style={{
                  backgroundColor: "#ced4da",
                  padding: "1.5rem",
                  borderRadius: "10px",
                  minHeight: 200,
                }}
              >
                <h4 style={{ fontWeight: "bold" }}>
                  ¿Cómo puedo contactar al soporte técnico de Saly Learning?
                </h4>
                <p className="all-parrafos">
                  Para cualquier pregunta o problema técnico, ponte en contacto
                  con nuestro equipo de soporte técnico. Completa nuestro
                  formulario de contacto en línea y nos comunicaremos contigo lo
                  antes posible para resolver cualquier inconveniente.
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
