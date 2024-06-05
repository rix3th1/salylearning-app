import { fetchClient } from "./api.service";

export async function obtenerPreguntas() {
  const res = await fetchClient("/preguntas", { method: "GET" });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error al obtener la información de las preguntas, por favor intente de nuevo."
    );
  }

  return data;
}

export const crearPreguntaInitState = {
  id_libro: "",
  pregunta: "",
  resA: "",
  resB: "",
  resC: "",
  resD: "",
};

export async function crearPregunta(formData: typeof crearPreguntaInitState) {
  const res = await fetchClient("/preguntas", {
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
