import Script from "next/script";
import Header from "./components/Header";
import Section from "./components/Section";

export default function Home() {
  return (
    <>
      <Header />
      <Section />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
    </>
  );
}
