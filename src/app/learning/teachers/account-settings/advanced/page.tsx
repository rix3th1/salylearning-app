import PageHeader from "@/app/learning/components/PageHeader";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import { Suspense } from "react";
import AccountSettingsTabs from "../components/AccountSettingsTabs";
import AccountSection from "./components/AccountSection";

export const metadata: Metadata = {
  title: "Configuración Avanzada: Docentes | Saly Learning",
};

export default function TeacherAccountSettingsPage() {
  return (
    <>
      <PageHeader title="Configuración avanzada de cuenta" />

      <AccountSettingsTabs />

      <div
        style={{
          padding: 20,
          margin: 20,
          marginBottom: "100px",
          backgroundColor: "#adb5bd",
        }}
      >
        <div
          className="container-fluid"
          style={{
            borderRadius: 15,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            maxWidth: "80%",
          }}
        >
          <div
            className="row"
            style={{
              padding: "10px 20px 15px 5px",
              justifyContent: "space-between",
            }}
          >
            <Suspense fallback={<Fallback />}>
              <AccountSection />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
