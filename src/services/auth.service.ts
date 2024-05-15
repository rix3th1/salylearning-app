import { fetchClient } from "./api.service";

export const registrarseInitState = {
  p_nombre: "",
  s_nombre: "",
  p_apellido: "",
  s_apellido: "",
  edad: "",
  email: "",
  password: "",
  confirmar_password: "",
  id_grado: "",
  rol: "",
};

export async function autenticar(username: string, password: string) {
  const res = await fetchClient("/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function registrarse(formData: typeof registrarseInitState) {
  const res = await fetchClient("/auth/registrarse", {
    method: "POST",
    body: JSON.stringify({
      ...formData,
      edad: parseInt(formData.edad),
      id_grado: parseInt(formData.id_grado),
      username: formData.email.split("@")[0],
      s_nombre: formData.s_nombre || null,
      s_apellido: formData.s_apellido || null,
    }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function obtenerPerfil(jwt: string) {
  const res = await fetchClient("/perfil", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  if (!res.ok) {
    throw new Error("No se pudo obtener la información del usuario.");
  }

  return res.json();
}

export async function verificarCuenta(token: string) {
  const res = await fetchClient(`/verificar-cuenta?token=${token}`, {
    method: "GET",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
