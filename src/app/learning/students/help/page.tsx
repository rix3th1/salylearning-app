import ayudaImage from "@/assets/ayuda.png";
import porqueImage from "@/assets/porque.png";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ayuda: Estudiantes | Saly Learning",
};

export default function HelpPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>
            SALY LEARNING <small>Preguntas frecuentes</small>
          </h1>
        </div>
      </div>

      <section className="container-fluid">
        <div
          className="container-flat-form"
          style={{ backgroundColor: "#B7DEFA" }}
        >
          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-md-10" style={{ marginBottom: "20px" }}>
              <div
                className="content"
                style={{
                  backgroundColor: "#C6E4FA",
                  padding: "1.5rem",
                  borderRadius: "10px",
                  minHeight: 200,
                  boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h4 style={{ fontWeight: "bold" }}>
                  ¿Cómo puedo contactar al soporte técnico de Saly Learning?
                </h4>
                <p className="all-parrafos" />
                <p>
                  Para cualquier pregunta o problema técnico, ponte en contacto
                  con nuestro equipo de soporte técnico. Completa nuestro
                  formulario de contacto en línea y nos comunicaremos contigo lo
                  antes posible para resolver cualquier inconveniente.
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
                  src={ayudaImage}
                  alt="Niño preguntando"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-md-10" style={{ marginBottom: "20px" }}>
              <div
                className="content"
                style={{
                  backgroundColor: "#C6E4FA",
                  padding: "1.5rem",
                  borderRadius: "10px",
                  minHeight: 200,
                  boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h4 style={{ fontWeight: "bold" }}>
                  {'¿Cómo funciona "Saly Learning"?'}
                </h4>
                <p className="all-parrafos" />
                <p>
                  Saly Learning utiliza una interfaz interactiva y actividades
                  diseñadas para mejorar la comprensión lectora. Los estudiantes
                  pueden acceder a lecciones, ejercicios y evaluaciones que se
                  adaptan a su nivel.
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
                  src={ayudaImage}
                  alt="Niño preguntando"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-md-10" style={{ marginBottom: "20px" }}>
              <div
                className="content"
                style={{
                  backgroundColor: "#C6E4FA",
                  padding: "1.5rem",
                  borderRadius: "10px",
                  minHeight: 200,
                  boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
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
                  src={porqueImage}
                  alt="Niño preguntando"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-md-10" style={{ marginBottom: "20px" }}>
              <div
                className="content"
                style={{
                  backgroundColor: "#C6E4FA",
                  padding: "1.5rem",
                  borderRadius: "10px",
                  minHeight: 200,
                  boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h4 style={{ fontWeight: "bold" }}>
                  ¿Cómo puedo monitorear el progreso de mi hijo/a en Saly
                  Learning?
                </h4>
                <p className="all-parrafos" />
                <p>
                  Los educadores y padres pueden realizar un seguimiento del
                  progreso de los estudiantes utilizando la función de
                  estadísticas en Saly Learning. Esta herramienta proporciona
                  información detallada sobre el rendimiento académico,
                  permitiendo una evaluación precisa del progreso.
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
                  src={porqueImage}
                  alt="Niño preguntando"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-md-10" style={{ marginBottom: "20px" }}>
              <div
                className="content"
                style={{
                  backgroundColor: "#C6E4FA",
                  padding: "1.5rem",
                  borderRadius: "10px",
                  minHeight: 200,
                  boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h4 style={{ fontWeight: "bold" }}>
                  ¿Saly Learning es compatible con dispositivos móviles?
                </h4>
                <p className="all-parrafos" />
                <p>
                  Sí, Saly Learning es totalmente responsive y compatible con
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
                  src={porqueImage}
                  alt="Niño preguntando"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-md-10" style={{ marginBottom: "20px" }}>
              <div
                className="content"
                style={{
                  backgroundColor: "#C6E4FA",
                  padding: "1.5rem",
                  borderRadius: "10px",
                  minHeight: 200,
                  boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h4 style={{ fontWeight: "bold" }}>
                  ¿Cuál es el costo de suscripción a Saly Learning?
                </h4>
                <p className="all-parrafos" />
                <p>
                  Para los participantes del programa de nuestra institución, el
                  acceso a Saly Learning es gratuito. No hay costos de
                  suscripción asociados. Simplemente regístrate con tus
                  credenciales proporcionadas por la institución y comienza a
                  disfrutar de nuestros recursos educativos. Si tienes alguna
                  pregunta sobre el proceso de registro, no dudes en ponerte en
                  contacto con nuestro equipo de soporte.
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
                  src={porqueImage}
                  alt="Niño preguntando"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
