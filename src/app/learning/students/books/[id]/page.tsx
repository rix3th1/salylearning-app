import PageHeader from "@/app/learning/components/PageHeader";
import { obtenerEstudiante } from "@/services/estudiantes.service";
import {
  crearLibroEstudiante,
  obtenerLibroEstudiantePorIdEstudiante,
} from "@/services/libro-estudiante.service";
import { obtenerLibro } from "@/services/libros.service";
import { obtenerPerfilUsuario } from "@/services/perfil.service";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ButtonAddFavorite from "./components/ButtonAddFavorite";
import ReadingTimer from "./components/ReadingTimer";

interface IProps {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Leer Libro: Estudiantes | Saly Learning",
};

export default async function ReadBookPage({ params }: IProps) {
  try {
    let id_libro_estudiante = null;

    const libro = await obtenerLibro(params.id);
    const user = await obtenerPerfilUsuario();
    const estudiante = await obtenerEstudiante(user.id);

    if (libro.libros_estudiante.length < 1) {
      const libroEstudianteCreado = await crearLibroEstudiante({
        id_estudiante: estudiante.id,
        id_libro: libro.id,
      });
      id_libro_estudiante = libroEstudianteCreado.id;
    } else {
      const libroEstudiante = await obtenerLibroEstudiantePorIdEstudiante(
        estudiante.id
      );
      id_libro_estudiante = libroEstudiante.id;
    }

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

                    <ButtonAddFavorite />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    notFound();
  }
}
