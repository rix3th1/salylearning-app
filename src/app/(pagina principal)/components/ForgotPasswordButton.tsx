import { plus_jakarta_sans } from "@/app/fonts";
import { api } from "@/libs/fetchClient";
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
          const res = await api(
            "/recuperar-clave/enviar-email-de-recuperacion",
            {
              method: "POST",
              body: JSON.stringify({ email }),
              headers: { "Content-Type": "application/json" },
            }
          );

          const data = await res.json();

          if (!res.ok) {
            return Swal.showValidationMessage(
              Array.isArray(data.message)
                ? data.message.join(", ")
                : data.message
            );
          }

          return data;
        } catch (error) {
          if (error instanceof Error) {
            Swal.showValidationMessage(error.message);
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
      });
    }
  };

  return (
    <button type="button" className="olvide" onClick={showSwalForSendEmail}>
      Olvidé mi contraseña?
    </button>
  );
}
