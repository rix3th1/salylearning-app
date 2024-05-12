import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const formDataInitialState = {
  username: "",
  password: "",
};

export default function FormIniciarSesion() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(formDataInitialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await signIn("salylearning-app-credentials", {
        ...formData,
        redirect: false,
      });

      if (!res?.ok) {
        throw new Error("Credenciales incorrectas.");
      }

      const callbackUrl = new URL(res?.url || "").searchParams.get(
        "callbackUrl"
      );

      router.push(callbackUrl || "/learning/teachers");
      router.refresh();
      toast.success("Bienvenido a SalyLearning!");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
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
          placeholder="Ingrese su usuario"
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
