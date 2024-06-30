"use client";

import { plus_jakarta_sans } from "@/app/fonts";
import { realisticLookConfetti } from "@/libs/confetti";
import { responderPreguntasCuestionario } from "@/services/respuestas.service";
import { THandleSubmit } from "@/types";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import Swal from "sweetalert2";

interface IProps {
  preguntas: any;
  cuestionario_id: string;
}

export default function FormResponderPreguntas({
  preguntas,
  cuestionario_id,
}: IProps) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: THandleSubmit) => {
    e.preventDefault();
    setIsLoading(true);

    let formData: any = {};
    new FormData(e.target as HTMLFormElement).forEach((value, key) => {
      formData[key] = value;
    });

    const { id_cuestionario, ...rest } = formData as any;

    try {
      await responderPreguntasCuestionario(
        Object.keys(rest).map((key) => ({
          respuesta: rest[key],
          id_pregunta: parseInt(key),
          id_cuestionario: parseInt(id_cuestionario),
        }))
      );

      router.refresh();

      await Swal.fire({
        customClass: { container: plus_jakarta_sans.className },
        title: "¡Respuestas enviadas!",
        text: "Has completado la actividad.",
        icon: "success",
        timer: 3000,
        confirmButtonColor: "#e21e80",
      });

      realisticLookConfetti();
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          customClass: { container: plus_jakarta_sans.className },
          title: "¡Error!",
          text: error.message.replace(/,/g, ", "),
          icon: "error",
          timer: 3000,
          confirmButtonColor: "#e21e80",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="id_cuestionario" value={cuestionario_id} />
      {preguntas.map(
        ({ id: pregunta_id, pregunta, opciones_respuesta }: any, j: number) => (
          <div
            key={j}
            className="form-group"
            style={{
              marginBottom: "20px",
            }}
          >
            <h4 style={{ fontStyle: "italic" }}>
              <span style={{ fontWeight: "bold" }}>{j + 1}.</span> {pregunta}{" "}
              <span className="text-danger">*</span>
            </h4>
            <div className="form-check">
              {opciones_respuesta.map(({ opcion, respuesta }: any) => {
                const id = crypto.randomUUID();

                return (
                  <div className="form-check" key={id}>
                    <input
                      className="form-check-input"
                      type="radio"
                      id={id}
                      name={pregunta_id}
                      value={opcion}
                      required
                    />
                    <label className="form-check-label" htmlFor={id}>
                      <article
                        style={{
                          marginLeft: "0.5rem",
                        }}
                      >
                        {opcion}.{" "}
                        <span
                          style={{
                            fontWeight: "normal",
                          }}
                        >
                          {respuesta}
                        </span>
                      </article>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        )
      )}

      <div className="row text-center">
        <div className="col-md-12">
          <button
            type="submit"
            className="btn btn-success"
            disabled={isLoading}
          >
            <MdCheckCircle style={{ position: "relative", top: 1 }} />{" "}
            {isLoading ? "Enviando..." : "He terminado"}
          </button>
        </div>
      </div>
    </form>
  );
}
