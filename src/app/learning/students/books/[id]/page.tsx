import PageHeader from "@/app/learning/components/PageHeader";
import { obtenerLibro } from "@/services/libros.service";
import type { Metadata } from "next";
import Link from "next/link";
import { MdFavorite } from "react-icons/md";

interface IProps {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Leer Libro: Estudiantes | Saly Learning",
};

export default async function ReadBookPage({ params }: IProps) {
  const libro = await obtenerLibro(params.id);

  return (
    <>
      <PageHeader title="Leer libro" />

      <section>
        <div className="container-fluid">
          <div className="container-fluid">
            <div className="row">
              <div className="container-fluid">
                <article>
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
                      src={libro.url_libro}
                      allowFullScreen
                    />
                  </div>

                  <Link href="">
                    <MdFavorite />
                    &nbsp;&nbsp; Favoritos
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
