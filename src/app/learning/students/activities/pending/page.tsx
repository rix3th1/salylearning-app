import PageHeader from "@/app/learning/components/PageHeader";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import { Suspense } from "react";
import ActivitiesTabs from "../components/ActivitiesTabs";
import PendingActivitiesCard from "./components/PendingActivitiesCard";

export const metadata: Metadata = {
  title: "Pendientes (Actividades): Estudiantes | Saly Learning",
};

export default function PendingActivitiesPage() {
  return (
    <>
      <PageHeader title="Actividades por hacer" />

      <ActivitiesTabs />

      <section className="container-fluid">
        <div
          className="container-flat-form"
          style={{ backgroundColor: "#d4edda" }}
        >
          <div className="tab-content">
            <div>
              <section className="text-center">
                <h2>Actividades por hacer</h2>
                <p>
                  ¡Aquí encontrarás un montón de actividades divertidas para
                  realizar!
                </p>
              </section>

              <div
                className="container"
                style={{ marginTop: "2rem", marginBottom: "3rem" }}
              >
                <Suspense fallback={<Fallback />}>
                  <PendingActivitiesCard />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
