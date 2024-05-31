"use client";

import pkg from "@/../package.json";
import { contactoInitState, crearContacto } from "@/services/contactos.service";
import { THandleChange, THandleSubmit } from "@/types";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { MdSend } from "react-icons/md";
import { toast } from "sonner";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(contactoInitState);

  const router = useRouter();

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
      const contacto = await crearContacto(formData);

      toast.success(
        `Gracias por contactarnos, ${contacto.nombre_completo}! Nos pondremos en contacto contigo pronto. Atentamente, el equipo de ${pkg.publisher}. 🚀`
      );
      setFormData(contactoInitState);
      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message.replace(/,/g, ", "));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name input*/}
      <div className="form-floating mb-3">
        <input
          className="form-control"
          style={{ color: "#000" }}
          name="nombre_completo"
          id="nombre_completo"
          type="text"
          placeholder="Ingrese su nombre"
          autoComplete="name"
          onChange={handleChange}
          value={formData.nombre_completo}
          required
          autoFocus
        />
        <label htmlFor="nombre_completo">Nombre completo</label>
      </div>
      {/* Email address input*/}
      <div className="form-floating mb-3">
        <input
          className="form-control"
          style={{ color: "#000" }}
          name="email"
          id="email"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <label htmlFor="email">Correo electrónico</label>
      </div>
      {/* Phone number input*/}
      <div className="form-floating mb-3">
        <input
          className="form-control"
          style={{ color: "#000" }}
          name="telefono"
          id="telefono"
          type="number"
          placeholder="3XX-XXX-XXXX"
          autoComplete="tel"
          onChange={handleChange}
          value={formData.telefono}
          required
        />
        <label htmlFor="telefono">Teléfono</label>
      </div>
      {/* Message input*/}
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          name="mensaje"
          id="mensaje"
          placeholder="Ingrese su mensaje aquí..."
          style={{ height: "10rem", color: "#000" }}
          onChange={handleChange}
          value={formData.mensaje}
          required
          spellCheck={false}
        />
        <label htmlFor="mensaje">Mensaje o comentario</label>
      </div>

      {/* Submit Button*/}
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          disabled={isLoading}
        >
          <MdSend /> {isLoading ? "ENVIANDO..." : "ENVIAR"}
        </button>
      </div>
    </form>
  );
}
