"use client";

import pkg from "@/../package.json";
import { contactoInitState, crearContacto } from "@/services/contactos.service";
import { THandleChange, THandleSubmit } from "@/types";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
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

  const handleSubmit = (e: THandleSubmit) => {
    e.preventDefault();
    setIsLoading(true);

    toast.promise(crearContacto(formData), {
      loading: "Enviando...",
      success(data) {
        setFormData(contactoInitState);
        router.push("/");
        return `Gracias por contactarnos, ${data.nombre_completo}! Nos pondremos en contacto contigo pronto. Atentamente, el equipo de ${pkg.publisher}. 🚀`;
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
      {/* Name input*/}
      <div className="form-floating mb-3">
        <input
          className="form-control text-capitalize"
          style={{ color: "#000" }}
          name="nombre_completo"
          id="nombre_completo"
          type="text"
          placeholder="Ingrese su nombre"
          autoComplete="off"
          onChange={handleChange}
          value={formData.nombre_completo}
          required
          autoFocus
          spellCheck={false}
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
          autoComplete="off"
          onChange={handleChange}
          value={formData.email}
          required
          spellCheck={false}
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
          <MdEmail style={{ position: "relative", bottom: 3 }} />{" "}
          {isLoading ? "ENVIANDO..." : "ENVIAR"}
        </button>
      </div>
    </form>
  );
}
