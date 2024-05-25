"use client";

import { plus_jakarta_sans } from "@/app/fonts";
import {
  cambiarClave,
  cambiarClaveInitState,
} from "@/services/cambiar-clave.service";
import { THandleChange, THandleSubmit } from "@/types";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Swal from "sweetalert2";

interface IProps {
  email: string;
}

export default function ChangePasswordForm({ email }: IProps) {
  const [passwordsVisibility, setPasswordsVisibility] = useState({
    password: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(cambiarClaveInitState);

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
      const cambioClave = await cambiarClave(formData, email);

      await Swal.fire({
        customClass: plus_jakarta_sans.className,
        title: "¡Contraseña cambiada!",
        text: cambioClave.message,
        icon: "success",
        timer: 3000,
      });

      setFormData(cambiarClaveInitState);
      signOut();
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          customClass: plus_jakarta_sans.className,
          title: "¡Error!",
          text: error.message.replace(/,/g, ", "),
          icon: "error",
          timer: 3000,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="email" id="email" defaultValue={email} />
      {/* Cambio de contraseña */}
      <div className="form-group text-center pt-3">
        <h3 style={{ textAlign: "center" }}>Cambia tu contraseña</h3>
      </div>
      <div className="form-group mx-sm-4 pt-3" style={{ position: "relative" }}>
        <label htmlFor="current_password">Contraseña Actual</label>
        <input
          type={passwordsVisibility.password ? "text" : "password"}
          className="form-control"
          id="current_password"
          name="current_password"
          placeholder="Contraseña actual"
          required
          autoComplete="current-password"
          value={formData.current_password}
          onChange={handleChange}
        />

        <span
          style={{
            position: "absolute",
            top: "60%",
            right: 10,
            cursor: "pointer",
          }}
        >
          {!passwordsVisibility.password ? (
            <MdVisibility
              onClick={() =>
                setPasswordsVisibility({
                  ...passwordsVisibility,
                  password: !passwordsVisibility.password,
                })
              }
            />
          ) : (
            <MdVisibilityOff
              onClick={() =>
                setPasswordsVisibility({
                  ...passwordsVisibility,
                  password: !passwordsVisibility.password,
                })
              }
            />
          )}
        </span>
      </div>
      <div className="form-group mx-sm-4 pt-3" style={{ position: "relative" }}>
        <label htmlFor="password">Nueva Contraseña</label>
        <input
          type={passwordsVisibility.newPassword ? "text" : "password"}
          className="form-control"
          id="password"
          name="password"
          placeholder="Nueva contraseña"
          autoComplete="new-password"
          value={formData.password}
          onChange={handleChange}
        />

        <span
          style={{
            position: "absolute",
            top: "61%",
            right: 10,
            cursor: "pointer",
          }}
        >
          {!passwordsVisibility.newPassword ? (
            <MdVisibility
              onClick={() =>
                setPasswordsVisibility({
                  ...passwordsVisibility,
                  newPassword: !passwordsVisibility.newPassword,
                })
              }
            />
          ) : (
            <MdVisibilityOff
              onClick={() =>
                setPasswordsVisibility({
                  ...passwordsVisibility,
                  newPassword: !passwordsVisibility.newPassword,
                })
              }
            />
          )}
        </span>
      </div>
      <div className="form-group mx-sm-4 pt-3" style={{ position: "relative" }}>
        <label htmlFor="confirmar_password">Confirmar Contraseña</label>
        <input
          type={passwordsVisibility.confirmPassword ? "text" : "password"}
          className="form-control"
          id="confirmar_password"
          name="confirmar_password"
          placeholder="Confirmar contraseña"
          autoComplete="new-password"
          value={formData.confirmar_password}
          onChange={handleChange}
        />

        <span
          style={{
            position: "absolute",
            top: "60%",
            right: 10,
            cursor: "pointer",
          }}
        >
          {!passwordsVisibility.confirmPassword ? (
            <MdVisibility
              onClick={() =>
                setPasswordsVisibility({
                  ...passwordsVisibility,
                  confirmPassword: !passwordsVisibility.confirmPassword,
                })
              }
            />
          ) : (
            <MdVisibilityOff
              onClick={() =>
                setPasswordsVisibility({
                  ...passwordsVisibility,
                  confirmPassword: !passwordsVisibility.confirmPassword,
                })
              }
            />
          )}
        </span>
      </div>
      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
