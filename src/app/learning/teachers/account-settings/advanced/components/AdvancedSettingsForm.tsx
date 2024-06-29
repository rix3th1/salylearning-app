"use client";

import { plus_jakarta_sans } from "@/app/fonts";
import {
  actualizarDocente,
  actualizarDocenteInitState,
  actualizarUsuarioInitState,
} from "@/services/docentes.service";
import { actualizarUsuario } from "@/services/usuarios.service";
import { THandleChange, THandleSubmit } from "@/types";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { MdSave } from "react-icons/md";
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
        customClass: plus_jakarta_sans.className,
        title: "¡Usuario actualizado!",
        text: usuario.message,
        icon: "success",
        timer: 1500,
        confirmButtonColor: "#e21e80",
      });

      const docente = await actualizarDocente(teacher.id, { cod_docente });

      router.refresh();
      router.push("/learning/teachers/account-settings/profile");

      Swal.fire({
        customClass: plus_jakarta_sans.className,
        title: "¡Perfíl docente actualizado!",
        text: docente.message,
        icon: "success",
        timer: 1500,
        confirmButtonColor: "#e21e80",
      });
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

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group text-center pt-3">
        <h3 style={{ textAlign: "center" }}>Actualizar perfíl de usuario</h3>
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control text-lowercase"
          placeholder="Nombre de usuario *"
          name="username"
          autoComplete="username"
          required
          autoFocus
          value={formData.username}
          onChange={handleChange}
          disabled={isLoading}
          spellCheck={false}
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control text-capitalize"
          placeholder="Primer nombre *"
          name="p_nombre"
          required
          value={formData.p_nombre}
          onChange={handleChange}
          disabled={isLoading}
          spellCheck={false}
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control text-capitalize"
          placeholder="Segundo nombre"
          name="s_nombre"
          value={formData.s_nombre}
          onChange={handleChange}
          disabled={isLoading}
          spellCheck={false}
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control text-capitalize"
          placeholder="Primer apellido *"
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
          className="form-control text-capitalize"
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
          placeholder="Email *"
          name="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          spellCheck={false}
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cod. docente *"
          name="cod_docente"
          required
          value={formData.cod_docente}
          onChange={handleChange}
          maxLength={10}
          minLength={10}
          disabled={isLoading}
          spellCheck={false}
          autoComplete="off"
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
          className="form-control text-capitalize"
          placeholder="Ciudad"
          name="ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          disabled={isLoading}
          spellCheck={false}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginBottom: "40px" }}
        disabled={isLoading}
      >
        <MdSave /> {isLoading ? "Guardando..." : "Guardar cambios"}
      </button>
    </form>
  );
}
