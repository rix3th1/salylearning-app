import { plus_jakarta_sans } from "@/app/fonts";
import { calificarCuestionarioEstudiante } from "@/services/cuestionario-estudiante.service";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getRespuestasData, questionIsCorrect } from "./libs";

export async function showSwalRetroalimentacion({
  id_cuestionario,
  calificacion,
}: {
  id_cuestionario: string;
  calificacion: number;
}) {
  const result = await withReactContent(Swal).fire({
    customClass: plus_jakarta_sans.className,
    title: "Calificar cuestionario",
    text: "¿Qué calificación quieres?",
    input: "textarea",
    inputAttributes: {
      placeholder: "Escribe una retroalimentación al estudiante",
      autofocus: "true",
      required: "true",
      spellcheck: "false",
    },
    inputValidator(retroalimentacion_txt: any) {
      if (!retroalimentacion_txt) {
        return "Debes dejarle una retroalimentación al estudiante";
      }

      if (retroalimentacion_txt.length > 500) {
        return "La retroalimentación no debe ser mayor a 500 caracteres";
      }
    },
    showCancelButton: true,
    confirmButtonColor: "#e21e80",
    cancelButtonColor: "#1e30f3",
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
    preConfirm: async (retroalimentacion: string) => {
      try {
        return await calificarCuestionarioEstudiante(id_cuestionario, {
          calificacion,
          retroalimentacion,
        });
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
      text: `Calificación: ${Number(result.value.calificacion).toFixed(1)}`,
      icon: "success",
      timer: 3000,
    });
  }
}

export async function showSwalCalificacion({
  cuestionario,
}: {
  cuestionario: any;
}) {
  const respuestasData = getRespuestasData(cuestionario);

  const result = await withReactContent(Swal).fire({
    customClass: plus_jakarta_sans.className,
    title: "Respuestas cuestionario",
    text: "¿Qué calificación quieres?",
    html: (
      <>
        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: "bold",
            color: "#007bff",
            fontStyle: "italic",
          }}
        >
          Respuestas cuestionario del estudiante:
        </p>

        <p style={{ fontSize: "0.8rem" }}>
          Calificación estimada:{" "}
          <span
            className={`text-${
              respuestasData.calificacion >= 3 ? "success" : "danger"
            }`}
            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
          >
            {respuestasData.calificacion > 5
              ? 5.0
              : respuestasData.calificacion.toFixed(1)}
          </span>
        </p>
        <ol className="text-left">
          {respuestasData.respuestas.map((respuesta: any, index: number) => (
            <li key={index}>
              <p style={{ fontWeight: "bold" }}>{respuesta.pregunta}</p>

              <ul>
                {respuesta.opciones_respuesta.map(
                  (opcion_respuesta: any, index: number) => {
                    const isCorrect = questionIsCorrect(
                      opcion_respuesta,
                      respuesta
                    );

                    return (
                      <p
                        key={index}
                        className={`text-${
                          isCorrect
                            ? "success"
                            : opcion_respuesta.opcion === respuesta.respuesta
                            ? "warning"
                            : "danger"
                        }`}
                      >
                        <span style={{ fontWeight: "bold" }}>
                          {opcion_respuesta.opcion}.
                        </span>{" "}
                        {opcion_respuesta.respuesta}{" "}
                        {isCorrect ? (
                          <MdCheckCircle />
                        ) : opcion_respuesta.opcion === respuesta.respuesta ? (
                          <MdCancel />
                        ) : null}
                      </p>
                    );
                  }
                )}
              </ul>
            </li>
          ))}
        </ol>
      </>
    ),
    icon: "info",
    confirmButtonColor: "#e21e80",
    cancelButtonColor: "#1e30f3",
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
    preConfirm: () => respuestasData.calificacion,
    allowOutsideClick: () => !Swal.isLoading(),
  });

  return result;
}
