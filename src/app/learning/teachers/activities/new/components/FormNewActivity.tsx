"use client";

import {
  crearCuestionarioConPreguntas,
  cuestionarioInitState,
} from "@/services/cuestionarios.service";
import { obtenerLibros } from "@/services/libros.service";
import { obtenerPreguntas } from "@/services/preguntas.service";
import { THandleChange, THandleSubmit } from "@/types";
import { useEffect, useState } from "react";
import { MdAdd, MdWarning } from "react-icons/md";
import { toast } from "sonner";

const promises = [obtenerLibros.client, obtenerPreguntas];
const getData = () => Promise.all(promises.map((res) => res()));

export default function FormNewActivity() {
  const [libros, setLibros] = useState([]);
  const [preguntasOrig, setpreguntasOrig] = useState([]);
  const [preguntas, setPreguntas] = useState([]);
  const [formData, setFormData] = useState(cuestionarioInitState);
  const [isLoading, setIsLoading] = useState(false);
  const [id_libro, setId_libro] = useState("");

  const handleChange = (e: THandleChange) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeLibro = (e: THandleChange) => {
    setId_libro(e.target.value);
    setFormData({
      ...formData,
      preguntas: [],
    });

    setPreguntas(
      preguntasOrig.filter(
        (pregunta: any) => pregunta.id_libro === parseInt(e.target.value)
      )
    );
  };

  const handleSubmit = async (e: THandleSubmit) => {
    e.preventDefault();

    if (formData.preguntas.length === 0) {
      toast.error("Debe seleccionar al menos una pregunta.");
      return;
    }

    setIsLoading(true);
    toast.promise(crearCuestionarioConPreguntas(formData), {
      loading: "Creando actividad...",
      success(_data) {
        setFormData(cuestionarioInitState);
        setId_libro("");
        return "Actividad creada exitosamente!";
      },
      error(error) {
        if (error instanceof Error) {
          return error.message.replace(/,/g, ", ");
        }
      },
      finally() {
        setIsLoading(false);
      },
    });
  };

  useEffect(
    () => {
      toast.promise(getData, {
        loading: "Cargando datos...",
        success(data) {
          setLibros(data[0]);
          setpreguntasOrig(data[1]);
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
      <div className="col-md-5">
        <div className="form-group">
          <label htmlFor="id_libro">
            Libro al que se refiere la actividad:
          </label>
          <select
            name="id_libro"
            id="id_libro"
            className="form-control"
            required
            onChange={handleChangeLibro}
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
            onChange={handleChange}
            value={formData.fecha_entrega}
            required
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="col-md-7">
        <ul className="list-group text-center">
          {preguntas.length > 0 ? (
            preguntas.map((pregunta: any) => (
              <li key={pregunta.id} className="list-group-item">
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      value={pregunta.id}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            preguntas: [...formData.preguntas, pregunta.id],
                          });
                        } else {
                          setFormData({
                            ...formData,
                            preguntas: formData.preguntas.filter(
                              (id: number) => id !== parseInt(pregunta.id)
                            ),
                          });
                        }
                      }}
                    />
                    {pregunta.pregunta}
                  </label>
                </div>
              </li>
            ))
          ) : (
            <article
              className="tile"
              style={{ margin: "2rem 0", padding: "0.5rem" }}
            >
              <div className="text-center">
                <MdWarning />
              </div>
              <span style={{ fontSize: "15px" }}>
                Aún no hay preguntas disponibles para este libro.
              </span>
            </article>
          )}
        </ul>
      </div>

      <div
        className="col-md-12 text-center"
        style={{ margin: "1rem 0 0.5rem 0" }}
      >
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          <MdAdd /> {isLoading ? "Creando..." : "Crear"}
        </button>
      </div>
    </form>
  );
}
