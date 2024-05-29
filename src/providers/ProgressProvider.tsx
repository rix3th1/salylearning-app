"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function ProgressProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <>
      <ProgressBar
        height="3px"
        color="#fff"
        options={{
          showSpinner: false,
        }}
        shallowRouting
      />
      {children}
    </>
  );
}
