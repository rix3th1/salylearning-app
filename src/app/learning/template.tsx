import FooterLogged from "@/components/FooterLogged";
import InternalNav from "@/components/ui/InternalNav";
import ProgressProvider from "@/providers/ProgressProvider";

export default function LearningTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProgressProvider>
      <main className="content-page-container full-reset">
        <InternalNav />
        <section>{children}</section>
        <FooterLogged />
      </main>
    </ProgressProvider>
  );
}
