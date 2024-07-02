"use client";

import { obtenerGrados } from "@/services/grados.service";
import { THandleChange } from "@/types";
import { useRouter } from "next-nprogress-bar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface IProps {
  id_grado?: string;
}

export default function GradeSelector({ id_grado = "" }: IProps) {
  const [grados, setGrados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGrade, _setSelectedGrade] = useState(id_grado);

  const router = useRouter();
  const pathname = usePathname().split("/").slice(0, 4).join("/");

  const handleChange = (e: THandleChange) => {
    const selGrade = e.target.value;
    router.push(selGrade ? `${pathname}/grade/${selGrade}` : pathname);
  };

  useEffect(() => {
    setIsLoading(true);
    toast.promise(obtenerGrados, {
      loading: "Cargando grados...",
      success(data) {
        setGrados(data);
        return "Listo";
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="position" style={{ margin: "1rem 0" }}>
      <div className="col-md-6 text-center">
        <span style={{ fontWeight: "bold" }}>
          Selecciona el grado para ver reportes:
        </span>
      </div>

      <div className="col-md-6">
        <select
          name="id_grado"
          id="id_grado"
          className="form-control"
          required
          onChange={handleChange}
          disabled={isLoading}
          value={selectedGrade}
        >
          <option value="">Seleccione el grado escolar *</option>
          {grados.map((grado: any) => (
            <option key={grado.id} value={grado.id}>
              {grado.nom_grado}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
