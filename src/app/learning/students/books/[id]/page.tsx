import PageHeader from "@/app/learning/components/PageHeader";
import { obtenerEstudiante } from "@/services/estudiantes.service";
import { crearLibroEstudiante } from "@/services/libro-estudiante.service";
import { obtenerLibro } from "@/services/libros.service";
import { obtenerLibroFavorito } from "@/services/mis-libros.service";
import { obtenerPerfilUsuario } from "@/services/perfil.service";
import type { Metadata } from "next";
import ButtonAddFavorite from "./components/ButtonAddFavorite";
import ReadingTimer from "./components/ReadingTimer";

interface IProps {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Leer Libro: Estudiantes | Saly Learning",
};

export default async function ReadBookPage({ params }: IProps) {
  let id_libro_estudiante = null;
  const libro = await obtenerLibro(params.id);

  const user = await obtenerPerfilUsuario();
  const estudiante = await obtenerEstudiante(user.id);

  id_libro_estudiante = libro.libros_estudiante.filter(
    (libroEstudiante: any) =>
      libroEstudiante.id_estudiante === estudiante.id &&
      libroEstudiante.id_libro === libro.id
  )[0];

  if (libro.libros_estudiante.length && !id_libro_estudiante) {
    const libroEstudianteCreado = await crearLibroEstudiante({
      id_estudiante: estudiante.id,
      id_libro: libro.id,
    });
    id_libro_estudiante = libroEstudianteCreado.id;
  } else {
    id_libro_estudiante = id_libro_estudiante.id;
  }

  const favorito = await obtenerLibroFavorito(libro.id);

  return (
    <>
      <PageHeader title="Leer libro" />

      <section>
        <div className="container-fluid">
          <div className="container-fluid">
            <div className="row">
              <div className="container-fluid">
                <article>
                  <ReadingTimer
                    id_libro_estudiante={id_libro_estudiante}
                    libro={libro}
                  />

                  <ButtonAddFavorite
                    libro={libro}
                    favorito={favorito}
                    user={user}
                  />
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
