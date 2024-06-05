import type { Metadata } from "next";
import ContactSection from "./components/ContactSection";

export const metadata: Metadata = {
  title: "Saly Learning | Contáctenos",
};

export default function ContactPage() {
  return <ContactSection />;
}
