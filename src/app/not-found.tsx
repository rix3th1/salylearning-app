import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { MdOutlineSentimentVeryDissatisfied } from "react-icons/md";
import "./(pagina principal)/paginaprincipal.css";
import { plus_jakarta_sans } from "./fonts";

export default function NotFoundPage() {
  return (
    <main className={plus_jakarta_sans.className}>
      <section className="py-5">
        <div className="container px-5">
          <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <article className="text-center mb-5">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                <MdOutlineSentimentVeryDissatisfied />
              </div>
              <h1 className="fw-bolder">Error 404</h1>
              <p className="lead fw-normal text-muted mb-0">
                Lo sentimos, la página que buscas no existe.
              </p>
            </article>

            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6 text-center">
                <Link
                  href="/"
                  className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                >
                  Volver al Inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
