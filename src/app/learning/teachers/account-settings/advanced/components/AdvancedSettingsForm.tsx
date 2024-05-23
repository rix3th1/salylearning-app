"use client";

import { useState } from "react";

export default function AdvancedSettingsForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState();

  return (
    <form>
      <div className="form-group text-center pt-3">
        <h3 style={{ textAlign: "center" }}>Actualizar perfíl de usuario</h3>
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre de usuario"
          name="username"
          autoComplete="username"
          required
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Primer nombre"
          name="p_nombre"
          required
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Segundo nombre"
          name="s_nombre"
          required
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Primer apellido"
          name="p_apellido"
          required
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Segundo apellido"
          name="s_apellido"
          required
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="number"
          className="form-control"
          placeholder="Cod. docente"
          name="cod_docente"
          required
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
        <input
          type="date"
          className="form-control"
          id="fecha_nacimiento"
          name="fecha_nacimiento"
          required
        />
      </div>
      <div className="form-group mx-sm-4 pt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ciudad"
          name="ciudad"
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginBottom: "40px" }}
      >
        Actualizar perfíl
      </button>
    </form>
  );
}
