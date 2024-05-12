import authOptions from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function MainPageTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session) redirect("/learning/teachers");

  return <>{children}</>;
}
