import PageHeader from "@/app/learning/components/PageHeader";
import sectionImage from "@/assets/section.png";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactAndSupportForm from "./components/ContactAndSupportForm";

export const metadata: Metadata = {
  title: "Contacto & Soporte: Docentes | Saly Learning",
};

export default function ContactAndSupportPage() {
  return (
    <>
      <PageHeader title="Contacto y Soporte" />

      <div className="container-fluid">
        <ul className="nav nav-tabs nav-justified" style={{ fontSize: 17 }}>
          <li role="presentation">
            <Link href="/learning/teachers/faqs/introduction">
              Introducción
            </Link>
          </li>
          <li role="presentation">
            <Link href="/learning/teachers/faqs">Preguntas frecuentes</Link>
          </li>
          <li role="presentation" className="active">
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
              src={sectionImage}
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
            ¡Bienvenido a la sección de contacto y soporte!
            <br />
            En esta área, puedes comunicarte con nosotros para cualquier
            pregunta, inquietud o asistencia que necesites. Estamos aquí para
            ayudarte. Por favor, completa el formulario a continuación para que
            podamos atender tu solicitud de la mejor manera posible.
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div
          className="container-flat-form"
          style={{ backgroundColor: "#dee2e6" }}
        >
          <ContactAndSupportForm />
          <p style={{ paddingTop: "3rem" }}>
            ¡Gracias por elegirnos! Estamos ansiosos por atenderte y
            proporcionarte la mejor experiencia posible.
          </p>
          <p style={{ fontStyle: "italic" }}>Equipo de Soporte SALY LEARNING</p>
        </div>
      </div>
    </>
  );
}
