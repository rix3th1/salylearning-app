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
        required
        autoFocus
        onChange={handleChange}
        value={formData.nombre_completo}
      />
      <label htmlFor="email">Correo Electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        onChange={handleChange}
        value={formData.email}
      />
      <label htmlFor="asunto">Asunto:</label>
      <input
        type="text"
        id="asunto"
        name="asunto"
        required
        onChange={handleChange}
        value={formData.asunto}
      />
      <label htmlFor="mensaje">Mensaje:</label>
      <textarea
        id="mensaje"
        name="mensaje"
        rows={4}
        required
        onChange={handleChange}
        value={formData.mensaje}
      />
      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        <MdMessage /> {isLoading ? "Enviando Mensaje..." : "Enviar Mensaje"}
      </button>
    </form>
  );
}
