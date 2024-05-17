"use client";

import { plus_jakarta_sans } from "@/app/fonts";
import { crearLibro } from "@/services/libros.service";
import { MdCancel, MdUpload } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import FormNewBook from "./FormNewBook";

export default function UploadBookButton() {
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

        try {
          return await crearLibro(formData);
        } catch (error) {
          if (error instanceof Error) {
            Swal.showValidationMessage(error.message.replace(/,/g, ", "));
          }
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });

    if (result.isConfirmed) {
      Swal.fire({
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
      });
    }
  };

  return (
    <button onClick={showSwalUploadBook} className="btn btn-success">
      <MdUpload /> Subir Libro
    </button>
  );
}
