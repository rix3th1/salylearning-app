import { fetchClient } from "./api.service";

export async function signCloudinary() {
  const res = await fetchClient("/cloudinary/sign", {
    method: "POST",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error al obtener la firma de Cloudinary, por favor intente de nuevo."
    );
  }

  return data;
}

export async function uploadCloudinary(file: FormDataEntryValue) {
  const signData = await signCloudinary();
  const uploadUrl =
    "https://api.cloudinary.com/v1_1/" + signData.cloudname + "/auto/upload";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", signData.apikey);
  formData.append("timestamp", signData.timestamp);
  formData.append("signature", signData.signature);
  formData.append("eager", "c_pad,h_300,w_400|c_crop,h_200,w_260");
  formData.append("folder", "salylearning-libros");

  const res = await fetch(uploadUrl, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error al subir el recurso a Cloudinary, por favor intente de nuevo."
    );
  }

  return data;
}
