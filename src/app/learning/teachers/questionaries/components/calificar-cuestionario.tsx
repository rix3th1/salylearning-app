import { plus_jakarta_sans } from "@/app/fonts";
import { calificarCuestionarioEstudiante } from "@/services/cuestionario-estudiante.service";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export async function showSwalCalificarCuestionario({
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

export async function showSwalRespuestasCuestionario({
  cuestionario,
}: {
  cuestionario: any;
}) {
  const respuestas = cuestionario.preguntas.map(
    (pregunta: any, index: number) => ({
      id: pregunta.id,
      pregunta: pregunta.pregunta,
      opcion_correcta: pregunta.opcion_correcta,
      opciones_respuesta: cuestionario.opciones_respuesta.slice(
        index * 4,
        (index + 1) * 4
      ),
      respuesta: cuestionario.respuestas[index].respuesta,
    })
  );

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
        <ol className="text-left">
          {respuestas.map((respuesta: any, index: number) => (
            <li key={index}>
              <p style={{ fontWeight: "bold" }}>{respuesta.pregunta}</p>

              <ul>
                {respuesta.opciones_respuesta.map(
                  (opcion_respuesta: any, index: number) => (
                    <p
                      key={index}
                      className={`text-${
                        opcion_respuesta.opcion === respuesta.opcion_correcta &&
                        opcion_respuesta.opcion === respuesta.respuesta
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
                      {opcion_respuesta.opcion === respuesta.opcion_correcta &&
                      opcion_respuesta.opcion === respuesta.respuesta ? (
                        <MdCheckCircle />
                      ) : opcion_respuesta.opcion === respuesta.respuesta ? (
                        <MdCancel />
                      ) : null}
                    </p>
                  )
                )}
              </ul>
            </li>
          ))}
        </ol>
      </>
    ),
    icon: "info",
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
