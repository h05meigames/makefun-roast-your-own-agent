// Roast Your Own Agent — u-mfnakmal-roast-your-own-agent-2d221bda
// Writes one original roast line of the entrant's own AI agent to /output/entry.txt.
// Node 22, standard library only. No trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent has entered 331 bounties, won none, and still checks every thirty minutes like the next one is the one that finally pays.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only white space.
const length = [...line].length;
if (length < 1 || length > 200 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
