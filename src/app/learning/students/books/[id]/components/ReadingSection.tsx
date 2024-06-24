import Fallback from "@/components/Fallback";
import { obtenerEstudiante } from "@/services/estudiantes.service";
import { crearLibroEstudiante } from "@/services/libro-estudiante.service";
import { obtenerLibro } from "@/services/libros.service";
import { obtenerPerfilUsuario } from "@/services/perfil.service";
import { Suspense } from "react";
import FavoriteSection from "./FavoriteSection";
import ReadingTimer from "./ReadingTimer";

interface IProps {
  libro_id: string;
}

export default async function ReadingSection({ libro_id }: IProps) {
  let id_libro_estudiante = null;
  const libro = await obtenerLibro(libro_id);

  const user = await obtenerPerfilUsuario();
  const estudiante = await obtenerEstudiante();

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

  return (
    <article>
      <ReadingTimer id_libro_estudiante={id_libro_estudiante} libro={libro} />

      <Suspense fallback={<Fallback />}>
        <FavoriteSection libro={libro} user={user} />
      </Suspense>
    </article>
  );
}
