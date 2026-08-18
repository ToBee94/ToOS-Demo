const code = "text-[12px] font-mono text-paper";
const box = "rounded bg-ink-2/60 px-1.5 py-0.5 " + code;

export default function Api() {
  return (
    <div className="max-w-md space-y-3 leading-relaxed text-muted">
      <p>
        <code className={box}>api</code> is <code className={box}>guide</code>'s sibling inside the
        same <code className={box}>docs</code> folder — a single-tab window this time, to show a
        folder can mix tabbed and untabbed windows.
      </p>
      <p>
        Open the shell and run <code className={box}>ls</code>: both show up flat, right alongside{" "}
        <code className={box}>about</code> and <code className={box}>start</code> —{" "}
        <code className={box}>flattenMenuItems()</code> erases the grouping for anything that
        touches real ids.
      </p>
    </div>
  );
}
