"use client";

import "@github/relative-time-element";

interface IProps {
  datetime: string;
}

export function RelativeTime({ datetime }: IProps) {
  return (
    <relative-time
      lang="es-CO"
      data-toggle="tooltip"
      data-placement="bottom"
      datetime={datetime}
      style={{ textTransform: "capitalize" }}
    />
  );
}
