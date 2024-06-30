import { plus_jakarta_sans } from "@/app/fonts";
import { actualizarFotoPerfil } from "@/services/foto-perfil.service";
import { throttle } from "@github/mini-throttle";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { MdCancel, MdCheck, MdCloudUpload } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const showSwalUploadProfilePhoto = async (
  foto_perfil_id: string,
  router: AppRouterInstance
) => {
  const result = await withReactContent(Swal).fire({
    customClass: plus_jakarta_sans.className,
    title: "Selecciona tu foto de perfil",
    input: "file",
    inputAttributes: {
      accept: "image/*",
      name: "foto",
    },
    inputValidator(foto: any) {
      if (!foto) {
        return "Debes seleccionar una foto de perfil";
      }
    },
    showCancelButton: true,
    confirmButtonColor: "#e21e80",
    cancelButtonColor: "#1e30f3",
    confirmButtonText: (
      <>
        <MdCheck style={{ position: "relative", top: 2 }} /> Aceptar
      </>
    ),
    cancelButtonText: (
      <>
        <MdCancel style={{ position: "relative", top: 2 }} /> Cancelar
      </>
    ),
    preConfirm(foto: File) {
      return URL.createObjectURL(foto);
    },
  });

  if (result.isConfirmed) {
    const url = result.value as string;

    const response = await withReactContent(Swal).fire({
      customClass: plus_jakarta_sans.className,
      title: "Edita tu foto de perfil y ¡súbela!",
      html: `
        <img id="preview" src=${url}>
        <div>
          <img id="cropperjs" src=${url}>
        </div>
      `,
      showCancelButton: true,
      confirmButtonColor: "#e21e80",
      cancelButtonColor: "#1e30f3",
      confirmButtonText: (
        <>
          <MdCloudUpload style={{ position: "relative", top: 2 }} /> Subir
        </>
      ),
      cancelButtonText: (
        <>
          <MdCancel style={{ position: "relative", top: 2 }} /> Cancelar
        </>
      ),
      willOpen() {
        const image = Swal.getPopup()!.querySelector(
          "#cropperjs"
        ) as HTMLImageElement;
        const cropper = new Cropper(image, {
          aspectRatio: 1,
          viewMode: 1,
          crop: throttle(() => {
            const croppedCanvas = cropper.getCroppedCanvas();
            const preview = Swal.getPopup()!.querySelector(
              "#preview"
            ) as HTMLImageElement;
            preview.src = croppedCanvas.toDataURL();
          }, 25),
        });
      },
      preConfirm: async () => {
        const imgSrc = (
          Swal.getPopup()!.querySelector("#preview") as HTMLImageElement
        ).src;
        const imageToUpload = new File([imgSrc], "foto.png", {
          type: "image/png",
        });
        const formData = new FormData();
        formData.append("foto", imageToUpload);

        try {
          return await actualizarFotoPerfil(foto_perfil_id, formData);
        } catch (error) {
          if (error instanceof Error) {
            Swal.showValidationMessage(error.message.replace(/,/g, ", "));
          }
        }
      },
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    });

    if (response.isConfirmed) {
      URL.revokeObjectURL(url);
      router.refresh();

      Swal.fire({
        customClass: plus_jakarta_sans.className,
        title: "Foto de perfil subida exitosamente!",
        text: "Tu foto de perfil ha sido subida exitosamente.",
        icon: "success",
        timer: 3000,
        confirmButtonColor: "#e21e80",
      });
    }
  }
};
