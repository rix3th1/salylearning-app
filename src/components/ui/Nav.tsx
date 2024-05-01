import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container px-5">
        <Link className="navbar-brand" href="/">
          <span className="fw-bolder text-primary">SALY LEARNING</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/resume">
                ¿Listos para aprender?
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/projects">
                ¿Por qué nosotros?
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contáctenos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
