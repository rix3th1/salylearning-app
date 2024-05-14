import { THandleChange, THandleSubmit } from "@/types";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const formDataInitialState = {
  username: "",
  password: "",
};

export default function FormIniciarSesion() {
  const router = useRouter();
  const { data: session } = useSession();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(formDataInitialState);

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
      const res = await signIn("salylearning-app-credentials", {
        ...formData,
        redirect: false,
      });

      if (!res?.ok) {
        throw new Error(
          res?.error || "Error al iniciar sesión. Intente de nuevo."
        );
      }

      const callbackUrl = new URL(res?.url || "").searchParams.get(
        "callbackUrl"
      );

      router.push(
        callbackUrl ||
          `/learning/${
            session?.user.rol === "DOCENTE" ? "teachers" : "students"
          }`
      );
      router.refresh();
      toast.success("Bienvenido a SalyLearning!");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message.replace(/,/g, ", "));
      }
    } finally {
      setIsLoading(false);
      setFormData(formDataInitialState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-light text-center pt-3 pb-1">INICIAR SESIÓN</h1>

      <div className="form-group mx-sm-4 py-3">
        <input
          name="username"
          type="text"
          className="form-control"
          placeholder="Ingrese su nombre de usuario"
          required
          autoComplete="username"
          onChange={handleChange}
          value={formData.username}
        />
      </div>
      <div className="form-group mx-sm-4 pb-4">
        <input
          name="password"
          type="password"
          className="form-control"
          placeholder="Ingrese su contraseña"
          required
          autoComplete="current-password"
          onChange={handleChange}
          value={formData.password}
        />
      </div>
      <div className="form-group mx-sm-4 py-2">
        <button
          type="submit"
          className="btn w-100 ingresar"
          disabled={isLoading}
        >
          {isLoading ? "INGRESANDO..." : "INGRESAR"}
        </button>
      </div>
    </form>
  );
}
