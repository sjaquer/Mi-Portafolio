import type { ComponentProps } from "react";

/** Contenedor de 1120 px con gutter 16 / 24 / 32 px (§17.2). */
export function Container({ className = "", ...props }: ComponentProps<"div">) {
  return (
    <div className={`mx-auto w-full max-w-content px-4 md:px-5 lg:px-6 ${className}`} {...props} />
  );
}
