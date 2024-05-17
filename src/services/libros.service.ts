import { fetchClient } from "./api.service";

export const crearLibroInitState = {
  nom_libro: "",
  num_pag: "",
  autor: "",
  editorial: "",
  url_info: "",
  fecha_pub: "",
  id_genero_literario: "",
  imagen_portada: null,
  url_libro: "",
  id_grado: "",
};

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
