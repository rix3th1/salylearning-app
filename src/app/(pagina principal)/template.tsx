import Footer from "@/components/ui/Footer";
import Nav from "@/components/ui/Nav";
import authOptions from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { plus_jakarta_sans } from "../fonts";

export default async function MainPageTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect(
      `/learning/${session.user.rol === "DOCENTE" ? "teachers" : "students"}`
    );
  }

  return (
    <main className={plus_jakarta_sans.className}>
      <Nav />
      <section>{children}</section>
      <Footer />
    </main>
  );
}
