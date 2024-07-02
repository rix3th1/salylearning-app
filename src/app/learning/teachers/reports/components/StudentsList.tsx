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
          {index + 1}.{" "}
          <span style={{ fontWeight: "bold" }}>Cod. Estudiante: </span>
          <span style={{ fontStyle: "italic" }}>
            {estudiante.cod_estudiante}.{" "}
          </span>
          {estudiante.usuario.p_nombre + " " + estudiante.usuario.p_apellido}
        </Link>
      ))}
    </div>
  );
}
