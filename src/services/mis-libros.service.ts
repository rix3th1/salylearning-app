import { fetchClient, fetchServer } from "./api.service";

export const miLibroInitState = {
  id_libro: "",
  id_usuario: "",
};

export async function crearMiLibro(formData: typeof miLibroInitState) {
  const res = await fetchClient("/mis-libros", {
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

export async function eliminarMiLibro(id: string) {
  const res = await fetchClient(`/mis-libros/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function obtenerLibroFavorito(id_libro: string) {
  const res = await fetchServer(`/mis-libros/libro/${id_libro}`, {
    method: "GET",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
