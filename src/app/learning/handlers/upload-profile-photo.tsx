import { plus_jakarta_sans } from "@/app/fonts";
import { crearFotoPerfil } from "@/services/foto-perfil.service";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { MdCancel, MdCloudUpload } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const showSwalUploadProfilePhoto = async (
  userId: string,
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
      formData.append("id_usuario", userId);
      formData.append("foto", foto);

      try {
        return await crearFotoPerfil(formData);
      } catch (error) {
        if (error instanceof Error) {
          Swal.showValidationMessage(error.message.replace(/,/g, ", "));
        }
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  });

  if (result.isConfirmed) {
    await Swal.fire({
      customClass: plus_jakarta_sans.className,
      title: "Foto de perfil subida exitosamente!",
      text: "Tu foto de perfil ha sido subida exitosamente.",
      icon: "success",
      timer: 3000,
    });

    router.refresh();
  }
};
