import authOptions from "@/libs/authOptions";
import SessionProviderContext from "@/providers/SessionProvider";
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

  return <SessionProviderContext>{children}</SessionProviderContext>;
}
