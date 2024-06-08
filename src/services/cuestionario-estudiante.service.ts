import { fetchClient } from "./api.service";

export async function asignarCuestionarioEstudianteATodosLosEstudiantes(
  id_cuestionario: string
) {
  const res = await fetchClient("/cuestionario-estudiante/asignar", {
    method: "POST",
    body: JSON.stringify({ id_cuestionario }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
