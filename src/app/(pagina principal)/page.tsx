import authOptions from "@/libs/authOptions";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import IndexHeader from "./components/IndexHeader";
import IndexSection from "./components/IndexSection";

export const metadata: Metadata = {
  title: "Software Saly | Inicio",
};

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/learning/teachers");

  return (
    <>
      <IndexHeader />
      <IndexSection />
    </>
  );
}
