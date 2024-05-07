import ayudaImage from "@/assets/ayuda.png";
import porqueImage from "@/assets/porque.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayuda: Estudiantes | Saly Learning",
};

export default function HelpPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-titles">
            SALY LEARNING <small>Inicio</small>
          </h1>
        </div>
      </div>
      <section className="section-help">
        <div className="row-help">
          <div className="column-help">
            <img src={ayudaImage.src} alt="Imagen 1" />
            <h4>¿Cómo puedo contactar al soporte técnico de Saly Learning?</h4>
            <p>
              Para cualquier pregunta o problema técnico, ponte en contacto con
              nuestro equipo de soporte técnico. Completa nuestro formulario de
              contacto en línea y nos comunicaremos contigo lo antes posible
              para resolver cualquier inconveniente.
            </p>
          </div>
          <div className="column-help1">
            <img src={ayudaImage.src} alt="Imagen 2" />
            <h4>{'¿Cómo funciona "Saly Learning"?'}</h4>
            <p>
              Saly Learning utiliza una interfaz interactiva y actividades
              diseñadas para mejorar la comprensión lectora. Los estudiantes
              pueden acceder a lecciones, ejercicios y evaluaciones que se
              adaptan a su nivel.
            </p>
          </div>
        </div>
        <div className="row-help">
          <div className="column-help">
            <img src={porqueImage.src} alt="Imagen 3" />
            <h4>¿Cómo puedo acceder a los contenidos de Saly Learning?</h4>
            <p>
              Para acceder a los contenidos de Saly Learning, simplemente inicia
              sesión en tu cuenta. Si eres nuevo, regístrate proporcionando la
              información requerida. Los educadores tienen el control del
              contenido que sus alumnos pueden ver, asegurando una experiencia
              educativa personalizada.
            </p>
          </div>
          <div className="column-help1">
            <img src={porqueImage.src} alt="Imagen 4" />
            <h4>
              ¿Cómo puedo monitorear el progreso de mi hijo/a en Saly Learning?
            </h4>
            <p>
              Los educadores y padres pueden realizar un seguimiento del
              progreso de los estudiantes utilizando la función de estadísticas
              en Saly Learning. Esta herramienta proporciona información
              detallada sobre el rendimiento académico, permitiendo una
              evaluación precisa del progreso.
            </p>
          </div>
        </div>
        <div className="row-help">
          <div className="column-help">
            <img src={porqueImage.src} alt="Imagen 5" />
            <h4>¿Saly Learning es compatible con dispositivos móviles?</h4>
            <p>
              Sí, Saly Learning es totalmente responsivo y compatible con
              dispositivos móviles. Aunque la plataforma está diseñada para
              computadoras, los usuarios pueden acceder a los contenidos desde
              sus dispositivos móviles para una experiencia educativa flexible.
            </p>
          </div>
          <div className="column-help1">
            <img src={porqueImage.src} alt="Imagen 6" />
            <h4>¿Cuál es el costo de suscripción a Saly Learning?</h4>
            <p>
              Para los participantes del programa de nuestra institución, el
              acceso a Saly Learning es gratuito. No hay costos de suscripción
              asociados. Simplemente regístrate con tus credenciales
              proporcionadas por la institución y comienza a disfrutar de
              nuestros recursos educativos. Si tienes alguna pregunta sobre el
              proceso de registro, no dudes en ponerte en contacto con nuestro
              equipo de soporte.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
