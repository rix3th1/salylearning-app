import pkg from "@/../package.json";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

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
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>

      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
