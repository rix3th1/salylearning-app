import { plus_jakarta_sans } from "@/app/fonts";
import { enviarEmailDeRecuperacion } from "@/services/recuperar-clave.service";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function ForgotPasswordButton() {
  const showSwalForSendEmail = async () => {
    const result = await withReactContent(Swal).fire({
      customClass: plus_jakarta_sans.className,
      title: "¿Olvidaste tu contraseña?",
      text: "Por favor ingresa tu correo electrónico",
      input: "email",
      inputPlaceholder: "Escribe aquí tu correo electrónico",
      showCancelButton: true,
      confirmButtonText: "Enviar",
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      preConfirm: async (email) => {
        if (!email) {
          Swal.showValidationMessage("Debes escribir tu correo electrónico");
        }

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

  return (
    <button type="button" className="olvide" onClick={showSwalForSendEmail}>
      Olvidé mi contraseña?
    </button>
  );
}
