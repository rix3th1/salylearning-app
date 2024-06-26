"use client";

import {
  contactoYSoporteInitState,
  crearContactoYSoporte,
} from "@/services/contactos.service";
import { THandleChange, THandleSubmit } from "@/types";
import { useState } from "react";
import { MdMessage } from "react-icons/md";
import { toast } from "sonner";

export default function ContactAndSupportForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(contactoYSoporteInitState);

  const handleChange = (e: THandleChange) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: THandleSubmit) => {
    e.preventDefault();
    setIsLoading(true);

    toast.promise(crearContactoYSoporte(formData), {
      loading: "Enviando mensaje...",
      success(data) {
        setFormData(contactoYSoporteInitState);
        return `Gracias por contactarnos, ${data.nombre_completo}! Nos pondremos en contacto contigo pronto. 🚀`;
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
      <label htmlFor="nombre_completo">Nombre:</label>
      <input
        type="text"
        id="nombre_completo"
        name="nombre_completo"
        className="form-control text-capitalize"
        required
        autoFocus
        onChange={handleChange}
        value={formData.nombre_completo}
        spellCheck={false}
        autoComplete="off"
      />
      <label htmlFor="email">Correo Electrónico: *</label>
      <input
        type="email"
        id="email"
        name="email"
        className="form-control"
        required
        onChange={handleChange}
        value={formData.email}
        autoComplete="email"
        spellCheck={false}
      />
      <label htmlFor="asunto">Asunto: *</label>
      <input
        type="text"
        id="asunto"
        name="asunto"
        className="form-control"
        required
        onChange={handleChange}
        value={formData.asunto}
        autoComplete="off"
        spellCheck={false}
      />
      <label htmlFor="mensaje">Mensaje: *</label>
      <textarea
        id="mensaje"
        name="mensaje"
        className="form-control"
        rows={4}
        required
        onChange={handleChange}
        value={formData.mensaje}
        spellCheck={false}
      />
      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        <MdMessage /> {isLoading ? "Enviando Mensaje..." : "Enviar Mensaje"}
      </button>
    </form>
  );
}
