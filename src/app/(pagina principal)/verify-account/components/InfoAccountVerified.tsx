"use client";

import { verificarCuenta } from "@/services/auth.service";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  MdHourglassTop,
  MdSentimentVeryDissatisfied,
  MdVerified,
} from "react-icons/md";
import { toast } from "sonner";

export default function InfoAccountVerified() {
  const search = useSearchParams();
  const token = search.get("token") || "";

  const [isLoading, setIsLoading] = useState(true);
  const [accountVerified, setAccountVerified] = useState(false);

  useEffect(() => {
    document.title =
      isLoading && !accountVerified
        ? "Verificando cuenta... | Saly Learning"
        : accountVerified
        ? "Cuenta verificada | Saly Learning"
        : "Error al verificar cuenta | Saly Learning";
  }, [isLoading, accountVerified]);

  useEffect(() => {
    if (!token) {
      setIsLoading(false);
      setAccountVerified(false);
      return;
    }

    verificarCuenta(token)
      .then((data) => {
        toast.success(data.message);
        setAccountVerified(data.verified);
      })
      .catch((error) => {
        if (error instanceof Error) {
          toast.error(
            Array.isArray(error.message)
              ? error.message.join(", ")
              : error.message
          );
          setAccountVerified(false);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article className="text-center mb-5">
      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
        {isLoading && !accountVerified ? (
          <MdHourglassTop />
        ) : accountVerified ? (
          <MdVerified />
        ) : (
          <MdSentimentVeryDissatisfied />
        )}
      </div>
      <h1 className="fw-bolder">
        {isLoading && !accountVerified
          ? "Verificando cuenta..."
          : accountVerified
          ? "Cuenta verificada"
          : "Error al verificar cuenta"}
      </h1>
      <p className="lead fw-normal text-muted mb-0">
        {isLoading && !accountVerified
          ? "Espere un momento"
          : accountVerified
          ? "¡Cuenta verificada con éxito!"
          : "Hubo un error al verificar la cuenta"}
      </p>
    </article>
  );
}
