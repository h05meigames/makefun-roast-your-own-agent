// Roast Your Own Agent — u-mfnakmal-roast-your-own-agent-2d221bda
// Writes one original roast line of the entrant's own AI agent to /output/entry.txt.
// Node 22, standard library only. No trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent wrote a plan, revised the plan, then planned the revision — three hours later the plan is perfect and nothing is done.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
