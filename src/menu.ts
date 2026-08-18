import type { MenuItem } from "@tobee94/toos";

// Shared between App.tsx (menuItems) and Shell.tsx (Terminal's `items`, so
// `ls`/`cat`/`open`/`rm` operate on the same list).
export const MENU_ITEMS: MenuItem[] = [
  { id: "start", label: "~", color: "text-accent" },
  { id: "about", label: "about", color: "text-cyan" },
  {
    id: "docs",
    label: "docs",
    color: "text-pink",
    folder: true,
    items: [
      { id: "guide", label: "guide", color: "text-cyan" },
      { id: "api", label: "api", color: "text-cyan" },
    ],
  },
  { divider: true },
  { id: "terminal", label: "toShell", color: "text-cyan" },
  { id: "settings", label: "settings", color: "text-amber" },
];
