import pkg from "@/../package.json";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: pkg.publisher,
  title: pkg.publisher,
  description: pkg.description,
  generator: pkg.publisher,
  creator: pkg.publisher,
  publisher: pkg.publisher,
  authors: pkg.contributors,
  keywords: pkg.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="32x32"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
