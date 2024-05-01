import { type Metadata } from "next";
import Script from "next/script";
import ContactSection from "./components/ContactSection";

export const metadata: Metadata = {
  title: "Software Saly | Contáctenos",
};

export default function ContactPage() {
  return <ContactSection />;
}
