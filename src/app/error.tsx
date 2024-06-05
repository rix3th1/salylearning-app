"use client";

import Footer from "@/components/ui/Footer";
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { MdSentimentVeryDissatisfied } from "react-icons/md";
import "./(pagina principal)/paginaprincipal.css";
import { plus_jakarta_sans } from "./fonts";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  const handleClick = () => {
    reset();
    signOut();
  };

  useEffect(() => {
    // Log the error to an error reporting service
    console.error({ error });
  }, [error]);

  return (
    <main className={plus_jakarta_sans.className}>
      <section className="py-5">
        <div className="container px-5">
          <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <article className="text-center mb-5">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                <MdSentimentVeryDissatisfied />
              </div>
              <h1 className="fw-bolder">Error Inesperado</h1>
              <p className="lead fw-normal text-muted mb-0">
                Lo sentimos, ha ocurrido un error inesperado.
              </p>
            </article>

            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6 text-center">
                <button
                  onClick={handleClick}
                  className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                >
                  Intentar Otra Vez
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
