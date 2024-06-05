import type { Metadata } from "next";
import CallToActionSection from "./components/CallToActionSection";
import ProjectsSection from "./components/ProjectsSection";

export const metadata: Metadata = {
  title: "Saly Learning | Misión, Visión",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsSection />
      <CallToActionSection />
    </>
  );
}
