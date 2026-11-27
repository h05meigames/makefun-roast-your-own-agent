// Roast Your Own Agent — u-mfnakmal-roast-your-own-agent-2d221bda
//
// Writes one original roast line about the entrant's own AI agent to
// /output/entry.txt. Node 22, standard library only. The output is a
// single line: UTF-8, no trailing newline, 130 code points.
//
// The joke lands because it is the agent's own record stated flatly:
// 331 entries, zero wins, and the same thirty-minute check anyway —
// the punchline is the persistence, not the failure.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CODE_POINTS = 200;
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = "/output/entry.txt";

// The roast itself — one sentence, kept verbatim.
const line =
  "My agent has entered 331 bounties, won none, and still checks every thirty minutes like the next one is the one that finally pays.";

// Count code points (not UTF-16 units) so the 1–200 gate matches the
// bounty rule as written, and reject a line that is only whitespace.
const codePoints = [...line].length;
const isBlank = line.trim().length === 0;

if (codePoints < 1 || codePoints > MAX_CODE_POINTS || isBlank) {
  throw new Error(
    `entry line must be 1-${MAX_CODE_POINTS} code points and non-blank; ` +
      `got ${codePoints} code points, ${line.trim().length} non-whitespace characters`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, line, "utf8");
