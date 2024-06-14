import { plus_jakarta_sans } from "@/app/fonts";
import { calificarCuestionarioEstudiante } from "@/services/cuestionario-estudiante.service";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export async function showSwalcalificarCuestionario({
  id_cuestionario,
}: {
  id_cuestionario: string;
}) {
  const result = await withReactContent(Swal).fire({
    customClass: plus_jakarta_sans.className,
    title: "Calificar cuestionario",
    text: "¿Qué calificación quieres?",
    input: "number",
    inputPlaceholder: "Calificación 0.0 - 5.0",
    inputAutoFocus: true,
    inputValidator(calificacion: any) {
      if (!calificacion) {
        return "Debes escribir la calificación";
      }

      if (calificacion < 0 || calificacion > 5) {
        return "Calificación debe ser entre 0.0 y 5.0";
      }
    },
    showCancelButton: true,
    confirmButtonText: (
      <>
        <MdCheckCircle /> Aceptar
      </>
    ),
    cancelButtonText: (
      <>
        <MdCancel /> Cancelar
      </>
    ),
    showLoaderOnConfirm: true,
    preConfirm: async (calificacion: number) => {
      if (!calificacion) {
        Swal.showValidationMessage("Debes escribir la calificación");
      }

      try {
        return await calificarCuestionarioEstudiante(
          id_cuestionario,
          calificacion
        );
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
      title: "¡Calificado!",
      text: `Calificación: ${result.value.calificacion}`,
      icon: "success",
      timer: 3000,
    });
  }
}

export async function showSwalRespuestasCuestionario() {
  const result = await withReactContent(Swal).fire({
    customClass: plus_jakarta_sans.className,
    title: "Calificar cuestionario",
    text: "¿Qué calificación quieres?",
    html: (
      <>
        <p>Calificaciones:</p>
        <ul>
          <li>A: 10</li>
          <li>B: 9</li>
          <li>C: 8</li>
          <li>D: 7</li>
          <li>E: 6</li>
          <li>F: 5</li>
          <li>G: 4</li>
          <li>H: 3</li>
          <li>I: 2</li>
          <li>J: 1</li>
        </ul>
      </>
    ),
    icon: "success",
    confirmButtonText: (
      <>
        <MdCheckCircle /> Aceptar
      </>
    ),
    cancelButtonText: (
      <>
        <MdCancel /> Cancelar
      </>
    ),
    showLoaderOnConfirm: true,

    allowOutsideClick: () => !Swal.isLoading(),
  });

  return result;
}
