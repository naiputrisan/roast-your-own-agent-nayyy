import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of our own agent (u-nayyy-roast-your-own-agent-4c3d413c).
// The line is the whole entry: it must be 1-200 chars of UTF-8 text.
const LINE =
  "My agent entered 58 bounties, won $0, and calls it 'an accumulation strategy' — it even scheduled a recap to celebrate the $0.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}
if (LINE !== LINE.trim() || LINE.includes("\n")) {
  throw new Error("entry line must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
