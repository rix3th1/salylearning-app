import { obtenerEstudiantes } from "@/services/estudiantes.service";
import { mapNombresEstudiantes } from "../libs";

export default async function StudentsList() {
  const estudiantesRegistrados = await obtenerEstudiantes();
  const nombresEstudiantes = mapNombresEstudiantes(estudiantesRegistrados);

  return (
    <ol id="active-students">
      {nombresEstudiantes.map((nombre: string, index: number) => (
        <li key={index}>{nombre}</li>
      ))}
    </ol>
  );
}
