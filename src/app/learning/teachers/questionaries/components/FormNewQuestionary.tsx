import { obtenerLibros } from "@/services/libros.service";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function FormNewQuestionary() {
  const [libros, setLibros] = useState([]);

  useEffect(
    () => {
      toast.promise(obtenerLibros.client, {
        loading: "Cargando libros...",
        success(data) {
          setLibros(data);
          return "Listo";
        },
        error(error) {
          if (error instanceof Error) {
            return error.message.replace(/,/g, ", ");
          }
        },
      });
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <form>
      <label className="swal2-input-label">
        Libro al que se refiere la pregunta
        <span className="text-danger">*</span>
      </label>
      <select name="id_libro" className="swal2-select" required>
        <option value="">Seleccione el libro</option>
        {libros.map((libro: any) => (
          <option key={libro.id} value={libro.id}>
            {libro.nom_libro}
          </option>
        ))}
      </select>

      <label className="swal2-input-label">
        Contenido de la pregunta
        <span className="text-danger">*</span>
      </label>
      <textarea
        className="swal2-textarea"
        name="pregunta"
        placeholder="Redacta la pregunta acerca del tema del libro"
        required
      />

      <hr />
      <p>Opciones de respuesta única:</p>

      <label className="swal2-input-label">
        Respuesta A.
        <span className="text-danger">*</span>
      </label>
      <textarea
        className="swal2-textarea"
        name="resA"
        placeholder="Redacta la opción de respuesta A"
        required
      />

      <label className="swal2-input-label">
        Respuesta B.
        <span className="text-danger">*</span>
      </label>
      <textarea
        className="swal2-textarea"
        name="resB"
        placeholder="Redacta la opción de respuesta B"
        required
      />

      <label className="swal2-input-label">
        Respuesta C.
        <span className="text-danger">*</span>
      </label>
      <textarea
        className="swal2-textarea"
        name="resC"
        placeholder="Redacta la opción de respuesta C"
        required
      />

      <label className="swal2-input-label">
        Respuesta D.
        <span className="text-danger">*</span>
      </label>
      <textarea
        className="swal2-textarea"
        name="resD"
        placeholder="Redacta la opción de respuesta D"
        required
      />
    </form>
  );
}
