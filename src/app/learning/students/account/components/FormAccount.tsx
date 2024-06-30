"use client";

import { plus_jakarta_sans } from "@/app/fonts";
import {
  actualizarEstudiante,
  actualizarEstudianteInitState,
} from "@/services/estudiantes.service";
import {
  actualizarGradoUsuario,
  actualizarGradoUsuarioInitState,
  obtenerGrados,
} from "@/services/grados.service";
import {
  actualizarUsuario,
  actualizarUsuarioInitState,
} from "@/services/usuarios.service";
import { THandleChange, THandleSubmit } from "@/types";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useState } from "react";
import { MdUpdate } from "react-icons/md";
import { toast } from "sonner";
import Swal from "sweetalert2";

interface IProps {
  user: any;
  student: any;
}

export default function FormAccount({ user, student }: IProps) {
  const gradoSelected = user?.grado_usuario.id_grado;

  const [grados, setGrados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    ...actualizarUsuarioInitState,
    ...actualizarEstudianteInitState,
    ...actualizarGradoUsuarioInitState,
    p_nombre: user?.p_nombre,
    s_nombre: user?.s_nombre || "",
    p_apellido: user?.p_apellido,
    s_apellido: user?.s_apellido || "",
    edad: user?.edad || null,
    id_grado: gradoSelected,
    cod_estudiante: student.cod_estudiante || "",
    apodo: student.apodo || "",
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
      const { cod_estudiante, apodo, id_grado, ...data } = formData;

      const usuario = await actualizarUsuario(user.id, data);

      await Swal.fire({
        customClass: plus_jakarta_sans.className,
        title: "¡Usuario actualizado!",
        text: usuario.message,
        icon: "success",
        timer: 1500,
        confirmButtonColor: "#e21e80",
      });

      const gradoUsuario = await actualizarGradoUsuario(
        user?.grado_usuario.id,
        id_grado
      );

      await Swal.fire({
        customClass: plus_jakarta_sans.className,
        title: "¡Grado actualizado!",
        text: gradoUsuario.message,
        icon: "success",
        timer: 1500,
        confirmButtonColor: "#e21e80",
      });

      const estudiante = await actualizarEstudiante(student.id, {
        cod_estudiante,
        apodo,
      });

      router.refresh();

      Swal.fire({
        customClass: plus_jakarta_sans.className,
        title: "¡Perfíl estudiante actualizado!",
        text: estudiante.message,
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

  useEffect(() => {
    setIsLoading(true);
    toast.promise(obtenerGrados, {
      loading: "Cargando grados...",
      success(data) {
        setGrados(data);
        setFormData({ ...formData, id_grado: gradoSelected });
        return "Listo";
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="p_nombre">Primer Nombre:</label>
        <input
          type="text"
          className="form-control text-capitalize"
          id="p_nombre"
          name="p_nombre"
          placeholder="Primer nombre del alumno *"
          value={formData.p_nombre}
          onChange={handleChange}
          autoFocus
          required
          disabled={isLoading}
          spellCheck={false}
        />
      </div>
      <div className="form-group">
        <label htmlFor="s_nombre">Segundo Nombre:</label>
        <input
          type="text"
          className="form-control text-capitalize"
          id="s_nombre"
          name="s_nombre"
          placeholder="Segundo nombre del alumno"
          value={formData.s_nombre}
          onChange={handleChange}
          disabled={isLoading}
          spellCheck={false}
        />
      </div>
      <div className="form-group">
        <label htmlFor="p_apellido">Primer Apellido:</label>
        <input
          type="text"
          className="form-control text-capitalize"
          id="p_apellido"
          name="p_apellido"
          placeholder="Primer apellido del alumno *"
          value={formData.p_apellido}
          onChange={handleChange}
          required
          disabled={isLoading}
          spellCheck={false}
        />
      </div>
      <div className="form-group">
        <label htmlFor="s_apellido">Segundo Apellido:</label>
        <input
          type="text"
          className="form-control text-capitalize"
          id="s_apellido"
          name="s_apellido"
          placeholder="Segundo apellido del alumno"
          value={formData.s_apellido}
          onChange={handleChange}
          disabled={isLoading}
          spellCheck={false}
        />
      </div>
      <div className="form-group">
        <label htmlFor="edad">Edad:</label>
        <input
          type="text"
          className="form-control"
          id="edad"
          name="edad"
          placeholder="Edad del alumno *"
          value={formData.edad}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="id_grado">Grado:</label>
        <select
          name="id_grado"
          id="id_grado"
          className="form-control"
          required
          onChange={handleChange}
          disabled={isLoading}
          value={formData.id_grado}
        >
          <option value="" disabled>
            Seleccione su grado escolar *
          </option>
          {grados.map((grado: any) => (
            <option key={grado.id} value={grado.id}>
              {grado.nom_grado}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="cod_estudiante">Código Estudiante:</label>
        <input
          type="text"
          className="form-control text-uppercase"
          id="cod_estudiante"
          name="cod_estudiante"
          placeholder="Cod. Estudiante *"
          required
          value={formData.cod_estudiante}
          minLength={10}
          maxLength={10}
          onChange={handleChange}
          spellCheck={false}
          autoComplete="off"
          disabled
          readOnly
        />
      </div>
      <div className="form-group">
        <label htmlFor="apodo">Apodo:</label>
        <input
          type="text"
          className="form-control"
          id="apodo"
          name="apodo"
          placeholder="Apodo del alumno"
          value={formData.apodo}
          disabled={isLoading}
          onChange={handleChange}
          spellCheck={false}
        />
      </div>

      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        <MdUpdate style={{ position: "relative", top: 1 }} />{" "}
        {isLoading ? "Actualizando..." : "Actualizar"}
      </button>
    </form>
  );
}
