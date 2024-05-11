import pkg from "@/../package.json";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  applicationName: pkg.displayName,
  title: pkg.publisher,
  description: pkg.description,
  generator: "Next JS",
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
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>

      <body>
        {children}

        <Toaster />
      </body>
    </html>
  );
}
