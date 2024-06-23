import PageHeader from "@/app/learning/components/PageHeader";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import { Suspense } from "react";
import AchievementsSection from "./components/AchievementsSection";
import StatisticsSection from "./components/StatisticsSection";

export const metadata: Metadata = {
  title: "Logros: Estudiantes | Saly Learning",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHeader title="Logros" />

      <section className="container-fluid">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <Suspense fallback={<Fallback />}>
                <AchievementsSection />
              </Suspense>
            </div>

            <div
              className="col-md-4"
              style={{
                backgroundColor: "#97CFF9",
                borderRadius: "10px",
                padding: "2rem 0",
              }}
            >
              <Suspense fallback={<Fallback />}>
                <StatisticsSection />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
