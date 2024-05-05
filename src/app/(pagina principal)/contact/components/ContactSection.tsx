import ContactForm from "./ContactForm";
import { MdCall } from "react-icons/md";

export default function ContactSection() {
  return (
    <section className="py-5">
      <div className="container px-5">
        {/* Contact form */}
        <div className="bg-light rounded-4 py-5 px-4 px-md-5">
          <article className="text-center mb-5">
            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
              <MdCall />
            </div>
            <h1 className="fw-bolder">Póngase en contacto</h1>
            <p className="lead fw-normal text-muted mb-0">Trabajemos juntos</p>
          </article>

          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
