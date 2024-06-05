import SessionProviderContext from "@/providers/SessionProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProviderContext>
      {children}

      <Analytics />
      <SpeedInsights />
      <Toaster />
    </SessionProviderContext>
  );
}
