"use client";

import { perfilEstudianteInitState } from "@/services/estudiantes.service";
import { obtenerGrados } from "@/services/grados.service";
import { THandleChange } from "@/types";
import { User } from "next-auth";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface IProps {
  user?: User;
  estudiante: any;
}

export default function FormAccount({ user, estudiante }: IProps) {
  const gradoSelected = user?.grado_usuario.grados.id;

  const [grados, setGrados] = useState([]);
  const [formData, setFormData] = useState(perfilEstudianteInitState);

  const handleChange = (e: THandleChange) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    toast.promise(
      obtenerGrados()
        .then((data) => {
          setGrados(data);
          setFormData({
            ...formData,
            id_grado: gradoSelected,
          });
        })
        .catch((error) => {
          if (error instanceof Error) {
            toast.error(error.message.replace(/,/g, ", "));
          }
        }),
      {
        loading: "Cargando...",
        success: "Listo",
      }
    );
  }, []);

  return (
    <div>
      <hr />
      <div className="form-group">
        <label htmlFor="p_nombre">Primer Nombre:</label>
        <input
          type="text"
          className="form-control"
          id="p_nombre"
          name="p_nombre"
          placeholder="Primer nombre del alumno"
          defaultValue={user?.p_nombre}
          autoFocus
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="s_nombre">Segundo Nombre:</label>
        <input
          type="text"
          className="form-control"
          id="s_nombre"
          name="s_nombre"
          placeholder="Segundo nombre del alumno"
          defaultValue={user?.s_nombre}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="p_apellido">Primer Apellido:</label>
        <input
          type="text"
          className="form-control"
          id="p_apellido"
          name="p_apellido"
          placeholder="Primer apellido del alumno"
          defaultValue={user?.p_apellido}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="s_apellido">Segundo Apellido:</label>
        <input
          type="text"
          className="form-control"
          id="s_apellido"
          name="s_apellido"
          placeholder="Segundo apellido del alumno"
          defaultValue={user?.s_apellido}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="edad">Edad:</label>
        <input
          type="text"
          className="form-control"
          id="edad"
          placeholder="Edad del alumno"
          defaultValue={user?.edad}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="grado">Grado:</label>
        <select
          name="id_grado"
          className="form-control"
          required
          onChange={handleChange}
          value={formData.id_grado}
        >
          <option value="" disabled>
            Seleccione su grado escolar
          </option>
          {grados.map((grado: any) => (
            <option key={grado.id} value={grado.id}>
              {grado.nom_grado}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="ciudad">Ciudad:</label>
        <input
          type="text"
          className="form-control"
          id="ciudad"
          placeholder="Ciudad de residencia"
          defaultValue={user?.ciudad}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="apodo">Apodo:</label>
        <input
          type="text"
          className="form-control"
          id="apodo"
          placeholder="Apodo del alumno"
          defaultValue={estudiante.apodo}
          required
        />
      </div>
    </div>
  );
}
