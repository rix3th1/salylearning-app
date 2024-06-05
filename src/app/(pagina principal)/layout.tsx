import Script from "next/script";
import "./paginaprincipal.css";

export default function MainPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Script src="/js/bootstrap@5.2.3.min.js" />
    </>
  );
}
