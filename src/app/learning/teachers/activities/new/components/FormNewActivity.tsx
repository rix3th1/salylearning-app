"use client";

import { obtenerLibros } from "@/services/libros.service";
import { obtenerPreguntas } from "@/services/preguntas.service";
import { THandleChange, THandleSubmit } from "@/types";
import { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { toast } from "sonner";

export default function FormNewActivity() {
  const [libros, setLibros] = useState([]);
  const [preguntas, setPreguntas] = useState([]);

  const [formData, setFormData] = useState({
    id_libro: "",
    fecha_entrega: "",
    hora_entrega: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: THandleChange) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeLibro = (e: THandleChange) => {
    handleChange(e);

    toast.promise(obtenerPreguntas, {
      loading: "Cargando preguntas...",
      success(data) {
        setPreguntas(data);
        return "Listo";
      },
      error(error) {
        if (error instanceof Error) {
          return error.message.replace(/,/g, ", ");
        }
      },
    });
  };

  const handleSubmit = async (e: THandleSubmit) => {
    e.preventDefault();

    setIsLoading(true);

    try {
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(
    () => {
      toast.promise(obtenerLibros.client, {
        loading: "Cargando libros...",
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
            {libros.map((libro: any) => (
              <option key={libro.id} value={libro.id}>
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
        <ul className="list-group">
          {preguntas.map((pregunta: any) => (
            <li key={pregunta.id} className="list-group-item">
              <div className="checkbox">
                <label>
                  <input type="checkbox" value={pregunta.id} />
                  {pregunta.pregunta}
                </label>
              </div>
            </li>
          ))}
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
