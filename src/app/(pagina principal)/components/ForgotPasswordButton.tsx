import { plus_jakarta_sans } from "@/app/fonts";
import { enviarEmailDeRecuperacion } from "@/services/recuperar-clave.service";
import { MdCancel, MdEmail } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

interface IProps {
  setIsModalIniciarSesionOpen: (value: boolean) => void;
}

const showSwalForSendEmail = async (
  setIsModalIniciarSesionOpen: IProps["setIsModalIniciarSesionOpen"]
) => {
  setIsModalIniciarSesionOpen(false);

  const result = await withReactContent(Swal).fire({
    customClass: plus_jakarta_sans.className,
    title: "¿Olvidaste tu contraseña?",
    text: "Por favor ingresa tu correo electrónico",
    input: "email",
    inputPlaceholder: "Escribe aquí tu correo electrónico",
    inputValidator(email: string) {
      if (!email) {
        return "Debes escribir tu correo electrónico";
      }
    },
    showCancelButton: true,
    confirmButtonColor: "#e21e80",
    cancelButtonColor: "#1e30f3",
    confirmButtonText: (
      <>
        <MdEmail style={{ position: "relative", bottom: 2 }} /> Enviar
      </>
    ),
    cancelButtonText: (
      <>
        <MdCancel style={{ position: "relative", bottom: 2 }} /> Cancelar
      </>
    ),
    showLoaderOnConfirm: true,
    preConfirm: async (email) => {
      try {
        return await enviarEmailDeRecuperacion(email);
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
      customClass: plus_jakarta_sans.className,
      title: "¡Correo enviado!",
      text: result.value.message,
      icon: "success",
      timer: 3000,
    });
  }
};

export default function ForgotPasswordButton({
  setIsModalIniciarSesionOpen,
}: IProps) {
  return (
    <button
      type="button"
      className="olvide"
      onClick={() => showSwalForSendEmail(setIsModalIniciarSesionOpen)}
    >
      Olvidé mi contraseña?
    </button>
  );
}
