export default function About() {
  return (
    <div className="max-w-md">
      <p className="leading-relaxed text-muted">
        This module is just a plain React component registered under the id{" "}
        <code className="rounded bg-ink-2/60 px-1.5 py-0.5 font-mono text-[12px] text-paper">"about"</code>{" "}
        in <code className="rounded bg-ink-2/60 px-1.5 py-0.5 font-mono text-[12px] text-paper">App.tsx</code>.
        Add more modules the same way, or make a window tabbed by giving it
        more than one entry in its <code className="rounded bg-ink-2/60 px-1.5 py-0.5 font-mono text-[12px] text-paper">ModuleTab[]</code>.
      </p>
    </div>
  );
}
