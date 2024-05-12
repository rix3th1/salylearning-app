"use client";

import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function AdvancedSettingsForm() {
  const [passwordsVisibility, setPasswordsVisibility] = useState({
    password: false,
    newPassword: false,
    confirmPassword: false,
  });

  return (
    <form>
      <input type="hidden" name="username" id="username" />
      {/* Cambio de contraseña */}
      <div className="form-group text-center pt-3">
        <h3 style={{ textAlign: "center" }}>Cambia tu contraseña</h3>
      </div>
      <div className="form-group mx-sm-4 pt-3" style={{ position: "relative" }}>
        <label htmlFor="contrasenaActual">Cambiar contraseña</label>
        <input
          type={passwordsVisibility.password ? "text" : "password"}
          className="form-control"
          id="contrasenaActual"
          placeholder="Ingrese su Contraseña"
          required
          autoComplete="current-password"
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
        <label htmlFor="nuevaContrasena">Nueva Contraseña</label>
        <input
          type={passwordsVisibility.newPassword ? "text" : "password"}
          className="form-control"
          id="nuevaContrasena"
          name="nuevaContrasena"
          placeholder="Ingrese la nueva contraseña"
          autoComplete="new-password"
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
        <label htmlFor="confirmarContrasena">Confirmar Contraseña</label>
        <input
          type={passwordsVisibility.confirmPassword ? "text" : "password"}
          className="form-control"
          id="confirmarContrasena"
          name="confirmarContrasena"
          placeholder="Confirme la nueva contraseña"
          autoComplete="new-password"
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
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
}
