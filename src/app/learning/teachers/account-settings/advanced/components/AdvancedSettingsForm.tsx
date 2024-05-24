"use client";

import {
  actualizarDocente,
  actualizarDocenteInitState,
  actualizarUsuarioInitState,
} from "@/services/docentes.service";
import { actualizarUsuario } from "@/services/usuarios.service";
import { THandleChange, THandleSubmit } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

interface IProps {
  user: any;
  teacher: any;
}

export default function AdvancedSettingsForm({ user, teacher }: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    ...actualizarUsuarioInitState,
    ...actualizarDocenteInitState,
    cod_docente: teacher.cod_docente || "",
    p_nombre: user?.p_nombre,
    s_nombre: user?.s_nombre || "",
    p_apellido: user?.p_apellido,
    s_apellido: user?.s_apellido || "",
    email: user?.email,
    username: user?.username,
    fecha_nacimiento: user.fecha_nacimiento?.split("T")[0] || "",
    ciudad: user?.ciudad || "",
  });

  const router = useRouter();

  const handleChange = (e: THandleChange) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: THandleSubmit) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { cod_docente, ...data } = formData;

      const usuario = await actualizarUsuario(user.id, data);

      await Swal.fire({
        title: "¡Usuario actualizado!",
        text: usuario.message,
        icon: "success",
        timer: 3000,
      });

      const docente = await actualizarDocente(teacher.id, { cod_docente });

      Swal.fire({
        title: "¡Perfíl docente actualizado!",
        text: docente.message,
        icon: "success",
        timer: 3000,
      });

      router.refresh();
      router.push("/learning/teachers/account-settings/profile");
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          title: "¡Error!",
          text: error.message.replace(/,/g, ", "),
          icon: "error",
          timer: 3000,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group text-center pt-3">
        <h3 style={{ textAlign: "center" }}>Actualizar perfíl de usuario</h3>
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre de usuario"
          name="username"
          autoComplete="username"
          required
          autoFocus
          value={formData.username}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Primer nombre"
          name="p_nombre"
          required
          value={formData.p_nombre}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Segundo nombre"
          name="s_nombre"
          value={formData.s_nombre}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Primer apellido"
          name="p_apellido"
          required
          value={formData.p_apellido}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Segundo apellido"
          name="s_apellido"
          value={formData.s_apellido}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          name="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cod. docente"
          name="cod_docente"
          required
          value={formData.cod_docente}
          onChange={handleChange}
          maxLength={6}
          minLength={6}
          disabled={isLoading}
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
        <input
          type="date"
          className="form-control"
          id="fecha_nacimiento"
          name="fecha_nacimiento"
          value={formData.fecha_nacimiento}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ciudad"
          name="ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginBottom: "40px" }}
        disabled={isLoading}
      >
        {isLoading ? "Guardando..." : "Guardar cambios"}
      </button>
    </form>
  );
}
