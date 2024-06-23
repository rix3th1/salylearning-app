"use client";

import { plus_jakarta_sans } from "@/app/fonts";
import { asignarCuestionarioEstudianteATodosLosEstudiantes } from "@/services/cuestionario-estudiante.service";
import {
  crearCuestionarioConPreguntas,
  cuestionarioInitState,
  preguntasInitState,
} from "@/services/cuestionarios.service";
import { obtenerLibros } from "@/services/libros.service";
import { THandleChange, THandleSubmit } from "@/types";
import "@github/relative-time-element";
import { useEffect, useState } from "react";
import { MdAdd, MdAddCircleOutline, MdClose } from "react-icons/md";
import { toast } from "sonner";
import Swal from "sweetalert2";

export default function FormNewActivity() {
  const [isLoading, setIsLoading] = useState(false);
  const [libros, setLibros] = useState([]);
  const [formData, setFormData] = useState(cuestionarioInitState);
  const [preguntas, setPreguntas] =
    useState<typeof preguntasInitState>(preguntasInitState);
  const [id_libro, setId_libro] = useState("");

  const agregarPregunta = () => {
    if (preguntas.length >= 10) {
      Swal.fire({
        customClass: plus_jakarta_sans.className,
        title: "¡No se permiten más de 10 preguntas!",
        text: "Sólo se permiten 10 preguntas por libro en una actividad.",
        icon: "error",
        timer: 3000,
        confirmButtonColor: "#e21e80",
      });
      return;
    }

    setPreguntas((prevState) => [
      ...prevState,
      {
        id: new Date().toISOString(),
        pregunta: "",
        A: "",
        B: "",
        C: "",
        D: "",
        opcion_correcta: "",
        id_libro,
      },
    ]);
  };

  const quitarPregunta = (index: number) => {
    setPreguntas((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  };

  const handleChangeFormData = (e: THandleChange) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangePreguntas = (index: number, event: THandleChange) => {
    const newPreguntas = [...preguntas];
    (newPreguntas[index] as any)[event.target.name] = event.target.value;
    setPreguntas(newPreguntas);
  };

  const handleSubmit = async (e: THandleSubmit) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const cuestionarioCreado = await crearCuestionarioConPreguntas({
        preguntas: preguntas.map(({ pregunta, opcion_correcta }) => ({
          id_libro: parseInt(id_libro),
          pregunta,
          opcion_correcta,
        })),
        opciones_respuesta: preguntas.map((p) => {
          const { id, pregunta, id_libro, opcion_correcta, ...rest } = p;

          let opciones_respuesta = [];

          for (const opcion in rest) {
            opciones_respuesta.push({
              opcion,
              respuesta: (rest as any)[opcion],
            });
          }

          return opciones_respuesta;
        }),
      });

      await Swal.fire({
        customClass: plus_jakarta_sans.className,
        title: "¡Cuestionario creado!",
        text: cuestionarioCreado.message,
        icon: "success",
        timer: 1500,
        confirmButtonColor: "#e21e80",
      });

      const id_cuestionario = cuestionarioCreado.id;

      const cuestionarioEstudianteAsignaciones =
        await asignarCuestionarioEstudianteATodosLosEstudiantes({
          fecha_entrega: formData.fecha_entrega,
          id_cuestionario,
        });

      await Swal.fire({
        customClass: plus_jakarta_sans.className,
        title: "¡Cuestionario asignado a los estudiantes!",
        text: cuestionarioEstudianteAsignaciones.message,
        icon: "success",
        timer: 1500,
        confirmButtonColor: "#e21e80",
      });

      setFormData(cuestionarioInitState);
      setPreguntas([
        {
          id: new Date().toISOString(),
          pregunta: "",
          A: "",
          B: "",
          C: "",
          D: "",
          opcion_correcta: "",
          id_libro,
        },
      ]);
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          customClass: plus_jakarta_sans.className,
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

  useEffect(
    () => {
      toast.promise(obtenerLibros.client, {
        loading: "Cargando datos...",
        success(data) {
          setLibros(data);
          return "Listo";
        },
        error(error) {
          if (error instanceof Error) {
            return error.message.replace(/,/g, ", ");
          }
        },
      });
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="col-md-6 col-md-offset-3"
        style={{ marginBottom: "2rem" }}
      >
        <div className="form-group">
          <label htmlFor="id_libro">
            Libro al que se refiere la actividad:
          </label>
          <select
            name="id_libro"
            id="id_libro"
            className="form-control"
            required
            onChange={(event) => setId_libro(event.target.value)}
            value={id_libro}
            disabled={isLoading}
          >
            <option value="">Seleccione el libro</option>
            {libros.map((libro: any, i) => (
              <option key={i} value={libro.id}>
                {libro.nom_libro}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="fecha_entrega">
            Fecha de entrega de la actividad:{" "}
            {formData.fecha_entrega && (
              <relative-time
                datetime={formData.fecha_entrega}
                format="relative"
                tense="future"
                formatStyle="long"
                style={{
                  fontWeight: "normal",
                  fontSize: "0.8rem",
                  fontStyle: "italic",
                }}
              />
            )}
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="fecha_entrega"
            name="fecha_entrega"
            placeholder="Fecha de entrega"
            onChange={handleChangeFormData}
            value={formData.fecha_entrega}
            required
            disabled={isLoading}
          />
        </div>
      </div>

      {preguntas.map((pregunta, index) => (
        <div
          key={pregunta.id}
          className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 text-center"
          style={{
            borderRadius: 15,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            maxWidth: "80%",
            padding: "2rem 1.5rem",
            marginBottom: "1rem",
          }}
        >
          <div className="col-md-12" style={{ marginBottom: "2rem" }}>
            <button
              type="button"
              className="btn btn-danger btn-xs pull-right"
              onClick={() => quitarPregunta(index)}
              disabled={preguntas.length === 1}
            >
              <MdClose style={{ position: "relative", top: 2 }} />
            </button>
          </div>

          <label htmlFor={`pregunta-${index}`}>
            Contenido de la pregunta {index + 1}
          </label>
          <textarea
            className="form-control"
            name="pregunta"
            id={`pregunta-${index}`}
            onChange={(event) => handleChangePreguntas(index, event)}
            value={pregunta.pregunta}
            placeholder="Redacta la pregunta acerca del tema del libro"
            required
            autoFocus
            spellCheck={false}
          />
          <hr />
          <p style={{ fontStyle: "italic" }}>Opciones de respuesta única:</p>
          <label htmlFor={`A-${index}`}>Respuesta A.</label>
          <textarea
            style={{ marginBottom: "1rem" }}
            className="form-control"
            name="A"
            id={`A-${index}`}
            onChange={(event) => handleChangePreguntas(index, event)}
            value={pregunta.A}
            placeholder="Redacta la opción de respuesta A"
            required
            spellCheck={false}
          />
          <label htmlFor={`B-${index}`}>Respuesta B.</label>
          <textarea
            style={{ marginBottom: "1rem" }}
            className="form-control"
            name="B"
            id={`B-${index}`}
            onChange={(event) => handleChangePreguntas(index, event)}
            value={pregunta.B}
            placeholder="Redacta la opción de respuesta B"
            required
            spellCheck={false}
          />
          <label htmlFor={`C-${index}`}>Respuesta C.</label>
          <textarea
            style={{ marginBottom: "1rem" }}
            className="form-control"
            name="C"
            id={`C-${index}`}
            onChange={(event) => handleChangePreguntas(index, event)}
            value={pregunta.C}
            placeholder="Redacta la opción de respuesta C"
            required
            spellCheck={false}
          />
          <label htmlFor={`D-${index}`}>Respuesta D.</label>
          <textarea
            style={{ marginBottom: "1rem" }}
            className="form-control"
            name="D"
            id={`D-${index}`}
            onChange={(event) => handleChangePreguntas(index, event)}
            value={pregunta.D}
            placeholder="Redacta la opción de respuesta D"
            required
            spellCheck={false}
          />
          <label htmlFor={`opcion_correcta-${index}`}>Opción correcta.</label>
          <select
            style={{ marginBottom: "1rem" }}
            className="form-control"
            name="opcion_correcta"
            id={`opcion_correcta-${index}`}
            onChange={(event) => handleChangePreguntas(index, event)}
            value={pregunta.opcion_correcta}
            required
          >
            <option value="">Seleccione la opción correcta</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
      ))}

      <div
        className="col-md-12 text-center"
        style={{ margin: "1rem 0 0.5rem 0" }}
      >
        <button
          type="button"
          className="btn btn-default"
          disabled={isLoading}
          style={{ marginRight: "0.3rem" }}
          onClick={agregarPregunta}
        >
          <MdAddCircleOutline style={{ position: "relative", top: 2 }} />{" "}
          Agregar pregunta
        </button>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isLoading}
          style={{ marginLeft: "0.3rem" }}
        >
          <MdAdd style={{ position: "relative", top: 2 }} />{" "}
          {isLoading ? "Creando actividad..." : "Crear actividad"}
        </button>
      </div>
    </form>
  );
}
