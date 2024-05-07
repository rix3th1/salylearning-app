import type { Metadata } from "next";
import Link from "next/link";
import { MdFavorite } from "react-icons/md";

export const metadata: Metadata = {
  title: "Leer Libro: Estudiantes | Saly Learning",
};

export default function ReadBookPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-titles">
            SALY LEARNING <small>Inicio</small>
          </h1>
        </div>
      </div>

      <section id="contenido">
        <div className="container-fluid">
          <div className="container-fluid">
            <div className="row">
              <div className="container-fluid">
                <div id="contenido1" style={{ display: "none" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 0,
                      paddingTop: "56.25%",
                      paddingBottom: 0,
                      boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
                      marginTop: "1.6em",
                      marginBottom: "0.9em",
                      overflow: "hidden",
                      borderRadius: 8,
                      willChange: "transform",
                    }}
                  >
                    <iframe
                      loading="lazy"
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        border: "none",
                        padding: 0,
                        margin: 0,
                      }}
                      src="https://www.canva.com/design/DAFyL7BxLac/uDlt9O3bX-8pazs00AGf-A/view?embed"
                      allowFullScreen
                    />
                  </div>

                  <Link href="">
                    <MdFavorite />
                    &nbsp;&nbsp; Favoritos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
