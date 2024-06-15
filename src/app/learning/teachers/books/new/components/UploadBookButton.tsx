"use client";

import { plus_jakarta_sans } from "@/app/fonts";
import { uploadCloudinary } from "@/services/cloudinary.service";
import { crearLibro, eliminarLibro } from "@/services/libros.service";
import { useRouter } from "next-nprogress-bar";
import { MdCancel, MdCheckCircle, MdDelete, MdUpload } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import FormNewBook from "./FormNewBook";

interface IProps {
  libros: any;
}

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

export default function UploadBookButton({ libros }: IProps) {
  const router = useRouter();

  const handleClickDeleteBook = async () => {
    const result = await withReactContent(Swal).fire({
      customClass: plus_jakarta_sans.className,
      title: "Eliminar libro",
      text: "¿Qué libro quieres eliminar?",
      input: "select",
      inputOptions: libros.reduce((acumulador: any, libro: any) => {
        acumulador[libro.id] = libro.nom_libro;
        return acumulador;
      }, {}),
      inputPlaceholder: "Seleccione el libro",
      showCancelButton: true,
      confirmButtonText: (
        <>
          <MdDelete /> Eliminar
        </>
      ),
      cancelButtonText: (
        <>
          <MdCancel /> Cancelar
        </>
      ),
      showLoaderOnConfirm: true,
      preConfirm: async (nom_libro: string) => {
        if (!nom_libro) {
          Swal.showValidationMessage("Debes escribir el nombre del libro");
          return;
        }

        const confirmation = await withReactContent(Swal).fire({
          customClass: plus_jakarta_sans.className,
          title: "¿Estás seguro?",
          text: "Al eliminar este libro, todos los datos asociados serán eliminados definitivamente. ¿Estás seguro de que quieres eliminar este libro?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: (
            <>
              <MdDelete /> Eliminar
            </>
          ),
          cancelButtonText: (
            <>
              <MdCancel /> Cancelar
            </>
          ),
        });

        if (confirmation.isDenied || confirmation.isDismissed) {
          Swal.showValidationMessage("No se puede eliminar este libro.");
          return;
        }

        try {
          return await eliminarLibro(nom_libro);
        } catch (error) {
          if (error instanceof Error) {
            Swal.showValidationMessage(error.message.replace(/,/g, ", "));
          }
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });

    if (result.isConfirmed) {
      router.refresh();

      withReactContent(Swal).fire({
        customClass: plus_jakarta_sans.className,
        title: "Libro eliminado exitosamente!",
        text: "El libro ha sido eliminado exitosamente.",
        icon: "success",
        timer: 3000,
      });
    }
  };

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
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button onClick={handleClickUploadBook} className="btn btn-success">
        <MdUpload style={{ position: "relative", top: 2 }} /> Subir Libro
      </button>
      <button onClick={handleClickDeleteBook} className="btn btn-danger">
        <MdDelete style={{ position: "relative", top: 2 }} /> Eliminar Libro
      </button>
    </div>
  );
}
