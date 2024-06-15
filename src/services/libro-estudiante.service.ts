import { fetchClient, fetchServer } from "./api.service";

const crearLibroEstudianteInitState = {
  id_libro: "",
  id_estudiante: "",
};

export async function crearLibroEstudiante(
  formData: typeof crearLibroEstudianteInitState
) {
  const res = await fetchServer("/libros-estudiante", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      Array.isArray(data.message) ? data.message[0] : data.message
    );
  }

  return data;
}

export async function actualizarLibroEstudiante(
  id_libro_estudiante: string,
  formData: any
) {
  const res = await fetchClient(`/libros-estudiante/${id_libro_estudiante}`, {
    method: "PATCH",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      Array.isArray(data.message) ? data.message[0] : data.message
    );
  }

  return data;
}

export async function obtenerLibroEstudiantePorIdLibro(
  id_libro_estudiante: string
) {
  const res = await fetchServer(
    `/libros-estudiante/libro-estudiante/${id_libro_estudiante}`,
    {
      method: "GET",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error al obtener el libro del estudiante, por favor intente de nuevo."
    );
  }

  return data;
}

export async function obtenerLibroEstudiante(id: string) {
  const res = await fetchClient(`/libros-estudiante/${id}`, {
    method: "GET",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error al obtener el libro del estudiante, por favor intente de nuevo."
    );
  }

  return data;
}
