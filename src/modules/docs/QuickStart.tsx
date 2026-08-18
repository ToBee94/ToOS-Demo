const code = "text-[12px] font-mono text-paper";
const box = "rounded bg-ink-2/60 px-1.5 py-0.5 " + code;

export default function QuickStart() {
  return (
    <div className="max-w-md space-y-3 leading-relaxed text-muted">
      <p>
        <code className={box}>guide</code> is a <em>folder</em> — it lives inside{" "}
        <code className={box}>docs</code> in <code className={box}>src/menu.ts</code>, which
        collapses in the ~/menu until you click it open.
      </p>
      <p>
        This window is also <em>tabbed</em>: it has two entries in its{" "}
        <code className={box}>ModuleTab[]</code>, so ToOS renders the side nav on
        the left automatically — no extra wiring beyond the array.
      </p>
    </div>
  );
}
