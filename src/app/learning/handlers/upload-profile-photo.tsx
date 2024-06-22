import { plus_jakarta_sans } from "@/app/fonts";
import { actualizarFotoPerfil } from "@/services/foto-perfil.service";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { MdCancel, MdCloudUpload } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const showSwalUploadProfilePhoto = async (
  foto_perfil_id: string,
  router: AppRouterInstance
) => {
  const result = await withReactContent(Swal).fire({
    customClass: plus_jakarta_sans.className,
    title: "Subir foto de perfil",
    input: "file",
    inputAttributes: {
      accept: "image/*",
      name: "foto",
    },
    inputValidator(foto: any) {
      if (!foto) {
        return "Debes subir una foto de perfil";
      }
    },
    showCancelButton: true,
    confirmButtonColor: "#e21e80",
    cancelButtonColor: "#1e30f3",
    confirmButtonText: (
      <>
        <MdCloudUpload /> Subir
      </>
    ),
    cancelButtonText: (
      <>
        <MdCancel /> Cancelar
      </>
    ),
    showLoaderOnConfirm: true,
    preConfirm: async (foto: File) => {
      const formData = new FormData();
      formData.append("foto", foto);

      try {
        return await actualizarFotoPerfil(foto_perfil_id, formData);
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
      title: "Foto de perfil subida exitosamente!",
      text: "Tu foto de perfil ha sido subida exitosamente.",
      icon: "success",
      timer: 3000,
    });
  }
};
