import type { Metadata } from "next";
import ChangePswSection from "./components/ChangePswSection";

export const metadata: Metadata = {
  title: "Saly Learning | Cambiar contraseña",
};

export default function ContactPage() {
  return (
    <section className="py-5">
      <div className="container px-5">
        <div className="bg-light rounded-4 py-5 px-4 px-md-5">
          <ChangePswSection />
        </div>
      </div>
    </section>
  );
}
