"use client";

import { plus_jakarta_sans } from "@/app/fonts";
import { crearLibro } from "@/services/libros.service";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next-nprogress-bar";
import { MdCancel, MdUpload } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import FormNewBook from "./FormNewBook";

const showSwalUploadBook = async (router: AppRouterInstance) => {
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
    router.refresh();

    Swal.fire({
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
    });
  }
};

export default function UploadBookButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => showSwalUploadBook(router)}
      className="btn btn-success"
    >
      <MdUpload /> Subir Libro
    </button>
  );
}
