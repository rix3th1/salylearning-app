import PageHeader from "@/app/learning/components/PageHeader";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import { Suspense } from "react";
import AccountSettingsTabs from "../components/AccountSettingsTabs";
import ProfileSection from "./components/ProfileSection";

export const metadata: Metadata = {
  title: "Actualizar Perfíl: Docentes | Saly Learning",
};

export default function TeacherAccountSettingsPage() {
  return (
    <>
      <PageHeader title="Actualizar perfíl docente" />

      <AccountSettingsTabs />

      <div
        className="container-fluid"
        style={{
          padding: 20,
          margin: 20,
          marginBottom: "100px",
          backgroundColor: "#adb5bd",
        }}
      >
        <Suspense fallback={<Fallback />}>
          <ProfileSection />
        </Suspense>
      </div>
    </>
  );
}
