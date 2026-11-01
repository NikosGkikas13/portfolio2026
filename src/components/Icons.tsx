import type { ReactNode } from "react";

// One stroke icon set: 24px grid, 1.5 stroke, round joins.
function Icon({ children, className = "icon" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export const ArrowUpRight = () => (
  <Icon className="icon icon--sm">
    <path d="M7 17 17 7M8 7h9v9" />
  </Icon>
);

export const ArrowRight = () => (
  <Icon className="icon icon--sm">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const Sun = () => (
  <Icon>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </Icon>
);

export const Moon = () => (
  <Icon>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </Icon>
);
