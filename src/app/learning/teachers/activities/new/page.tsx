import PageHeader from "@/app/learning/components/PageHeader";
import type { Metadata } from "next";
import FormNewActivity from "./components/FormNewActivity";

export const metadata: Metadata = {
  title: "Nueva Actividad: Docentes | Saly Learning",
};

export default function NewActivityPage() {
  return (
    <>
      <PageHeader title="Nueva Actividad" />

      <section className="container-fluid">
        <div className="row">
          <div
            className="col-md-8 col-md-offset-2"
            style={{
              backgroundColor: "#d5d7d8",
              borderRadius: "10px",
              border: "1px solid #bec0c1",
              padding: "20px",
            }}
          >
            <h4 className="mr-3">
              Asignar nueva actividad para los estudiantes
            </h4>
            <hr />

            <FormNewActivity />
          </div>
        </div>
      </section>
    </>
  );
}
