import terminasteImage from "@/assets/Terminaste.png";
import { obtenerCuestionarioEstudiantePorEstado } from "@/services/cuestionario-estudiante.service";
import Image from "next/image";
import { mapPreguntas } from "../libs";
import FormResponderPreguntas from "./FormResponderPreguntas";

export default async function PendingActivitiesCard() {
  const cuestionariosPendientes = await obtenerCuestionarioEstudiantePorEstado(
    "PENDIENTE"
  );

  return (
    <div className="row" style={{ padding: "0 10px" }}>
      {cuestionariosPendientes.length > 0 ? (
        cuestionariosPendientes.map(
          ({ id: cuestionario_id, cuestionario }: any, index: number) => {
            const preguntas = mapPreguntas(cuestionario);

            return (
              <div
                key={index}
                className="col-md-12"
                style={{
                  backgroundColor: "#fcb67c",
                  borderRadius: "10px",
                  border: "1px solid #bec0c1",
                  padding: "40px",
                  marginBottom: "20px",
                }}
              >
                <h4
                  className="mr-3"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {`Actividad ${cuestionario.id} - Cuestionario: ${cuestionario.preguntas[0]?.libros?.nom_libro}`}
                </h4>
                <hr />

                <FormResponderPreguntas
                  preguntas={preguntas}
                  cuestionario_id={cuestionario_id}
                />
              </div>
            );
          }
        )
      ) : (
        <div className="text-center">
          <Image
            src={terminasteImage}
            className="img-finish"
            style={{ margin: "2rem 0", borderRadius: "10px" }}
            alt="estas al dia"
            width={200}
            height={300}
            quality={100}
            placeholder="blur"
          />
        </div>
      )}
    </div>
  );
}
