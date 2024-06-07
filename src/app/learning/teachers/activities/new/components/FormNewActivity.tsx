"use client";

import {
  crearCuestionarioConPreguntas,
  cuestionarioInitState,
  preguntasInitState,
} from "@/services/cuestionarios.service";
import { obtenerLibros } from "@/services/libros.service";
import { THandleChange, THandleSubmit } from "@/types";
import { useEffect, useState } from "react";
import { MdAdd, MdAddCircleOutline, MdClose } from "react-icons/md";
import { toast } from "sonner";

export default function FormNewActivity() {
  const [isLoading, setIsLoading] = useState(false);
  const [libros, setLibros] = useState([]);
  const [formData, setFormData] = useState(cuestionarioInitState);
  const [preguntas, setPreguntas] =
    useState<typeof preguntasInitState>(preguntasInitState);
  const [id_libro, setId_libro] = useState("");

  const agregarPregunta = () => {
    setPreguntas((prevState) => [
      ...prevState,
      {
        id: new Date().toISOString(),
        pregunta: "",
        resA: "",
        resB: "",
        resC: "",
        resD: "",
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
    toast.promise(
      crearCuestionarioConPreguntas({
        ...formData,
        preguntas: preguntas.map((p) => {
          const { id, ...rest } = p;
          return { ...rest, id_libro: parseInt(id_libro) };
        }),
      }),
      {
        loading: "Creando actividad...",
        success(_data) {
          setFormData(cuestionarioInitState);
          setPreguntas(preguntasInitState);
          return `Actividad creada exitosamente con ${preguntas.length} preguntas.`;
        },
        error(error) {
          if (error instanceof Error) {
            return error.message.replace(/,/g, ", ");
          }
        },
        finally() {
          setIsLoading(false);
        },
      }
    );
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
            onChange={(e) => setId_libro(e.target.value)}
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
            Fecha de entrega de la actividad:
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
          <div className="col-md-12" style={{ marginBottom: 5 }}>
            <button
              type="button"
              className="btn btn-danger btn-xs pull-right"
              onClick={() => quitarPregunta(index)}
              disabled={preguntas.length === 1}
            >
              <MdClose style={{ position: "relative", top: 2 }} />
            </button>
          </div>

          <label htmlFor="pregunta">Contenido de la pregunta {index + 1}</label>
          <textarea
            className="form-control"
            name="pregunta"
            id="pregunta"
            onChange={(e) => handleChangePreguntas(index, e)}
            value={pregunta.pregunta}
            placeholder="Redacta la pregunta acerca del tema del libro"
            required
            autoFocus
          />
          <hr />
          <p>Opciones de respuesta única:</p>
          <label htmlFor="resA">Respuesta A.</label>
          <textarea
            className="form-control"
            name="resA"
            id="resA"
            onChange={(e) => handleChangePreguntas(index, e)}
            value={pregunta.resA}
            placeholder="Redacta la opción de respuesta A"
            required
          />
          <label htmlFor="resB">Respuesta B.</label>
          <textarea
            className="form-control"
            name="resB"
            id="resB"
            onChange={(e) => handleChangePreguntas(index, e)}
            value={pregunta.resB}
            placeholder="Redacta la opción de respuesta B"
            required
          />
          <label htmlFor="resC">Respuesta C.</label>
          <textarea
            className="form-control"
            name="resC"
            id="resC"
            onChange={(e) => handleChangePreguntas(index, e)}
            value={pregunta.resC}
            placeholder="Redacta la opción de respuesta C"
            required
          />
          <label htmlFor="resD">Respuesta D.</label>
          <textarea
            className="form-control"
            name="resD"
            id="resD"
            onChange={(e) => handleChangePreguntas(index, e)}
            value={pregunta.resD}
            placeholder="Redacta la opción de respuesta D"
            required
          />
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
          <MdAddCircleOutline /> Agregar pregunta
        </button>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isLoading}
          style={{ marginLeft: "0.3rem" }}
        >
          <MdAdd /> {isLoading ? "Creando actividad..." : "Crear actividad"}
        </button>
      </div>
    </form>
  );
}
