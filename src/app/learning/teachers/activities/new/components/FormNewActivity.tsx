"use client";

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

  const [formData, setFormData] = useState({
    id_libro: "",
    fecha_entrega: "",
    hora_entrega: "",
    id_preguntas: [] as string[],
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: THandleChange) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeLibro = (e: THandleChange) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      id_preguntas: [],
    });

    setPreguntas(
      preguntasOrig.filter(
        (pregunta: any) => pregunta.id_libro === parseInt(e.target.value)
      )
    );
  };

  const handleSubmit = async (e: THandleSubmit) => {
    e.preventDefault();

    if (formData.id_preguntas.length === 0) {
      toast.error("Debe seleccionar al menos una pregunta.");
      return;
    }

    console.log(formData);

    setIsLoading(true);

    try {
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
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
            value={formData.id_libro}
            onChange={handleChangeLibro}
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
            type="date"
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

        <div className="form-group">
          <label htmlFor="hora_entrega">Hora de entrega de la actividad</label>
          <input
            type="time"
            className="form-control"
            id="hora_entrega"
            name="hora_entrega"
            placeholder="Hora de entrega"
            onChange={handleChange}
            value={formData.hora_entrega}
            required
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="col-md-7">
        <ul className="list-group text-center">
          {preguntas.length > 0 || !formData.id_libro ? (
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
                            id_preguntas: [
                              ...formData.id_preguntas,
                              pregunta.id,
                            ],
                          });
                        } else {
                          setFormData({
                            ...formData,
                            id_preguntas: formData.id_preguntas.filter(
                              (id: string) => id !== pregunta.id
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
