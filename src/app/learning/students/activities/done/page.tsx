import PageHeader from "@/app/learning/components/PageHeader";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import { Suspense } from "react";
import ActivitiesTabs from "../components/ActivitiesTabs";
import DoneActivitiesTable from "./components/DoneActivitiesTable";

export const metadata: Metadata = {
  title: "Hechas (Actividades): Estudiantes | Saly Learning",
};

export default function PendingActivitiesPage() {
  return (
    <>
      <PageHeader title="Actividades hechas" />

      <ActivitiesTabs />

      <section className="container-fluid">
        <div
          className="container-flat-form"
          style={{ backgroundColor: "#d4edda" }}
        >
          <div className="tab-content">
            <div>
              <section className="text-center">
                <h2>¡Actividades hechas!</h2>
                <p>¡Felicidades por completar estas actividades!</p>
              </section>

              <div
                className="container"
                style={{ marginTop: "2rem", marginBottom: "3rem" }}
              >
                <div className="row" style={{ padding: "0 10px" }}>
                  <Suspense fallback={<Fallback />}>
                    <DoneActivitiesTable />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
