import SessionProviderContext from "@/providers/SessionProvider";
import { Toaster } from "sonner";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProviderContext>
      {children}

      <Toaster />
    </SessionProviderContext>
  );
}
