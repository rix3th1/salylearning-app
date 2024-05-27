import { fetchClient } from "./api.service";

export const actualizarUsuarioInitState = {
  p_nombre: "",
  s_nombre: "",
  p_apellido: "",
  s_apellido: "",
  edad: "",
};

export async function actualizarUsuario(id_usuario: string, formData: any) {
  const res = await fetchClient(`/usuarios/${id_usuario}`, {
    method: "PATCH",
    body: JSON.stringify({
      ...formData,
      edad: parseInt(formData.edad) || null,
      s_nombre: formData.s_nombre || null,
      s_apellido: formData.s_apellido || null,
      ciudad: formData.ciudad || null,
      fecha_nacimiento: formData.fecha_nacimiento || null,
    }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
