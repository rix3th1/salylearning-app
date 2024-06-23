import {
  cambiarClaveRecuperacion,
  cambiarClaveRecuperacionInitState,
} from "@/services/recuperar-clave.service";
import { THandleChange, THandleSubmit } from "@/types";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { toast } from "sonner";

interface IProps {
  access_token_cambiar_clave: string;
}

export default function ChangePswForm({
  access_token_cambiar_clave: tk,
}: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(cambiarClaveRecuperacionInitState);

  const router = useRouter();

  const handleChange = (e: THandleChange) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: THandleSubmit) => {
    e.preventDefault();
    setIsLoading(true);

    toast.promise(cambiarClaveRecuperacion(formData, tk), {
      loading: "Cambiando contraseña...",
      success(data) {
        setFormData(cambiarClaveRecuperacionInitState);
        router.push("/");
        return data.message;
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

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          style={{ color: "#000" }}
          name="password"
          id="password"
          type="password"
          autoComplete="new-password"
          placeholder="Contraseña"
          onChange={handleChange}
          value={formData.password}
          required
          autoFocus
        />
        <label htmlFor="password">Contraseña</label>
      </div>

      <div className="form-floating mb-3">
        <input
          className="form-control"
          style={{ color: "#000" }}
          name="confirmar_password"
          id="confirmar_password"
          type="password"
          autoComplete="new-password"
          placeholder="Confirmar contraseña"
          onChange={handleChange}
          value={formData.confirmar_password}
          required
        />
        <label htmlFor="confirmar_password">Confirmar contraseña</label>
      </div>

      {/* Submit Button*/}
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          disabled={isLoading}
        >
          {isLoading ? "ENVIANDO..." : "ENVIAR"}
        </button>
      </div>
    </form>
  );
}
