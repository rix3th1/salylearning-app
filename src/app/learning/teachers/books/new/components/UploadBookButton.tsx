"use client";

import { plus_jakarta_sans } from "@/app/fonts";
import { uploadCloudinary } from "@/services/cloudinary.service";
import { crearLibro } from "@/services/libros.service";
import { useRouter } from "next-nprogress-bar";
import { MdCancel, MdCheckCircle, MdUpload } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import FormNewBook from "./FormNewBook";

const showSwalUploadBook = async () => {
  const result = await withReactContent(Swal).fire({
    customClass: plus_jakarta_sans.className,
    title: "Subir nuevo libro",
    html: <FormNewBook />,
    showCancelButton: true,
    confirmButtonText: (
      <>
        <MdUpload /> Subir Libro
      </>
    ),
    cancelButtonText: (
      <>
        <MdCancel /> Cancelar
      </>
    ),
    showLoaderOnConfirm: true,
    preConfirm: async () => {
      const formData = new FormData(
        Swal.getPopup()?.getElementsByTagName("form")[0]
      );

      const imagen_portada = formData.get("imagen_portada");
      const video_libro = formData.get("video_libro");

      try {
        if (imagen_portada instanceof File) {
          // 1 MB
          if (imagen_portada.size > 1000 * 1024) {
            throw new Error("La imagen de portada no debe superar 1MB");
          }
          if (!/(jpe?g|png)$/i.test(imagen_portada.type)) {
            throw new Error("La imagen de portada debe ser de tipo jpeg o png");
          }
        }

        if (video_libro instanceof File) {
          // 200 MB
          if (video_libro.size > 200000 * 1024) {
            throw new Error("El video del libro no debe superar los 50MB");
          }
          if (!/(mp4)$/i.test(video_libro.type)) {
            throw new Error("El video del libro debe ser de tipo mp4");
          }
        }

        const uploadData = await uploadCloudinary(video_libro as File);
        const { secure_url: video_libro_url } = uploadData;

        formData.set("video_libro", video_libro_url);
        return await crearLibro(formData);
      } catch (error) {
        if (error instanceof Error) {
          Swal.showValidationMessage(error.message.replace(/,/g, ", "));
        }
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  });

  return result;
};

export default function UploadBookButton() {
  const router = useRouter();

  const handleClickUploadBook = async () => {
    const result = await showSwalUploadBook();

    if (result.isConfirmed) {
      router.refresh();

      withReactContent(Swal).fire({
        customClass: plus_jakarta_sans.className,
        title: "Libro subido a la plataforma SalyLearning exitosamente!",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/nyan-cat.gif")
          left bottom
          no-repeat
        `,
        confirmButtonText: (
          <>
            <MdCheckCircle /> Aceptar
          </>
        ),
      });
    }
  };

  return (
    <button onClick={handleClickUploadBook} className="btn btn-success">
      <MdUpload /> Subir Libro
    </button>
  );
}
