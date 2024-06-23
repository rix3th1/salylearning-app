import { obtenerGenerosLiterarios } from "@/services/generos-literarios.service";
import { obtenerGrados } from "@/services/grados.service";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const promises = [obtenerGenerosLiterarios.client, obtenerGrados];
const getData = () => Promise.all(promises.map((res) => res()));

export default function FormNewBook() {
  const [grados, setGrados] = useState([]);
  const [generosLiterarios, setGenerosLiterarios] = useState([]);

  useEffect(() => {
    toast.promise(getData, {
      loading: "Cargando datos...",
      success(data) {
        setGenerosLiterarios(data[0]);
        setGrados(data[1]);
        return "Listo";
      },
      error(error) {
        if (error instanceof Error) {
          return error.message.replace(/,/g, ", ");
        }
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form>
      <p>
        Por favor, completa los siguientes campos para subir un nuevo libro.
      </p>

      <label htmlFor="nom_libro" className="swal2-input-label">
        Nombre del libro
        <span className="text-danger">*</span>
      </label>
      <input
        type="text"
        id="nom_libro"
        name="nom_libro"
        className="swal2-input text-capitalize"
        placeholder="Nombre del libro"
        required
        autoComplete="off"
        spellCheck={false}
        autoFocus
      />

      <label htmlFor="autor" className="swal2-input-label">
        Autor
        <span className="text-danger">*</span>
      </label>
      <input
        type="text"
        name="autor"
        id="autor"
        className="swal2-input text-capitalize"
        placeholder="Autor"
        required
        autoComplete="off"
        spellCheck={false}
      />

      <label htmlFor="editorial" className="swal2-input-label">
        Editorial
        <span className="text-danger">*</span>
      </label>
      <input
        type="text"
        name="editorial"
        id="editorial"
        className="swal2-input text-capitalize"
        placeholder="Editorial"
        required
        autoComplete="off"
        spellCheck={false}
      />

      <label htmlFor="descripcion" className="swal2-input-label">
        Descripción del libro
        <span className="text-danger">*</span>
      </label>
      <textarea
        name="descripcion"
        id="descripcion"
        className="swal2-textarea"
        placeholder="Breve descripción del libro"
        required
        spellCheck={false}
      />

      <label htmlFor="video_libro" className="swal2-input-label">
        Archivo de video del libro
        <span className="text-danger">*</span>
      </label>
      <input
        type="file"
        name="video_libro"
        id="video_libro"
        className="swal2-file"
        placeholder="Video del libro"
        accept="video/mp4"
        required
      />

      <label htmlFor="id_genero_literario" className="swal2-input-label">
        Género Literario
        <span className="text-danger">*</span>
      </label>
      <select
        name="id_genero_literario"
        id="id_genero_literario"
        className="swal2-select"
        required
      >
        <option value="">Seleccione el género literario</option>
        {generosLiterarios.map((genero: any) => (
          <option key={genero.id} value={genero.id}>
            {genero.nom_genero}
          </option>
        ))}
      </select>

      <label htmlFor="id_grado" className="swal2-input-label">
        Grado al que pertenece Libro
        <span className="text-danger">*</span>
      </label>
      <select name="id_grado" id="id_grado" className="swal2-select" required>
        <option value="">Seleccione su grado escolar</option>
        {grados.map((grado: any) => (
          <option key={grado.id} value={grado.id}>
            {grado.nom_grado}
          </option>
        ))}
      </select>

      <label htmlFor="fecha_pub" className="swal2-input-label">
        Fecha de Publicación
        <span className="text-danger">*</span>
      </label>
      <input
        type="date"
        name="fecha_pub"
        id="fecha_pub"
        className="swal2-input"
        placeholder="Fecha de Publicación"
        required
      />

      <label htmlFor="imagen_portada" className="swal2-input-label">
        Portada del libro
        <span className="text-danger">*</span>
      </label>
      <input
        type="file"
        name="imagen_portada"
        id="imagen_portada"
        className="swal2-file"
        placeholder="Portada del libro"
        accept="image/png, image/jpeg"
        required
      />
    </form>
  );
}
