import { type Metadata } from "next";
import Script from "next/script";
import ResumeSection from "./components/ResumeSection";

export const metadata: Metadata = {
  title: "Software Saly | Más información",
};

export default function ResumePage() {
  return <ResumeSection />;
}
