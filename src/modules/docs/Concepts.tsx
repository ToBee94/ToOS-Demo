const code = "text-[12px] font-mono text-paper";
const box = "rounded bg-ink-2/60 px-1.5 py-0.5 " + code;

export default function Concepts() {
  return (
    <div className="max-w-md space-y-3 leading-relaxed text-muted">
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <code className={box}>MenuItem</code> — a leaf window (id + label), a{" "}
          <code className={box}>{"{ divider: true }"}</code>, or a folder:{" "}
          <code className={box}>{"{ folder: true, items: MenuItem[] }"}</code>.
        </li>
        <li>
          <code className={box}>ModuleTab[]</code> — one entry per window; more
          than one and the window grows a side nav for free.
        </li>
        <li>
          <code className={box}>flattenMenuItems()</code> — recursively unwraps
          folders so the terminal's <code className={box}>ls</code>/<code className={box}>cat</code>/
          <code className={box}>open</code>/<code className={box}>rm</code> still work on real ids.
        </li>
      </ul>
    </div>
  );
}
