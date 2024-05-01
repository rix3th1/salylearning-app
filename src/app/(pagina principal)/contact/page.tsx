import { type Metadata } from "next";
import ContactSection from "./components/ContactSection";

export const metadata: Metadata = {
  title: "Software Saly | Contáctenos",
};

export default function ContactPage() {
  return <ContactSection />;
}
