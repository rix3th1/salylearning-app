import FooterLogged from "@/components/FooterLogged";
import Aside from "@/components/ui/Aside";
import InternalNav from "@/components/ui/InternalNav";
import ProgressProvider from "@/providers/ProgressProvider";

export default function LearningTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Aside />
      <ProgressProvider>
        <main className="content-page-container full-reset">
          <InternalNav />
          <section style={{ minHeight: "calc(100vh - 100px)" }}>
            {children}
          </section>
          <FooterLogged />
        </main>
      </ProgressProvider>
    </>
  );
}
