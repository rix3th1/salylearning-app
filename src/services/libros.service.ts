import { fetchClient, fetchServer } from "./api.service";

export async function crearLibro(formData: FormData) {
  const res = await fetchClient("/libros", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      Array.isArray(data.message) ? data.message[0] : data.message
    );
  }

  return data;
}

export async function obtenerLibrosPopulares() {
  const res = await fetchServer("/libros/populares", {
    method: "GET",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error al obtener la información de los libros populares, por favor intente de nuevo."
    );
  }

  return data;
}

async function obtenerLibrosC() {
  const res = await fetchClient("/libros", { method: "GET" });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error al obtener la información de los libros, por favor intente de nuevo."
    );
  }

  return data;
}

async function obtenerLibrosS() {
  const res = await fetchServer("/libros", {
    method: "GET",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error al obtener la información de los libros, por favor intente de nuevo."
    );
  }

  return data;
}

export async function obtenerLibro(id: string) {
  const res = await fetchServer(`/libros/${id}`, {
    method: "GET",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function obtenerLibrosPorGeneroLiterario(
  genero_literario: string
) {
  const res = await fetchServer(
    `/libros/genero?genero_literario=${genero_literario}`,
    { method: "GET" }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error al obtener la información de los libros, por favor intente de nuevo."
    );
  }

  return data;
}

export const obtenerLibros = {
  server: obtenerLibrosS,
  client: obtenerLibrosC,
};
