import pkg from "@/../package.json";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: pkg.name,
  title: "Saly Learning Software",
  description:
    "Plataforma de audiolibros para la audio enseñanza de niños y niñas de la Institución Técnica Santa Lucia: Sede Agua Negra",
  generator: "Next JS",
  creator: "Saly Learning Software",
  publisher: "Vercel",
  authors: pkg.contributors,
  keywords: pkg.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/icons/book.ico" type="image/x-icon" />
      </head>

      <body>{children}</body>
    </html>
  );
}
