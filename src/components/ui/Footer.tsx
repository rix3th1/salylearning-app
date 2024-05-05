import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-4 mt-auto">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          <div className="col-auto">
            <div className="small m-0">
              SALY&copy; Todos los derechos reservados{" "}
              {new Date().getFullYear()}
            </div>
          </div>
          <div className="col-auto">
            <Link className="small" href="#">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
