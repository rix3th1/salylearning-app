import { obtenerEstudiantes } from "@/services/estudiantes.service";
import Link from "next/link";

export default async function StudentsList() {
  const estudiantesRegistrados = await obtenerEstudiantes();

  return (
    <div className="list-group">
      {estudiantesRegistrados.map((estudiante: any, index: number) => (
        <Link
          key={index}
          href={`/learning/teachers/statistics/student/${estudiante.id}`}
          className="list-group-item"
        >
          {estudiante.usuario.p_nombre + " " + estudiante.usuario.p_apellido}
        </Link>
      ))}
    </div>
  );
}
