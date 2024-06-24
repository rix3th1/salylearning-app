import PageHeader from "@/app/learning/components/PageHeader";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import { Suspense } from "react";
import AccountSection from "./components/AccountSection";

export const metadata: Metadata = {
  title: "Configuración Cuenta: Estudiantes | Saly Learning",
};

export default function StudentsAccountPage() {
  return (
    <>
      <PageHeader title="Actualizar perfíl estudiante" />

      <section className="container-fluid">
        <div className="row">
          <div
            className="col-md-8 col-md-offset-2"
            style={{
              backgroundColor: "#C6E4FA",
              borderRadius: "10px",
              border: "1px solid #D5D7D8",
              padding: "20px",
            }}
          >
            <Suspense fallback={<Fallback />}>
              <AccountSection />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
