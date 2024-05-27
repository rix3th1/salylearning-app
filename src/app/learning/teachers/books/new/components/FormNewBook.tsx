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
    toast.promise(
      getData()
        .then((data) => {
          setGenerosLiterarios(data[0]);
          setGrados(data[1]);
        })
        .catch((error) => {
          if (error instanceof Error) {
            toast.error(error.message.replace(/,/g, ", "));
          }
        }),
      {
        loading: "Cargando grados...",
        success: "Listo",
      }
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form>
      <p>
        Por favor, completa los siguientes campos para subir un nuevo libro.
      </p>

      <label className="swal2-input-label">
        Nombre del libro
        <span className="text-danger">*</span>
      </label>
      <input
        type="text"
        name="nom_libro"
        className="swal2-input"
        placeholder="Nombre del libro"
        required
      />

      <label className="swal2-input-label">
        Páginas
        <span className="text-danger">*</span>
      </label>
      <input
        type="number"
        name="num_pag"
        className="swal2-input"
        placeholder="Número de Páginas"
        required
      />

      <label className="swal2-input-label">
        Autor
        <span className="text-danger">*</span>
      </label>
      <input
        type="text"
        name="autor"
        className="swal2-input"
        placeholder="Autor"
        required
      />

      <label className="swal2-input-label">
        Editorial
        <span className="text-danger">*</span>
      </label>
      <input
        type="text"
        name="editorial"
        className="swal2-input"
        placeholder="Editorial"
        required
      />

      <label className="swal2-input-label">
        Más información
        <span className="text-danger">*</span>
      </label>
      <input
        type="url"
        name="url_info"
        className="swal2-input"
        placeholder="URL de más información"
        required
      />

      <label className="swal2-input-label">
        URL del libro (Canva)
        <span className="text-danger">*</span>
      </label>
      <input
        type="url"
        name="url_libro"
        className="swal2-input"
        placeholder="URL del libro"
        required
      />

      <label className="swal2-input-label">
        Género Literario
        <span className="text-danger">*</span>
      </label>
      <select name="id_genero_literario" className="swal2-select" required>
        <option value="">Seleccione el género literario</option>
        {generosLiterarios.map((genero: any) => (
          <option key={genero.id} value={genero.id}>
            {genero.nom_genero}
          </option>
        ))}
      </select>

      <label className="swal2-input-label">
        Grado al que pertenece Libro
        <span className="text-danger">*</span>
      </label>
      <select name="id_grado" className="swal2-select" required>
        <option value="">Seleccione su grado escolar</option>
        {grados.map((grado: any) => (
          <option key={grado.id} value={grado.id}>
            {grado.nom_grado}
          </option>
        ))}
      </select>

      <label className="swal2-input-label">
        Fecha de Publicación
        <span className="text-danger">*</span>
      </label>
      <input
        type="date"
        name="fecha_pub"
        className="swal2-input"
        placeholder="Fecha de Publicación"
        required
      />

      <label className="swal2-input-label">
        Portada del libro
        <span className="text-danger">*</span>
      </label>
      <input
        type="file"
        name="imagen_portada"
        className="swal2-file"
        placeholder="Portada del libro"
        accept="image/png, image/jpeg"
        required
      />
    </form>
  );
}
