import { registrarse, registrarseInitState } from "@/services/auth.service";
import { obtenerGrados } from "@/services/grados.service";
import { THandleChange, THandleSubmit } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface IProps {
  modalRegistro: React.RefObject<HTMLDivElement>;
}

export default function FormRegistro({ modalRegistro }: IProps) {
  const [grados, setGrados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(registrarseInitState);

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
      const registro = await registrarse(formData);

      toast.success(registro.message);
      setFormData(registrarseInitState);
      if (modalRegistro.current) {
        modalRegistro.current.style.display = "none";
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message.replace(/,/g, ", "));
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    toast.promise(
      obtenerGrados()
        .then((data) => {
          setGrados(data);
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
            {grados.map((grado: any) => (
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
