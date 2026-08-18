import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToOSDesktop, SETTINGS_TABS, type ModuleTab, type SiteConfig } from "@tobee94/toos";
import Start from "./modules/Start";
import About from "./modules/About";
import Shell from "./modules/Shell";
import QuickStart from "./modules/docs/QuickStart";
import Concepts from "./modules/docs/Concepts";
import Api from "./modules/docs/Api";
import { MENU_ITEMS } from "./menu";

// One SiteConfig — everything ToOS's chrome needs to know about this site.
const config: SiteConfig = {
  brand: (
    <>
      to<span className="text-accent">OS</span>
    </>
  ),
  user: "guest",
  host: "demo",
  domain: "demo.toos.local",
  whoami: "guest — trying out ToOS",
  version: "0.1.0",
  build: "1",
  // cookie: undefined → falls back to ToOS's own generic default copy.
  motd: ["This shell's `ls`/`cat`/`open`/`rm`/`cd` come from ToOS's default command pack.", "Try `hello` — that one's custom, registered right here in ToOS-Demo (see src/modules/Shell.tsx)."],
};

// The module registry: id → tab content. Untabbed windows resolve to a
// single-entry array; give a window more entries to make it tabbed.
// `settings` reuses ToOS's own ready-made Design + About tabs verbatim —
// no site content needed for it at all.
const MODULES: Record<string, ModuleTab[]> = {
  start: [{ key: "main", label: { de: "", en: "" }, C: Start }],
  about: [{ key: "main", label: { de: "About", en: "About" }, C: About }],
  // `guide` has two tabs — ToOS renders a side nav for any window whose
  // ModuleTab[] has more than one entry, no extra wiring required.
  guide: [
    { key: "quick-start", label: { de: "Quick Start", en: "Quick Start" }, C: QuickStart },
    { key: "concepts", label: { de: "Konzepte", en: "Concepts" }, C: Concepts },
  ],
  api: [{ key: "main", label: { de: "API", en: "API" }, C: Api }],
  terminal: [{ key: "main", label: { de: "", en: "" }, C: Shell }],
  settings: SETTINGS_TABS,
};

const TITLES: Record<string, string> = { start: "", about: "About", guide: "Guide", api: "API", terminal: "", settings: "Settings" };
const BARS: Record<string, string> = { start: "~", about: "~/about", guide: "~/docs/guide", api: "~/docs/api", terminal: "toShell", settings: "settings" };

// Deep linking (see docs/deep-linking.md): only these ids have a route
// worth sharing/bookmarking — `terminal`/`settings` are ephemeral panels,
// not pages, so they're left out of ROUTE_SLUG on purpose.
const ROUTE_SLUG: Record<string, string> = { start: "", about: "about", guide: "docs/guide", api: "docs/api" };
const SLUG_ID: Record<string, string> = Object.fromEntries(Object.entries(ROUTE_SLUG).map(([id, slug]) => [slug, id]));

export default function App() {
  const [locale, setLocale] = useState("en");
  const navigate = useNavigate();
  const location = useLocation();
  const firstTop = useRef(true);
  const initial = SLUG_ID[location.pathname.replace(/^\//, "")] ?? "start";

  return (
    <ToOSDesktop
      config={config}
      locale={locale}
      onSwitchLocale={setLocale}
      initial={initial}
      noBootIds={["terminal"]}
      menuItems={MENU_ITEMS}
      resolveViews={(id) => MODULES[id] ?? MODULES.start}
      resolveBar={(id) => BARS[id] ?? id}
      resolveTitle={(id) => TITLES[id] ?? id}
      onTopChange={(id) => {
        if (firstTop.current) { firstTop.current = false; return; }
        if (!id || !(id in ROUTE_SLUG)) return;
        const slug = ROUTE_SLUG[id];
        navigate(slug ? `/${slug}` : "/");
      }}
    />
  );
}
