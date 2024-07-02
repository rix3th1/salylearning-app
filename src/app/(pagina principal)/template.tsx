import { plus_jakarta_sans } from "@/app/fonts";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";
import authOptions from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

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
      <NavBar />
      <section>{children}</section>
      <Footer />
    </main>
  );
}
