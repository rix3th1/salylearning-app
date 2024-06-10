import { fetchClient, fetchServer } from "./api.service";

export const cuestionarioInitState = {
  fecha_entrega: "",
};

export const preguntasInitState = [
  {
    id: new Date().toISOString(),
    pregunta: "",
    A: "",
    B: "",
    C: "",
    D: "",
    id_libro: "",
  },
];

export async function crearCuestionarioConPreguntas(
  formData: typeof cuestionarioInitState & {
    preguntas: any;
  } & {
    opciones_respuesta: any;
  }
) {
  const res = await fetchClient("/cuestionarios/preguntas", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function obtenerCuestionariosPorEstado(
  estado: "COMPLETADO" | "PENDIENTE" | "NO_LOGRADO"
) {
  const res = await fetchServer(
    `/cuestionarios/estado?estado_cuestionario=${estado}`,
    {
      method: "GET",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
