import { useOpen } from "@tobee94/toos";

export default function Start() {
  const open = useOpen();
  return (
    <div>
      <h2 className="font-display text-3xl font-bold tracking-tight">
        Hello, <span className="text-accent">ToOS</span>.
      </h2>
      <p className="mt-3 max-w-md leading-relaxed text-muted">
        A standalone app wired up against <code>@tobee94/toos</code> as a
        plain npm dependency — modules, a folder in the start menu, a
        terminal, and the Settings window, all for free. Open a window from
        the start menu, or try the shell.
      </p>
      <button
        type="button"
        onClick={() => open("about")}
        className="mt-5 rounded-lg border border-line bg-ink-2/40 px-4 py-2 font-mono text-sm text-paper transition-colors hover:border-accent/40"
      >
        open ./about
      </button>
    </div>
  );
}
