import { api } from "@/libs/fetchClient";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

async function getData() {
  const res = await api("/grados", { method: "GET" });

  if (!res.ok) {
    return toast.error(
      "Ocurrió un error al obtener los grados escolares, por favor intente de nuevo."
    );
  }

  return res.json();
}

const formDataInitialState = {
  p_nombre: "",
  s_nombre: "",
  p_apellido: "",
  s_apellido: "",
  edad: "",
  email: "",
  password: "",
  confirmar_password: "",
  id_grado: "",
  rol: "",
};

export default function FormRegistro() {
  const [grades, setGrades] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(formDataInitialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await api("/auth/registrarse", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          edad: parseInt(formData.edad),
          id_grado: parseInt(formData.id_grado),
          username: formData.email.split("@")[0],
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        return toast.error(
          Array.isArray(data.message) ? data.message.join(", ") : data.message
        );
      }

      console.log(data);
      toast.success(data.message);
      setFormData(formDataInitialState);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData().then((data) => {
      setGrades(data);
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-light text-center pt-3 pb-1">CREAR CUENTA</h1>
      {/* Primera Fila */}
      <div className="row">
        <div className="form-group col-md-6 py-3">
          <input
            name="p_nombre"
            type="text"
            className="form-control"
            placeholder="Primer nombre"
            required
            onChange={handleChange}
            value={formData.p_nombre}
          />
        </div>
        <div className="form-group col-md-6 py-3">
          <input
            name="s_nombre"
            type="text"
            className="form-control"
            placeholder="Segundo nombre"
            onChange={handleChange}
            value={formData.s_nombre}
          />
        </div>
      </div>
      {/* Segunda Fila */}
      <div className="row">
        <div className="form-group col-md-6 py-3">
          <input
            name="p_apellido"
            type="text"
            className="form-control"
            placeholder="Primer apellido"
            required
            onChange={handleChange}
            value={formData.p_apellido}
          />
        </div>
        <div className="form-group col-md-6 py-3">
          <input
            name="s_apellido"
            type="text"
            className="form-control"
            placeholder="Segundo apellido"
            onChange={handleChange}
            value={formData.s_apellido}
          />
        </div>
      </div>
      {/* Tercera Fila */}
      <div className="row">
        <div className="form-group col-md-6 py-3">
          <input
            name="edad"
            type="number"
            className="form-control"
            placeholder="Edad"
            required
            onChange={handleChange}
            value={formData.edad}
          />
        </div>
        <div className="form-group col-md-6 py-3">
          <select
            name="id_grado"
            className="form-control"
            required
            onChange={handleChange}
            value={formData.id_grado}
          >
            <option value="">Seleccione su grado escolar</option>
            {grades.map((grado: any) => (
              <option key={grado.id} value={grado.id}>
                {grado.nom_grado}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-6 py-3">
          <select
            name="rol"
            className="form-control"
            required
            onChange={handleChange}
            value={formData.rol}
          >
            <option value="">Seleccione su rol</option>
            <option value={"DOCENTE"}>Docente</option>
            <option value={"ESTUDIANTE"}>Estudiante</option>
          </select>
        </div>
        <div className="form-group col-md-6 py-3">
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Correo electrónico"
            required
            autoComplete="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="form-group col-md-6 py-3">
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Contraseña"
            required
            minLength={6}
            autoComplete="new-password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
      </div>
      {/* cuarta Fila */}
      <div className="row">
        <div className="form-group col-md-6 py-3">
          <input
            name="confirmar_password"
            type="password"
            className="form-control"
            placeholder="Confirmar contraseña"
            required
            minLength={6}
            autoComplete="new-password"
            onChange={handleChange}
            value={formData.confirmar_password}
          />
        </div>
        <div className="form-group col-md-6 py-2 mb-4">
          <button
            type="submit"
            className="btn w-100 ingresar"
            disabled={isLoading}
          >
            {isLoading ? "REGISTRÁNDOME..." : "REGISTRARME"}
          </button>
        </div>
      </div>
    </form>
  );
}
