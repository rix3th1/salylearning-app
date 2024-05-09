import type { Metadata } from "next";
import "./css/students.style.css";

export const metadata: Metadata = {
  title: "Inicio | Saly Learning",
};

export default function StudentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
