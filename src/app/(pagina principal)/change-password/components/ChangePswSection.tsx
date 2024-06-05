"use client";

import { validarToken } from "@/services/recuperar-clave.service";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  MdPassword,
  MdSecurity,
  MdSentimentVeryDissatisfied,
} from "react-icons/md";
import { toast } from "sonner";
import ChangePswForm from "./ChangePswForm";

export default function ChangePswSection() {
  const search = useSearchParams();
  const token = search.get("token") || "";

  const [isLoading, setIsLoading] = useState(true);
  const [validReq, setValidReq] = useState(false);

  useEffect(() => {
    document.title =
      isLoading && !validReq
        ? "Verificando solicitud... | Saly Learning"
        : validReq
        ? "Cambiar contraseña | Saly Learning"
        : "Solicitud inválida | Saly Learning";
  }, [isLoading, validReq]);

  useEffect(() => {
    if (!token) {
      setIsLoading(false);
      setValidReq(false);
      return;
    }

    toast.promise(validarToken(token), {
      loading: "Verificando solicitud...",
      success(data) {
        setValidReq(data.isTokenValid);
        return `Bienvenido, ${data.p_nombre} ${data.p_apellido} a la sección de cambio de contraseña. Por favor, cambia tu contraseña.`;
      },
      error(error) {
        if (error instanceof Error) {
          setValidReq(false);
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
    <>
      <article className="text-center mb-5">
        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
          {isLoading && !validReq ? (
            <MdSecurity />
          ) : validReq ? (
            <MdPassword />
          ) : (
            <MdSentimentVeryDissatisfied />
          )}
        </div>
        <h1 className="fw-bolder">
          {isLoading && !validReq
            ? "Verificando solicitud..."
            : validReq
            ? "Cambiar contraseña"
            : "Solicitud inválida"}
        </h1>
        <p className="lead fw-normal text-muted mb-0">
          {isLoading && !validReq
            ? "Por favor, espere mientras verificamos la solicitud."
            : validReq
            ? "Cambia tu contraseña para proteger tu cuenta."
            : "La solicitud no es válida. Lamentamos los inconvenientes."}
        </p>
      </article>

      <div className="row gx-5 justify-content-center">
        <div className="col-lg-8 col-xl-6">
          {validReq && <ChangePswForm access_token_cambiar_clave={token} />}
        </div>
      </div>
    </>
  );
}
