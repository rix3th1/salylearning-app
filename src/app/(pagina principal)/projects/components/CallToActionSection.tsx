import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="py-5 bg-gradient-primary-to-secondary text-white">
      <div className="container px-5 my-5 text-center">
        <h2 className="display-4 fw-bolder mb-4">
          Si quieres una aventura, lánzate a la lectura!
        </h2>
        <Link
          className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
          href="/"
        >
          Iniciar aventura
        </Link>
      </div>
    </section>
  );
}
