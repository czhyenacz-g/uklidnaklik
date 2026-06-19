import { ReactNode } from "react";

type Arrow = { href: string; label: string; direction?: "down" | "up" } | null;

function ArrowIcon({ direction = "down" }: { direction?: "down" | "up" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={direction === "up" ? "rotate-180" : ""}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function SnapSection({
  children,
  arrow = null,
  contentsOnDesktop = false,
  snap = true,
  prominent = false,
}: {
  children: ReactNode;
  arrow?: Arrow;
  contentsOnDesktop?: boolean;
  snap?: boolean;
  prominent?: boolean;
}) {
  return (
    <div
      className={[
        "flex flex-col",
        snap ? "min-h-[calc(100svh-3.5rem)] lg:min-h-0 snap-start scroll-mt-14" : "",
        contentsOnDesktop ? "lg:contents" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
      {arrow && (
        <a
          href={arrow.href}
          aria-label={`Přejít na sekci ${arrow.label}`}
          className={[
            "lg:hidden mt-auto pt-6 pb-4 mx-auto flex flex-col items-center gap-1 text-slate-900/70 hover:text-slate-900 transition-colors",
            prominent ? "text-sm font-bold" : "text-xs font-semibold",
          ].join(" ")}
        >
          <span>{arrow.label}</span>
          <ArrowIcon direction={arrow.direction} />
        </a>
      )}
    </div>
  );
}
