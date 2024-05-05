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
      {/* Cambio de contraseña */}
      <div className="form-group text-center pt-3">
        <h3 className="all-tittles" style={{ textAlign: "center" }}>
          Cambia tu contraseña
        </h3>
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <label htmlFor="contrasenaActual">Cambiar contraseña</label>
        <input
          type={passwordsVisibility.password ? "text" : "password"}
          className="form-control"
          id="contrasenaActual"
          placeholder="Ingrese su Contraseña"
          required
          autoComplete="current-password"
        />
        {!passwordsVisibility.password ? (
          <MdVisibility
            onClick={() =>
              setPasswordsVisibility({
                ...passwordsVisibility,
                password: !passwordsVisibility.password,
              })
            }
            style={{
              position: "absolute",
              top: "20%",
              transform: "translateY(-100%)",
              right: 20,
              cursor: "pointer",
            }}
          />
        ) : (
          <MdVisibilityOff
            onClick={() =>
              setPasswordsVisibility({
                ...passwordsVisibility,
                password: !passwordsVisibility.password,
              })
            }
            style={{
              position: "absolute",
              top: "20%",
              transform: "translateY(-100%)",
              right: 20,
              cursor: "pointer",
            }}
          />
        )}
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <label htmlFor="nuevaContrasena">Nueva Contraseña</label>
        <input
          type={passwordsVisibility.newPassword ? "text" : "password"}
          className="form-control"
          id="nuevaContrasena"
          name="nuevaContrasena"
          placeholder="Ingrese la nueva contraseña"
          autoComplete="new-password"
        />

        {!passwordsVisibility.newPassword ? (
          <MdVisibility
            onClick={() =>
              setPasswordsVisibility({
                ...passwordsVisibility,
                newPassword: !passwordsVisibility.newPassword,
              })
            }
            style={{
              position: "absolute",
              top: "49%",
              transform: "translateY(-100%)",
              right: 20,
              cursor: "pointer",
            }}
          />
        ) : (
          <MdVisibilityOff
            onClick={() =>
              setPasswordsVisibility({
                ...passwordsVisibility,
                newPassword: !passwordsVisibility.newPassword,
              })
            }
            style={{
              position: "absolute",
              top: "49%",
              transform: "translateY(-100%)",
              right: 20,
              cursor: "pointer",
            }}
          />
        )}
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <label htmlFor="confirmarContrasena">Confirmar Contraseña</label>
        <input
          type={passwordsVisibility.confirmPassword ? "text" : "password"}
          className="form-control"
          id="confirmarContrasena"
          name="confirmarContrasena"
          placeholder="Confirme la nueva contraseña"
          autoComplete="new-password"
        />

        {!passwordsVisibility.confirmPassword ? (
          <MdVisibility
            onClick={() =>
              setPasswordsVisibility({
                ...passwordsVisibility,
                confirmPassword: !passwordsVisibility.confirmPassword,
              })
            }
            style={{
              position: "absolute",
              top: "78%",
              transform: "translateY(-100%)",
              right: 20,
              cursor: "pointer",
            }}
          />
        ) : (
          <MdVisibilityOff
            onClick={() =>
              setPasswordsVisibility({
                ...passwordsVisibility,
                confirmPassword: !passwordsVisibility.confirmPassword,
              })
            }
            style={{
              position: "absolute",
              top: "78%",
              transform: "translateY(-100%)",
              right: 20,
              cursor: "pointer",
            }}
          />
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
}
