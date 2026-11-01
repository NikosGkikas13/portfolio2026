import type { Theme } from "../hooks/useTheme";
import { NAV_LINKS } from "../data/content";
import { Moon, Sun } from "./Icons";

type NavProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function Nav({ theme, onToggleTheme }: NavProps) {
  return (
    <nav className="nav" aria-label="Main">
      <div className="nav-inner">
        <a href="#top" className="mark">
          <span className="mark-badge" aria-hidden="true">
            NG
          </span>
          Nikos Gkikas
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="icon-btn"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? <Moon /> : <Sun />}
        </button>
        <a className="btn btn--sm btn--primary nav-cta" href="#contact">
          Get in touch
        </a>
      </div>
    </nav>
  );
}
