import { Terminal, DEFAULT_COMMANDS, type CommandRegistry, type LinkItem } from "@tobee94/toos";
import { MENU_ITEMS } from "../menu";

// Your own commands merge right in alongside ToOS's built-in pack — modules
// can ship their own the same way (export a `commands` object and merge it
// in here too: `{...DEFAULT_COMMANDS, ...myModule.commands, ...MY_COMMANDS}`).
const MY_COMMANDS: CommandRegistry = {
  hello: {
    usage: ["hello — a custom command registered by this demo app", "usage: hello [name]"],
    run: ({ push, arg }) => push(`hello, ${arg || "world"}! this command isn't part of ToOS — it's registered right here in ToOS-Demo.`, "text-accent"),
  },
};

const COMMANDS: CommandRegistry = { ...DEFAULT_COMMANDS, ...MY_COMMANDS };

// The virtual `~/links` folder — `cd links`, `ls links`, `cat links/<name>`,
// `open links/<name>`. `protected: true` entries need `theme.mature` or sudo.
const LINKS: LinkItem[] = [
  { name: "github", label: "GitHub", url: "https://github.com/ToBee94/ToOS" },
  { name: "npm", label: "npm", url: "https://www.npmjs.com/package/@tobee94/toos" },
  { name: "secret", label: "Secret", url: "https://example.com/", note: "just an example of a protected link", protected: true },
];

export default function Shell() {
  return <Terminal commands={COMMANDS} items={MENU_ITEMS} links={LINKS} />;
}
