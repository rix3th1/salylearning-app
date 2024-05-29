"use client";

import HelpButton from "./HelpButton";
import PowerButton from "./PowerButton";
import SearchBookButton from "./SearchBookButton";

export default function NavInteractionButtons() {
  return (
    <>
      <PowerButton />
      <SearchBookButton />
      <HelpButton />
    </>
  );
}
