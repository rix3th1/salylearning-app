import { THandleChange, THandleSubmit } from "@/types";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { MdLogin } from "react-icons/md";
import { toast } from "sonner";

interface IProps {
  setIsModalIniciarSesionOpen: (value: boolean) => void;
  isModalIniciarSesionOpen: boolean;
}

const formDataInitialState = {
  username: "",
  password: "",
};

export default function FormIniciarSesion({
  setIsModalIniciarSesionOpen,
  isModalIniciarSesionOpen,
}: IProps) {
  const { data: session } = useSession();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(formDataInitialState);
  const inputFcs = useRef<HTMLInputElement>(null);

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

      setIsModalIniciarSesionOpen(false);

      toast.success("Bienvenido a SalyLearning!");
      window.location.href =
        callbackUrl ||
        `/learning/${
          session?.user.rol === "DOCENTE" ? "teachers" : "students"
        }`;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message.replace(/,/g, ", "));
      }
    } finally {
      setIsLoading(false);
      setFormData(formDataInitialState);
    }
  };

  useEffect(() => {
    inputFcs.current?.focus();
  }, [isModalIniciarSesionOpen]);

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-light text-center pt-3 pb-1">INICIAR SESIÓN</h1>

      <div className="form-group mx-sm-4 py-3">
        <input
          ref={inputFcs}
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
          <MdLogin
            style={{ position: "relative", bottom: 1, fontSize: "24px" }}
          />{" "}
          {isLoading ? "INGRESANDO..." : "INGRESAR"}
        </button>
      </div>
    </form>
  );
}
